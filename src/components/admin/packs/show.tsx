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
    BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";
import { PackItemList } from "../packitems";

const { Title } = Typography;

export const PackShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: releaseData, isLoading: releaseIsLoading } = useOne({
        resource: "release",
        id: record?.releaseId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("fields.steamKey")}</Title>
            <NumberField value={record?.steamKey ?? ""} />
            <Title level={5}>{translate("fields.key")}</Title>
            <TextField value={record?.key} />
            <Title level={5}>{translate("fields.coins")}</Title>
            <NumberField value={record?.coins ?? ""} />
            <Title level={5}>{translate("fields.release")}</Title>
            {releaseIsLoading ? (
                <>Loading...</>
            ) : (
                <>{releaseData?.data?.name}</>
            )}
            <Title level={5}>{translate("fields.active")}</Title>
            <BooleanField value={record?.active} />
            {record?.id && <PackItemList parentId={record?.id as number} />}
        </Show>
    );
};
