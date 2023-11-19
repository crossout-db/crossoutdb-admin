import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, NumberField, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const FactionShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("faction.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("faction.fields.name")}</Title>
            <TextField value={record?.name} />
        </Show>
    );
};
