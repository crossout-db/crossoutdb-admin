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
  FilterDropdown,
  useSelect,
} from "@refinedev/antd";
import { Table, Space, Select } from "antd";

export const ItemList: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
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

  const { data: typeData, isLoading: typeIsLoading } = useMany({
    resource: "type",
    ids: tableProps?.dataSource?.map((item) => item?.typeId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "category",
    ids: tableProps?.dataSource?.map((item) => item?.categoryId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { data: factionData, isLoading: factionIsLoading } = useMany({
    resource: "faction",
    ids: tableProps?.dataSource?.map((item) => item?.factionId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { data: rarityData, isLoading: rarityIsLoading } = useMany({
    resource: "rarity",
    ids: tableProps?.dataSource?.map((item) => item?.rarityId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  const { selectProps: itemSelectProps } = useSelect({
    resource: "item",
    optionLabel: "name",
    optionValue: "id",
    sorters: [
      {
        field: "id",
        order: "asc",
      },
    ],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("fields.id")}
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
          dataIndex="name"
          title={translate("fields.name")}
          render={(value) => {
            const item = tableProps.dataSource?.find((item) => item.name === value);
            return item?.translations[0]?.value ?? item?.name ?? "Loading...";
          }}
          sorter
        />
        <Table.Column
          dataIndex="quantity"
          title={translate("fields.quantity")}
        />
        <Table.Column
          dataIndex={["typeId"]}
          title={translate("fields.type")}
          render={(value) =>
            typeIsLoading ? (
              <>Loading...</>
            ) : (
                translate(`db.type.${typeData?.data?.find((item) => item.id === value)?.name}`)
            )
          }
        />

        <Table.Column
          dataIndex={["categoryId"]}
          title={translate("fields.category")}
          render={(value) =>
            categoryIsLoading ? (
              <>Loading...</>
            ) : (
                translate(`db.category.${categoryData?.data?.find((item) => item.id === value)?.name}`)
            )
          }
        />
        <Table.Column
          dataIndex={["factionId"]}
          title={translate("fields.faction")}
          render={(value) =>
            factionIsLoading ? (
              <>Loading...</>
            ) : (
              factionData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
        <Table.Column
          dataIndex={["rarityId"]}
          title={translate("fields.rarity")}
          render={(value) =>
            rarityIsLoading ? (
              <>Loading...</>
            ) : (
              rarityData?.data?.find((item) => item.id === value)?.name
            )
          }
        />
        <Table.Column dataIndex="level" title={translate("fields.level")} />
        {/* <Table.Column
                    dataIndex="sellPriceMin"
                    title={translate("fields.sellPriceMin")}
                />
                <Table.Column
                    dataIndex="sellOrders"
                    title={translate("fields.sellOrders")}
                />
                <Table.Column
                    dataIndex="buyPriceMax"
                    title={translate("fields.buyPriceMax")}
                />
                <Table.Column
                    dataIndex="buyOrders"
                    title={translate("fields.buyOrders")}
                />
                <Table.Column
                    dataIndex="craftCost"
                    title={translate("fields.craftCost")}
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("fields.timeStamp")}
                    render={(value: any) => <DateField value={value} />}
                /> */}
        <Table.Column
          dataIndex={["saleable"]}
          title={translate("fields.saleable")}
          render={(value: any) => <BooleanField value={value} />}
        />
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
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
