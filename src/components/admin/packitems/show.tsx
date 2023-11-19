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

export const PackItemShow: React.FC<IResourceComponentsProps> = () => {
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
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("packItem.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("packItem.fields.packId")}</Title>
            {packIsLoading ? <>Loading...</> : <>{packData?.data?.name}</>}
            <Title level={5}>{translate("packItem.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>{translate("packItem.fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
        </Show>
    );
};
