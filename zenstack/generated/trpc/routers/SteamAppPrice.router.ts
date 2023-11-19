/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, type ProcReturns, type PrismaClient, db } from '.';
import $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type {
    UseTRPCMutationOptions,
    UseTRPCMutationResult,
    UseTRPCQueryOptions,
    UseTRPCQueryResult,
    UseTRPCInfiniteQueryOptions,
    UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Router extends RouterFactory<BaseConfig>, Proc extends ProcBuilder<BaseConfig>>(
    router: Router,
    procedure: Proc,
) {
    return router({
        aggregate: procedure
            .input($Schema.SteamAppPriceInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['aggregate'],
            ReturnType<PrismaClient['steamAppPrice']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.SteamAppPriceInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).steamAppPrice.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['createMany'],
            ReturnType<PrismaClient['steamAppPrice']['createMany']>
        >,

        create: procedure
            .input($Schema.SteamAppPriceInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).steamAppPrice.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['create'],
            ReturnType<PrismaClient['steamAppPrice']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SteamAppPriceInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).steamAppPrice.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['deleteMany'],
            ReturnType<PrismaClient['steamAppPrice']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SteamAppPriceInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).steamAppPrice.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['delete'],
            ReturnType<PrismaClient['steamAppPrice']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SteamAppPriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['steamAppPrice']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SteamAppPriceInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['findFirst'],
            ReturnType<PrismaClient['steamAppPrice']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SteamAppPriceInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['findMany'],
            ReturnType<PrismaClient['steamAppPrice']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SteamAppPriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['steamAppPrice']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SteamAppPriceInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['findUnique'],
            ReturnType<PrismaClient['steamAppPrice']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SteamAppPriceInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['groupBy'],
            ReturnType<PrismaClient['steamAppPrice']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SteamAppPriceInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).steamAppPrice.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['updateMany'],
            ReturnType<PrismaClient['steamAppPrice']['updateMany']>
        >,

        update: procedure
            .input($Schema.SteamAppPriceInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).steamAppPrice.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['update'],
            ReturnType<PrismaClient['steamAppPrice']['update']>
        >,

        upsert: procedure
            .input($Schema.SteamAppPriceInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).steamAppPrice.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['upsert'],
            ReturnType<PrismaClient['steamAppPrice']['upsert']>
        >,

        count: procedure
            .input($Schema.SteamAppPriceInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).steamAppPrice.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SteamAppPriceInputSchema)['count'],
            ReturnType<PrismaClient['steamAppPrice']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.SteamAppPriceAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SteamAppPriceAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetSteamAppPriceAggregateType<T>,
                Prisma.GetSteamAppPriceAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetSteamAppPriceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SteamAppPriceAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSteamAppPriceAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetSteamAppPriceAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.SteamAppPriceCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.SteamAppPriceCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SteamAppPriceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SteamAppPriceGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SteamAppPriceGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.SteamAppPriceDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.SteamAppPriceDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SteamAppPriceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SteamAppPriceGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SteamAppPriceGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.SteamAppPriceFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.SteamAppPriceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SteamAppPriceGetPayload<T>,
                Prisma.SteamAppPriceGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SteamAppPriceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SteamAppPriceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.SteamAppPriceFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SteamAppPriceFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SteamAppPriceGetPayload<T>,
                Prisma.SteamAppPriceGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SteamAppPriceFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SteamAppPriceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.SteamAppPriceFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.SteamAppPriceFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.SteamAppPriceGetPayload<T>>,
                Array<Prisma.SteamAppPriceGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.SteamAppPriceGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SteamAppPriceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SteamAppPriceGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.SteamAppPriceGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.SteamAppPriceFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SteamAppPriceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SteamAppPriceGetPayload<T>,
                Prisma.SteamAppPriceGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SteamAppPriceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SteamAppPriceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.SteamAppPriceFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SteamAppPriceFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SteamAppPriceGetPayload<T>,
                Prisma.SteamAppPriceGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SteamAppPriceFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SteamAppPriceGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SteamAppPriceGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.SteamAppPriceGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SteamAppPriceGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SteamAppPriceGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Prisma.SubsetIntersection<T, Prisma.SteamAppPriceGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSteamAppPriceGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetSteamAppPriceGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetSteamAppPriceGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.SteamAppPriceGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SteamAppPriceGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SteamAppPriceGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
                ? `Error: "by" must not be empty.`
                : HavingValid extends Prisma.False
                ? {
                      [P in HavingFields]: P extends ByFields
                          ? never
                          : P extends string
                          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                          : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                  }[HavingFields]
                : 'take' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Prisma.Keys<T>
                ? 'orderBy' extends Prisma.Keys<T>
                    ? ByValid extends Prisma.True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                    : 'Error: If you provide "skip", you also need to provide "orderBy"'
                : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
        >(
            input: Omit<
                Prisma.SubsetIntersection<T, Prisma.SteamAppPriceGroupByArgs, OrderByArg> & InputErrors,
                'cursor'
            >,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSteamAppPriceGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSteamAppPriceGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.SteamAppPriceUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.SteamAppPriceUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SteamAppPriceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SteamAppPriceGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SteamAppPriceGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.SteamAppPriceUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SteamAppPriceUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SteamAppPriceGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SteamAppPriceGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SteamAppPriceUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SteamAppPriceUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SteamAppPriceGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SteamAppPriceGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.SteamAppPriceCountArgs>(
            input: Prisma.Subset<T, Prisma.SteamAppPriceCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SteamAppPriceCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SteamAppPriceCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SteamAppPriceCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SteamAppPriceCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SteamAppPriceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SteamAppPriceCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SteamAppPriceCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
