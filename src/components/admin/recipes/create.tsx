import React, { useEffect } from "react";
import {
  IResourceComponentsProps,
  useGetLocale,
  useTranslate,
} from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Checkbox, InputNumber } from "antd";
import dayjs from "dayjs";
import { ItemIncludeTranslation } from "pages/_app";
import { useParams } from "next/navigation";

export const RecipeCreate: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { itemId: itemIdStr } = useParams();
  const itemId = Number(itemIdStr);
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: itemSelectProps, queryResult: itemQueryResults } =
    useSelect({
      resource: "item",
      defaultValue: itemId,
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

  useEffect(() => {
    if (itemId) {
      formProps?.form?.setFieldValue("itemId", itemId);
    }
  });

  const { selectProps: releaseSelectProps } = useSelect({
    resource: "release",
    optionLabel: "name",
<<<<<<< HEAD
    sorters: [
      {
        field: "id",
        order: "desc",
      },
    ],
=======
>>>>>>> 1ce85965d16673b9cee5157c01dfb515215e813f
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
<<<<<<< HEAD
          initialValue="Recipe_Primary"
=======
>>>>>>> 1ce85965d16673b9cee5157c01dfb515215e813f
        >
          <Input />
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
          <Select disabled={!!itemId} options={itemSelectOptions} />
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
        {/* <Form.Item
                    label={translate("fields.craftCost")}
                    name={["craftCost"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
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
                </Form.Item> */}
        <Form.Item
          label={translate("fields.active")}
          valuePropName="checked"
          name={["active"]}
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>
      </Form>
    </Create>
  );
};
