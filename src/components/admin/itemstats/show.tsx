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
    DateField,
    MarkdownField,
    TagField,
    TextField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const ItemStatShow: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: itemData, isLoading: itemIsLoading } = useOne({
        resource: "item",
        id: record?.itemId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: userData, isLoading: userIsLoading } = useOne({
        resource: "user",
        id: record?.userId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    const { data: releaseData, isLoading: releaseIsLoading } = useOne({
        resource: "release",
        id: record?.releaseId || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{translate("itemStats.fields.id")}</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>{translate("itemStats.fields.itemId")}</Title>
            {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.name}</>}
            <Title level={5}>{translate("itemStats.fields.userId")}</Title>
            {userIsLoading ? <>Loading...</> : <>{userData?.data?.name}</>}
            <Title level={5}>{translate("itemStats.fields.releaseId")}</Title>
            {releaseIsLoading ? (
                <>Loading...</>
            ) : (
                <>{releaseData?.data?.name}</>
            )}
            <Title level={5}>{translate("itemStats.fields.timestamp")}</Title>
            <DateField value={record?.timestamp} />
            <Title level={5}>{translate("itemStats.fields.description")}</Title>
            <MarkdownField value={record?.description} />
            <Title level={5}>
                {translate("itemStats.fields.increasesDurability")}
            </Title>
            <NumberField value={record?.increasesDurability ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.increasesReputationPercent")}
            </Title>
            <NumberField value={record?.increasesReputationPercent ?? ""} />
            <Title level={5}>{translate("itemStats.fields.topSpeed")}</Title>
            <NumberField value={record?.topSpeed ?? ""} />
            <Title level={5}>{translate("itemStats.fields.ps")}</Title>
            <NumberField value={record?.ps ?? ""} />
            <Title level={5}>{translate("itemStats.fields.damage")}</Title>
            <NumberField value={record?.damage ?? ""} />
            <Title level={5}>{translate("itemStats.fields.fireRate")}</Title>
            <NumberField value={record?.fireRate ?? ""} />
            <Title level={5}>{translate("itemStats.fields.range")}</Title>
            <NumberField value={record?.range ?? ""} />
            <Title level={5}>{translate("itemStats.fields.accuracy")}</Title>
            <NumberField value={record?.accuracy ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.timeToOverheating")}
            </Title>
            <NumberField value={record?.timeToOverheating ?? ""} />
            <Title level={5}>{translate("itemStats.fields.maxAmmo")}</Title>
            <NumberField value={record?.maxAmmo ?? ""} />
            <Title level={5}>{translate("itemStats.fields.blastPower")}</Title>
            <NumberField value={record?.blastPower ?? ""} />
            <Title level={5}>{translate("itemStats.fields.addsEnergy")}</Title>
            <NumberField value={record?.addsEnergy ?? ""} />
            <Title level={5}>{translate("itemStats.fields.tonnage")}</Title>
            <NumberField value={record?.tonnage ?? ""} />
            <Title level={5}>{translate("itemStats.fields.massLimit")}</Title>
            <NumberField value={record?.massLimit ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.maxCabinSpeed")}
            </Title>
            <NumberField value={record?.maxCabinSpeed ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.maxChassisSpeed")}
            </Title>
            <NumberField value={record?.maxChassisSpeed ?? ""} />
            <Title level={5}>{translate("itemStats.fields.power")}</Title>
            <NumberField value={record?.power ?? ""} />
            <Title level={5}>{translate("itemStats.fields.cabinPower")}</Title>
            <NumberField value={record?.cabinPower ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.fuelReserves")}
            </Title>
            <NumberField value={record?.fuelReserves ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.featureBulletPercent")}
            </Title>
            <NumberField value={record?.featureBulletPercent ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.featureMeleePercent")}
            </Title>
            <NumberField value={record?.featureMeleePercent ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.featureBlastPercent")}
            </Title>
            <NumberField value={record?.featureBlastPercent ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.featureFirePercent")}
            </Title>
            <NumberField value={record?.featureFirePercent ?? ""} />
            <Title level={5}>
                {translate("itemStats.fields.featurePassthroughPercent")}
            </Title>
            <NumberField value={record?.featurePassthroughPercent ?? ""} />
            <Title level={5}>{translate("itemStats.fields.durability")}</Title>
            <NumberField value={record?.durability ?? ""} />
            <Title level={5}>{translate("itemStats.fields.energyDrain")}</Title>
            <NumberField value={record?.energyDrain ?? ""} />
            <Title level={5}>{translate("itemStats.fields.mass")}</Title>
            <NumberField value={record?.mass ?? ""} />
            <Title level={5}>{translate("itemStats.fields.perks")}</Title>
            <TextField value={record?.perks} />
        </Show>
    );
};
