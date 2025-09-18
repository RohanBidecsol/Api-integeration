"use Client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Herosection from "../components/herosection";
import Navbar from "../components/navbar";
import { Rate } from 'antd';

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) return <div className="p-6">Products not found</div>;




  const products = await res.json();
console.log(products);

  return (
    <>
      <Navbar />
      <Herosection />
      <h1 className="text-3xl text-center" style={{ fontFamily: "cursive" }}>Our Trending Products</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="w-[350px] h-[550px] bg-white border p-4 rounded shadow hover:shadow-md transition flex flex-col"
          >
            <Image
              src={p.image}
              alt={p.title}
              className=" w-100 h-[75%] object-contain mb-3"
            />
            <h2 className="font-semibold text-black text-lg mb-1 line-clamp-1">{p.title}</h2>

            <h3 className="text-black text-1xl">${p.price}</h3>
             <Rate className="mt-2 mb-2" disabled value={p.rating.rate} />
            <Link href={`/products/${p.id}`}><button className="bg-black w-full rounded-2xl mt-1">Buy now!</button></Link>
          </div>
        ))}

      </div>
      <Footer />
    </>
  );
}
