import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { TypeList } from "@components/admin/types";

export default function TypePageList() {
  return <TypeList />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

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
