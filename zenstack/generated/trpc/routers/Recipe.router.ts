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
            .input($Schema.RecipeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['aggregate'],
            ReturnType<PrismaClient['recipe']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RecipeInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['createMany'],
            ReturnType<PrismaClient['recipe']['createMany']>
        >,

        create: procedure
            .input($Schema.RecipeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['create'],
            ReturnType<PrismaClient['recipe']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RecipeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['recipe']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RecipeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['delete'],
            ReturnType<PrismaClient['recipe']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RecipeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipe']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RecipeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findFirst'],
            ReturnType<PrismaClient['recipe']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RecipeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findMany'],
            ReturnType<PrismaClient['recipe']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RecipeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipe']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RecipeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['findUnique'],
            ReturnType<PrismaClient['recipe']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RecipeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['groupBy'],
            ReturnType<PrismaClient['recipe']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RecipeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['updateMany'],
            ReturnType<PrismaClient['recipe']['updateMany']>
        >,

        update: procedure
            .input($Schema.RecipeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['update'],
            ReturnType<PrismaClient['recipe']['update']>
        >,

        upsert: procedure
            .input($Schema.RecipeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).recipe.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RecipeInputSchema)['upsert'],
            ReturnType<PrismaClient['recipe']['upsert']>
        >,

        count: procedure
            .input($Schema.RecipeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).recipe.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RecipeInputSchema)['count'],
            ReturnType<PrismaClient['recipe']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.RecipeAggregateArgs>(
            input: Prisma.Subset<T, Prisma.RecipeAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetRecipeAggregateType<T>,
                Prisma.GetRecipeAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetRecipeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RecipeAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetRecipeAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetRecipeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.RecipeCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.RecipeCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipeGetPayload<T>, Context>,
            ) => Promise<Prisma.RecipeGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.RecipeDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.RecipeDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipeGetPayload<T>, Context>,
            ) => Promise<Prisma.RecipeGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.RecipeFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.RecipeFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.RecipeFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.RecipeGetPayload<T>>,
                Array<Prisma.RecipeGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.RecipeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RecipeGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.RecipeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.RecipeFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.RecipeFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RecipeFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RecipeFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RecipeFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RecipeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RecipeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.RecipeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RecipeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RecipeGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.RecipeGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRecipeGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetRecipeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetRecipeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.RecipeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RecipeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RecipeGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.RecipeGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRecipeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetRecipeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.RecipeUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.RecipeUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipeGetPayload<T>, Context>,
            ) => Promise<Prisma.RecipeGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.RecipeUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RecipeUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RecipeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RecipeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RecipeUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RecipeUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RecipeGetPayload<T>, Context>,
            ) => Promise<Prisma.RecipeGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.RecipeCountArgs>(
            input: Prisma.Subset<T, Prisma.RecipeCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RecipeCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RecipeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RecipeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
