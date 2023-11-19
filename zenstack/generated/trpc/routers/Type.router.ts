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
            .input($Schema.TypeInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).type.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['aggregate'],
            ReturnType<PrismaClient['type']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.TypeInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['createMany'],
            ReturnType<PrismaClient['type']['createMany']>
        >,

        create: procedure
            .input($Schema.TypeInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['create'],
            ReturnType<PrismaClient['type']['create']>
        >,

        deleteMany: procedure
            .input($Schema.TypeInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['deleteMany'],
            ReturnType<PrismaClient['type']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.TypeInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['delete'],
            ReturnType<PrismaClient['type']['delete']>
        >,

        findFirst: procedure
            .input($Schema.TypeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findFirst'],
            ReturnType<PrismaClient['type']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.TypeInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findFirst'],
            ReturnType<PrismaClient['type']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.TypeInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findMany'],
            ReturnType<PrismaClient['type']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.TypeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findUnique'],
            ReturnType<PrismaClient['type']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.TypeInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).type.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['findUnique'],
            ReturnType<PrismaClient['type']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.TypeInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).type.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['groupBy'],
            ReturnType<PrismaClient['type']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.TypeInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['updateMany'],
            ReturnType<PrismaClient['type']['updateMany']>
        >,

        update: procedure
            .input($Schema.TypeInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['update'],
            ReturnType<PrismaClient['type']['update']>
        >,

        upsert: procedure
            .input($Schema.TypeInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).type.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.TypeInputSchema)['upsert'],
            ReturnType<PrismaClient['type']['upsert']>
        >,

        count: procedure
            .input($Schema.TypeInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).type.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.TypeInputSchema)['count'],
            ReturnType<PrismaClient['type']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.TypeAggregateArgs>(
            input: Prisma.Subset<T, Prisma.TypeAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetTypeAggregateType<T>,
                Prisma.GetTypeAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetTypeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TypeAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTypeAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetTypeAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.TypeCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.TypeCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TypeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TypeGetPayload<T>, Context>,
            ) => Promise<Prisma.TypeGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.TypeDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.TypeDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TypeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TypeGetPayload<T>, Context>,
            ) => Promise<Prisma.TypeGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.TypeFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.TypeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TypeGetPayload<T>, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TypeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.TypeFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TypeFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TypeGetPayload<T>, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TypeFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.TypeFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.TypeFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.TypeGetPayload<T>>,
                Array<Prisma.TypeGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.TypeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TypeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TypeGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.TypeGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.TypeFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.TypeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TypeGetPayload<T>, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TypeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.TypeFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.TypeFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TypeGetPayload<T>, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.TypeFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TypeFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TypeGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.TypeGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.TypeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TypeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TypeGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.TypeGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTypeGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetTypeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetTypeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.TypeGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.TypeGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.TypeGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.TypeGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetTypeGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTypeGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.TypeUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.TypeUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TypeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TypeGetPayload<T>, Context>,
            ) => Promise<Prisma.TypeGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.TypeUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.TypeUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.TypeGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.TypeGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.TypeUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.TypeUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TypeGetPayload<T>, Context>,
            ) => Promise<Prisma.TypeGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.TypeCountArgs>(
            input: Prisma.Subset<T, Prisma.TypeCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TypeCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TypeCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TypeCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
