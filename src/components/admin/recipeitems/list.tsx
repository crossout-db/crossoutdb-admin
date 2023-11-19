import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
    useMany,
} from "@refinedev/core";
import { useTable, List, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const RecipeItemList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: recipeData, isLoading: recipeIsLoading } = useMany({
        resource: "recipe",
        ids: tableProps?.dataSource?.map((item) => item?.recipeId) ?? [],
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
                    title={translate("recipeItem.fields.id")}
                />
                <Table.Column
                    dataIndex={["recipeId"]}
                    title={translate("recipeItem.fields.recipeId")}
                    render={(value) =>
                        recipeIsLoading ? (
                            <>Loading...</>
                        ) : (
                            recipeData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["itemId"]}
                    title={translate("recipeItem.fields.itemId")}
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
                    title={translate("recipeItem.fields.quantity")}
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
