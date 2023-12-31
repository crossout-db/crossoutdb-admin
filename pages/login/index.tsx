import { ThemedTitleV2 } from "@refinedev/antd";
import { useLogin } from "@refinedev/core";
import { Button, Layout, Space, Typography } from "antd";

import { useTranslate } from "@refinedev/core";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppIcon } from "src/components/app-icon";

import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";

export default function Login() {
  const { mutate: login } = useLogin();

  const t = useTranslate();

  return (
    <Layout
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Space direction="vertical" align="center">
        <ThemedTitleV2
          collapsed={false}
          wrapperStyles={{
            fontSize: "22px",
          }}
          text="CrossoutDB Admin"
          icon={<AppIcon />}
        />
        <Button
          style={{ width: "240px", marginBottom: "32px" }}
          type="primary"
          size="middle"
          onClick={() => login({})}
        >
          {t("pages.login.signin", "Sign in")}
        </Button>
        <Typography.Text type="secondary">
          Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="Discord"
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg"
            width="120px"
          />
        </Typography.Text>
      </Space>
    </Layout>
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerAuthSession(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
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
