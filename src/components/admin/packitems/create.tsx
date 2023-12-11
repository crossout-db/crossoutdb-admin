import React, { useEffect } from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { useParams } from "next/navigation";
import { ItemIncludeTranslation } from "pages/_app";

export const PackItemCreate: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { packId: packIdStr } = useParams();
    const packId = Number(packIdStr);
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: packSelectProps } = useSelect({
        resource: "pack",
        defaultValue: packId,
        optionLabel: "name",
    });

    useEffect(() => {
        if (packId) {
            formProps?.form?.setFieldValue("packId", packId);
        }
    });

    const { selectProps: itemSelectProps, queryResult: itemQueryResults } = useSelect({
        resource: "item",
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
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("fields.pack")}
                    name={"packId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select disabled={!!packId} {...packSelectProps} />
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
        </Create>
    );
};
