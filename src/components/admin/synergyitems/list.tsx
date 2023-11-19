import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
    useMany,
} from "@refinedev/core";
import { useTable, List, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const SynergyItemList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: synergyData, isLoading: synergyIsLoading } = useMany({
        resource: "synergy",
        ids: tableProps?.dataSource?.map((item) => item?.synergyId) ?? [],
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
                    dataIndex={["synergyId"]}
                    title={translate("synergyItem.fields.synergyId")}
                    render={(value) =>
                        synergyIsLoading ? (
                            <>Loading...</>
                        ) : (
                            synergyData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["itemId"]}
                    title={translate("synergyItem.fields.itemId")}
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
