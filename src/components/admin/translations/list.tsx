import React from "react";
import {
  IResourceComponentsProps,
  BaseRecord,
  useTranslate,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

interface TranslationListProps extends IResourceComponentsProps {
  parentId?: string;
}

export const TranslationList: React.FC<TranslationListProps> = ({
  parentId,
}) => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: false,
    resource: "translation",
    filters: {
      mode: "server",
      permanent: [
        {
          field: "key",
          operator: "eq",
          value: parentId,
        },
      ],
    },
  });

  return (
    <List
      resource="translation"
      breadcrumb
      canCreate={!!parentId}
      createButtonProps={{ meta: { key: parentId } }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
        <Table.Column
          dataIndex="languageCode"
          title={translate("fields.languageCode")}
        />
        <Table.Column dataIndex="key" title={translate("fields.key")} />
        <Table.Column dataIndex="value" title={translate("fields.value")} />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              {parentId && (
                <DeleteButton
                  resource="translation"
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
