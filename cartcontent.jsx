import React from 'react'
import products from '../data/products'
import ProductCard from '../components/Productcard'


const Products = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold">
            All Product
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard
                key = {product.id}
                product={product}
                />
            ))}
        </div>
    </main>
  )
}

export default Products