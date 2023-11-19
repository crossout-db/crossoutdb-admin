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
            .input($Schema.TranslationInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['aggregate'],
            ReturnType<PrismaClient['translation']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.TranslationInputSchema.createMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).translation.createMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['createMany'],
            ReturnType<PrismaClient['translation']['createMany']>
        >,

        create: procedure
            .input($Schema.TranslationInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['create'],
            ReturnType<PrismaClient['translation']['create']>
        >,

        deleteMany: procedure
            .input($Schema.TranslationInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).translation.deleteMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['deleteMany'],
            ReturnType<PrismaClient['translation']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.TranslationInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['delete'],
            ReturnType<PrismaClient['translation']['delete']>
        >,

        findFirst: procedure
            .input($Schema.TranslationInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['findFirst'],
            ReturnType<PrismaClient['translation']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.TranslationInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['findFirst'],
            ReturnType<PrismaClient['translation']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.TranslationInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['findMany'],
            ReturnType<PrismaClient['translation']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.TranslationInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['findUnique'],
            ReturnType<PrismaClient['translation']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.TranslationInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['findUnique'],
            ReturnType<PrismaClient['translation']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.TranslationInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['groupBy'],
            ReturnType<PrismaClient['translation']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.TranslationInputSchema.updateMany)
            .mutation(async ({ ctx, input }) =>
                checkMutate(db(ctx).translation.updateMany(input as any)),
            ) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['updateMany'],
            ReturnType<PrismaClient['translation']['updateMany']>
        >,

        update: procedure
            .input($Schema.TranslationInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['update'],
            ReturnType<PrismaClient['translation']['update']>
        >,

        upsert: procedure
            .input($Schema.TranslationInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).translation.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TranslationInputSchema)['upsert'],
            ReturnType<PrismaClient['translation']['upsert']>
        >,

        count: procedure
            .input($Schema.TranslationInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).translation.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TranslationInputSchema)['count'],
            ReturnType<PrismaClient['translation']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.TranslationAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TranslationAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetTranslationAggregateType<T>,
                Prisma.GetTranslationAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetTranslationAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TranslationAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTranslationAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetTranslationAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.TranslationCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.TranslationCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TranslationGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.TranslationGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.TranslationGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.TranslationDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.TranslationDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TranslationGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.TranslationGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.TranslationGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.TranslationFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.TranslationGetPayload<T>,
                Prisma.TranslationGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.TranslationFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.TranslationGetPayload<T>,
                Prisma.TranslationGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.TranslationFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.TranslationGetPayload<T>>,
                Array<Prisma.TranslationGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.TranslationGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TranslationGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.TranslationGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.TranslationFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.TranslationGetPayload<T>,
                Prisma.TranslationGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.TranslationFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TranslationFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.TranslationGetPayload<T>,
                Prisma.TranslationGetPayload<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TranslationFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TranslationFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TranslationGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TranslationGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.TranslationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TranslationGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TranslationGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.TranslationGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTranslationGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetTranslationGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetTranslationGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.TranslationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TranslationGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TranslationGroupByArgs['orderBy'] },
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
                Prisma.SubsetIntersection<T, Prisma.TranslationGroupByArgs, OrderByArg> & InputErrors,
                'cursor'
            >,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTranslationGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTranslationGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.TranslationUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.TranslationUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TranslationGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.TranslationGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.TranslationGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.TranslationUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TranslationUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TranslationGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TranslationGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TranslationUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TranslationUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<
                    T,
                    TRPCClientErrorLike<AppRouter>,
                    Prisma.TranslationGetPayload<T>,
                    Context
                >,
            ) => Promise<Prisma.TranslationGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.TranslationCountArgs>(
            input: Prisma.Subset<T, Prisma.TranslationCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TranslationCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TranslationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TranslationCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
