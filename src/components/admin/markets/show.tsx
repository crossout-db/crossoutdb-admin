import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
} from "@refinedev/core";
import { Show, NumberField, DateField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const MarketShow: React.FC<IResourceComponentsProps> = () => {
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

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("market.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("market.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>{translate("market.fields.sellPriceMin")}</Title>
            <NumberField value={record?.sellPriceMin ?? ""} />
            <Title level={5}>{translate("market.fields.sellOrders")}</Title>
            <NumberField value={record?.sellOrders ?? ""} />
            <Title level={5}>{translate("market.fields.buyPriceMax")}</Title>
            <NumberField value={record?.buyPriceMax ?? ""} />
            <Title level={5}>{translate("market.fields.buyOrders")}</Title>
            <NumberField value={record?.buyOrders ?? ""} />
            <Title level={5}>{translate("market.fields.timestamp")}</Title>
            <DateField value={record?.timestamp} />
        </Show>
    );
};
