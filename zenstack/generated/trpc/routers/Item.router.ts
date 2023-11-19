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
            .input($Schema.ItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).item.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['item']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['createMany'],
            ReturnType<PrismaClient['item']['createMany']>
        >,

        create: procedure
            .input($Schema.ItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['create'],
            ReturnType<PrismaClient['item']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['item']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['delete'],
            ReturnType<PrismaClient['item']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['item']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['item']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findMany'],
            ReturnType<PrismaClient['item']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['item']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).item.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['item']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).item.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['item']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['item']['updateMany']>
        >,

        update: procedure
            .input($Schema.ItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['update'],
            ReturnType<PrismaClient['item']['update']>
        >,

        upsert: procedure
            .input($Schema.ItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).item.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ItemInputSchema)['upsert'],
            ReturnType<PrismaClient['item']['upsert']>
        >,

        count: procedure
            .input($Schema.ItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).item.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ItemInputSchema)['count'],
            ReturnType<PrismaClient['item']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.ItemAggregateArgs>(
            input: Prisma.Subset<T, Prisma.ItemAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetItemAggregateType<T>,
                Prisma.GetItemAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ItemAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetItemAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.ItemCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.ItemCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemGetPayload<T>, Context>,
            ) => Promise<Prisma.ItemGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.ItemDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.ItemDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemGetPayload<T>, Context>,
            ) => Promise<Prisma.ItemGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.ItemFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemGetPayload<T>, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.ItemFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemGetPayload<T>, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.ItemFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.ItemGetPayload<T>>,
                Array<Prisma.ItemGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.ItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ItemGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.ItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.ItemFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemGetPayload<T>, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.ItemFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ItemFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ItemGetPayload<T>, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ItemFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ItemFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.ItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ItemGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.ItemGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetItemGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.ItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ItemGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ItemGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.ItemUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.ItemUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemGetPayload<T>, Context>,
            ) => Promise<Prisma.ItemGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.ItemUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ItemUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ItemUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ItemUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ItemGetPayload<T>, Context>,
            ) => Promise<Prisma.ItemGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.ItemCountArgs>(
            input: Prisma.Subset<T, Prisma.ItemCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ItemCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
