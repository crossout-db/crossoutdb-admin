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
  MarkdownField,
  DeleteButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

interface ItemStatListProps extends IResourceComponentsProps {
  parentId?: number;
}

export const ItemStatList: React.FC<ItemStatListProps> = ({ parentId }) => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: false,
    resource: "itemStats",
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

  const { data: userData, isLoading: userIsLoading } = useMany({
    resource: "user",
    ids: tableProps?.dataSource?.map((item) => item?.userId) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
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
      resource="itemStats"
      breadcrumb
      canCreate={!!parentId}
      createButtonProps={{ meta: { itemId: parentId } }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("fields.id")} />
        <Table.Column
          dataIndex={["itemId"]}
          title={translate("fields.item")}
          render={(value) => {
            const item = itemData?.data.find(
              (item) => item.id === value
            );
            return item?.translations[0]?.value ?? item?.name ?? "Loading...";
          }}
        />
        <Table.Column
          dataIndex={["userId"]}
          title={translate("fields.user")}
          render={(value) =>
            userIsLoading ? (
              <>Loading...</>
            ) : (
              userData?.data?.find((item) => item.id === value)?.name
            )
          }
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
        <Table.Column
          dataIndex={["timestamp"]}
          title={translate("fields.timeStamp")}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          dataIndex="description"
          title={translate("fields.description")}
          render={(value: any) => (
            <MarkdownField value={value.slice(0, 80) + "..."} />
          )}
        />
        <Table.Column
          dataIndex="increasesDurability"
          title={translate("fields.increasesDurability")}
        />
        <Table.Column
          dataIndex="increasesReputationPercent"
          title={translate("fields.increasesReputationPercent")}
        />
        <Table.Column
          dataIndex="topSpeed"
          title={translate("fields.topSpeed")}
        />
        <Table.Column dataIndex="ps" title={translate("fields.ps")} />
        <Table.Column dataIndex="damage" title={translate("fields.damage")} />
        <Table.Column
          dataIndex="fireRate"
          title={translate("fields.fireRate")}
        />
        <Table.Column dataIndex="range" title={translate("fields.range")} />
        <Table.Column
          dataIndex="accuracy"
          title={translate("fields.accuracy")}
        />
        <Table.Column
          dataIndex="timeToOverheating"
          title={translate("fields.timeToOverheat")}
        />
        <Table.Column dataIndex="maxAmmo" title={translate("fields.maxAmmo")} />
        <Table.Column
          dataIndex="blastPower"
          title={translate("fields.blastPower")}
        />
        <Table.Column
          dataIndex="addsEnergy"
          title={translate("fields.addsEnergy")}
        />
        <Table.Column dataIndex="tonnage" title={translate("fields.tonnage")} />
        <Table.Column
          dataIndex="massLimit"
          title={translate("fields.massLimit")}
        />
        <Table.Column
          dataIndex="maxCabinSpeed"
          title={translate("fields.maxCabinSpeed")}
        />
        <Table.Column
          dataIndex="maxChassisSpeed"
          title={translate("fields.maxChassisSpeed")}
        />
        <Table.Column dataIndex="power" title={translate("fields.power")} />
        <Table.Column
          dataIndex="cabinPower"
          title={translate("fields.cabinPower")}
        />
        <Table.Column
          dataIndex="fuelReserves"
          title={translate("fields.fuelReserves")}
        />
        <Table.Column
          dataIndex="featureBulletPercent"
          title={translate("fields.featureBulletPercent")}
        />
        <Table.Column
          dataIndex="featureMeleePercent"
          title={translate("fields.featureMeleePercent")}
        />
        <Table.Column
          dataIndex="featureBlastPercent"
          title={translate("fields.featureBlastPercent")}
        />
        <Table.Column
          dataIndex="featureFirePercent"
          title={translate("fields.featureFirePercent")}
        />
        <Table.Column
          dataIndex="featurePassthroughPercent"
          title={translate("fields.featurePassthroughPercent")}
        />
        <Table.Column
          dataIndex="durability"
          title={translate("fields.durability")}
        />
        <Table.Column
          dataIndex="energyDrain"
          title={translate("fields.energyDrain")}
        />
        <Table.Column dataIndex="mass" title={translate("fields.mass")} />
        <Table.Column dataIndex="perks" title={translate("fields.perks")} />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                resource="itemStats"
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                resource="itemStats"
                hideText
                size="small"
                recordItemId={record.id}
              />
              {parentId && (
                <DeleteButton
                  resource="itemStats"
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
