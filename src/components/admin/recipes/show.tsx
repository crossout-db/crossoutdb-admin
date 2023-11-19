import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
} from "@refinedev/core";
import {
    Show,
    NumberField,
    TagField,
    TextField,
    DateField,
    BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const RecipeShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: itemData, isLoading: itemIsLoading } = useOne({
        resource: "item",
        id: record?.itemId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: releaseData, isLoading: releaseIsLoading } = useOne({
        resource: "release",
        id: record?.releaseId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("recipe.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("recipe.fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("recipe.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>{translate("recipe.fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
            <Title level={5}>{translate("recipe.fields.releaseId")}</Title>
            {releaseIsLoading ? (
                <>Loading...</>
            ) : (
                <>{releaseData?.data?.name}</>
            )}
            <Title level={5}>{translate("recipe.fields.craftCost")}</Title>
            <NumberField value={record?.craftCost ?? ""} />
            <Title level={5}>{translate("recipe.fields.timestamp")}</Title>
            <DateField value={record?.timestamp} />
            <Title level={5}>{translate("recipe.fields.active")}</Title>
            <BooleanField value={record?.active} />
        </Show>
    );
};
