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
  BooleanField,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const BadgeExchangeList: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
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
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
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
        <Table.Column dataIndex="badges" title={translate("fields.badges")} />
        <Table.Column
          dataIndex={["active"]}
          title={translate("fields.active")}
          render={(value: any) => <BooleanField value={value} />}
        />
        <Table.Column
          dataIndex={["timestamp"]}
          title={translate("fields.timeStamp")}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
