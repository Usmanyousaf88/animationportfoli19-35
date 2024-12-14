import React from "react";

const products = [
  {
    id: 1,
    name: "Ceramic Vase",
    price: "$120",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: "$450",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267",
  },
  {
    id: 3,
    name: "Linen Throw",
    price: "$85",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
  },
  {
    id: 4,
    name: "Coffee Table",
    price: "$680",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d",
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-light text-rawDark">{product.name}</h3>
              <p className="mt-1 text-sm text-rawDark">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;