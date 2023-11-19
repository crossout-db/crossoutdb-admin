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
            .input($Schema.BadgeExchangeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['aggregate'],
            ReturnType<PrismaClient['badgeExchange']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.BadgeExchangeInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['createMany'],
            ReturnType<PrismaClient['badgeExchange']['createMany']>
        >,

        create: procedure
            .input($Schema.BadgeExchangeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['create'],
            ReturnType<PrismaClient['badgeExchange']['create']>
        >,

        deleteMany: procedure
            .input($Schema.BadgeExchangeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['badgeExchange']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.BadgeExchangeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['delete'],
            ReturnType<PrismaClient['badgeExchange']['delete']>
        >,

        findFirst: procedure
            .input($Schema.BadgeExchangeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findFirst'],
            ReturnType<PrismaClient['badgeExchange']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.BadgeExchangeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findFirst'],
            ReturnType<PrismaClient['badgeExchange']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.BadgeExchangeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findMany'],
            ReturnType<PrismaClient['badgeExchange']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.BadgeExchangeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findUnique'],
            ReturnType<PrismaClient['badgeExchange']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.BadgeExchangeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['findUnique'],
            ReturnType<PrismaClient['badgeExchange']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.BadgeExchangeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['groupBy'],
            ReturnType<PrismaClient['badgeExchange']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.BadgeExchangeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).badgeExchange.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['updateMany'],
            ReturnType<PrismaClient['badgeExchange']['updateMany']>
        >,

        update: procedure
            .input($Schema.BadgeExchangeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['update'],
            ReturnType<PrismaClient['badgeExchange']['update']>
        >,

        upsert: procedure
            .input($Schema.BadgeExchangeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).badgeExchange.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['upsert'],
            ReturnType<PrismaClient['badgeExchange']['upsert']>
        >,

        count: procedure
            .input($Schema.BadgeExchangeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).badgeExchange.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.BadgeExchangeInputSchema)['count'],
            ReturnType<PrismaClient['badgeExchange']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.BadgeExchangeAggregateArgs>(
            input: Prisma.Subset<T, Prisma.BadgeExchangeAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetBadgeExchangeAggregateType<T>,
                Prisma.GetBadgeExchangeAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetBadgeExchangeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.BadgeExchangeAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetBadgeExchangeAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetBadgeExchangeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.BadgeExchangeCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.BadgeExchangeCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BadgeExchangeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.BadgeExchangeGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.BadgeExchangeGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.BadgeExchangeDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.BadgeExchangeDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BadgeExchangeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.BadgeExchangeGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.BadgeExchangeGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.BadgeExchangeFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.BadgeExchangeGetPayload<T>,
                Prisma.BadgeExchangeGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BadgeExchangeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.BadgeExchangeFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.BadgeExchangeGetPayload<T>,
                Prisma.BadgeExchangeGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BadgeExchangeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.BadgeExchangeFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.BadgeExchangeGetPayload<T>>,
                Array<Prisma.BadgeExchangeGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.BadgeExchangeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BadgeExchangeGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.BadgeExchangeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.BadgeExchangeFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.BadgeExchangeGetPayload<T>,
                Prisma.BadgeExchangeGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BadgeExchangeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.BadgeExchangeFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.BadgeExchangeFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.BadgeExchangeGetPayload<T>,
                Prisma.BadgeExchangeGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BadgeExchangeFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BadgeExchangeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.BadgeExchangeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.BadgeExchangeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.BadgeExchangeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.BadgeExchangeGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.BadgeExchangeGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetBadgeExchangeGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetBadgeExchangeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetBadgeExchangeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.BadgeExchangeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.BadgeExchangeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.BadgeExchangeGroupByArgs['orderBy'] },
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
                Prisma.SubsetIntersection<T, Prisma.BadgeExchangeGroupByArgs, OrderByArg> & InputErrors,
                'cursor'
            >,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetBadgeExchangeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetBadgeExchangeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.BadgeExchangeUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.BadgeExchangeUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BadgeExchangeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.BadgeExchangeGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.BadgeExchangeGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.BadgeExchangeUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.BadgeExchangeUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.BadgeExchangeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BadgeExchangeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.BadgeExchangeUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.BadgeExchangeUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.BadgeExchangeGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.BadgeExchangeGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.BadgeExchangeCountArgs>(
            input: Prisma.Subset<T, Prisma.BadgeExchangeCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BadgeExchangeCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.BadgeExchangeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BadgeExchangeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
