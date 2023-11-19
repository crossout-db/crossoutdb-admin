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
            .input($Schema.RecipeItemInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['aggregate'],
            ReturnType<PrismaClient['recipeItem']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RecipeItemInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['createMany'],
            ReturnType<PrismaClient['recipeItem']['createMany']>
        >,

        create: procedure
            .input($Schema.RecipeItemInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['create'],
            ReturnType<PrismaClient['recipeItem']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RecipeItemInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['deleteMany'],
            ReturnType<PrismaClient['recipeItem']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RecipeItemInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['delete'],
            ReturnType<PrismaClient['recipeItem']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RecipeItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipeItem']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RecipeItemInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipeItem']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RecipeItemInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findMany'],
            ReturnType<PrismaClient['recipeItem']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RecipeItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipeItem']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RecipeItemInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipeItem']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RecipeItemInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['groupBy'],
            ReturnType<PrismaClient['recipeItem']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RecipeItemInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).recipeItem.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['updateMany'],
            ReturnType<PrismaClient['recipeItem']['updateMany']>
        >,

        update: procedure
            .input($Schema.RecipeItemInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['update'],
            ReturnType<PrismaClient['recipeItem']['update']>
        >,

        upsert: procedure
            .input($Schema.RecipeItemInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipeItem.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['upsert'],
            ReturnType<PrismaClient['recipeItem']['upsert']>
        >,

        count: procedure
            .input($Schema.RecipeItemInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).recipeItem.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeItemInputSchema)['count'],
            ReturnType<PrismaClient['recipeItem']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.RecipeItemAggregateArgs>(
            input: Prisma.Subset<T, Prisma.RecipeItemAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetRecipeItemAggregateType<T>,
                Prisma.GetRecipeItemAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetRecipeItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RecipeItemAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetRecipeItemAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetRecipeItemAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.RecipeItemCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.RecipeItemCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.RecipeItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.RecipeItemGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.RecipeItemDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.RecipeItemDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.RecipeItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.RecipeItemGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.RecipeItemFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.RecipeItemGetPayload<T>,
                Prisma.RecipeItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.RecipeItemFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeItemFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.RecipeItemGetPayload<T>,
                Prisma.RecipeItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeItemFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.RecipeItemFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.RecipeItemGetPayload<T>>,
                Array<Prisma.RecipeItemGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.RecipeItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RecipeItemGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.RecipeItemGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.RecipeItemFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.RecipeItemGetPayload<T>,
                Prisma.RecipeItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.RecipeItemFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeItemFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.RecipeItemGetPayload<T>,
                Prisma.RecipeItemGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeItemFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeItemFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeItemGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeItemGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.RecipeItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RecipeItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RecipeItemGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.RecipeItemGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRecipeItemGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetRecipeItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetRecipeItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.RecipeItemGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RecipeItemGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RecipeItemGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.RecipeItemGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRecipeItemGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetRecipeItemGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.RecipeItemUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.RecipeItemUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.RecipeItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.RecipeItemGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.RecipeItemUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeItemUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeItemGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeItemGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeItemUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeItemUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.RecipeItemGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.RecipeItemGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.RecipeItemCountArgs>(
            input: Prisma.Subset<T, Prisma.RecipeItemCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecipeItemCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RecipeItemCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RecipeItemCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
