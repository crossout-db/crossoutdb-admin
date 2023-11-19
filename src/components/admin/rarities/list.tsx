import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
} from "@refinedev/core";
import { useTable, List, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const RarityList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("rarity.fields.id")}
                />
                <Table.Column
                    dataIndex="name"
                    title={translate("rarity.fields.name")}
                />
                <Table.Column
                    dataIndex="importKey"
                    title={translate("rarity.fields.importKey")}
                />
                <Table.Column
                    dataIndex="primaryColor"
                    title={translate("rarity.fields.primaryColor")}
                />
                <Table.Column
                    dataIndex="secondaryColor"
                    title={translate("rarity.fields.secondaryColor")}
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
