import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { CategoryList } from "@components/admin/categories";

export default function BadgeExchangePageList() {
  return <CategoryList />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerAuthSession(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (session?.user.role !== "ADMIN" && session?.user.role !== "CONTRIBUTOR") {
    console.log("No session found");
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: `/403`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
