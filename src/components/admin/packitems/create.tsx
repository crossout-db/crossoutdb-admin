import React, { useEffect } from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { useParams } from "next/navigation";

export const PackItemCreate: React.FC<IResourceComponentsProps> = () => {
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

    const { selectProps: itemSelectProps } = useSelect({
        resource: "item",
        optionLabel: "name",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={translate("packItem.fields.packId")}
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
                    label={translate("packItem.fields.itemId")}
                    name={"itemId"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...itemSelectProps} />
                </Form.Item>
                <Form.Item
                    label={translate("packItem.fields.quantity")}
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
