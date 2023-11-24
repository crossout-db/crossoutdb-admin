import React, { useEffect } from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useCurrentUser } from "~/lib/context";

export const ItemStatCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { itemId: itemIdStr } = useParams();
    const currentUser = useCurrentUser();
    const itemId = Number(itemIdStr);
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        defaultValue: itemId,
        optionLabel: "name",
    });

    useEffect(() => {
        if (itemId) {
            formProps?.form?.setFieldValue("itemId", itemId);
        }
    });

    const { selectProps: userSelectProps } = useSelect({
        resource: "user",
        defaultValue: currentUser?.id,
        optionLabel: "name",
    });

    useEffect(() => {
        if (currentUser?.id) {
            formProps?.form?.setFieldValue("userId", currentUser?.id);
        }
    });

    const { selectProps: releaseSelectProps } = useSelect({
        resource: "release",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("itemStats.fields.itemId")}
                    name={"itemId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select disabled={!!itemId} {...itemSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.userId")}
                    name={"userId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select disabled={!!currentUser} {...userSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.releaseId")}
                    name={"releaseId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...releaseSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.timestamp")}
                    name={["timestamp"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : undefined,
                    })}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.description")}
                    name="description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea rows={5} />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.increasesDurability")}
                    name={["increasesDurability"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate(
                        "itemStats.fields.increasesReputationPercent"
                    )}
                    name={["increasesReputationPercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.topSpeed")}
                    name={["topSpeed"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.ps")}
                    name={["ps"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.damage")}
                    name={["damage"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.fireRate")}
                    name={["fireRate"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.range")}
                    name={["range"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.accuracy")}
                    name={["accuracy"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.timeToOverheating")}
                    name={["timeToOverheating"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.maxAmmo")}
                    name={["maxAmmo"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.blastPower")}
                    name={["blastPower"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.addsEnergy")}
                    name={["addsEnergy"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.tonnage")}
                    name={["tonnage"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.massLimit")}
                    name={["massLimit"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.maxCabinSpeed")}
                    name={["maxCabinSpeed"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.maxChassisSpeed")}
                    name={["maxChassisSpeed"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.power")}
                    name={["power"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.cabinPower")}
                    name={["cabinPower"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.fuelReserves")}
                    name={["fuelReserves"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.featureBulletPercent")}
                    name={["featureBulletPercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.featureMeleePercent")}
                    name={["featureMeleePercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.featureBlastPercent")}
                    name={["featureBlastPercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.featureFirePercent")}
                    name={["featureFirePercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate(
                        "itemStats.fields.featurePassthroughPercent"
                    )}
                    name={["featurePassthroughPercent"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.durability")}
                    name={["durability"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.energyDrain")}
                    name={["energyDrain"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.mass")}
                    name={["mass"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("itemStats.fields.perks")}
                    name={["perks"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
