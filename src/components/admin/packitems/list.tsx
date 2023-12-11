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
} from "@refinedev/antd";
import { Table, Space } from "antd";

interface PackItemListProps extends IResourceComponentsProps {
  parentId?: number;
}

export const PackItemList: React.FC<PackItemListProps> = ({ parentId }) => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: false,
    resource: "packItem",
    filters: {
      mode: "server",
      permanent: [
        {
          field: "packId",
          operator: "eq",
          value: parentId,
        },
      ],
    },
  });

  const { data: packData, isLoading: packIsLoading } = useMany({
    resource: "pack",
    ids: tableProps?.dataSource?.map((item) => item?.packId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
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

  return (
    <List
      resource="packItem"
      breadcrumb
      canCreate={!!parentId}
      createButtonProps={{ meta: { packId: parentId } }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
        <Table.Column
          dataIndex={["packId"]}
          title={translate("fields.pack")}
          render={(value) =>
            packIsLoading ? (
              <>Loading...</>
            ) : (
              packData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
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
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                resource="packItem"
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                resource="packItem"
                hideText
                size="small"
                recordItemId={record.id}
              />
              {parentId && (
                <DeleteButton
                  resource="packItem"
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
