import React from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { ItemIncludeTranslation } from "pages/_app";

export const PackItemEdit: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const packItemData = queryResult?.data?.data;

    const { selectProps: packSelectProps } = useSelect({
        resource: "pack",
        defaultValue: packItemData?.packId,
        optionLabel: "name",
    });

    const { selectProps: itemSelectProps, queryResult: itemQueryResults } = useSelect({
        resource: "item",
        defaultValue: packItemData?.itemId,
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
                    label={translate("fields.pack")}
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
            </Form>
        </Edit>
    );
};
