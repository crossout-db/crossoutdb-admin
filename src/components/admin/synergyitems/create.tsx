import React from "react";
import { IResourceComponentsProps, useGetLocale, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { ItemIncludeTranslation } from "pages/_app";

export const SynergyItemCreate: React.FC<IResourceComponentsProps> = () => {
    const locale = useGetLocale();
    const lang = locale();
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: synergySelectProps } = useSelect({
        resource: "synergy",
        optionLabel: "name",
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
                    label={translate("fields.synergy")}
                    name={"synergyId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...synergySelectProps} />
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
            </Form>
        </Create>
    );
};
