import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const RecipeItemEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const recipeItemData = queryResult?.data?.data;

    const { selectProps: recipeSelectProps } = useSelect({
        resource: "recipe",
        defaultValue: recipeItemData?.recipeId,
        optionLabel: "name",
    });

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        defaultValue: recipeItemData?.itemId,
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
                    label={translate("fields.recipe")}
                    name={"recipeId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...recipeSelectProps} />
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
            </Form>
        </Edit>
    );
};
