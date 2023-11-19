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
            .input($Schema.PackItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['packItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PackItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['createMany'],
            ReturnType<PrismaClient['packItem']['createMany']>
        >,

        create: procedure
            .input($Schema.PackItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['create'],
            ReturnType<PrismaClient['packItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PackItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['packItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PackItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['delete'],
            ReturnType<PrismaClient['packItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PackItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['packItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PackItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['packItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PackItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findMany'],
            ReturnType<PrismaClient['packItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PackItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['packItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PackItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['packItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PackItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['packItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PackItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['packItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.PackItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['update'],
            ReturnType<PrismaClient['packItem']['update']>
        >,

        upsert: procedure
            .input($Schema.PackItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).packItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackItemInputSchema)['upsert'],
            ReturnType<PrismaClient['packItem']['upsert']>
        >,

        count: procedure
            .input($Schema.PackItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).packItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackItemInputSchema)['count'],
            ReturnType<PrismaClient['packItem']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.PackItemAggregateArgs>(
            input: Prisma.Subset<T, Prisma.PackItemAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetPackItemAggregateType<T>,
                Prisma.GetPackItemAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetPackItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.PackItemAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetPackItemAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetPackItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.PackItemCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.PackItemCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackItemGetPayload<T>, Context>,
            ) => Promise<Prisma.PackItemGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.PackItemDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.PackItemDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackItemGetPayload<T>, Context>,
            ) => Promise<Prisma.PackItemGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.PackItemFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.PackItemFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackItemFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackItemFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.PackItemFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.PackItemGetPayload<T>>,
                Array<Prisma.PackItemGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.PackItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PackItemGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.PackItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.PackItemFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.PackItemFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackItemFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackItemFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackItemFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.PackItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.PackItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.PackItemGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.PackItemGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetPackItemGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetPackItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetPackItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.PackItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.PackItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.PackItemGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.PackItemGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetPackItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetPackItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.PackItemUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.PackItemUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackItemGetPayload<T>, Context>,
            ) => Promise<Prisma.PackItemGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.PackItemUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackItemUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackItemUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackItemUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackItemGetPayload<T>, Context>,
            ) => Promise<Prisma.PackItemGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.PackItemCountArgs>(
            input: Prisma.Subset<T, Prisma.PackItemCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PackItemCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.PackItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PackItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
