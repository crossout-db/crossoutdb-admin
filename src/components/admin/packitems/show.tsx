import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
    useGetLocale,
} from "@refinedev/core";
import { Show, NumberField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const PackItemShow: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: packData, isLoading: packIsLoading } = useOne({
        resource: "pack",
        id: record?.packId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

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

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.pack")}</Title>
            {packIsLoading ? <>Loading...</> : <>{packData?.data?.name}</>}
            <Title level={5}>{translate("fields.item")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.translations[0]?.value ?? itemData?.data?.name}</>}
            <Title level={5}>{translate("fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
        </Show>
    );
};
