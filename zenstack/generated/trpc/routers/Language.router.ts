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
            .input($Schema.LanguageInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).language.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['aggregate'],
            ReturnType<PrismaClient['language']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.LanguageInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['createMany'],
            ReturnType<PrismaClient['language']['createMany']>
        >,

        create: procedure
            .input($Schema.LanguageInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['create'],
            ReturnType<PrismaClient['language']['create']>
        >,

        deleteMany: procedure
            .input($Schema.LanguageInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['deleteMany'],
            ReturnType<PrismaClient['language']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.LanguageInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['delete'],
            ReturnType<PrismaClient['language']['delete']>
        >,

        findFirst: procedure
            .input($Schema.LanguageInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).language.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['findFirst'],
            ReturnType<PrismaClient['language']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.LanguageInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).language.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['findFirst'],
            ReturnType<PrismaClient['language']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.LanguageInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).language.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['findMany'],
            ReturnType<PrismaClient['language']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.LanguageInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).language.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['findUnique'],
            ReturnType<PrismaClient['language']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.LanguageInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).language.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['findUnique'],
            ReturnType<PrismaClient['language']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.LanguageInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).language.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['groupBy'],
            ReturnType<PrismaClient['language']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.LanguageInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['updateMany'],
            ReturnType<PrismaClient['language']['updateMany']>
        >,

        update: procedure
            .input($Schema.LanguageInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['update'],
            ReturnType<PrismaClient['language']['update']>
        >,

        upsert: procedure
            .input($Schema.LanguageInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).language.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LanguageInputSchema)['upsert'],
            ReturnType<PrismaClient['language']['upsert']>
        >,

        count: procedure
            .input($Schema.LanguageInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).language.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LanguageInputSchema)['count'],
            ReturnType<PrismaClient['language']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.LanguageAggregateArgs>(
            input: Prisma.Subset<T, Prisma.LanguageAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetLanguageAggregateType<T>,
                Prisma.GetLanguageAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetLanguageAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.LanguageAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetLanguageAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetLanguageAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.LanguageCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.LanguageCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LanguageGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>,
            ) => Promise<Prisma.LanguageGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.LanguageDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.LanguageDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LanguageGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>,
            ) => Promise<Prisma.LanguageGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.LanguageFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.LanguageFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.LanguageFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.LanguageGetPayload<T>>,
                Array<Prisma.LanguageGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.LanguageGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LanguageGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.LanguageGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.LanguageFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.LanguageFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.LanguageFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LanguageFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LanguageFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LanguageGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LanguageGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.LanguageGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.LanguageGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.LanguageGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.LanguageGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetLanguageGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetLanguageGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetLanguageGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.LanguageGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.LanguageGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.LanguageGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.LanguageGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetLanguageGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetLanguageGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.LanguageUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.LanguageUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LanguageGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>,
            ) => Promise<Prisma.LanguageGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.LanguageUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LanguageUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LanguageGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LanguageGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LanguageUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LanguageUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LanguageGetPayload<T>, Context>,
            ) => Promise<Prisma.LanguageGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.LanguageCountArgs>(
            input: Prisma.Subset<T, Prisma.LanguageCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LanguageCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.LanguageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LanguageCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
