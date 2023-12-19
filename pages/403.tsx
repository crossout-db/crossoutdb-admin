import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Custom403() {
  const { data, status } = useSession();
  const currentUser = data?.user.name ?? "Guest";
  const currentRole = data?.user.role;

  return (
    <>
      <h1>
        <span style={{ color: "red" }}>403</span>
        {" - "}
        <span style={{ color: "#f49d06" }}>
          <b>{currentUser}</b>
        </span>
        {" you do not have access to this page!"}
      </h1>
      {currentRole && (
        <h2>
          {"Your role is "}
          <span style={{ color: "#f49d06" }}>
            <b>{currentRole}</b>
          </span>
          {" and "}
          <span style={{ color: "#f49d06" }}>
            <b>ADMIN</b>
          </span>
          {" is required."}
        </h2>
      )}
      {!currentRole && (
        <h2>
          You must <Link href="/login">login</Link> to access this page.
        </h2>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerAuthSession(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  return {
    props: {
      ...translateProps,
    },
  };
};
