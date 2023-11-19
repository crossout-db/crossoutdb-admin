import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, NumberField, DateField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const SteamAppPriceShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("steamAppPrice.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>
                {translate("steamAppPrice.fields.timestamp")}
            </Title>
            <DateField value={record?.timestamp} />
            <Title level={5}>
                {translate("steamAppPrice.fields.priceUSD")}
            </Title>
            <NumberField value={record?.priceUSD ?? ""} />
            <Title level={5}>
                {translate("steamAppPrice.fields.priceEUR")}
            </Title>
            <NumberField value={record?.priceEUR ?? ""} />
            <Title level={5}>
                {translate("steamAppPrice.fields.priceGBP")}
            </Title>
            <NumberField value={record?.priceGBP ?? ""} />
            <Title level={5}>
                {translate("steamAppPrice.fields.priceRUB")}
            </Title>
            <NumberField value={record?.priceRUB ?? ""} />
            <Title level={5}>
                {translate("steamAppPrice.fields.discount")}
            </Title>
            <NumberField value={record?.discount ?? ""} />
        </Show>
    );
};
