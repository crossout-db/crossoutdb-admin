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
            .input($Schema.CategoryInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).category.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['aggregate'],
            ReturnType<PrismaClient['category']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.CategoryInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['createMany'],
            ReturnType<PrismaClient['category']['createMany']>
        >,

        create: procedure
            .input($Schema.CategoryInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['create'],
            ReturnType<PrismaClient['category']['create']>
        >,

        deleteMany: procedure
            .input($Schema.CategoryInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['deleteMany'],
            ReturnType<PrismaClient['category']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.CategoryInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['delete'],
            ReturnType<PrismaClient['category']['delete']>
        >,

        findFirst: procedure
            .input($Schema.CategoryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findFirst'],
            ReturnType<PrismaClient['category']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.CategoryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findFirst'],
            ReturnType<PrismaClient['category']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.CategoryInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findMany'],
            ReturnType<PrismaClient['category']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.CategoryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findUnique'],
            ReturnType<PrismaClient['category']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.CategoryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).category.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['findUnique'],
            ReturnType<PrismaClient['category']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.CategoryInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).category.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['groupBy'],
            ReturnType<PrismaClient['category']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.CategoryInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['updateMany'],
            ReturnType<PrismaClient['category']['updateMany']>
        >,

        update: procedure
            .input($Schema.CategoryInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['update'],
            ReturnType<PrismaClient['category']['update']>
        >,

        upsert: procedure
            .input($Schema.CategoryInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).category.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CategoryInputSchema)['upsert'],
            ReturnType<PrismaClient['category']['upsert']>
        >,

        count: procedure
            .input($Schema.CategoryInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).category.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CategoryInputSchema)['count'],
            ReturnType<PrismaClient['category']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.CategoryAggregateArgs>(
            input: Prisma.Subset<T, Prisma.CategoryAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetCategoryAggregateType<T>,
                Prisma.GetCategoryAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetCategoryAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CategoryAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetCategoryAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetCategoryAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.CategoryCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.CategoryCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CategoryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CategoryGetPayload<T>, Context>,
            ) => Promise<Prisma.CategoryGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.CategoryDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.CategoryDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CategoryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CategoryGetPayload<T>, Context>,
            ) => Promise<Prisma.CategoryGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.CategoryFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.CategoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CategoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.CategoryFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.CategoryFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CategoryFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.CategoryFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.CategoryGetPayload<T>>,
                Array<Prisma.CategoryGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.CategoryGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CategoryGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.CategoryGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.CategoryFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.CategoryFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CategoryFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CategoryFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CategoryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.CategoryGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.CategoryGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.CategoryGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.CategoryGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetCategoryGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetCategoryGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetCategoryGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.CategoryGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.CategoryGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.CategoryGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.CategoryGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetCategoryGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetCategoryGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.CategoryUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.CategoryUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CategoryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CategoryGetPayload<T>, Context>,
            ) => Promise<Prisma.CategoryGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.CategoryUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CategoryUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CategoryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CategoryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CategoryUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CategoryUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CategoryGetPayload<T>, Context>,
            ) => Promise<Prisma.CategoryGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.CategoryCountArgs>(
            input: Prisma.Subset<T, Prisma.CategoryCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CategoryCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CategoryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CategoryCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
