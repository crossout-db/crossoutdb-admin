import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Checkbox, InputNumber } from "antd";
import dayjs from "dayjs";
import { ItemStatList } from "../itemstats";

export const ItemEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const itemData = queryResult?.data?.data;

    const { selectProps: typeSelectProps } = useSelect({
        resource: "type",
        defaultValue: itemData?.typeId,
        optionLabel: "name",
    });

    const { selectProps: categorySelectProps } = useSelect({
        resource: "category",
        defaultValue: itemData?.categoryId,
        optionLabel: "name",
    });

    const { selectProps: factionSelectProps } = useSelect({
        resource: "faction",
        defaultValue: itemData?.factionId,
        optionLabel: "name",
    });

    const { selectProps: raritySelectProps } = useSelect({
        resource: "rarity",
        defaultValue: itemData?.rarityId,
        optionLabel: "name",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("item.fields.id")}
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
                    label={translate("item.fields.name")}
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.quantity")}
                    name={["quantity"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.typeId")}
                    name={"typeId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...typeSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.categoryId")}
                    name={"categoryId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.factionId")}
                    name={"factionId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...factionSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.rarityId")}
                    name={"rarityId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...raritySelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.level")}
                    name={["level"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.sellPriceMin")}
                    name={["sellPriceMin"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.sellOrders")}
                    name={["sellOrders"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.buyPriceMax")}
                    name={["buyPriceMax"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.buyOrders")}
                    name={["buyOrders"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.craftCost")}
                    name={["craftCost"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.timestamp")}
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
                    label={translate("item.fields.saleable")}
                    valuePropName="checked"
                    name={["saleable"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox>Saleable</Checkbox>
                </Form.Item>
                <Form.Item
                    label={translate("item.fields.active")}
                    valuePropName="checked"
                    name={["active"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>
            </Form>
            {itemData?.id && <ItemStatList parentId={itemData?.id as number} />}
        </Edit>
    );
};
