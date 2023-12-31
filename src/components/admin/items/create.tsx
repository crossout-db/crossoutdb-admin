import React, { useEffect } from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Checkbox, InputNumber } from "antd";
import dayjs from "dayjs";
import { trpc } from "~/lib/trpc";
import { db } from "@server/db";
import { Prisma } from "@prisma/client";

interface ItemCreateProps extends IResourceComponentsProps {
    maxItemId?: number;
}

export const ItemCreate: React.FC<ItemCreateProps> = ({ maxItemId }) => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: typeSelectProps } = useSelect({
        resource: "type",
        optionLabel: "name",
    });

    const typeSelectOptions = typeSelectProps.options?.map((option) => ({
        label: translate(`db.type.${option.label}`),
        value: option.value,
    }));

    const { selectProps: categorySelectProps } = useSelect({
        resource: "category",
        optionLabel: "name",
    });

    const categorySelectOptions = categorySelectProps.options?.map((option) => ({
        label: translate(`db.category.${option.label}`),
        value: option.value,
    }));

    const { selectProps: factionSelectProps } = useSelect({
        resource: "faction",
        optionLabel: "name",
    });

    const { selectProps: raritySelectProps } = useSelect({
        resource: "rarity",
        optionLabel: "name",
    });

    
    const newName = ('0000'+maxItemId).slice(-4);
    console.log(newName);

    useEffect(() => {
        if (newName !== "0000") {
            formProps?.form?.setFieldValue("name", `Item${newName}_`);
        }
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("fields.name")}
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
                    label={translate("fields.marketDef")}
                    name={["marketDef"]}
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("fields.quantity")}
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
                    label={translate("fields.type")}
                    name={"typeId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select options={typeSelectOptions} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.category")}
                    name={"categoryId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select options={categorySelectOptions} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.faction")}
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
                    label={translate("fields.rarity")}
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
                    label={translate("fields.level")}
                    name={["level"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                {/* <Form.Item
                    label={translate("fields.sellPriceMin")}
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
                    label={translate("fields.sellOrders")}
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
                    label={translate("fields.buyPriceMax")}
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
                    label={translate("fields.buyOrders")}
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
                    label={translate("fields.craftCost")}
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
                </Form.Item> */}
                <Form.Item
                    label={translate("fields.saleable")}
                    valuePropName="checked"
                    name={["saleable"]}
                >
                    <Checkbox>Saleable</Checkbox>
                </Form.Item>
                <Form.Item
                    label={translate("fields.active")}
                    valuePropName="checked"
                    name={["active"]}
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>
            </Form>
        </Create>
    );
};
