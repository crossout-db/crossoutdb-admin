import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    UrlField,
    TagField,
    DateField,
    BooleanField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ReleaseList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("release.fields.id")}
                />
                <Table.Column
                    dataIndex="name"
                    title={translate("release.fields.name")}
                />
                <Table.Column
                    dataIndex="xoVersion"
                    title={translate("release.fields.xoVersion")}
                />
                <Table.Column
                    dataIndex={["url"]}
                    title={translate("release.fields.url")}
                    render={(value: any) => <UrlField value={value} />}
                />
                <Table.Column
                    dataIndex={["startDate"]}
                    title={translate("release.fields.startDate")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["endDate"]}
                    title={translate("release.fields.endDate")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["active"]}
                    title={translate("release.fields.active")}
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
