import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
    useMany,
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
                <Table.Column
                    dataIndex="id"
                    title={translate("itemStats.fields.id")}
                />
                <Table.Column
                    dataIndex={["itemId"]}
                    title={translate("itemStats.fields.itemId")}
                    render={(value) =>
                        itemIsLoading ? (
                            <>Loading...</>
                        ) : (
                            itemData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["userId"]}
                    title={translate("itemStats.fields.userId")}
                    render={(value) =>
                        userIsLoading ? (
                            <>Loading...</>
                        ) : (
                            userData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["releaseId"]}
                    title={translate("itemStats.fields.releaseId")}
                    render={(value) =>
                        releaseIsLoading ? (
                            <>Loading...</>
                        ) : (
                            releaseData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("itemStats.fields.timestamp")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex="description"
                    title={translate("itemStats.fields.description")}
                    render={(value: any) => (
                        <MarkdownField value={value.slice(0, 80) + "..."} />
                    )}
                />
                <Table.Column
                    dataIndex="increasesDurability"
                    title={translate("itemStats.fields.increasesDurability")}
                />
                <Table.Column
                    dataIndex="increasesReputationPercent"
                    title={translate(
                        "itemStats.fields.increasesReputationPercent"
                    )}
                />
                <Table.Column
                    dataIndex="topSpeed"
                    title={translate("itemStats.fields.topSpeed")}
                />
                <Table.Column
                    dataIndex="ps"
                    title={translate("itemStats.fields.ps")}
                />
                <Table.Column
                    dataIndex="damage"
                    title={translate("itemStats.fields.damage")}
                />
                <Table.Column
                    dataIndex="fireRate"
                    title={translate("itemStats.fields.fireRate")}
                />
                <Table.Column
                    dataIndex="range"
                    title={translate("itemStats.fields.range")}
                />
                <Table.Column
                    dataIndex="accuracy"
                    title={translate("itemStats.fields.accuracy")}
                />
                <Table.Column
                    dataIndex="timeToOverheating"
                    title={translate("itemStats.fields.timeToOverheating")}
                />
                <Table.Column
                    dataIndex="maxAmmo"
                    title={translate("itemStats.fields.maxAmmo")}
                />
                <Table.Column
                    dataIndex="blastPower"
                    title={translate("itemStats.fields.blastPower")}
                />
                <Table.Column
                    dataIndex="addsEnergy"
                    title={translate("itemStats.fields.addsEnergy")}
                />
                <Table.Column
                    dataIndex="tonnage"
                    title={translate("itemStats.fields.tonnage")}
                />
                <Table.Column
                    dataIndex="massLimit"
                    title={translate("itemStats.fields.massLimit")}
                />
                <Table.Column
                    dataIndex="maxCabinSpeed"
                    title={translate("itemStats.fields.maxCabinSpeed")}
                />
                <Table.Column
                    dataIndex="maxChassisSpeed"
                    title={translate("itemStats.fields.maxChassisSpeed")}
                />
                <Table.Column
                    dataIndex="power"
                    title={translate("itemStats.fields.power")}
                />
                <Table.Column
                    dataIndex="cabinPower"
                    title={translate("itemStats.fields.cabinPower")}
                />
                <Table.Column
                    dataIndex="fuelReserves"
                    title={translate("itemStats.fields.fuelReserves")}
                />
                <Table.Column
                    dataIndex="featureBulletPercent"
                    title={translate("itemStats.fields.featureBulletPercent")}
                />
                <Table.Column
                    dataIndex="featureMeleePercent"
                    title={translate("itemStats.fields.featureMeleePercent")}
                />
                <Table.Column
                    dataIndex="featureBlastPercent"
                    title={translate("itemStats.fields.featureBlastPercent")}
                />
                <Table.Column
                    dataIndex="featureFirePercent"
                    title={translate("itemStats.fields.featureFirePercent")}
                />
                <Table.Column
                    dataIndex="featurePassthroughPercent"
                    title={translate(
                        "itemStats.fields.featurePassthroughPercent"
                    )}
                />
                <Table.Column
                    dataIndex="durability"
                    title={translate("itemStats.fields.durability")}
                />
                <Table.Column
                    dataIndex="energyDrain"
                    title={translate("itemStats.fields.energyDrain")}
                />
                <Table.Column
                    dataIndex="mass"
                    title={translate("itemStats.fields.mass")}
                />
                <Table.Column
                    dataIndex="perks"
                    title={translate("itemStats.fields.perks")}
                />
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
