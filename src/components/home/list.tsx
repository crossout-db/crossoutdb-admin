import React from "react";
import {
  IResourceComponentsProps,
  useNavigation,
  useTranslate,
  GetManyResponse,
  useMany,
  useGetLocale,
} from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import TableButton from "@components/home/TableButton";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "react-feather";
import { CategoryFilter, RarityFilter } from "./TableButtons";
import { trpc } from "~/lib/trpc";
import Item from "@components/Item";
import Price from "@components/Price";

export const HomeList: React.FC<IResourceComponentsProps> = () => {
  const locale = useGetLocale();
  const lang = locale();
  const translate = useTranslate();
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "icon",
        accessorKey: "id",
        header: translate("fields.item"),
        cell: function render({ getValue, table, row }) {
          const meta = table.options.meta as {
            typeData: GetManyResponse;
          };
          const type = meta.typeData?.data?.find(
            (item) => item.id == row.original.typeId
          );
          return row.original.id ? (
            <Item
              id={row.original.id}
              name={row.original.translations[0]?.value ?? row.original.name}
              type={translate(`db.type.${type?.name}`)}
              rarityId={row.original.rarityId}
              size="large"
            />
          ) : (
            "Loading..."
          );
        },
      },
      {
        id: "id",
        accessorKey: "id",
        header: translate("fields.id"),
      },
      {
        id: "name",
        accessorKey: "name",
        header: translate("fields.name"),
        cell: function render({ row }) {
          return row.original.translations[0]?.value ?? row.original.name;
        },
      },
      {
        id: "marketDef",
        accessorKey: "marketDef",
        header: translate("fields.marketDef"),
      },
      {
        id: "quantity",
        accessorKey: "quantity",
        header: translate("fields.quantity"),
      },
      {
        id: "typeId",
        header: translate("fields.type"),
        accessorKey: "typeId",
        cell: function render({ getValue, table }) {
          const meta = table.options.meta as {
            typeData: GetManyResponse;
          };

          const type = meta.typeData?.data?.find(
            (item) => item.id == getValue<any>()
          );

          return translate(`db.type.${type?.name}`) ?? "Loading...";
        },
      },
      {
        id: "categoryId",
        header: translate("fields.category"),
        accessorKey: "categoryId",
        cell: function render({ getValue, table }) {
          const meta = table.options.meta as {
            categoryData: GetManyResponse;
          };

          const category = meta.categoryData?.data?.find(
            (item) => item.id == getValue<any>()
          );

          return translate(`db.category.${category?.name}`) ?? "Loading...";
        },
      },
      {
        id: "factionId",
        header: translate("fields.faction"),
        accessorKey: "factionId",
        cell: function render({ getValue, table }) {
          const meta = table.options.meta as {
            factionData: GetManyResponse;
          };

          const faction = meta.factionData?.data?.find(
            (item) => item.id == getValue<any>()
          );

          return faction?.name ?? "Loading...";
        },
      },
      {
        id: "rarityId",
        header: translate("fields.rarity"),
        accessorKey: "rarityId",
        cell: function render({ getValue, table }) {
          const meta = table.options.meta as {
            rarityData: GetManyResponse;
          };

          const rarity = meta.rarityData?.data?.find(
            (item) => item.id == getValue<any>()
          );

          return rarity?.name ?? "Loading...";
        },
      },
      {
        id: "level",
        accessorKey: "level",
        header: translate("fields.level"),
      },
      {
        id: "sellPriceMin",
        accessorKey: "sellPriceMin",
        header: translate("fields.sellPriceMin"),
        cell: function render({ getValue, table }) {
          const val = getValue();
          return val !== undefined && val !== null ? (
            <Price className="justify-end" value={val as number} />
          ) : (
            "N/A"
          );
        },
      },
      {
        id: "sellOrders",
        accessorKey: "sellOrders",
        header: translate("fields.sellOrders"),
      },
      {
        id: "buyPriceMax",
        accessorKey: "buyPriceMax",
        header: translate("fields.buyPriceMax"),
        cell: function render({ getValue, table }) {
          const val = getValue();
          return val !== undefined && val !== null ? (
            <Price className="justify-end" value={val as number} />
          ) : (
            "N/A"
          );
        },
      },
      {
        id: "buyOrders",
        accessorKey: "buyOrders",
        header: translate("fields.buyOrders"),
      },
      {
        id: "craftCost",
        accessorKey: "craftCost",
        header: translate("fields.craftCost"),
        cell: function render({ getValue, table }) {
          const val = getValue();
          return val !== undefined && val !== null ? (
            <Price className="justify-end" value={val as number} />
          ) : (
            "N/A"
          );
        },
      },
      {
        id: "timestamp",
        accessorKey: "timestamp",
        header: translate("fields.timeStamp"),
        cell: function render({ getValue }) {
          return new Date(getValue<any>()).toLocaleString(undefined, {
            timeZone: "UTC",
          });
        },
      },
      {
        id: "saleable",
        accessorKey: "saleable",
        header: translate("fields.saleable"),
        cell: function render({ getValue }) {
          return getValue<any>() ? "yes" : "no";
        },
      },
      {
        id: "active",
        accessorKey: "active",
        header: translate("fields.active"),
        cell: function render({ getValue }) {
          return getValue<any>() ? "yes" : "no";
        },
      },
      // {
      //     id: "actions",
      //     accessorKey: "id",
      //     header: translate("table.actions"),
      //     cell: function render({ getValue }) {
      //         return (
      //             <div
      //                 style={{
      //                     display: "flex",
      //                     flexDirection: "row",
      //                     flexWrap: "wrap",
      //                     gap: "4px",
      //                 }}
      //             >
      //                 <button
      //                     onClick={() => {
      //                         show("item", getValue() as string);
      //                     }}
      //                 >
      //                     {translate("buttons.show")}
      //                 </button>
      //                 <button
      //                     onClick={() => {
      //                         edit("item", getValue() as string);
      //                     }}
      //                 >
      //                     {translate("buttons.edit")}
      //                 </button>
      //             </div>
      //         );
      //     },
      // },
    ],
    [translate]
  );

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData },
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
    getColumn,
  } = useTable({
    refineCoreProps: {
      resource: "item",
      meta: {
        include: {
          translations: {
            where: {
              languageCode: lang,
            },
          },
        },
      },
    },
    columns,
  });

  const { data: typeData } = useMany({
    resource: "type",
    ids: tableData?.data?.map((item) => item?.typeId) ?? [],
    queryOptions: {
      enabled: !!tableData?.data,
    },
  });

  const { data: categoryData } = useMany({
    resource: "category",
    ids: tableData?.data?.map((item) => item?.categoryId) ?? [],
    queryOptions: {
      enabled: !!tableData?.data,
    },
  });

  const { data: factionData } = useMany({
    resource: "faction",
    ids: tableData?.data?.map((item) => item?.factionId) ?? [],
    queryOptions: {
      enabled: !!tableData?.data,
    },
  });

  const { data: rarityData } = useMany({
    resource: "rarity",
    ids: tableData?.data?.map((item) => item?.rarityId) ?? [],
    queryOptions: {
      enabled: !!tableData?.data,
    },
  });

  const { data: allCategoryData } = trpc.category.findMany.useQuery({});
  const { data: allRarityData } = trpc.rarity.findMany.useQuery({});

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
      typeData,
      categoryData,
      factionData,
      rarityData,
    },
  }));

  const currentPageIndex = getState().pagination.pageIndex;

  const pageButtons = [];
  const prevBtnMin = Math.max(
    0,
    currentPageIndex - 2 - Math.max(currentPageIndex - getPageCount() + 3, 0)
  );
  const nextBtnMax = Math.min(
    currentPageIndex + 5 - Math.min(currentPageIndex, 2),
    getPageCount()
  );
  for (let i = prevBtnMin; i < nextBtnMax; i++) {
    pageButtons.push(
      <TableButton
        key={i + 1}
        size="large"
        active={currentPageIndex === i}
        Content={(i + 1).toString()}
        type="text"
        onClick={() => setPageIndex(i)}
      />
    );
  }

  return (
    <div style={{ padding: "16px" }}>
      {allCategoryData && (
        <CategoryFilter
          column={getColumn("categoryId")}
          data={allCategoryData}
        />
      )}
      {allRarityData && (
        <RarityFilter column={getColumn("rarityId")} data={allRarityData} />
      )}
      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>
        <table>
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-x-1 float-right">
        <TableButton
          size={"large"}
          disabled={!getCanPreviousPage()}
          Content={ChevronsLeft}
          type="Icon"
          onClick={() => setPageIndex(0)}
        />
        <TableButton
          size={"large"}
          disabled={!getCanPreviousPage()}
          Content={ChevronLeft}
          type="Icon"
          onClick={previousPage}
        />
        {pageButtons}
        <TableButton
          size={"large"}
          disabled={!getCanNextPage()}
          Content={ChevronRight}
          type="Icon"
          onClick={nextPage}
        />
        <TableButton
          size={"large"}
          disabled={!getCanNextPage()}
          Content={ChevronsRight}
          type="Icon"
          onClick={() => setPageIndex(getPageCount() - 1)}
        />
      </div>
    </div>
  );
};
