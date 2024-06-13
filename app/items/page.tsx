import Link from "next/link";
import api from '@/app/api';

export default async function ItemsPage({searchParams}) {
    const {results} = await api.item.search(searchParams.search);

    return (
        <section className="container mx-auto p-4 bg-white">
            <article className="divide-y divide-gray-200">
                {results.map(item => (
                    <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4 p-4 items-center hover:bg-gray-50">
                        <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded"/>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl font-bold">{Number(item.price).toLocaleString('es-AR', {style: 'currency', currency: item.currency_id})}</p>
                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </article>
        </section>
    );
}
