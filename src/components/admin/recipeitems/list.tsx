import React from "react";
import {
  IResourceComponentsProps,
  BaseRecord,
  useTranslate,
  useMany,
  useGetLocale,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
  FilterDropdown,
  useSelect,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";

interface RecipeItemListProps extends IResourceComponentsProps {
  parentId?: number;
}

export const RecipeItemList: React.FC<RecipeItemListProps> = ({ parentId }) => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: false,
    resource: "recipeItem",
    filters: {
      mode: "server",
      permanent: [
        {
          field: "recipeId",
          operator: "eq",
          value: parentId,
        },
      ],
    },
  });

  const { data: recipeData, isLoading: recipeIsLoading } = useMany({
    resource: "recipe",
    ids: tableProps?.dataSource?.map((item) => item?.recipeId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
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

  const { data: itemData, isLoading: itemIsLoading } = useMany({
    resource: "item",
    ids: tableProps?.dataSource?.map((item) => item?.itemId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
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

  const { selectProps: itemSelectProps } = useSelect({
    resource: "item",
    sorters: [
      {
        field: "id",
        order: "asc",
      },
    ],
  });

  return (
    <List
      resource="recipeItem"
      breadcrumb
      canCreate={!!parentId}
      createButtonProps={{ meta: { recipeId: parentId } }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
        <Table.Column
          dataIndex={["recipeId"]}
          title={translate("fields.recipe")}
          render={(value) => {
            const recipe = recipeData?.data.find(
              (recipe) => recipe.id === value
            );
            return `${recipe?.id} \\ ${recipe?.name} \\ ${recipe?.item.translations[0]?.value ?? recipe?.item?.name}` ?? "Loading...";
          }}
        />
        <Table.Column
          dataIndex={["itemId"]}
          title={translate("fields.item")}
          render={(value) => {
            const item = itemData?.data.find((item) => item.id === value);
            return item?.translations[0]?.value ?? item?.name ?? "Loading...";
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Item"
                {...itemSelectProps}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column
          dataIndex="quantity"
          title={translate("fields.quantity")}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                resource="recipeItem"
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                resource="recipeItem"
                hideText
                size="small"
                recordItemId={record.id}
              />
              {parentId && (
                <DeleteButton
                  resource="recipeItem"
                  hideText
                  size="small"
                  recordItemId={record.id}
                />
              )}
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
