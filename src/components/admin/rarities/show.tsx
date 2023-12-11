import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const RarityShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("fields.importKey")}</Title>
            <TextField value={record?.importKey} />
            <Title level={5}>{translate("fields.primaryColor")}</Title>
            <TextField value={record?.primaryColor} />
            <Title level={5}>{translate("fields.secondaryColor")}</Title>
            <TextField value={record?.secondaryColor} />
        </Show>
    );
};
