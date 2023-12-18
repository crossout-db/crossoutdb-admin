import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const TranslationShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>
                {translate("fields.languageCode")}
            </Title>
            <TextField value={record?.languageCode} />
            <Title level={5}>{translate("fields.key")}</Title>
            <TextField value={record?.key} />
            <Title level={5}>{translate("fields.value")}</Title>
            <TextField value={record?.value} />
        </Show>
    );
};
