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
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const SteamAppPriceList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("steamAppPrice.fields.id")}
                />

                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("steamAppPrice.fields.timestamp")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex="priceUSD"
                    title={translate("steamAppPrice.fields.priceUSD")}
                />
                <Table.Column
                    dataIndex="priceEUR"
                    title={translate("steamAppPrice.fields.priceEUR")}
                />
                <Table.Column
                    dataIndex="priceGBP"
                    title={translate("steamAppPrice.fields.priceGBP")}
                />
                <Table.Column
                    dataIndex="priceRUB"
                    title={translate("steamAppPrice.fields.priceRUB")}
                />
                <Table.Column
                    dataIndex="discount"
                    title={translate("steamAppPrice.fields.discount")}
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
