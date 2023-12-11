import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker } from "antd";
import dayjs from "dayjs";

export const PackPriceCreate: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: packSelectProps } = useSelect({
        resource: "pack",
        optionLabel: "name",
    });

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
                    <Select {...packSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("fields.source")}
                    name={["source"]}
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
                </Form.Item>
                <Form.Item
                    label={translate("fields.currencyCode")}
                    name={["currencyCode"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("fields.price")}
                    name={["price"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={translate("fields.discount")}
                    name={["discount"]}
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
