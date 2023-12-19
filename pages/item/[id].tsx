import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Item() {
    const { id } = useParams()
    const { push } = useRouter();

    useEffect(() => {
       push('/admin/item/show/' + id);
    }, []);
    return <p>{id}</p>;
}