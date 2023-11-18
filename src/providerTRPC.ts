import { AxiosInstance } from "axios";
import {
    CrudFilters,
    CrudOperators,
    CrudSorting,
    DataProvider,
} from "@refinedev/core";
import { axiosInstance } from "./util/axiosInstance";

interface IQueryPram {
    [key: string]: string;
}

interface IWherePram {
    [field: string]: string | IQueryPram;
}

type MethodTypes = "get" | "delete" | "head" | "options";
type MethodTypesWithBody = "post" | "put" | "patch";

export const dataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance
): Omit<
    Required<DataProvider>,
    "createMany" | "updateMany" | "deleteMany" | "custom"
> => ({
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const url = `${apiUrl}/${resource}.count,${resource}.findMany`;

        const {
            current = 1,
            pageSize = 10,
            mode = "server",
        } = pagination ?? {};

        const { headers: headersFromMeta, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const query: {
            include?: any;
            take?: number;
            skip?: number;
            orderBy?: any;
            where?: any;
        } = {};

        const filterQuery: {
            where?: any;
        } = {};

        if (meta?.include) {
            query.include = meta.include;
        }

        if (mode === "server") {
            query.take = pageSize; //current * pageSize
            query.skip = (current - 1) * pageSize;
            query.orderBy = generateSort(sorters);
            query.where = generateFilter(filters);
            filterQuery.where = query.where;
        }

        const urlTRPC = `${url}?batch=1&input={"0":{"json":${JSON.stringify(
            filterQuery
        )}},"1":{"json":${JSON.stringify(
            query
        )}}}`;
        const { data: responseData, headers } = await httpClient[requestMethod](
            urlTRPC,
            {
                headers: headersFromMeta,
            }
        );

        let total = 0;
        if ("result" in responseData[0]) {
            total = responseData[0].result.data.json as number;
        }
        // const total = +headers["x-total-count"];

        let data = [{}] as any[];
        if ("result" in responseData[1]) {
            data = responseData[1].result.data.json as any[];
        }

        return {
            data,
            total,
        };
    },

    getMany: async ({ resource, ids, meta }) => {
        const url = `${apiUrl}/${resource}.findMany`;
        let data = [{}] as any[];
        // const nonNullIds = ids.filter((id) => id !== null);

        // if (nonNullIds.length === 0) {
        //     return {
        //         data,
        //     };
        // }

        const query: {
            include?: any;
            where: any;
        } = {
            where: {
                id: {
                    in: ids,
                },
            },
        };

        if (meta?.include) {
            query.include = meta.include;
        }

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const urlTRPC = `${url}?batch=1&input={"0":{"json":${JSON.stringify(
            query
        )}}}`;
        const { data: responseData } = await httpClient[requestMethod](
            urlTRPC,
            {
                headers,
            }
        );

        if ("result" in responseData[0]) {
            data = responseData[0].result.data.json as any[];
        }

        return {
            data,
        };
    },

    getOne: async ({ resource, id, meta }) => {
        const url = `${apiUrl}/${resource}.findUnique`;

        // if (id === '' || id === null) {
        //     return {
        //         data: {
        //             name: 'null',
        //         },
        //     };
        // }

        function checkId(id: any) {
            const idNumber = Number(id);
            if (isNaN(idNumber)) {
                return id;
            } 
            return idNumber;
        } 

        const query: {
            include?: any;
            where: any;
        } = {
            where: {
                id: checkId(id),
            },
        };

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypes) ?? "get";

        const urlTRPC = `${url}?batch=1&input={"0":{"json":${JSON.stringify(
            query
        )}}}`;
        const { data: responseData } = await httpClient[requestMethod](
            urlTRPC,
            {
                headers,
            }
        );

        let data = {} as any;
        if ("result" in responseData[0]) {
            data = responseData[0].result.data.json as any[];
        }

        return {
            data,
        };
    },

    create: async ({ resource, variables, meta }) => {
        const url = `${apiUrl}/${resource}.create?batch=1`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "post";

        const payload = JSON.parse(
            `{"0":{"json":{"data":${JSON.stringify(variables)}}}}`
        );
        const { data } = await httpClient[requestMethod](url, payload);

        return {
            data,
        };
    },

    update: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}.update?batch=1`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "post";

        const payload = JSON.parse(
            `{"0":{"json":{"where": {"id": ${id}},"data":${JSON.stringify(
                variables
            )}}}}`
        );
        const { data } = await httpClient[requestMethod](url, payload, {
            headers,
        });

        return {
            data,
        };
    },

    deleteOne: async ({ resource, id, variables, meta }) => {
        const url = `${apiUrl}/${resource}.delete?batch=1`;

        const { headers, method } = meta ?? {};
        const requestMethod = (method as MethodTypesWithBody) ?? "post";

        const payload = JSON.parse(`{"0":{"json":{"where": {"id": ${id}}}}}`);
        const { data } = await httpClient[requestMethod](url, payload, {
            headers,
        });

        return {
            data,
        };
    },

    getApiUrl: () => {
        return apiUrl;
    },
});

const generateSort = (sorters?: CrudSorting) => {
    const orderBy: IQueryPram[] = [];

    if (sorters && sorters.length > 0) {
        sorters.forEach((sorter) => {
            orderBy.push({
                [sorter.field]: sorter.order,
            });
        });

        if (orderBy.length > 1) {
            return orderBy;
        } else {
            return orderBy[0];
        }
    }

    return undefined;
};

const generateFilter = (filters?: CrudFilters) => {
    const where: IWherePram[] = [];

    if (filters && filters?.length > 0) {
        filters.forEach((filter) => {
            if (filter.operator === "or" || filter.operator === "and") {
                throw new Error(
                    `[@refinedev/simple-rest]: \`operator: ${filter.operator}\` is not supported. You can create custom data provider. https://refine.dev/docs/api-reference/core/providers/data-provider/#creating-a-data-provider`
                );
            }

            if ("field" in filter) {
                const { field, operator, value } = filter;

                if (operator === "eq") {
                    where.push({
                        [field]: value,
                    });
                } else {
                    const mappedOperator = mapOperator(operator);
                    where.push({
                        [field]: {
                            [mappedOperator]: value,
                        },
                    });
                }
            }
        });

        if (where.length > 1) {
            return {
                AND: where,
            };
        } else {
            return where[0];
        }
    }

    return undefined;
};

export const mapOperator = (operator: CrudOperators): string => {
    // https://refine.dev/docs/api-reference/core/interfaceReferences/#crudfilters
    // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators
    switch (operator) {
        case "gt":
        case "gte":
        case "lt":
        case "lte":
        case "in":
        case "contains":
            return operator;
        case "eq":
            return "equals";
        case "ne":
            return "not";
        case "nin":
            return "notIn";
        case "startswith":
            return "startsWith";
        case "endswith":
            return "endsWith";
        default:
            return "";
    }
};
