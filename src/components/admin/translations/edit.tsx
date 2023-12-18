import React from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { trpc } from "~/lib/trpc";

export const TranslationEdit: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const translationData = queryResult?.data?.data;

    const languages = trpc.language.findMany.useQuery({});

    const languageSelectOptions = languages.data?.map((language) => ({
        label: language.code,
        value: language.code,
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
                    label={translate("fields.languageCode")}
                    name={["languageCode"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select options={languageSelectOptions} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.key")}
                    name={["key"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("fields.value")}
                    name={["value"]}
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
