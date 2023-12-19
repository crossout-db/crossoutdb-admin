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
  DateField,
  BooleanField,
  DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

interface RecipeListProps extends IResourceComponentsProps {
  parentId?: number;
}

export const RecipeList: React.FC<RecipeListProps> = ({ parentId }) => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: false,
    resource: "recipe",
    filters: {
      mode: "server",
      permanent: [
        {
          field: "itemId",
          operator: "eq",
          value: parentId,
        },
      ],
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

  const { data: releaseData, isLoading: releaseIsLoading } = useMany({
    resource: "release",
    ids: tableProps?.dataSource?.map((item) => item?.releaseId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List
      resource="recipe"
      breadcrumb
      canCreate={!!parentId}
      createButtonProps={{ meta: { itemId: parentId } }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
        <Table.Column dataIndex="name" title={translate("fields.name")} />
        <Table.Column
          dataIndex={["itemId"]}
          title={translate("fields.item")}
          render={(value) => {
            const item = itemData?.data.find((item) => item.id === value);
            return item?.translations[0]?.value ?? item?.name ?? "Loading...";
          }}
        />
        <Table.Column
          dataIndex="quantity"
          title={translate("fields.quantity")}
        />
        <Table.Column
          dataIndex={["releaseId"]}
          title={translate("fields.release")}
          render={(value) =>
            releaseIsLoading ? (
              <>Loading...</>
            ) : (
              releaseData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
        {/* <Table.Column
                    dataIndex="craftCost"
                    title={translate("fields.craftCost")}
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("fields.timeStamp")}
                    render={(value: any) => <DateField value={value} />}
                /> */}
        <Table.Column
          dataIndex={["active"]}
          title={translate("fields.active")}
          render={(value: any) => <BooleanField value={value} />}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                resource="recipe"
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                resource="recipe"
                hideText
                size="small"
                recordItemId={record.id}
              />
              {parentId && (
                <DeleteButton
                  resource="recipe"
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
