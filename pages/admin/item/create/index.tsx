import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { ItemCreate } from "@components/admin/items";
import { db } from "@server/db";
import { Prisma } from "@prisma/client";

export default function ItemPageCreate({ maxItemId }: { maxItemId: number }) {
  return <ItemCreate maxItemId={maxItemId} />;
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

  console.log("maxItemId");
  const query = await db.$queryRaw(
    Prisma.sql`SELECT MAX(id) FROM public."Item";`
  );
  const maxItemId = (query as { max: number }[])[0].max + 1;
  console.log("maxItemId:" + maxItemId);

  return {
    props: {
      maxItemId,
      ...translateProps,
    },
  };
};
