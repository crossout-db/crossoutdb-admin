import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
} from "@refinedev/core";
import {
    Show,
    NumberField,
    TagField,
    TextField,
    DateField,
    BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const ReleaseShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("release.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("release.fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("release.fields.xoVersion")}</Title>
            <TextField value={record?.xoVersion} />
            <Title level={5}>{translate("release.fields.startDate")}</Title>
            <DateField value={record?.startDate} />
            <Title level={5}>{translate("release.fields.endDate")}</Title>
            <DateField value={record?.endDate} />
            <Title level={5}>{translate("release.fields.active")}</Title>
            <BooleanField value={record?.active} />
        </Show>
    );
};
