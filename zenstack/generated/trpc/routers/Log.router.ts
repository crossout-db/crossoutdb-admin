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
            .input($Schema.LogInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).log.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['aggregate'],
            ReturnType<PrismaClient['log']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.LogInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['createMany'],
            ReturnType<PrismaClient['log']['createMany']>
        >,

        create: procedure
            .input($Schema.LogInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['create'],
            ReturnType<PrismaClient['log']['create']>
        >,

        deleteMany: procedure
            .input($Schema.LogInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['deleteMany'],
            ReturnType<PrismaClient['log']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.LogInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['delete'],
            ReturnType<PrismaClient['log']['delete']>
        >,

        findFirst: procedure
            .input($Schema.LogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findFirst'],
            ReturnType<PrismaClient['log']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.LogInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findFirst'],
            ReturnType<PrismaClient['log']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.LogInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findMany'],
            ReturnType<PrismaClient['log']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.LogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findUnique'],
            ReturnType<PrismaClient['log']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.LogInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).log.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['findUnique'],
            ReturnType<PrismaClient['log']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.LogInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).log.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['groupBy'],
            ReturnType<PrismaClient['log']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.LogInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['updateMany'],
            ReturnType<PrismaClient['log']['updateMany']>
        >,

        update: procedure
            .input($Schema.LogInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['update'],
            ReturnType<PrismaClient['log']['update']>
        >,

        upsert: procedure
            .input($Schema.LogInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).log.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.LogInputSchema)['upsert'],
            ReturnType<PrismaClient['log']['upsert']>
        >,

        count: procedure
            .input($Schema.LogInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).log.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.LogInputSchema)['count'],
            ReturnType<PrismaClient['log']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.LogAggregateArgs>(
            input: Prisma.Subset<T, Prisma.LogAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetLogAggregateType<T>, Prisma.GetLogAggregateType<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.GetLogAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.LogAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetLogAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetLogAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.LogCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.LogCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LogGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogGetPayload<T>, Context>,
            ) => Promise<Prisma.LogGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.LogDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.LogDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LogGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogGetPayload<T>, Context>,
            ) => Promise<Prisma.LogGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.LogFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.LogFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogGetPayload<T>, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.LogFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.LogFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogGetPayload<T>, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.LogFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.LogFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.LogGetPayload<T>>,
                Array<Prisma.LogGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.LogGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LogGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.LogGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.LogFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.LogFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogGetPayload<T>, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.LogFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.LogFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LogGetPayload<T>, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.LogFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LogFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LogGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.LogGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.LogGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.LogGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.LogGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.LogGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetLogGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetLogGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetLogGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.LogGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.LogGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.LogGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.LogGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetLogGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetLogGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.LogUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.LogUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LogGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogGetPayload<T>, Context>,
            ) => Promise<Prisma.LogGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.LogUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.LogUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.LogGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.LogGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.LogUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.LogUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LogGetPayload<T>, Context>,
            ) => Promise<Prisma.LogGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.LogCountArgs>(
            input: Prisma.Subset<T, Prisma.LogCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LogCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.LogCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.LogCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
