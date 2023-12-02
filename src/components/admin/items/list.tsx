import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
    useMany,
} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DateField,
    BooleanField,
    FilterDropdown,
    useSelect,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";

export const ItemList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: typeData, isLoading: typeIsLoading } = useMany({
        resource: "type",
        ids: tableProps?.dataSource?.map((item) => item?.typeId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "category",
        ids: tableProps?.dataSource?.map((item) => item?.categoryId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: factionData, isLoading: factionIsLoading } = useMany({
        resource: "faction",
        ids: tableProps?.dataSource?.map((item) => item?.factionId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: rarityData, isLoading: rarityIsLoading } = useMany({
        resource: "rarity",
        ids: tableProps?.dataSource?.map((item) => item?.rarityId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        optionLabel: "name",
        optionValue: "id",
        sorters: [
            {
                field: "id",
                order: "asc",
            },
        ],
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("item.fields.id")}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                          <Select style={{ minWidth: 200 }} mode="multiple" placeholder="Select Item" {...itemSelectProps} />
                        </FilterDropdown>
                    )}

                />

                <Table.Column
                    dataIndex="name"
                    title={translate("item.fields.name")}
                    sorter
                />
                <Table.Column
                    dataIndex="quantity"
                    title={translate("item.fields.quantity")}
                />
                <Table.Column
                    dataIndex={["typeId"]}
                    title={translate("item.fields.typeId")}
                    render={(value) =>
                        typeIsLoading ? (
                            <>Loading...</>
                        ) : (
                            typeData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />

                <Table.Column
                    dataIndex={["categoryId"]}
                    title={translate("item.fields.categoryId")}
                    render={(value) =>
                        categoryIsLoading ? (
                            <>Loading...</>
                        ) : (
                            categoryData?.data?.find(
                                (item) => item.id === value,
                            )?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["factionId"]}
                    title={translate("item.fields.factionId")}
                    render={(value) =>
                        factionIsLoading ? (
                            <>Loading...</>
                        ) : (
                            factionData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["rarityId"]}
                    title={translate("item.fields.rarityId")}
                    render={(value) =>
                        rarityIsLoading ? (
                            <>Loading...</>
                        ) : (
                            rarityData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex="level"
                    title={translate("item.fields.level")}
                />
                {/* <Table.Column
                    dataIndex="sellPriceMin"
                    title={translate("item.fields.sellPriceMin")}
                />
                <Table.Column
                    dataIndex="sellOrders"
                    title={translate("item.fields.sellOrders")}
                />
                <Table.Column
                    dataIndex="buyPriceMax"
                    title={translate("item.fields.buyPriceMax")}
                />
                <Table.Column
                    dataIndex="buyOrders"
                    title={translate("item.fields.buyOrders")}
                />
                <Table.Column
                    dataIndex="craftCost"
                    title={translate("item.fields.craftCost")}
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("item.fields.timestamp")}
                    render={(value: any) => <DateField value={value} />}
                /> */}
                <Table.Column
                    dataIndex={["saleable"]}
                    title={translate("item.fields.saleable")}
                    render={(value: any) => <BooleanField value={value} />}
                />
                <Table.Column
                    dataIndex={["active"]}
                    title={translate("item.fields.active")}
                    render={(value: any) => <BooleanField value={value} />}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
