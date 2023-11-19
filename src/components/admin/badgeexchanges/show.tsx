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
    BooleanField,
    DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const BadgeExchangeShow: React.FC<IResourceComponentsProps> = () => {
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
            <Title level={5}>{translate("badgeExchange.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("badgeExchange.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>
                {translate("badgeExchange.fields.quantity")}
            </Title>
            <NumberField value={record?.quantity ?? ""} />
            <Title level={5}>{translate("badgeExchange.fields.badges")}</Title>
            <NumberField value={record?.badges ?? ""} />
            <Title level={5}>{translate("badgeExchange.fields.active")}</Title>
            <BooleanField value={record?.active} />
            <Title level={5}>
                {translate("badgeExchange.fields.timestamp")}
            </Title>
            <DateField value={record?.timestamp} />
        </Show>
    );
};
