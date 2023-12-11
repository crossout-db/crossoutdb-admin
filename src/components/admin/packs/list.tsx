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
    BooleanField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const PackList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: releaseData, isLoading: releaseIsLoading } = useMany({
        resource: "release",
        ids: tableProps?.dataSource?.map((item) => item?.releaseId) ?? [],
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
                    dataIndex="name"
                    title={translate("fields.name")}
                />
                <Table.Column
                    dataIndex="steamKey"
                    title={translate("fields.steamKey")}
                />
                <Table.Column
                    dataIndex="gaijinKey"
                    title={translate("fields.gaijinKey")}
                />
                <Table.Column
                    dataIndex="key"
                    title={translate("fields.key")}
                />
                <Table.Column
                    dataIndex="coins"
                    title={translate("fields.coins")}
                />
                <Table.Column
                    dataIndex={["releaseId"]}
                    title={translate("fields.release")}
                    render={(value) =>
                        releaseIsLoading ? (
                            <>Loading...</>
                        ) : (
                            releaseData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["active"]}
                    title={translate("fields.active")}
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
