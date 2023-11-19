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
            .input($Schema.MarketInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).market.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['aggregate'],
            ReturnType<PrismaClient['market']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.MarketInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['createMany'],
            ReturnType<PrismaClient['market']['createMany']>
        >,

        create: procedure
            .input($Schema.MarketInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['create'],
            ReturnType<PrismaClient['market']['create']>
        >,

        deleteMany: procedure
            .input($Schema.MarketInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['deleteMany'],
            ReturnType<PrismaClient['market']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.MarketInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['delete'],
            ReturnType<PrismaClient['market']['delete']>
        >,

        findFirst: procedure
            .input($Schema.MarketInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findFirst'],
            ReturnType<PrismaClient['market']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.MarketInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findFirst'],
            ReturnType<PrismaClient['market']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.MarketInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findMany'],
            ReturnType<PrismaClient['market']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.MarketInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findUnique'],
            ReturnType<PrismaClient['market']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.MarketInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).market.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['findUnique'],
            ReturnType<PrismaClient['market']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.MarketInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).market.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['groupBy'],
            ReturnType<PrismaClient['market']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.MarketInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['updateMany'],
            ReturnType<PrismaClient['market']['updateMany']>
        >,

        update: procedure
            .input($Schema.MarketInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['update'],
            ReturnType<PrismaClient['market']['update']>
        >,

        upsert: procedure
            .input($Schema.MarketInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).market.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.MarketInputSchema)['upsert'],
            ReturnType<PrismaClient['market']['upsert']>
        >,

        count: procedure
            .input($Schema.MarketInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).market.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.MarketInputSchema)['count'],
            ReturnType<PrismaClient['market']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.MarketAggregateArgs>(
            input: Prisma.Subset<T, Prisma.MarketAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetMarketAggregateType<T>,
                Prisma.GetMarketAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetMarketAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.MarketAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetMarketAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetMarketAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.MarketCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.MarketCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.MarketGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MarketGetPayload<T>, Context>,
            ) => Promise<Prisma.MarketGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.MarketDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.MarketDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.MarketGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MarketGetPayload<T>, Context>,
            ) => Promise<Prisma.MarketGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.MarketFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.MarketFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MarketGetPayload<T>, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MarketFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.MarketFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.MarketFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MarketGetPayload<T>, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MarketFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.MarketFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.MarketFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.MarketGetPayload<T>>,
                Array<Prisma.MarketGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.MarketGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MarketFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MarketGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.MarketGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.MarketFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.MarketFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MarketGetPayload<T>, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MarketFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.MarketFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.MarketFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MarketGetPayload<T>, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.MarketFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MarketFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MarketGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.MarketGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.MarketGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.MarketGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.MarketGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.MarketGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetMarketGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetMarketGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetMarketGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.MarketGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.MarketGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.MarketGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.MarketGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetMarketGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetMarketGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.MarketUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.MarketUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.MarketGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MarketGetPayload<T>, Context>,
            ) => Promise<Prisma.MarketGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.MarketUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.MarketUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.MarketGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.MarketGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.MarketUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.MarketUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MarketGetPayload<T>, Context>,
            ) => Promise<Prisma.MarketGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.MarketCountArgs>(
            input: Prisma.Subset<T, Prisma.MarketCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MarketCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.MarketCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MarketCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
