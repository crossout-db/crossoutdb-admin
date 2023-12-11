import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Checkbox } from "antd";

export const PackEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const packData = queryResult?.data?.data;

    const { selectProps: releaseSelectProps } = useSelect({
        resource: "release",
        defaultValue: packData?.releaseId,
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
        </Edit>
    );
};
