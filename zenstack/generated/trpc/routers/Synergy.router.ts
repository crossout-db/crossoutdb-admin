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
            .input($Schema.SynergyInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['aggregate'],
            ReturnType<PrismaClient['synergy']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.SynergyInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['createMany'],
            ReturnType<PrismaClient['synergy']['createMany']>
        >,

        create: procedure
            .input($Schema.SynergyInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['create'],
            ReturnType<PrismaClient['synergy']['create']>
        >,

        deleteMany: procedure
            .input($Schema.SynergyInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['deleteMany'],
            ReturnType<PrismaClient['synergy']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.SynergyInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['delete'],
            ReturnType<PrismaClient['synergy']['delete']>
        >,

        findFirst: procedure
            .input($Schema.SynergyInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergy']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.SynergyInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findFirst'],
            ReturnType<PrismaClient['synergy']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.SynergyInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findMany'],
            ReturnType<PrismaClient['synergy']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.SynergyInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergy']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.SynergyInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['findUnique'],
            ReturnType<PrismaClient['synergy']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.SynergyInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['groupBy'],
            ReturnType<PrismaClient['synergy']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.SynergyInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['updateMany'],
            ReturnType<PrismaClient['synergy']['updateMany']>
        >,

        update: procedure
            .input($Schema.SynergyInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['update'],
            ReturnType<PrismaClient['synergy']['update']>
        >,

        upsert: procedure
            .input($Schema.SynergyInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).synergy.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.SynergyInputSchema)['upsert'],
            ReturnType<PrismaClient['synergy']['upsert']>
        >,

        count: procedure
            .input($Schema.SynergyInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).synergy.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.SynergyInputSchema)['count'],
            ReturnType<PrismaClient['synergy']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.SynergyAggregateArgs>(
            input: Prisma.Subset<T, Prisma.SynergyAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetSynergyAggregateType<T>,
                Prisma.GetSynergyAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetSynergyAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SynergyAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetSynergyAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetSynergyAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.SynergyCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.SynergyCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SynergyGetPayload<T>, Context>,
            ) => Promise<Prisma.SynergyGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.SynergyDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.SynergyDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SynergyGetPayload<T>, Context>,
            ) => Promise<Prisma.SynergyGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.SynergyFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.SynergyFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.SynergyFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.SynergyGetPayload<T>>,
                Array<Prisma.SynergyGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.SynergyGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SynergyGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.SynergyGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.SynergyFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.SynergyFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.SynergyFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.SynergyFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SynergyFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SynergyGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.SynergyGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.SynergyGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SynergyGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SynergyGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.SynergyGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSynergyGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetSynergyGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetSynergyGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.SynergyGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.SynergyGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.SynergyGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.SynergyGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetSynergyGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetSynergyGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.SynergyUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.SynergyUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SynergyGetPayload<T>, Context>,
            ) => Promise<Prisma.SynergyGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.SynergyUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.SynergyUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SynergyGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.SynergyGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.SynergyUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.SynergyUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SynergyGetPayload<T>, Context>,
            ) => Promise<Prisma.SynergyGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.SynergyCountArgs>(
            input: Prisma.Subset<T, Prisma.SynergyCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SynergyCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.SynergyCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SynergyCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
