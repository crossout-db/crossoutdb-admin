const rarityStyles = (rarityId: number) => {
  switch (rarityId) {
    case 2:
      return {
        hoverOutline: "hover:outline-xoCommon",
        textColor: "text-xoCommon",
        backgroundColor: "bg-xoCommon",
      };
    case 3:
      return {
        hoverOutline: "hover:outline-xoRare",
        textColor: "text-xoRare",
        backgroundColor: "bg-xoRare",
      };
    case 4:
      return {
        hoverOutline: "hover:outline-xoSpecial",
        textColor: "text-xoSpecial",
        backgroundColor: "bg-xoSpecial",
      };
    case 5:
      return {
        hoverOutline: "hover:outline-xoEpic",
        textColor: "text-xoEpic",
        backgroundColor: "bg-xoEpic",
      };
    case 6:
      return {
        hoverOutline: "hover:outline-xoLegendary",
        textColor: "text-xoLegendary",
        backgroundColor: "bg-xoLegendary",
      };
    case 7:
      return {
        hoverOutline: "hover:outline-xoRelic",
        textColor: "text-xoRelic",
        backgroundColor: "bg-xoRelic",
      };
    default:
      return {
        hoverOutline: "hover:outline-xoBase",
        textColor: "text-xoBase",
        backgroundColor: "bg-xoBase",
      };
  }
};

export default rarityStyles;
