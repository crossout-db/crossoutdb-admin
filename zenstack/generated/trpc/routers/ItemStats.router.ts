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
            .input($Schema.ItemStatsInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['aggregate'],
            ReturnType<PrismaClient['itemStats']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ItemStatsInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['createMany'],
            ReturnType<PrismaClient['itemStats']['createMany']>
        >,

        create: procedure
            .input($Schema.ItemStatsInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['create'],
            ReturnType<PrismaClient['itemStats']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ItemStatsInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['deleteMany'],
            ReturnType<PrismaClient['itemStats']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ItemStatsInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['delete'],
            ReturnType<PrismaClient['itemStats']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ItemStatsInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findFirst'],
            ReturnType<PrismaClient['itemStats']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ItemStatsInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findFirst'],
            ReturnType<PrismaClient['itemStats']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ItemStatsInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findMany'],
            ReturnType<PrismaClient['itemStats']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ItemStatsInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findUnique'],
            ReturnType<PrismaClient['itemStats']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ItemStatsInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['findUnique'],
            ReturnType<PrismaClient['itemStats']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ItemStatsInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['groupBy'],
            ReturnType<PrismaClient['itemStats']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ItemStatsInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['updateMany'],
            ReturnType<PrismaClient['itemStats']['updateMany']>
        >,

        update: procedure
            .input($Schema.ItemStatsInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['update'],
            ReturnType<PrismaClient['itemStats']['update']>
        >,

        upsert: procedure
            .input($Schema.ItemStatsInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).itemStats.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['upsert'],
            ReturnType<PrismaClient['itemStats']['upsert']>
        >,

        count: procedure
            .input($Schema.ItemStatsInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).itemStats.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemStatsInputSchema)['count'],
            ReturnType<PrismaClient['itemStats']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.ItemStatsAggregateArgs>(
            input: Prisma.Subset<T, Prisma.ItemStatsAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetItemStatsAggregateType<T>,
                Prisma.GetItemStatsAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetItemStatsAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ItemStatsAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetItemStatsAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetItemStatsAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.ItemStatsCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.ItemStatsCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemStatsGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.ItemStatsGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.ItemStatsGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.ItemStatsDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.ItemStatsDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemStatsGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.ItemStatsGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.ItemStatsGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.ItemStatsFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemStatsFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemStatsFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.ItemStatsFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemStatsFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemStatsFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.ItemStatsFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemStatsFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.ItemStatsGetPayload<T>>,
                Array<Prisma.ItemStatsGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.ItemStatsGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemStatsFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ItemStatsGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.ItemStatsGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.ItemStatsFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemStatsFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemStatsFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.ItemStatsFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemStatsFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemStatsFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemStatsFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemStatsGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemStatsGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.ItemStatsGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ItemStatsGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ItemStatsGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.ItemStatsGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetItemStatsGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetItemStatsGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetItemStatsGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.ItemStatsGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ItemStatsGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ItemStatsGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ItemStatsGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetItemStatsGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetItemStatsGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.ItemStatsUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.ItemStatsUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemStatsGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.ItemStatsGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.ItemStatsGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.ItemStatsUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemStatsUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemStatsGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemStatsGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemStatsUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemStatsUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.ItemStatsGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.ItemStatsGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.ItemStatsCountArgs>(
            input: Prisma.Subset<T, Prisma.ItemStatsCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemStatsCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ItemStatsCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ItemStatsCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
