import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { SynergyItemList } from "@components/admin/synergyitems";

export default function SynergyItemPageList() {
  return <SynergyItemList />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerAuthSession(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (session?.user.role !== "ADMIN" && session?.user.role !== "CONTRIBUTOR") {
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
