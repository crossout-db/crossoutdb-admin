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
            .input($Schema.CountryInputSchema.aggregate)
            .query(({ ctx, input }) => checkRead(db(ctx).country.aggregate(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['aggregate'],
            ReturnType<PrismaClient['country']['aggregate']>
        >,

        createMany: procedure
            .input($Schema.CountryInputSchema.createMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.createMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['createMany'],
            ReturnType<PrismaClient['country']['createMany']>
        >,

        create: procedure
            .input($Schema.CountryInputSchema.create)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.create(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['create'],
            ReturnType<PrismaClient['country']['create']>
        >,

        deleteMany: procedure
            .input($Schema.CountryInputSchema.deleteMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.deleteMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['deleteMany'],
            ReturnType<PrismaClient['country']['deleteMany']>
        >,

        delete: procedure
            .input($Schema.CountryInputSchema.delete)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.delete(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['delete'],
            ReturnType<PrismaClient['country']['delete']>
        >,

        findFirst: procedure
            .input($Schema.CountryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).country.findFirst(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['findFirst'],
            ReturnType<PrismaClient['country']['findFirst']>
        >,

        findFirstOrThrow: procedure
            .input($Schema.CountryInputSchema.findFirst)
            .query(({ ctx, input }) => checkRead(db(ctx).country.findFirstOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['findFirst'],
            ReturnType<PrismaClient['country']['findFirstOrThrow']>
        >,

        findMany: procedure
            .input($Schema.CountryInputSchema.findMany)
            .query(({ ctx, input }) => checkRead(db(ctx).country.findMany(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['findMany'],
            ReturnType<PrismaClient['country']['findMany']>
        >,

        findUnique: procedure
            .input($Schema.CountryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).country.findUnique(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['findUnique'],
            ReturnType<PrismaClient['country']['findUnique']>
        >,

        findUniqueOrThrow: procedure
            .input($Schema.CountryInputSchema.findUnique)
            .query(({ ctx, input }) => checkRead(db(ctx).country.findUniqueOrThrow(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['findUnique'],
            ReturnType<PrismaClient['country']['findUniqueOrThrow']>
        >,

        groupBy: procedure
            .input($Schema.CountryInputSchema.groupBy)
            .query(({ ctx, input }) => checkRead(db(ctx).country.groupBy(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['groupBy'],
            ReturnType<PrismaClient['country']['groupBy']>
        >,

        updateMany: procedure
            .input($Schema.CountryInputSchema.updateMany)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.updateMany(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['updateMany'],
            ReturnType<PrismaClient['country']['updateMany']>
        >,

        update: procedure
            .input($Schema.CountryInputSchema.update)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.update(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['update'],
            ReturnType<PrismaClient['country']['update']>
        >,

        upsert: procedure
            .input($Schema.CountryInputSchema.upsert)
            .mutation(async ({ ctx, input }) => checkMutate(db(ctx).country.upsert(input as any))) as ProcReturns<
            'mutation',
            Proc,
            (typeof $Schema.CountryInputSchema)['upsert'],
            ReturnType<PrismaClient['country']['upsert']>
        >,

        count: procedure
            .input($Schema.CountryInputSchema.count)
            .query(({ ctx, input }) => checkRead(db(ctx).country.count(input as any))) as ProcReturns<
            'query',
            Proc,
            (typeof $Schema.CountryInputSchema)['count'],
            ReturnType<PrismaClient['country']['count']>
        >,
    });
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {
        useQuery: <T extends Prisma.CountryAggregateArgs>(
            input: Prisma.Subset<T, Prisma.CountryAggregateArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Prisma.GetCountryAggregateType<T>,
                Prisma.GetCountryAggregateType<T>,
                Error
            >,
        ) => UseTRPCQueryResult<Prisma.GetCountryAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CountryAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetCountryAggregateType<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.GetCountryAggregateType<T>, TRPCClientErrorLike<AppRouter>>;
    };
    createMany: {
        useMutation: <T extends Prisma.CountryCreateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryCreateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryCreateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryCreateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    create: {
        useMutation: <T extends Prisma.CountryCreateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryCreateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CountryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryCreateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryCreateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CountryGetPayload<T>, Context>,
            ) => Promise<Prisma.CountryGetPayload<T>>;
        };
    };
    deleteMany: {
        useMutation: <T extends Prisma.CountryDeleteManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryDeleteManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryDeleteManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryDeleteManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    delete: {
        useMutation: <T extends Prisma.CountryDeleteArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryDeleteArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CountryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryDeleteArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryDeleteArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CountryGetPayload<T>, Context>,
            ) => Promise<Prisma.CountryGetPayload<T>>;
        };
    };
    findFirst: {
        useQuery: <T extends Prisma.CountryFindFirstArgs>(
            input: Prisma.SelectSubset<T, Prisma.CountryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CountryGetPayload<T>, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CountryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findFirstOrThrow: {
        useQuery: <T extends Prisma.CountryFindFirstOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.CountryFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CountryGetPayload<T>, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CountryFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findMany: {
        useQuery: <T extends Prisma.CountryFindManyArgs>(
            input: Prisma.SelectSubset<T, Prisma.CountryFindManyArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                Array<Prisma.CountryGetPayload<T>>,
                Array<Prisma.CountryGetPayload<T>>,
                Error
            >,
        ) => UseTRPCQueryResult<Array<Prisma.CountryGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CountryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CountryGetPayload<T>>, Error>,
        ) => UseTRPCInfiniteQueryResult<Array<Prisma.CountryGetPayload<T>>, TRPCClientErrorLike<AppRouter>>;
    };
    findUnique: {
        useQuery: <T extends Prisma.CountryFindUniqueArgs>(
            input: Prisma.SelectSubset<T, Prisma.CountryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CountryGetPayload<T>, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CountryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    findUniqueOrThrow: {
        useQuery: <T extends Prisma.CountryFindUniqueOrThrowArgs>(
            input: Prisma.SelectSubset<T, Prisma.CountryFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CountryGetPayload<T>, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
        useInfiniteQuery: <T extends Prisma.CountryFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CountryFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CountryGetPayload<T>, Error>,
        ) => UseTRPCInfiniteQueryResult<Prisma.CountryGetPayload<T>, TRPCClientErrorLike<AppRouter>>;
    };
    groupBy: {
        useQuery: <
            T extends Prisma.CountryGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.CountryGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.CountryGroupByArgs['orderBy'] },
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
            input: Prisma.SubsetIntersection<T, Prisma.CountryGroupByArgs, OrderByArg> & InputErrors,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetCountryGroupByPayload<T> : InputErrors,
                {} extends InputErrors ? Prisma.GetCountryGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCQueryResult<
            {} extends InputErrors ? Prisma.GetCountryGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <
            T extends Prisma.CountryGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
                ? { orderBy: Prisma.CountryGroupByArgs['orderBy'] }
                : { orderBy?: Prisma.CountryGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.CountryGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                {} extends InputErrors ? Prisma.GetCountryGroupByPayload<T> : InputErrors,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetCountryGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;
    };
    updateMany: {
        useMutation: <T extends Prisma.CountryUpdateManyArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryUpdateManyArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.BatchPayload,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryUpdateManyArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryUpdateManyArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>,
            ) => Promise<Prisma.BatchPayload>;
        };
    };
    update: {
        useMutation: <T extends Prisma.CountryUpdateArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryUpdateArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CountryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryUpdateArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryUpdateArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CountryGetPayload<T>, Context>,
            ) => Promise<Prisma.CountryGetPayload<T>>;
        };
    };
    upsert: {
        useMutation: <T extends Prisma.CountryUpsertArgs>(
            opts?: UseTRPCMutationOptions<
                Prisma.CountryUpsertArgs,
                TRPCClientErrorLike<AppRouter>,
                Prisma.CountryGetPayload<null>,
                Context
            >,
        ) => Omit<
            UseTRPCMutationResult<
                Prisma.CountryGetPayload<T>,
                TRPCClientErrorLike<AppRouter>,
                Prisma.SelectSubset<T, Prisma.CountryUpsertArgs>,
                Context
            >,
            'mutateAsync'
        > & {
            mutateAsync: <T extends Prisma.CountryUpsertArgs>(
                variables: T,
                opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CountryGetPayload<T>, Context>,
            ) => Promise<Prisma.CountryGetPayload<T>>;
        };
    };
    count: {
        useQuery: <T extends Prisma.CountryCountArgs>(
            input: Prisma.Subset<T, Prisma.CountryCountArgs>,
            opts?: UseTRPCQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CountryCountAggregateOutputType>
                    : number,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CountryCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CountryCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CountryCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.CountryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<
                string,
                T,
                'select' extends keyof T
                    ? T['select'] extends true
                        ? number
                        : Prisma.GetScalarType<T['select'], Prisma.CountryCountAggregateOutputType>
                    : number,
                Error
            >,
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CountryCountAggregateOutputType>
                : number,
            TRPCClientErrorLike<AppRouter>
        >;
    };
}
