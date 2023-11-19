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
            .input($Schema.RarityInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['aggregate'],
            ReturnType<PrismaClient['rarity']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.RarityInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['createMany'],
            ReturnType<PrismaClient['rarity']['createMany']>
        >,

        create: procedure
            .input($Schema.RarityInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['create'],
            ReturnType<PrismaClient['rarity']['create']>
        >,

        deleteMany: procedure
            .input($Schema.RarityInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['deleteMany'],
            ReturnType<PrismaClient['rarity']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.RarityInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['delete'],
            ReturnType<PrismaClient['rarity']['delete']>
        >,

        findFirst: procedure
            .input($Schema.RarityInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findFirst'],
            ReturnType<PrismaClient['rarity']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.RarityInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findFirst'],
            ReturnType<PrismaClient['rarity']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.RarityInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findMany'],
            ReturnType<PrismaClient['rarity']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.RarityInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findUnique'],
            ReturnType<PrismaClient['rarity']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.RarityInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['findUnique'],
            ReturnType<PrismaClient['rarity']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.RarityInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['groupBy'],
            ReturnType<PrismaClient['rarity']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.RarityInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['updateMany'],
            ReturnType<PrismaClient['rarity']['updateMany']>
        >,

        update: procedure
            .input($Schema.RarityInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['update'],
            ReturnType<PrismaClient['rarity']['update']>
        >,

        upsert: procedure
            .input($Schema.RarityInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).rarity.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.RarityInputSchema)['upsert'],
            ReturnType<PrismaClient['rarity']['upsert']>
        >,

        count: procedure
            .input($Schema.RarityInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).rarity.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.RarityInputSchema)['count'],
            ReturnType<PrismaClient['rarity']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.RarityAggregateArgs>(
            input: Prisma.Subset<T, Prisma.RarityAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetRarityAggregateType<T>,
                Prisma.GetRarityAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetRarityAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RarityAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetRarityAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetRarityAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.RarityCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.RarityCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RarityGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RarityGetPayload<T>, Context>,
            ) => Promise<Prisma.RarityGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.RarityDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.RarityDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RarityGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RarityGetPayload<T>, Context>,
            ) => Promise<Prisma.RarityGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.RarityFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.RarityFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RarityGetPayload<T>, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RarityFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.RarityFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RarityFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RarityGetPayload<T>, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RarityFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.RarityFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.RarityFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.RarityGetPayload<T>>,
                Array<Prisma.RarityGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.RarityGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RarityFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RarityGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.RarityGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.RarityFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.RarityFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RarityGetPayload<T>, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RarityFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.RarityFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.RarityFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RarityGetPayload<T>, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.RarityFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RarityFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RarityGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.RarityGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.RarityGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RarityGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RarityGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.RarityGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRarityGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetRarityGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetRarityGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.RarityGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.RarityGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.RarityGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.RarityGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetRarityGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetRarityGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.RarityUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.RarityUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RarityGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RarityGetPayload<T>, Context>,
            ) => Promise<Prisma.RarityGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.RarityUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.RarityUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.RarityGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.RarityGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.RarityUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.RarityUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RarityGetPayload<T>, Context>,
            ) => Promise<Prisma.RarityGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.RarityCountArgs>(
            input: Prisma.Subset<T, Prisma.RarityCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RarityCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.RarityCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RarityCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
