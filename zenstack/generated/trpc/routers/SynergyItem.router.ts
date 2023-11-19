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
            .input($Schema.SynergyItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['synergyItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.SynergyItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['createMany'],
            ReturnType<PrismaClient['synergyItem']['createMany']>
        >,

        create: procedure
            .input($Schema.SynergyItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['create'],
            ReturnType<PrismaClient['synergyItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SynergyItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['synergyItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SynergyItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['delete'],
            ReturnType<PrismaClient['synergyItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SynergyItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergyItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SynergyItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergyItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SynergyItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findMany'],
            ReturnType<PrismaClient['synergyItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SynergyItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergyItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SynergyItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergyItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SynergyItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['synergyItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SynergyItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).synergyItem.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['synergyItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.SynergyItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['update'],
            ReturnType<PrismaClient['synergyItem']['update']>
        >,

        upsert: procedure
            .input($Schema.SynergyItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergyItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['upsert'],
            ReturnType<PrismaClient['synergyItem']['upsert']>
        >,

        count: procedure
            .input($Schema.SynergyItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).synergyItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyItemInputSchema)['count'],
            ReturnType<PrismaClient['synergyItem']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.SynergyItemAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SynergyItemAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetSynergyItemAggregateType<T>,
                Prisma.GetSynergyItemAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetSynergyItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SynergyItemAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSynergyItemAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetSynergyItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.SynergyItemCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.SynergyItemCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SynergyItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SynergyItemGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.SynergyItemDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.SynergyItemDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SynergyItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SynergyItemGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.SynergyItemFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SynergyItemGetPayload<T>,
                Prisma.SynergyItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.SynergyItemFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyItemFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SynergyItemGetPayload<T>,
                Prisma.SynergyItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyItemFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.SynergyItemFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.SynergyItemGetPayload<T>>,
                Array<Prisma.SynergyItemGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.SynergyItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SynergyItemGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.SynergyItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.SynergyItemFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SynergyItemGetPayload<T>,
                Prisma.SynergyItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.SynergyItemFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyItemFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.SynergyItemGetPayload<T>,
                Prisma.SynergyItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyItemFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyItemFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.SynergyItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SynergyItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SynergyItemGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.SynergyItemGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSynergyItemGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetSynergyItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetSynergyItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.SynergyItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SynergyItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SynergyItemGroupByArgs['orderBy'] },
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
                Prisma.SubsetIntersection<T, Prisma.SynergyItemGroupByArgs, OrderByArg> & InputErrors,
                'cursor'
            >,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSynergyItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSynergyItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.SynergyItemUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.SynergyItemUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SynergyItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SynergyItemGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.SynergyItemUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyItemUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyItemUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyItemUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.SynergyItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.SynergyItemGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.SynergyItemCountArgs>(
            input: Prisma.Subset<T, Prisma.SynergyItemCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SynergyItemCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SynergyItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SynergyItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
