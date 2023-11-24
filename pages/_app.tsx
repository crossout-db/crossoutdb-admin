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

const API_URL = `${getBaseUrl()}/api/trpc`;

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
                                name: "item",
                                identifier: "itemParent",
                                meta: {
                                    label: "Items",
                                },
                            },
                            {
                                name: "item",
                                identifier: "item",
                                list: "/admin/item",
                                create: "/admin/item/create",
                                edit: "/admin/item/edit/:id",
                                show: "/admin/item/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "itemStats",
                                list: "/admin/itemStats",
                                create: "/admin/itemStats/:itemId/create",
                                edit: "/admin/itemStats/edit/:id",
                                show: "/admin/itemStats/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "market",
                                list: "/admin/market",
                                create: "/admin/market/create",
                                edit: "/admin/market/edit/:id",
                                show: "/admin/market/show/:id",
                                meta: {
                                    label: "Market",
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "category",
                                list: "/admin/category",
                                create: "/admin/category/create",
                                edit: "/admin/category/edit/:id",
                                show: "/admin/category/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "faction",
                                list: "/admin/faction",
                                create: "/admin/faction/create",
                                edit: "/admin/faction/edit/:id",
                                show: "/admin/faction/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "rarity",
                                list: "/admin/rarity",
                                create: "/admin/rarity/create",
                                edit: "/admin/rarity/edit/:id",
                                show: "/admin/rarity/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "type",
                                list: "/admin/type",
                                create: "/admin/type/create",
                                edit: "/admin/type/edit/:id",
                                show: "/admin/type/show/:id",
                                meta: {
                                    parent: "itemParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "badgeExchange",
                                list: "/admin/badgeExchange",
                                create: "/admin/badgeExchange/create",
                                edit: "/admin/badgeExchange/edit/:id",
                                show: "/admin/badgeExchange/show/:id",
                                meta: {
                                    label: "Badge Exchange",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "pack",
                                identifier: "packParent",
                                meta: {
                                    label: "Packs",
                                },
                            },
                            {
                                name: "pack",
                                identifier: "pack",
                                list: "/admin/pack",
                                create: "/admin/pack/create",
                                edit: "/admin/pack/edit/:id",
                                show: "/admin/pack/show/:id",
                                meta: {
                                    parent: "packParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "packItem",
                                list: "/admin/packItem",
                                create: "/admin/packItem/:packId/create",
                                edit: "/admin/packItem/edit/:id",
                                show: "/admin/packItem/show/:id",
                                meta: {
                                    parent: "packParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "packPrice",
                                list: "/admin/packPrice",
                                create: "/admin/packPrice/create",
                                edit: "/admin/packPrice/edit/:id",
                                show: "/admin/packPrice/show/:id",
                                meta: {
                                    parent: "packParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "recipe",
                                identifier: "recipeParent",
                                meta: {
                                    label: "Recipes",
                                },
                            },
                            {
                                name: "recipe",
                                identifier: "recipe",
                                list: "/admin/recipe",
                                create: "/admin/recipe/create",
                                edit: "/admin/recipe/edit/:id",
                                show: "/admin/recipe/show/:id",
                                meta: {
                                    parent: "recipeParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "recipeItem",
                                list: "/admin/recipeItem",
                                create: "/admin/recipeItem/:recipeId/create",
                                edit: "/admin/recipeItem/edit/:id",
                                show: "/admin/recipeItem/show/:id",
                                meta: {
                                    parent: "recipeParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "release",
                                list: "/admin/release",
                                create: "/admin/release/create",
                                edit: "/admin/release/edit/:id",
                                show: "/admin/release/show/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                            {
                                name: "synergy",
                                identifier: "synergyParent",
                                meta: {
                                    label: "Synergies",
                                },
                            },
                            {
                                name: "synergy",
                                identifier: "synergy",
                                list: "/admin/synergy",
                                create: "/admin/synergy/create",
                                edit: "/admin/synergy/edit/:id",
                                show: "/admin/synergy/show/:id",
                                meta: {
                                    parent: "synergyParent",
                                    canDelete: true,
                                },
                            },
                            {
                                name: "synergyItem",
                                list: "/admin/synergyItem",
                                create: "/admin/synergyItem/create",
                                edit: "/admin/synergyItem/edit/:id",
                                show: "/admin/synergyItem/show/:id",
                                meta: {
                                    parent: "synergyParent",
                                    canDelete: true,
                                },
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
                        text="CrossoutDB Admin"
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

function getBaseUrl() {
    if (typeof window !== "undefined") return "";

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    } else {
        return `http://localhost:${process.env.PORT ?? 3000}`;
    }
}
