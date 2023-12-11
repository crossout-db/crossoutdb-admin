import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
    useGetLocale,
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
import { RecipeItemList } from "../recipeitems";

const { Title } = Typography;

export const RecipeShow: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
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
        meta: {
            include: {
                translations: {
                    where: {
                        languageCode: lang,
                    },
                },
            },
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
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("fields.item")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.translations[0]?.value ?? itemData?.data?.name}</>}
            <Title level={5}>{translate("fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
            <Title level={5}>{translate("fields.release")}</Title>
            {releaseIsLoading ? (
                <>Loading...</>
            ) : (
                <>{releaseData?.data?.name}</>
            )}
            {/* <Title level={5}>{translate("fields.craftCost")}</Title>
            <NumberField value={record?.craftCost ?? ""} />
            <Title level={5}>{translate("fields.timeStamp")}</Title>
            <DateField value={record?.timestamp} /> */}
            <Title level={5}>{translate("fields.active")}</Title>
            <BooleanField value={record?.active} />
            {record?.id && <RecipeItemList parentId={record?.id as number} />}
        </Show>
    );
};
