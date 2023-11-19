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
            .input($Schema.ReleaseInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).release.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['aggregate'],
            ReturnType<PrismaClient['release']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.ReleaseInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['createMany'],
            ReturnType<PrismaClient['release']['createMany']>
        >,

        create: procedure
            .input($Schema.ReleaseInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['create'],
            ReturnType<PrismaClient['release']['create']>
        >,

        deleteMany: procedure
            .input($Schema.ReleaseInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['deleteMany'],
            ReturnType<PrismaClient['release']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.ReleaseInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['delete'],
            ReturnType<PrismaClient['release']['delete']>
        >,

        findFirst: procedure
            .input($Schema.ReleaseInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findFirst'],
            ReturnType<PrismaClient['release']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.ReleaseInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findFirst'],
            ReturnType<PrismaClient['release']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.ReleaseInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findMany'],
            ReturnType<PrismaClient['release']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.ReleaseInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findUnique'],
            ReturnType<PrismaClient['release']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.ReleaseInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).release.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['findUnique'],
            ReturnType<PrismaClient['release']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.ReleaseInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).release.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['groupBy'],
            ReturnType<PrismaClient['release']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.ReleaseInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['updateMany'],
            ReturnType<PrismaClient['release']['updateMany']>
        >,

        update: procedure
            .input($Schema.ReleaseInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['update'],
            ReturnType<PrismaClient['release']['update']>
        >,

        upsert: procedure
            .input($Schema.ReleaseInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).release.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['upsert'],
            ReturnType<PrismaClient['release']['upsert']>
        >,

        count: procedure
            .input($Schema.ReleaseInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).release.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.ReleaseInputSchema)['count'],
            ReturnType<PrismaClient['release']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.ReleaseAggregateArgs>(
            input: Prisma.Subset<T, Prisma.ReleaseAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetReleaseAggregateType<T>,
                Prisma.GetReleaseAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetReleaseAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ReleaseAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetReleaseAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetReleaseAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.ReleaseCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.ReleaseCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ReleaseGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReleaseGetPayload<T>, Context>,
            ) => Promise<Prisma.ReleaseGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.ReleaseDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.ReleaseDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ReleaseGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReleaseGetPayload<T>, Context>,
            ) => Promise<Prisma.ReleaseGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.ReleaseFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.ReleaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReleaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.ReleaseFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ReleaseFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReleaseFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.ReleaseFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.ReleaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.ReleaseGetPayload<T>>,
                Array<Prisma.ReleaseGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.ReleaseGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReleaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ReleaseGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.ReleaseGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.ReleaseFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.ReleaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReleaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.ReleaseFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.ReleaseFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.ReleaseFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ReleaseFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ReleaseGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.ReleaseGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.ReleaseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ReleaseGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ReleaseGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.ReleaseGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetReleaseGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetReleaseGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetReleaseGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.ReleaseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.ReleaseGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.ReleaseGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ReleaseGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetReleaseGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetReleaseGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.ReleaseUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.ReleaseUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ReleaseGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReleaseGetPayload<T>, Context>,
            ) => Promise<Prisma.ReleaseGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.ReleaseUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.ReleaseUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.ReleaseGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.ReleaseGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.ReleaseUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.ReleaseUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ReleaseGetPayload<T>, Context>,
            ) => Promise<Prisma.ReleaseGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.ReleaseCountArgs>(
            input: Prisma.Subset<T, Prisma.ReleaseCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ReleaseCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ReleaseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ReleaseCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
