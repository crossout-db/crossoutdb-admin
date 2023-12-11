import React from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Checkbox, InputNumber } from "antd";
import dayjs from "dayjs";
import { RecipeItemList } from "../recipeitems";
import { ItemIncludeTranslation } from "pages/_app";

export const RecipeEdit: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const recipeData = queryResult?.data?.data;

    const { selectProps: itemSelectProps, queryResult: itemQueryResults } = useSelect({
        resource: "item",
        defaultValue: recipeData?.itemId,
        optionLabel: "name",
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

    const itemSelectOptions = itemQueryResults.data?.data.map((item) => ({
        label: (item as ItemIncludeTranslation).translations[0]?.value ?? item.name,
        value: (item as ItemIncludeTranslation).id,
    }));


    const { selectProps: releaseSelectProps } = useSelect({
        resource: "release",
        defaultValue: recipeData?.releaseId,
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
                    label={translate("fields.item")}
                    name={"itemId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select options={itemSelectOptions} />
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
                {/* <Form.Item
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
                    label={translate("fields.active")}
                    valuePropName="checked"
                    name={["active"]}
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>
            </Form>
            {recipeData?.id && <RecipeItemList parentId={recipeData?.id as number} />}
        </Edit>
    );
};
