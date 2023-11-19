import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const RecipeItemCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: recipeSelectProps } = useSelect({
        resource: "recipe",
        optionLabel: "name",
    });

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("recipeItem.fields.recipeId")}
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
                    label={translate("recipeItem.fields.itemId")}
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
                    label={translate("recipeItem.fields.quantity")}
                    name={["quantity"]}
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
