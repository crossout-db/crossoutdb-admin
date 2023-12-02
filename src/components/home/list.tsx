import React from "react";
import {
    IResourceComponentsProps,
    useNavigation,
    useTranslate,
    GetManyResponse,
    useMany,
} from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import TableButton from "@components/TableButton";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronsLeft,
    ChevronsRight,
    Search,
} from 'react-feather';

export const HomeList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const columns = React.useMemo<ColumnDef<any>[]>(
        () => [
            {
                id: "id",
                accessorKey: "id",
                header: translate("item.fields.id"),
            },
            {
                id: "name",
                accessorKey: "name",
                header: translate("item.fields.name"),
            },
            {
                id: "marketDef",
                accessorKey: "marketDef",
                header: translate("item.fields.marketDef"),
            },
            {
                id: "quantity",
                accessorKey: "quantity",
                header: translate("item.fields.quantity"),
            },
            {
                id: "typeId",
                header: translate("item.fields.typeId"),
                accessorKey: "typeId",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        typeData: GetManyResponse;
                    };

                    const type = meta.typeData?.data?.find(
                        (item) => item.id == getValue<any>()
                    );

                    return type?.name ?? "Loading...";
                },
            },
            {
                id: "categoryId",
                header: translate("item.fields.categoryId"),
                accessorKey: "categoryId",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        categoryData: GetManyResponse;
                    };

                    const category = meta.categoryData?.data?.find(
                        (item) => item.id == getValue<any>()
                    );

                    return category?.name ?? "Loading...";
                },
            },
            {
                id: "factionId",
                header: translate("item.fields.factionId"),
                accessorKey: "factionId",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        factionData: GetManyResponse;
                    };

                    const faction = meta.factionData?.data?.find(
                        (item) => item.id == getValue<any>()
                    );

                    return faction?.name ?? "Loading...";
                },
            },
            {
                id: "rarityId",
                header: translate("item.fields.rarityId"),
                accessorKey: "rarityId",
                cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        rarityData: GetManyResponse;
                    };

                    const rarity = meta.rarityData?.data?.find(
                        (item) => item.id == getValue<any>()
                    );

                    return rarity?.name ?? "Loading...";
                },
            },
            {
                id: "level",
                accessorKey: "level",
                header: translate("item.fields.level"),
            },
            {
                id: "sellPriceMin",
                accessorKey: "sellPriceMin",
                header: translate("item.fields.sellPriceMin"),
            },
            {
                id: "sellOrders",
                accessorKey: "sellOrders",
                header: translate("item.fields.sellOrders"),
            },
            {
                id: "buyPriceMax",
                accessorKey: "buyPriceMax",
                header: translate("item.fields.buyPriceMax"),
            },
            {
                id: "buyOrders",
                accessorKey: "buyOrders",
                header: translate("item.fields.buyOrders"),
            },
            {
                id: "craftCost",
                accessorKey: "craftCost",
                header: translate("item.fields.craftCost"),
            },
            {
                id: "timestamp",
                accessorKey: "timestamp",
                header: translate("item.fields.timestamp"),
                cell: function render({ getValue }) {
                    return new Date(getValue<any>()).toLocaleString(undefined, {
                        timeZone: "UTC",
                    });
                },
            },
            {
                id: "saleable",
                accessorKey: "saleable",
                header: translate("item.fields.saleable"),
                cell: function render({ getValue }) {
                    return getValue<any>() ? "yes" : "no";
                },
            },
            {
                id: "active",
                accessorKey: "active",
                header: translate("item.fields.active"),
                cell: function render({ getValue }) {
                    return getValue<any>() ? "yes" : "no";
                },
            },
            // {
            //     id: "actions",
            //     accessorKey: "id",
            //     header: translate("table.actions"),
            //     cell: function render({ getValue }) {
            //         return (
            //             <div
            //                 style={{
            //                     display: "flex",
            //                     flexDirection: "row",
            //                     flexWrap: "wrap",
            //                     gap: "4px",
            //                 }}
            //             >
            //                 <button
            //                     onClick={() => {
            //                         show("item", getValue() as string);
            //                     }}
            //                 >
            //                     {translate("buttons.show")}
            //                 </button>
            //                 <button
            //                     onClick={() => {
            //                         edit("item", getValue() as string);
            //                     }}
            //                 >
            //                     {translate("buttons.edit")}
            //                 </button>
            //             </div>
            //         );
            //     },
            // },
        ],
        [translate]
    );

    const {
        getHeaderGroups,
        getRowModel,
        setOptions,
        refineCore: {
            tableQueryResult: { data: tableData },
        },
        getState,
        setPageIndex,
        getCanPreviousPage,
        getPageCount,
        getCanNextPage,
        nextPage,
        previousPage,
        setPageSize,
        getColumn,
    } = useTable({
        refineCoreProps: {
            resource: "item",
        },
        columns,
    });

    const { data: typeData } = useMany({
        resource: "type",
        ids: tableData?.data?.map((item) => item?.typeId) ?? [],
        queryOptions: {
            enabled: !!tableData?.data,
        },
    });

    const { data: categoryData } = useMany({
        resource: "category",
        ids: tableData?.data?.map((item) => item?.categoryId) ?? [],
        queryOptions: {
            enabled: !!tableData?.data,
        },
    });

    const { data: factionData } = useMany({
        resource: "faction",
        ids: tableData?.data?.map((item) => item?.factionId) ?? [],
        queryOptions: {
            enabled: !!tableData?.data,
        },
    });

    const { data: rarityData } = useMany({
        resource: "rarity",
        ids: tableData?.data?.map((item) => item?.rarityId) ?? [],
        queryOptions: {
            enabled: !!tableData?.data,
        },
    });

    setOptions((prev) => ({
        ...prev,
        meta: {
            ...prev.meta,
            typeData,
            categoryData,
            factionData,
            rarityData,
        },
    }));

    const currentPageIndex = getState().pagination.pageIndex;

    const pageButtons = [];
    const prevBtnMin = Math.max(
        0,
        currentPageIndex -
            2 -
            Math.max(currentPageIndex - getPageCount() + 3, 0),
    );
    const nextBtnMax = Math.min(
        currentPageIndex + 5 - Math.min(currentPageIndex, 2),
        getPageCount(),
    );
    for (let i = prevBtnMin; i < nextBtnMax; i++) {
        pageButtons.push(
            <TableButton
                key={i + 1}
                size="large"
                active={currentPageIndex === i}
                Content={(i + 1).toString()}
                type="text"
                onClick={() => setPageIndex(i)}
            />,
        );
    }

    return (
        <div style={{ padding: "16px" }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h1>{translate("item.titles.list")}</h1>
            </div>
            
            <div style={{ maxWidth: "100%", overflowY: "scroll" }}>
                <table>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {!header.isPlaceholder &&
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="space-x-1 float-right">
                <TableButton
                    size={'large'}
                    disabled={!getCanPreviousPage()}
                    Content={ChevronsLeft}
                    type="Icon"
                    onClick={() => setPageIndex(0)}
                />
                <TableButton
                    size={'large'}
                    disabled={!getCanPreviousPage()}
                    Content={ChevronLeft}
                    type="Icon"
                    onClick={previousPage}
                />
                {pageButtons}
                <TableButton
                    size={'large'}
                    disabled={!getCanNextPage()}
                    Content={ChevronRight}
                    type="Icon"
                    onClick={nextPage}
                />
                <TableButton
                    size={'large'}
                    disabled={!getCanNextPage()}
                    Content={ChevronsRight}
                    type="Icon"
                    onClick={() => setPageIndex(getPageCount() - 1)}
                />
            </div>

            {/* <div style={{ marginTop: "12px" }}>
                <button
                    onClick={() => setPageIndex(0)}
                    disabled={!getCanPreviousPage()}
                >
                    {"<<"}
                </button>
                <button
                    onClick={() => previousPage()}
                    disabled={!getCanPreviousPage()}
                >
                    {"<"}
                </button>
                <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
                    {">"}
                </button>
                <button
                    onClick={() => setPageIndex(getPageCount() - 1)}
                    disabled={!getCanNextPage()}
                >
                    {">>"}
                </button>
                <span>
                    <strong>
                        {" "}
                        {getState().pagination.pageIndex + 1} / {getPageCount()}{" "}
                    </strong>
                </span>
                <span>
                    | {translate("pagination.go")}:{" "}
                    <input
                        type="number"
                        defaultValue={getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            setPageIndex(page);
                        }}
                    />
                </span>{" "}
                <select
                    value={getState().pagination.pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {translate("pagination.show")} {pageSize}
                        </option>
                    ))}
                </select>
            </div> */}
        </div>
    );
};
