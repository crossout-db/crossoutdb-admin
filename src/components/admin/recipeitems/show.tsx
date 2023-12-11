import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
  useOne,
  useGetLocale,
} from "@refinedev/core";
import { Show, NumberField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const RecipeItemShow: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: recipeData, isLoading: recipeIsLoading } = useOne({
    resource: "recipe",
    id: record?.recipeId || "",
    queryOptions: {
      enabled: !!record,
    },
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

  const { data: itemData, isLoading: itemIsLoading } = useOne({
    resource: "item",
    id: record?.itemId || "",
    queryOptions: {
      enabled: !!record,
    },
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

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("fields.id")}</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>{translate("fields.recipe")}</Title>
      {recipeIsLoading ? <>Loading...</> : <>{recipeData?.data?.item?.translations[0]?.value ?? recipeData?.data?.item?.name}</>}
      <Title level={5}>{translate("fields.item")}</Title>
      {itemIsLoading ? <>Loading...</> : <>{itemData?.data?.translations[0]?.value ?? itemData?.data?.name}</>}
      <Title level={5}>{translate("fields.quantity")}</Title>
      <NumberField value={record?.quantity ?? ""} />
    </Show>
  );
};
