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
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const PackPriceShow: React.FC<IResourceComponentsProps> = () => {
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

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.pack")}</Title>
            {packIsLoading ? <>Loading...</> : <>{packData?.data?.name}</>}
            <Title level={5}>{translate("fields.source")}</Title>
            <TextField value={record?.source} />
            <Title level={5}>{translate("fields.key")}</Title>
            <NumberField value={record?.key ?? ""} />
            <Title level={5}>{translate("fields.timeStamp")}</Title>
            <DateField value={record?.timestamp} />
            <Title level={5}>
                {translate("fields.currencyCode")}
            </Title>
            <TextField value={record?.currencyCode} />
            <Title level={5}>{translate("fields.price")}</Title>
            <NumberField value={record?.price ?? ""} />
            <Title level={5}>{translate("fields.discount")}</Title>
            <NumberField value={record?.discount ?? ""} />
        </Show>
    );
};
