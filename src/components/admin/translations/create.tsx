import React, { useEffect } from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { ItemIncludeTranslation } from "pages/_app";
import { trpc } from "~/lib/trpc";
import { useParams } from "next/navigation";

export const TranslationCreate: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { key } = useParams();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const languages = trpc.language.findMany.useQuery({});

    const languageSelectOptions = languages.data?.map((language) => ({
        label: language.code,
        value: language.code,
    }));

    useEffect(() => {
        if (key) {
            formProps?.form?.setFieldValue("key", key);
        }
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                    <Input disabled={!!key} />
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
        </Create>
    );
};
