import React from "react";
import {
  IResourceComponentsProps,
  useGetLocale,
  useTranslate,
} from "@refinedev/core";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import { ItemIncludeTranslation, RecipeIncludeTranslation } from "pages/_app";

export const RecipeItemEdit: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  const recipeItemData = queryResult?.data?.data;

  const { selectProps: recipeSelectProps, queryResult: recipeQueryResults } =
    useSelect({
      resource: "recipe",
      defaultValue: recipeItemData?.recipeId,
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

  const { selectProps: itemSelectProps, queryResult: itemQueryResults } =
    useSelect({
      resource: "item",
      defaultValue: recipeItemData?.itemId,
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
          label={translate("fields.recipe")}
          name={"recipeId"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select options={recipeSelectOptions} />
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
    </Edit>
  );
};
