import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { useSession } from "next-auth/react";
import { ChangeEvent, MouseEvent, useState } from "react";
import { BooleanField, FilterDropdown, useTable } from "@refinedev/antd";
import { trpc } from "~/lib/trpc";
import { useMany, useTranslate } from "@refinedev/core";
import { Divider, Table } from "antd";
import { Prisma, RarityImportKey } from "@prisma/client";

export interface IInputFile {
    err: string;
    res: IItem[];
}

export interface IItem {
    name: string;
    rarity: RarityImportKey;
    subtype: string;
    comment: string;
    enUiType: string;
    ruUiType: string;
    chUiType: string;
    enName: string;
    ruName: string;
    chName: string;
}

export default function AdminPage() {
    const { data, status } = useSession();
    const [importItems, setImportItems] = useState<IItem[]>([]);
    const [newItems, setNewItems] = useState<IItem[]>([]);
    const [tableData, setTableData] = useState<Prisma.ItemCreateManyInput[]>(
        []
    );
    const { data: items } = trpc.item.findMany.useQuery({});
    const { data: rarities } = trpc.rarity.findMany.useQuery({});
    const { data: types } = trpc.type.findMany.useQuery({});
    const currentUser = data?.user.name ?? "guest";
    const currentRole = data?.user.role;

    const translate = useTranslate();

    const { data: typeData, isLoading: typeIsLoading } = useMany({
        resource: "type",
        ids: tableData?.map((item) => item?.typeId) ?? [],
        queryOptions: {
            enabled: !!tableData,
        },
    });

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "category",
        ids: tableData?.map((item) => item?.categoryId) ?? [],
        queryOptions: {
            enabled: !!tableData,
        },
    });

    const { data: factionData, isLoading: factionIsLoading } = useMany({
        resource: "faction",
        ids: tableData?.map((item) => item?.factionId) ?? [],
        queryOptions: {
            enabled: !!tableData,
        },
    });

    const { data: rarityData, isLoading: rarityIsLoading } = useMany({
        resource: "rarity",
        ids: tableData?.map((item) => item?.rarityId) ?? [],
        queryOptions: {
            enabled: !!tableData,
        },
    });

    const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("From onFileUploadChange");
        const fileInput = e.target;

        if (!fileInput.files || fileInput.files.length === 0) {
            alert("No file was chosen");
            return;
        }

        const file = fileInput.files[0];

        try {
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (event) => {
                const fileContent = event.target?.result as string;
                const json: IInputFile = JSON.parse(fileContent);
                const imports = json?.res;
                const newImports = imports.filter(
                    (importItem) =>
                        !items?.some(
                            (item) => item.marketDef == importItem.name
                        )
                );
                setImportItems(imports);
                setNewItems(newImports);
                const newItems: Prisma.ItemCreateManyInput[] = [];
                for (const importItem of newImports) {
                    const newName = `Item_XXXX_${importItem.enName
                        .replace(/ /g, "_")
                        .replace(/[^0-9A-Za-z_-]/g, "")}`;
                    const typeMatch = importItem.enUiType
                        .replace(/ /g, "_")
                        .replace(/[^0-9A-Za-z_-]/g, "");
                    const newType =
                        types?.find((type) => type.name.match(typeMatch))?.id ??
                        0;
                    const newRarity =
                        rarities?.find(
                            (rarity) => rarity.importKey == importItem.rarity
                        )?.id ?? 0;
                    const newItem: Prisma.ItemCreateManyInput = {
                        id: 0,
                        name: newName,
                        marketDef: importItem.name,
                        typeId: newType,
                        categoryId: 0,
                        factionId: 0,
                        rarityId: newRarity,
                        level: 0,
                        quantity: 1,
                        saleable: true,
                        active: true,
                    };
                    console.log(newItem);
                    newItems.push(newItem);
                }
                setTableData(newItems);
            };
        } catch (err) {
            alert("Invalid JSON file");
            return;
        }
    };

    const onCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("From onCancel");
    };

    const onAccept = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("From onAccept");
    };

    return (
        <div className="w-full max-w-3xl px-3 mx-auto">
            <h1 className="mb-10 text-3xl font-bold text-gray-900">
                Upload file
            </h1>

            <form
                className="w-full p-3 border border-gray-500 border-dashed"
                action=""
            >
                <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
                    <label className="flex flex-col items-center justify-center flex-grow h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                        </svg>
                        <strong className="text-sm font-medium">
                            Select json file
                        </strong>
                        <input
                            className="block w-0 h-0"
                            name="file"
                            type="file"
                            onChange={onFileUploadChange}
                        />
                    </label>
                    <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
                        <button
                            disabled={true}
                            onClick={onCancel}
                            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
                        >
                            Cancel changes
                        </button>
                        <button
                            onClick={onAccept}
                            disabled={true}
                            className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
                        >
                            Accept changes
                        </button>
                    </div>
                </div>
            </form>
            <Divider />
            <Table dataSource={tableData} rowKey="marketDef">
                <Table.Column
                    dataIndex="id"
                    title={translate("item.fields.id")}
                />

                <Table.Column
                    dataIndex="name"
                    title={translate("item.fields.name")}
                />
                <Table.Column
                    dataIndex="quantity"
                    title={translate("item.fields.quantity")}
                />
                <Table.Column
                    dataIndex={["typeId"]}
                    title={translate("item.fields.typeId")}
                    render={(value) =>
                        typeIsLoading ? (
                            <>Loading...</>
                        ) : (
                            typeData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />

                <Table.Column
                    dataIndex={["categoryId"]}
                    title={translate("item.fields.categoryId")}
                    render={(value) =>
                        categoryIsLoading ? (
                            <>Loading...</>
                        ) : (
                            categoryData?.data?.find(
                                (item) => item.id === value
                            )?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["factionId"]}
                    title={translate("item.fields.factionId")}
                    render={(value) =>
                        factionIsLoading ? (
                            <>Loading...</>
                        ) : (
                            factionData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["rarityId"]}
                    title={translate("item.fields.rarityId")}
                    render={(value) =>
                        rarityIsLoading ? (
                            <>Loading...</>
                        ) : (
                            rarityData?.data?.find((item) => item.id === value)
                                ?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex="level"
                    title={translate("item.fields.level")}
                />
                {/* <Table.Column
                    dataIndex="sellPriceMin"
                    title={translate("item.fields.sellPriceMin")}
                />
                <Table.Column
                    dataIndex="sellOrders"
                    title={translate("item.fields.sellOrders")}
                />
                <Table.Column
                    dataIndex="buyPriceMax"
                    title={translate("item.fields.buyPriceMax")}
                />
                <Table.Column
                    dataIndex="buyOrders"
                    title={translate("item.fields.buyOrders")}
                />
                <Table.Column
                    dataIndex="craftCost"
                    title={translate("item.fields.craftCost")}
                />
                <Table.Column
                    dataIndex={["timestamp"]}
                    title={translate("item.fields.timestamp")}
                    render={(value: any) => <DateField value={value} />}
                /> */}
                <Table.Column
                    dataIndex={["saleable"]}
                    title={translate("item.fields.saleable")}
                    render={(value: any) => <BooleanField value={value} />}
                />
                <Table.Column
                    dataIndex={["active"]}
                    title={translate("item.fields.active")}
                    render={(value: any) => <BooleanField value={value} />}
                />
            </Table>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    );

    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"]
    );

    return {
        props: {
            ...translateProps,
        },
    };
};
