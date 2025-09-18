import Navbar from "../../components/navbar";
import { Rate } from 'antd';
import Modal from "../../components/modal1";
export default async function ProductPage({
    params,
}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    if (!res.ok) return <div className="p-6">Product not found</div>;

    const product = await res.json();
    return (
        <>
            <Navbar />
            <h1 className="text-3xl text-center mt-3" style={{ fontFamily: "cursive" }}>Products detail</h1>
            <section className="max-w-5xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-2xl p-6">
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-80 w-80 object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

                        <p className="text-gray-700 leading-relaxed">
                            {product.description}
                        </p>
                        <p className="text-xl text-green-600 font-semibold">
                            ${product.price}
                        </p>
                        <Rate className="mt-2 mb-2" disabled value={product.rating.rate} />
                       <div className="mt-2"></div>
                        <Modal/>
                    </div>
                </div>
            </section>
        </>
    );
};
