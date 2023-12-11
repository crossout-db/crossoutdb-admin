import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Checkbox } from "antd";

export const PackCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: releaseSelectProps } = useSelect({
        resource: "release",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
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
                    label={translate("fields.steamKey")}
                    name={["steamKey"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("fields.gaijinKey")}
                    name={["gaijinKey"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
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
                    label={translate("fields.coins")}
                    name={["coins"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
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
                <Form.Item
                    label={translate("fields.active")}
                    valuePropName="checked"
                    name={["active"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>
            </Form>
        </Create>
    );
};
