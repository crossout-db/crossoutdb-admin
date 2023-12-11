import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const SynergyItemCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: synergySelectProps } = useSelect({
        resource: "synergy",
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
                    <Select {...itemSelectProps} />
                </Form.Item>
            </Form>
        </Create>
    );
};
