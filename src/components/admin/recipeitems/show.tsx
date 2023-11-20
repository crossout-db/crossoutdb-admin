import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
} from "@refinedev/core";
import { Show, NumberField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const RecipeItemShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: recipeData, isLoading: recipeIsLoading } = useOne({
        resource: "recipe",
        id: record?.recipeId || "",
        queryOptions: {
            enabled: !!record,
        },
        meta: {
            include: {
                item: true,
            },
        },
    });

    const { data: itemData, isLoading: itemIsLoading } = useOne({
        resource: "item",
        id: record?.itemId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("recipeItem.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("recipeItem.fields.recipeId")}</Title>
            {recipeIsLoading ? <>Loading...</> : <>{recipeData?.data?.item?.name}</>}
            <Title level={5}>{translate("recipeItem.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>{translate("recipeItem.fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
        </Show>
    );
};
