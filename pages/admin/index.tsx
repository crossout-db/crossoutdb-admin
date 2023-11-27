import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { useSession } from "next-auth/react";

export default function AdminPage() {
    const { data, status } = useSession();
    const currentUser = data?.user.name ?? "guest";
    const currentRole = data?.user.role;

    return (
        <>
            <h1>Welcome <span style={{"color": "#f49d06"}}><b>{currentUser}</b></span> to CrossoutDB Admin Dashboard</h1>
            {currentRole && <h2>Your role is <span style={{"color": "#f49d06"}}><b>{currentRole}</b></span></h2>}
            {!currentRole && <h2>You must login to access the dashboard</h2>}
        </>
    );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    );

    const translateProps = await serverSideTranslations(
        context.locale ?? "en",
        ["common"]
    );

    return {
        props: {
            ...translateProps,
        },
    };
};
