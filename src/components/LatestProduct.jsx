import ProductCard from "./ProductCard";

const LatestProduct = async () => {
  const res = await fetch("http://localhost:3000/api/latest-products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <div>
      <h2 className="text-center text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
        Latest Products
      </h2>
      <div className="min-h-screen bg-[#05070A] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
