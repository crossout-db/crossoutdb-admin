import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const PackItemEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const packItemData = queryResult?.data?.data;

    const { selectProps: packSelectProps } = useSelect({
        resource: "pack",
        defaultValue: packItemData?.packId,
        optionLabel: "name",
    });

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        defaultValue: packItemData?.itemId,
        optionLabel: "name",
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("packItem.fields.id")}
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
                    label={translate("packItem.fields.packId")}
                    name={"packId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...packSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("packItem.fields.itemId")}
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
                    label={translate("packItem.fields.quantity")}
                    name={["quantity"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
            </Form>
        </Edit>
    );
};
