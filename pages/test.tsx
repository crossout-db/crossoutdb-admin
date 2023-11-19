import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@server/api/_app";
import superjson from "superjson";

import { trpc } from "~/lib/trpc";
import { db } from "@server/db";
import { Category, Item } from "@prisma/client";

const client = createTRPCProxyClient<AppRouter>({
    transformer: superjson,
    links: [
        httpBatchLink({
            url: "http://localhost:3000/api/trpc",
        }),
    ],
});

const HomePage: NextPage = () => {
    const test = client["item"].findMany.query({
        include: {
            type: true,
            category: true,
            faction: true,
            rarity: true,
        },
    });
    // const { data, isLoading } = trpc.rarity.findMany.useQuery({});
    const [trans, totalTrans] = trpc.useQueries((t) => [
        t.rarity.findMany({ where: { id: { lt: 50 } } }),
        t.rarity.count({}),
    ]);

    const { mutate: createRarity } = trpc.rarity.create.useMutation();
    const { mutate: createRarity2 } = trpc["rarity"].create.useMutation();
    const { mutate: updateRarity } = trpc.rarity.update.useMutation();

    const handleCreate = async () => {
        createRarity({
            data: {
                name: "test1.12",
                importKey: "BASE",
                primaryColor: "test1.12",
                secondaryColor: "test1.12",
            },
        });
    };

    const handleCreate2 = async () => {
        createRarity2({
            data: {
                id: 12,
                name: "test2.12",
                importKey: "BASE",
                primaryColor: "2.12",
                secondaryColor: "2.12",
            },
        });
    };

    const handleUpdate = async () => {
        updateRarity({
            where: { id: 12 },
            data: {
                name: "test3.12",
                importKey: "BASE",
                primaryColor: "test3.12",
                secondaryColor: "test3.12",
            },
        });
    };
    
    console.log(totalTrans);

    // if (isLoading) {
    //   return <span>loading...</span>;
    // }

    return (
        <section className="bg-ct-blue-600 min-h-screen py-12">
            <div>
                <button onClick={() => handleCreate()}>createRarity</button>
                <button onClick={() => handleUpdate()}>updateRarity</button>
                <button onClick={() => handleCreate2()}>createRarity2</button>
                <pre>{String(totalTrans.data)}</pre>
                <pre>{JSON.stringify(trans, null, 2)}</pre>
            </div>
        </section>
    );
};

export default HomePage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const [serverData, totalServer] = await db.$transaction([
//     db.category.findMany({ where: { id: { lt: 10 } } }),
//     db.category.count(),
//   ])

//   return {
//     props: {
//       serverData,
//       totalServer,
//     },
//   };
// };
