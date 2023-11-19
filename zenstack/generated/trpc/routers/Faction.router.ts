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
            .input($Schema.FactionInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['aggregate'],
            ReturnType<PrismaClient['faction']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.FactionInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['createMany'],
            ReturnType<PrismaClient['faction']['createMany']>
        >,

        create: procedure
            .input($Schema.FactionInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['create'],
            ReturnType<PrismaClient['faction']['create']>
        >,

        deleteMany: procedure
            .input($Schema.FactionInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['deleteMany'],
            ReturnType<PrismaClient['faction']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.FactionInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['delete'],
            ReturnType<PrismaClient['faction']['delete']>
        >,

        findFirst: procedure
            .input($Schema.FactionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findFirst'],
            ReturnType<PrismaClient['faction']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.FactionInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findFirst'],
            ReturnType<PrismaClient['faction']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.FactionInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findMany'],
            ReturnType<PrismaClient['faction']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.FactionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findUnique'],
            ReturnType<PrismaClient['faction']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.FactionInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['findUnique'],
            ReturnType<PrismaClient['faction']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.FactionInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['groupBy'],
            ReturnType<PrismaClient['faction']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.FactionInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['updateMany'],
            ReturnType<PrismaClient['faction']['updateMany']>
        >,

        update: procedure
            .input($Schema.FactionInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['update'],
            ReturnType<PrismaClient['faction']['update']>
        >,

        upsert: procedure
            .input($Schema.FactionInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).faction.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.FactionInputSchema)['upsert'],
            ReturnType<PrismaClient['faction']['upsert']>
        >,

        count: procedure
            .input($Schema.FactionInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).faction.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.FactionInputSchema)['count'],
            ReturnType<PrismaClient['faction']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.FactionAggregateArgs>(
            input: Prisma.Subset<T, Prisma.FactionAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetFactionAggregateType<T>,
                Prisma.GetFactionAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetFactionAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.FactionAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetFactionAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetFactionAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.FactionCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.FactionCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.FactionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FactionGetPayload<T>, Context>,
            ) => Promise<Prisma.FactionGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.FactionDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.FactionDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.FactionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FactionGetPayload<T>, Context>,
            ) => Promise<Prisma.FactionGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.FactionFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.FactionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FactionGetPayload<T>, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FactionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.FactionFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.FactionFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FactionGetPayload<T>, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FactionFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.FactionFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.FactionFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.FactionGetPayload<T>>,
                Array<Prisma.FactionGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.FactionGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FactionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FactionGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.FactionGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.FactionFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.FactionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FactionGetPayload<T>, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FactionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.FactionFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.FactionFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FactionGetPayload<T>, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.FactionFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FactionFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FactionGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.FactionGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.FactionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.FactionGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.FactionGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.FactionGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetFactionGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetFactionGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetFactionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.FactionGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.FactionGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.FactionGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.FactionGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetFactionGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetFactionGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.FactionUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.FactionUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.FactionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FactionGetPayload<T>, Context>,
            ) => Promise<Prisma.FactionGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.FactionUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.FactionUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.FactionGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.FactionGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.FactionUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.FactionUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FactionGetPayload<T>, Context>,
            ) => Promise<Prisma.FactionGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.FactionCountArgs>(
            input: Prisma.Subset<T, Prisma.FactionCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FactionCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.FactionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FactionCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
