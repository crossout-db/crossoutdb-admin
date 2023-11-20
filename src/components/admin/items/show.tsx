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
    BooleanField,
} from "@refinedev/antd";
import { Typography } from "antd";
import { ItemStatList } from "../itemstats";

const { Title } = Typography;

export const ItemShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: typeData, isLoading: typeIsLoading } = useOne({
        resource: "type",
        id: record?.typeId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "category",
        id: record?.categoryId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: factionData, isLoading: factionIsLoading } = useOne({
        resource: "faction",
        id: record?.factionId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: rarityData, isLoading: rarityIsLoading } = useOne({
        resource: "rarity",
        id: record?.rarityId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("item.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("item.fields.name")}</Title>
            <TextField value={record?.name} />
            <Title level={5}>{translate("item.fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
            <Title level={5}>{translate("item.fields.typeId")}</Title>
            {typeIsLoading ? <>Loading...</> : <>{typeData?.data?.name}</>}
            <Title level={5}>{translate("item.fields.categoryId")}</Title>
            {categoryIsLoading ? (
                <>Loading...</>
            ) : (
                <>{categoryData?.data?.name}</>
            )}
            <Title level={5}>{translate("item.fields.factionId")}</Title>
            {factionIsLoading ? (
                <>Loading...</>
            ) : (
                <>{factionData?.data?.name}</>
            )}
            <Title level={5}>{translate("item.fields.rarityId")}</Title>
            {rarityIsLoading ? <>Loading...</> : <>{rarityData?.data?.name}</>}
            <Title level={5}>{translate("item.fields.level")}</Title>
            <NumberField value={record?.level ?? ""} />
            <Title level={5}>{translate("item.fields.sellPriceMin")}</Title>
            <NumberField value={record?.sellPriceMin ?? ""} />
            <Title level={5}>{translate("item.fields.sellOrders")}</Title>
            <NumberField value={record?.sellOrders ?? ""} />
            <Title level={5}>{translate("item.fields.buyPriceMax")}</Title>
            <NumberField value={record?.buyPriceMax ?? ""} />
            <Title level={5}>{translate("item.fields.buyOrders")}</Title>
            <NumberField value={record?.buyOrders ?? ""} />
            <Title level={5}>{translate("item.fields.craftCost")}</Title>
            <NumberField value={record?.craftCost ?? ""} />
            <Title level={5}>{translate("item.fields.timestamp")}</Title>
            <DateField value={record?.timestamp} />
            <Title level={5}>{translate("item.fields.saleable")}</Title>
            <BooleanField value={record?.saleable} />
            <Title level={5}>{translate("item.fields.active")}</Title>
            <BooleanField value={record?.active} />
            {record?.id && <ItemStatList parentId={record?.id as number} />}
        </Show>
    );
};
