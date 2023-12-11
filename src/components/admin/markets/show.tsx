import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
    useGetLocale,
} from "@refinedev/core";
import { Show, NumberField, DateField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const MarketShow: React.FC<IResourceComponentsProps> = () => {
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

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.item")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.translations[0]?.value ?? itemData?.data?.name}</>}
            <Title level={5}>{translate("fields.sellPriceMin")}</Title>
            <NumberField value={record?.sellPriceMin ?? ""} />
            <Title level={5}>{translate("fields.sellOrders")}</Title>
            <NumberField value={record?.sellOrders ?? ""} />
            <Title level={5}>{translate("fields.buyPriceMax")}</Title>
            <NumberField value={record?.buyPriceMax ?? ""} />
            <Title level={5}>{translate("fields.buyOrders")}</Title>
            <NumberField value={record?.buyOrders ?? ""} />
            <Title level={5}>{translate("fields.timeStamp")}</Title>
            <DateField value={record?.timestamp} />
        </Show>
    );
};
