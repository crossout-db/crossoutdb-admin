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
            .input($Schema.PackInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['aggregate'],
            ReturnType<PrismaClient['pack']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.PackInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['createMany'],
            ReturnType<PrismaClient['pack']['createMany']>
        >,

        create: procedure
            .input($Schema.PackInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['create'],
            ReturnType<PrismaClient['pack']['create']>
        >,

        deleteMany: procedure
            .input($Schema.PackInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['deleteMany'],
            ReturnType<PrismaClient['pack']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.PackInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['delete'],
            ReturnType<PrismaClient['pack']['delete']>
        >,

        findFirst: procedure
            .input($Schema.PackInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findFirst'],
            ReturnType<PrismaClient['pack']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.PackInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findFirst'],
            ReturnType<PrismaClient['pack']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.PackInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findMany'],
            ReturnType<PrismaClient['pack']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.PackInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findUnique'],
            ReturnType<PrismaClient['pack']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.PackInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['findUnique'],
            ReturnType<PrismaClient['pack']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.PackInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['groupBy'],
            ReturnType<PrismaClient['pack']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.PackInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['updateMany'],
            ReturnType<PrismaClient['pack']['updateMany']>
        >,

        update: procedure
            .input($Schema.PackInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['update'],
            ReturnType<PrismaClient['pack']['update']>
        >,

        upsert: procedure
            .input($Schema.PackInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).pack.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.PackInputSchema)['upsert'],
            ReturnType<PrismaClient['pack']['upsert']>
        >,

        count: procedure
            .input($Schema.PackInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).pack.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.PackInputSchema)['count'],
            ReturnType<PrismaClient['pack']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.PackAggregateArgs>(
            input: Prisma.Subset<T, Prisma.PackAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetPackAggregateType<T>,
                Prisma.GetPackAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetPackAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.PackAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetPackAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetPackAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.PackCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.PackCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackGetPayload<T>, Context>,
            ) => Promise<Prisma.PackGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.PackDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.PackDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackGetPayload<T>, Context>,
            ) => Promise<Prisma.PackGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.PackFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackGetPayload<T>, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.PackFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackGetPayload<T>, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.PackFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.PackGetPayload<T>>,
                Array<Prisma.PackGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.PackGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PackGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.PackGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.PackFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackGetPayload<T>, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.PackFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.PackFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PackGetPayload<T>, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.PackFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PackFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PackGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.PackGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.PackGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.PackGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.PackGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.PackGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetPackGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetPackGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetPackGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.PackGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.PackGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.PackGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.PackGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetPackGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetPackGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.PackUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.PackUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackGetPayload<T>, Context>,
            ) => Promise<Prisma.PackGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.PackUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.PackUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.PackGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.PackGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.PackUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.PackUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PackGetPayload<T>, Context>,
            ) => Promise<Prisma.PackGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.PackCountArgs>(
            input: Prisma.Subset<T, Prisma.PackCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PackCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.PackCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PackCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
