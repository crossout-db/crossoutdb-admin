import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import { Show, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <TextField value={record?.id} />
            <Title level={5}>{translate("fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("fields.role")}</Title>
            <TextField value={record?.role} />
        </Show>
    );
};
