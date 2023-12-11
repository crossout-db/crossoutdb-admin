import React, { useEffect } from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { useParams } from "next/navigation";

export const RecipeItemCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { recipeId: recipeIdStr } = useParams();
    const recipeId = Number(recipeIdStr);
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: recipeSelectProps } = useSelect({
        resource: "recipe",
        defaultValue: recipeId,
        optionLabel: "item.name",
        meta: {
            include: {
                item: true,
            },
        },
    });

    useEffect(() => {
        if (recipeId) {
            formProps?.form?.setFieldValue("recipeId", recipeId);
        }
    });

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("fields.recipe")}
                    name={"recipeId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select disabled={!!recipeId} {...recipeSelectProps} />
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
        </Create>
    );
};
