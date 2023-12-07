import { Column } from "@tanstack/react-table";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import TableButton from "./TableButton";
import { uniq } from "lodash";
import { Category, Rarity } from "@prisma/client";
import rarityStyles from "~/lib/rarityStyles";

export const CategoryFilter = ({
    column,
    data,
}: {
    column?: Column<any>;
    data: Category[];
}) => {
    const [categories, setCategories] = useState<number[]>([]);
    const { t } = useTranslation();

    if (!column) return <></>;
    const size = 42;

    const handleClick = (category: number) => {
        if (category === 0) {
            setCategories([]);
            column.setFilterValue([]);
            return;
        }
        if (categories.includes(category)) {
            const newCategories = categories.filter((c) => c !== category);
            setCategories(newCategories);
            column.setFilterValue(newCategories);
        } else {
            let newCategories = uniq([...categories, category]);
            setCategories(newCategories);
            column.setFilterValue(newCategories);
        }
    };

    // console.log(data);

    const buttons = [
        ...data
            .filter((cat) => cat.id !== 7 && cat.id !== 5 && cat.id !== 10)
            .sort((cat) => cat.id)
            .map((cat) => (
                <TableButton
                    key={cat.id}
                    size="large"
                    Content={`/icons/categories/${cat.name}.png`}
                    type="Image"
                    active={categories.includes(cat.id)}
                    onClick={() => {
                        handleClick(cat.id);
                    }}
                />
            )),
        <TableButton
            key={0}
            size="large"
            Content={`/icons/categories/all.png`}
            type="Image"
            active={categories.length === 0}
            onClick={() => {
                handleClick(0);
            }}
        />,
    ];
    return (
        <div className="inline-flex flex-col space-y-0.5">
            <span className="text-white">{t("category")}</span>
            <div className="inline">
                <div className="inline space-x-1">{buttons}</div>
            </div>
        </div>
    );
};

export const RarityFilter = ({
    column,
    data,
}: {
    column?: Column<any>;
    data: Rarity[];
}) => {
    const [rarities, setRarities] = useState<number[]>([]);
    const { t } = useTranslation();

    if (!column) return <></>;

    const handleClick = (rarity: number) => {
        if (rarities.includes(rarity)) {
            const newRarities = rarities.filter((c) => c !== rarity);
            setRarities(newRarities);
            column.setFilterValue(newRarities);
        } else {
            const newRarities = uniq([...rarities, rarity]);
            setRarities(newRarities);
            column.setFilterValue(newRarities);
        }
    };

    const buttons = [
        ...data
            .slice()
            .sort((r) => r.id)
            .map((r) => (
                <TableButton
                    key={r.id}
                    size="large"
                    Content={rarityStyles(r.id).backgroundColor}
                    type="color"
                    active={rarities.includes(r.id)}
                    onClick={() => {
                        handleClick(r.id);
                    }}
                />
            )),
    ];

    return (
        <div className="inline-flex flex-col space-y-0.5">
            <span className="text-white">{t("rarity")}</span>
            <div className="inline">
                <div className="inline space-x-1">{buttons}</div>
            </div>
        </div>
    );
};
