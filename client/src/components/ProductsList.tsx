import { useState } from 'react'
import { exampleResponses } from '../data/search.js'
import { Link } from 'react-router-dom'

const ProductsList = () => {
   const [products] = useState(exampleResponses.data.products)
   console.log(products[0])

   return (
      <div className="space-y-4">
         {products.map((product) => (
            <div
               key={product.asin}
               className="flex flex-row border border-gray-300 rounded-md p-4"
            >
               {/* <Link to=".">dghadgsdfs</Link> */}
               <img
                  width={200}
                  src={product.product_photo}
                  alt={product.product_photo}
                  className="mr-6 cursor-pointer"
               />
               <div className="w-full">
                  <div className="flex justify-between space-x-4">
                     <h3 className="text-3xl">{product.product_title}</h3>
                     <div>
                        <div className="text-3xl font-bold text-green-600">
                           {product.product_star_rating}
                        </div>
                        <div className="text-center text-gray-600">
                           {product.product_num_ratings}
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4">
                     <div className="text-3xl text-red-600 font-bold">
                        {product.product_price}
                     </div>
                     <div className="line-through">
                        {product.product_original_price}
                     </div>
                  </div>
                  {product.climate_pledge_friendly && (
                     <div>Экологически чистый продукт</div>
                  )}
                  {/* <div>Осталось: {product.unit_count} шт</div> */}
               </div>
            </div>
         ))}
      </div>
   )
}

export default ProductsList
