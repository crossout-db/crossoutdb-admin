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
    DeleteButton,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const PackPriceList: React.FC<IResourceComponentsProps> = () => {
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

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("fields.id")}
                />
                <Table.Column
                    dataIndex={["packId"]}
                    title={translate("fields.pack")}
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
                    dataIndex="source"
                    title={translate("fields.source")}
                />
                <Table.Column
                    dataIndex="key"
                    title={translate("fields.key")}
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("fields.timeStamp")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex="currencyCode"
                    title={translate("fields.currencyCode")}
                />
                <Table.Column
                    dataIndex="price"
                    title={translate("fields.price")}
                />
                <Table.Column
                    dataIndex="discount"
                    title={translate("fields.discount")}
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
                            <DeleteButton
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
