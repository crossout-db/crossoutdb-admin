import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";

export const ItemStatEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const itemStatsData = queryResult?.data?.data;

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        defaultValue: itemStatsData?.itemId,
        optionLabel: "name",
    });

    const { selectProps: userSelectProps } = useSelect({
        resource: "user",
        defaultValue: itemStatsData?.userId,
        optionLabel: "name",
    });

    const { selectProps: releaseSelectProps } = useSelect({
        resource: "release",
        defaultValue: itemStatsData?.releaseId,
        optionLabel: "name",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("fields.id")}
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item>
                <Form.Item
                    label={translate("fields.item")}
                    name={"itemId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...itemSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.user")}
                    name={"userId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...userSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.release")}
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
                    label={translate("fields.timeStamp")}
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
                    label={translate("fields.description")}
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
                    label={translate("fields.increasesDurability")}
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
                        "fields.increasesReputationPercent",
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
                    label={translate("fields.topSpeed")}
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
                    label={translate("fields.ps")}
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
                    label={translate("fields.damage")}
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
                    label={translate("fields.fireRate")}
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
                    label={translate("fields.range")}
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
                    label={translate("fields.accuracy")}
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
                    label={translate("fields.timeToOverheat")}
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
                    label={translate("fields.maxAmmo")}
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
                    label={translate("fields.blastPower")}
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
                    label={translate("fields.addsEnergy")}
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
                    label={translate("fields.tonnage")}
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
                    label={translate("fields.massLimit")}
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
                    label={translate("fields.maxCabinSpeed")}
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
                    label={translate("fields.maxChassisSpeed")}
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
                    label={translate("fields.power")}
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
                    label={translate("fields.cabinPower")}
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
                    label={translate("fields.fuelReserves")}
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
                    label={translate("fields.featureBulletPercent")}
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
                    label={translate("fields.featureMeleePercent")}
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
                    label={translate("fields.featureBlastPercent")}
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
                    label={translate("fields.featureFirePercent")}
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
                        "fields.featurePassthroughPercent",
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
                    label={translate("fields.durability")}
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
                    label={translate("fields.energyDrain")}
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
                    label={translate("fields.mass")}
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
                    label={translate("fields.perks")}
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
        </Edit>
    );
};
