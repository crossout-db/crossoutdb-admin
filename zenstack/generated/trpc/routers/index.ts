/* eslint-disable */
import {
    type AnyRouter,
    type AnyRootConfig,
    type CreateRouterInner,
    type Procedure,
    type ProcedureBuilder,
    type ProcedureParams,
    type ProcedureRouterRecord,
    type ProcedureType,
} from '@trpc/server';
import { type PrismaClient, type Prisma } from '@prisma/client';
import type z from 'zod';
import createReleaseRouter from './Release.router';
import createRecipeRouter from './Recipe.router';
import createRecipeItemRouter from './RecipeItem.router';
import createPackRouter from './Pack.router';
import createPackItemRouter from './PackItem.router';
import createSteamAppPriceRouter from './SteamAppPrice.router';
import createCategoryRouter from './Category.router';
import createFactionRouter from './Faction.router';
import createTypeRouter from './Type.router';
import createRarityRouter from './Rarity.router';
import createItemRouter from './Item.router';
import createItemStatsRouter from './ItemStats.router';
import createSynergyRouter from './Synergy.router';
import createSynergyItemRouter from './SynergyItem.router';
import createMarketRouter from './Market.router';
import createBadgeExchangeRouter from './BadgeExchange.router';
import createLogRouter from './Log.router';
import createAccountRouter from './Account.router';
import createSessionRouter from './Session.router';
import createUserRouter from './User.router';
import createVerificationTokenRouter from './VerificationToken.router';
import createCountryRouter from './Country.router';
import createLanguageRouter from './Language.router';
import createTranslationRouter from './Translation.router';
import { ClientType as ReleaseClientType } from './Release.router';
import { ClientType as RecipeClientType } from './Recipe.router';
import { ClientType as RecipeItemClientType } from './RecipeItem.router';
import { ClientType as PackClientType } from './Pack.router';
import { ClientType as PackItemClientType } from './PackItem.router';
import { ClientType as SteamAppPriceClientType } from './SteamAppPrice.router';
import { ClientType as CategoryClientType } from './Category.router';
import { ClientType as FactionClientType } from './Faction.router';
import { ClientType as TypeClientType } from './Type.router';
import { ClientType as RarityClientType } from './Rarity.router';
import { ClientType as ItemClientType } from './Item.router';
import { ClientType as ItemStatsClientType } from './ItemStats.router';
import { ClientType as SynergyClientType } from './Synergy.router';
import { ClientType as SynergyItemClientType } from './SynergyItem.router';
import { ClientType as MarketClientType } from './Market.router';
import { ClientType as BadgeExchangeClientType } from './BadgeExchange.router';
import { ClientType as LogClientType } from './Log.router';
import { ClientType as AccountClientType } from './Account.router';
import { ClientType as SessionClientType } from './Session.router';
import { ClientType as UserClientType } from './User.router';
import { ClientType as VerificationTokenClientType } from './VerificationToken.router';
import { ClientType as CountryClientType } from './Country.router';
import { ClientType as LanguageClientType } from './Language.router';
import { ClientType as TranslationClientType } from './Translation.router';

export { PrismaClient } from '@prisma/client';

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <ProcRouterRecord extends ProcedureRouterRecord>(
    procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<{
    _config: Config;
    _ctx_out: Config['$types']['ctx'];
    _input_in: any;
    _input_out: any;
    _output_in: any;
    _output_out: any;
    _meta: Config['$types']['meta'];
}>;

type ExtractParamsFromProcBuilder<Builder extends ProcedureBuilder<any>> = Builder extends ProcedureBuilder<infer P>
    ? P
    : never;

type FromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

type Join<A, B> = A extends symbol ? B : A & B;

export type ProcReturns<
    PType extends ProcedureType,
    PBuilder extends ProcBuilder<BaseConfig>,
    ZType extends z.ZodType,
    PPromise extends Prisma.PrismaPromise<any>,
> = Procedure<
    PType,
    ProcedureParams<
        ExtractParamsFromProcBuilder<PBuilder>['_config'],
        ExtractParamsFromProcBuilder<PBuilder>['_ctx_out'],
        Join<ExtractParamsFromProcBuilder<PBuilder>['_input_in'], z.infer<ZType>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_input_out'], z.infer<ZType>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_output_in'], FromPromise<PPromise>>,
        Join<ExtractParamsFromProcBuilder<PBuilder>['_output_out'], FromPromise<PPromise>>,
        ExtractParamsFromProcBuilder<PBuilder>['_meta']
    >
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        release: createReleaseRouter<Router, Proc>(router, procedure),
        recipe: createRecipeRouter<Router, Proc>(router, procedure),
        recipeItem: createRecipeItemRouter<Router, Proc>(router, procedure),
        pack: createPackRouter<Router, Proc>(router, procedure),
        packItem: createPackItemRouter<Router, Proc>(router, procedure),
        steamAppPrice: createSteamAppPriceRouter<Router, Proc>(router, procedure),
        category: createCategoryRouter<Router, Proc>(router, procedure),
        faction: createFactionRouter<Router, Proc>(router, procedure),
        type: createTypeRouter<Router, Proc>(router, procedure),
        rarity: createRarityRouter<Router, Proc>(router, procedure),
        item: createItemRouter<Router, Proc>(router, procedure),
        itemStats: createItemStatsRouter<Router, Proc>(router, procedure),
        synergy: createSynergyRouter<Router, Proc>(router, procedure),
        synergyItem: createSynergyItemRouter<Router, Proc>(router, procedure),
        market: createMarketRouter<Router, Proc>(router, procedure),
        badgeExchange: createBadgeExchangeRouter<Router, Proc>(router, procedure),
        log: createLogRouter<Router, Proc>(router, procedure),
        account: createAccountRouter<Router, Proc>(router, procedure),
        session: createSessionRouter<Router, Proc>(router, procedure),
        user: createUserRouter<Router, Proc>(router, procedure),
        verificationToken: createVerificationTokenRouter<Router, Proc>(router, procedure),
        country: createCountryRouter<Router, Proc>(router, procedure),
        language: createLanguageRouter<Router, Proc>(router, procedure),
        translation: createTranslationRouter<Router, Proc>(router, procedure),
    });
}

export interface ClientType<AppRouter extends AnyRouter> {
    release: ReleaseClientType<AppRouter>;
    recipe: RecipeClientType<AppRouter>;
    recipeItem: RecipeItemClientType<AppRouter>;
    pack: PackClientType<AppRouter>;
    packItem: PackItemClientType<AppRouter>;
    steamAppPrice: SteamAppPriceClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    faction: FactionClientType<AppRouter>;
    type: TypeClientType<AppRouter>;
    rarity: RarityClientType<AppRouter>;
    item: ItemClientType<AppRouter>;
    itemStats: ItemStatsClientType<AppRouter>;
    synergy: SynergyClientType<AppRouter>;
    synergyItem: SynergyItemClientType<AppRouter>;
    market: MarketClientType<AppRouter>;
    badgeExchange: BadgeExchangeClientType<AppRouter>;
    log: LogClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    verificationToken: VerificationTokenClientType<AppRouter>;
    country: CountryClientType<AppRouter>;
    language: LanguageClientType<AppRouter>;
    translation: TranslationClientType<AppRouter>;
}
