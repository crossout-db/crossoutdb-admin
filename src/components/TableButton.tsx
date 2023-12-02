import { isString } from "lodash";
import Image from "next/image";
import React from "react";
import { Icon } from "react-feather";

interface TableButtonProps {
    Content: string | Icon;
    type: "Icon" | "Image" | "text" | "color";
    active?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableButton: React.FC<TableButtonProps> = ({
    Content,
    type,
    active,
    disabled,
    onClick,
    size,
}) => {
    let whString = "w-[32px] h-[32px]";
    let iconSize = 26;
    switch (size) {
        case "small":
            whString = "w-[24px] h-[24px]";
            iconSize = 18;
            break;
        case "medium":
            whString = "w-[32px] h-[32px]";
            iconSize = 26;
            break;
        case "large":
            whString = "w-[42px] h-[42px]";
            iconSize = 36;
            break;
    }

    const content = (() => {
        switch (type) {
            case "Icon":
                return (
                    <Content
                        size={iconSize}
                        className={`m-auto ${
                            active ? "filter-none" : "filter-grayscale"
                        }`}
                    />
                );
            case "Image":
                return (
                    <Image
                        src={Content as string}
                        alt="icon"
                        className={`w-75 h-75 m-auto ${
                            active ? "filter-none" : "filter-grayscale"
                        }`}
                    />
                );
            case "text":
                return (
                    <span className={`text-lg font-bold`}>
                        {Content as string}
                    </span>
                );
            case "color":
                return (
                    <div
                        className={`m-auto h-1/2 w-1/2 ${Content as string}`}
                    ></div>
                );
        }
    })();

    return (
        <button
            disabled={disabled}
            className={`text-white align-top bg-black border border-xoPrimary  disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 ${whString} ${
                active
                    ? "border-xoQuaternary shadow-orange-500 shadow-sm"
                    : "hover:border-white"
            }`}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default TableButton;
