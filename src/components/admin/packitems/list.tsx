import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
    useMany,
} from "@refinedev/core";
import { useTable, List, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const PackItemList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: packData, isLoading: packIsLoading } = useMany({
        resource: "pack",
        ids: tableProps?.dataSource?.map((item) => item?.packId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    const { data: itemData, isLoading: itemIsLoading } = useMany({
        resource: "item",
        ids: tableProps?.dataSource?.map((item) => item?.itemId) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("packItem.fields.id")}
                />
                <Table.Column
                    dataIndex={["packId"]}
                    title={translate("packItem.fields.packId")}
                    render={(value) =>
                        packIsLoading ? (
                            <>Loading...</>
                        ) : (
                            packData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["itemId"]}
                    title={translate("packItem.fields.itemId")}
                    render={(value) =>
                        itemIsLoading ? (
                            <>Loading...</>
                        ) : (
                            itemData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex="quantity"
                    title={translate("packItem.fields.quantity")}
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
