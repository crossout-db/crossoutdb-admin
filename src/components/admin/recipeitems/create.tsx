import React, { useEffect } from "react";
import {
  IResourceComponentsProps,
  useGetLocale,
  useTranslate,
} from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { useParams } from "next/navigation";
import { ItemIncludeTranslation, RecipeIncludeTranslation } from "pages/_app";

export const RecipeItemCreate: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { recipeId: recipeIdStr } = useParams();
  const recipeId = Number(recipeIdStr);
  const { formProps, saveButtonProps, queryResult } = useForm();

  const { selectProps: recipeSelectProps, queryResult: recipeQueryResults } =
    useSelect({
      resource: "recipe",
      defaultValue: recipeId,
      optionLabel: "name",
      meta: {
        include: {
          item: {
            include: {
              translations: {
                where: {
                  languageCode: lang,
                },
              },
            },
          },
        },
      },
    });

  const recipeSelectOptions = recipeQueryResults.data?.data.map((recipe) => ({
    label: `${(recipe as RecipeIncludeTranslation).id} \\ ${
      (recipe as RecipeIncludeTranslation).name
    } \\ ${
      (recipe as RecipeIncludeTranslation).item.translations[0]?.value ??
      (recipe as RecipeIncludeTranslation).item.name
    }`,
    value: (recipe as RecipeIncludeTranslation).id,
  }));

  useEffect(() => {
    if (recipeId) {
      formProps?.form?.setFieldValue("recipeId", recipeId);
    }
  });

  const { selectProps: itemSelectProps, queryResult: itemQueryResults } =
    useSelect({
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
      filters: [
        {
          field: "active",
          operator: "eq",
          value: true,
        },
      ],
    });

  const itemSelectOptions = itemQueryResults.data?.data.map((item) => ({
    label: (item as ItemIncludeTranslation).translations[0]?.value ?? item.name,
    value: (item as ItemIncludeTranslation).id,
  }));

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("fields.recipe")}
          name={"recipeId"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select disabled={!!recipeId} options={recipeSelectOptions} />
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
          <Select
            onSearch={undefined}
            filterOption={true}
            optionFilterProp="label"
            showSearch={true}
            options={itemSelectOptions}
          />
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
