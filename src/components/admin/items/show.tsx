import React from "react";
import {
    IResourceComponentsProps,
    useShow,
    useTranslate,
    useOne,
    useGetLocale,
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
import { TranslationList } from "../translations";
import { RecipeList } from "../recipes";

const { Title } = Typography;

export const ItemShow: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { queryResult } = useShow({
        meta: {
            include: {
                translations: {
                    where: {
                        languageCode: lang,
                    },
                },
            },
        },
    });
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
            <Title level={5}>{translate("fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("fields.name")}</Title>
            <TextField value={record?.translations[0]?.value ?? record?.name} />
            <Title level={5}>{translate("fields.quantity")}</Title>
            <NumberField value={record?.quantity ?? ""} />
            <Title level={5}>{translate("fields.type")}</Title>
            {typeIsLoading ? <>Loading...</> : <>{translate(`db.type.${typeData?.data?.name}`)}</>}
            <Title level={5}>{translate("fields.category")}</Title>
            {categoryIsLoading ? (
                <>Loading...</>
            ) : (
                <>{translate(`db.category.${categoryData?.data?.name}`)}</>
            )}
            <Title level={5}>{translate("fields.faction")}</Title>
            {factionIsLoading ? (
                <>Loading...</>
            ) : (
                <>{factionData?.data?.name}</>
            )}
            <Title level={5}>{translate("fields.rarity")}</Title>
            {rarityIsLoading ? <>Loading...</> : <>{rarityData?.data?.name}</>}
            <Title level={5}>{translate("fields.level")}</Title>
            <NumberField value={record?.level ?? ""} />
            {/* <Title level={5}>{translate("fields.sellPriceMin")}</Title>
            <NumberField value={record?.sellPriceMin ?? ""} />
            <Title level={5}>{translate("fields.sellOrders")}</Title>
            <NumberField value={record?.sellOrders ?? ""} />
            <Title level={5}>{translate("fields.buyPriceMax")}</Title>
            <NumberField value={record?.buyPriceMax ?? ""} />
            <Title level={5}>{translate("fields.buyOrders")}</Title>
            <NumberField value={record?.buyOrders ?? ""} />
            <Title level={5}>{translate("fields.craftCost")}</Title>
            <NumberField value={record?.craftCost ?? ""} />
            <Title level={5}>{translate("fields.timeStamp")}</Title>
            <DateField value={record?.timestamp} /> */}
            <Title level={5}>{translate("fields.saleable")}</Title>
            <BooleanField value={record?.saleable} />
            <Title level={5}>{translate("fields.active")}</Title>
            <BooleanField value={record?.active} />
            {record?.id && <TranslationList parentId={record?.name} />}
            {record?.id && <RecipeList parentId={record?.id as number} />}
            {record?.id && <ItemStatList parentId={record?.id as number} />}
        </Show>
    );
};
