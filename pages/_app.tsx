import {
    ThemedLayoutV2,
    ThemedSiderV2,
    ThemedTitleV2,
    useNotificationProvider,
} from "@refinedev/antd";
import { AuthBindings, GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
    UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { ComponentType } from "react";

import { Header } from "@components/header";
import { ColorModeContextProvider } from "@contexts";
import "@refinedev/antd/dist/reset.css";
// import dataProvider from "@refinedev/simple-rest";
import { dataProvider } from "~/providerTRPC";
import { App as AntdApp } from "antd";
import { appWithTranslation, useTranslation } from "next-i18next";
import { AppIcon } from "src/components/app-icon";
import { trpc } from "~/lib/trpc";

const API_URL = `http://localhost:3000/api/trpc`;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const App = (props: React.PropsWithChildren) => {
    const { t, i18n } = useTranslation();

    const { data, status } = useSession();
    const router = useRouter();
    const { to } = router.query;

    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    if (status === "loading") {
        return <span>loading...</span>;
    }

    const authProvider: AuthBindings = {
        login: async () => {
            signIn("google", {
                callbackUrl: to ? to.toString() : "/",
                redirect: true,
            });

            return {
                success: true,
            };
        },
        logout: async () => {
            signOut({
                redirect: true,
                callbackUrl: "/login",
            });

            return {
                success: true,
            };
        },
        onError: async (error) => {
            console.error(error);
            return {
                error,
            };
        },
        check: async () => {
            if (status === "unauthenticated") {
                return {
                    authenticated: false,
                    redirectTo: "/login",
                };
            }

            return {
                authenticated: true,
            };
        },
        getPermissions: async () => {
            return null;
        },
        getIdentity: async () => {
            if (data?.user) {
                const { user } = data;
                return {
                    name: user.name,
                    avatar: user.image,
                };
            }

            return null;
        },
    };

    return (
        <RefineKbarProvider>
            <ColorModeContextProvider>
                <AntdApp>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(API_URL)}
                        notificationProvider={useNotificationProvider}
                        authProvider={authProvider}
                        i18nProvider={i18nProvider}
                        resources={[
                            {
                                name: "badgeExchange",
                                list: "/admin/badgeExchange",
                                create: "/admin/badgeExchange/create",
                                edit: "/admin/badgeExchange/edit/:id",
                                show: "/admin/badgeExchange/show/:id",
                            },
                            {
                                name: "category",
                                list: "/admin/category",
                                create: "/admin/category/create",
                                edit: "/admin/category/edit/:id",
                                show: "/admin/category/show/:id",
                            },
                            {
                                name: "faction",
                                list: "/admin/faction",
                                create: "/admin/faction/create",
                                edit: "/admin/faction/edit/:id",
                                show: "/admin/faction/show/:id",
                            },
                            {
                                name: "item",
                                list: "/admin/item",
                                create: "/admin/item/create",
                                edit: "/admin/item/edit/:id",
                                show: "/admin/item/show/:id",
                            },
                            {
                                name: "itemStats",
                                list: "/admin/itemStats",
                                create: "/admin/itemStats/create",
                                edit: "/admin/itemStats/edit/:id",
                                show: "/admin/itemStats/show/:id",
                            },
                            {
                                name: "market",
                                list: "/admin/market",
                                create: "/admin/market/create",
                                edit: "/admin/market/edit/:id",
                                show: "/admin/market/show/:id",
                            },
                            {
                                name: "pack",
                                list: "/admin/pack",
                                create: "/admin/pack/create",
                                edit: "/admin/pack/edit/:id",
                                show: "/admin/pack/show/:id",
                            },
                            {
                                name: "packItem",
                                list: "/admin/packItem",
                                create: "/admin/packItem/create",
                                edit: "/admin/packItem/edit/:id",
                                show: "/admin/packItem/show/:id",
                            },
                            {
                                name: "rarity",
                                list: "/admin/rarity",
                                create: "/admin/rarity/create",
                                edit: "/admin/rarity/edit/:id",
                                show: "/admin/rarity/show/:id",
                            },
                            {
                                name: "recipe",
                                list: "/admin/recipe",
                                create: "/admin/recipe/create",
                                edit: "/admin/recipe/edit/:id",
                                show: "/admin/recipe/show/:id",
                            },
                            {
                                name: "recipeItem",
                                list: "/admin/recipeItem",
                                create: "/admin/recipeItem/create",
                                edit: "/admin/recipeItem/edit/:id",
                                show: "/admin/recipeItem/show/:id",
                            },
                            {
                                name: "release",
                                list: "/admin/release",
                                create: "/admin/release/create",
                                edit: "/admin/release/edit/:id",
                                show: "/admin/release/show/:id",
                            },
                            {
                                name: "steamAppPrice",
                                list: "/admin/steamAppPrice",
                                create: "/admin/steamAppPrice/create",
                                edit: "/admin/steamAppPrice/edit/:id",
                                show: "/admin/steamAppPrice/show/:id",
                            },
                            {
                                name: "synergy",
                                list: "/admin/synergy",
                                create: "/admin/synergy/create",
                                edit: "/admin/synergy/edit/:id",
                                show: "/admin/synergy/show/:id",
                            },
                            {
                                name: "synergyItem",
                                list: "/admin/synergyItem",
                                create: "/admin/synergyItem/create",
                                edit: "/admin/synergyItem/edit/:id",
                                show: "/admin/synergyItem/show/:id",
                            },
                            {
                                name: "type",
                                list: "/admin/type",
                                create: "/admin/type/create",
                                edit: "/admin/type/edit/:id",
                                show: "/admin/type/show/:id",
                            },
                            {
                                name: "user",
                                list: "/admin/user",
                                create: "/admin/user/create",
                                edit: "/admin/user/edit/:id",
                                show: "/admin/user/show/:id",
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                            useNewQueryKeys: true,
                        }}
                    >
                        {props.children}
                        <RefineKbar />
                        <UnsavedChangesNotifier />
                    </Refine>
                </AntdApp>
            </ColorModeContextProvider>
        </RefineKbarProvider>
    );
};

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithLayout): JSX.Element {
    const renderComponent = () => {
        if (Component.noLayout) {
            return <Component {...pageProps} />;
        }

        return (
            <ThemedLayoutV2
                Header={() => <Header sticky />}
                Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                Title={({ collapsed }) => (
                    <ThemedTitleV2
                        collapsed={collapsed}
                        text="refine Project"
                        icon={<AppIcon />}
                    />
                )}
            >
                <Component {...pageProps} />
            </ThemedLayoutV2>
        );
    };

    return (
        <SessionProvider session={session}>
            <App>{renderComponent()}</App>
        </SessionProvider>
    );
}

// export default appWithTranslation(MyApp);

export default appWithTranslation(
    trpc.withTRPC(MyApp) as ComponentType<AppProps<unknown>>
);
