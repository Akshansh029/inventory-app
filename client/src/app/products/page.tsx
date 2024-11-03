"use client";
import {
  NewProduct,
  Product,
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/state/api";
import { Frown, PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "../(components)/Header";
import Rating from "../(components)/Rating";
import CreateProductModal from "./CreateProductModal";
import { v4 } from "uuid";
import { FadeLoader } from "react-spinners";

type ProductFormData = {
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
};

// const Products = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const {
//     data: response,
//     isLoading,
//     isError,
//   } = useGetProductsQuery(searchTerm);

//   console.log(response);

//   const [createProduct] = useCreateProductMutation();
//   const handleCreateProduct = async (productData: ProductFormData) => {
//     const newProduct: NewProduct = {
//       productId: v4(),
//       ...productData,
//     };
//     await createProduct(newProduct);
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen w-full flex items-center justify-center">
//         <FadeLoader className="mb-40" color="#96989a" />
//       </div>
//     );
//   }

//   if (isError || !response) {
//     return (
//       <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
//         <Frown className="text-gray-600 " size={60} />
//         <p className="text-2xl font-bold text-gray-600 mb-40">
//           Failed to fetch products
//         </p>
//       </div>
//     );
//   }

//   const products = response.products;

//   return (
//     <div className="mx-auto pb-5 w-full">
//       {/* SEARCH BAR */}
//       <div className="mb-6">
//         <div className="flex items-center border-2 border-gray-200 rounded">
//           <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
//           <input
//             className="w-full py-2 px-3 rounded bg-white"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* HEADER */}
//       <div className="flex justify-between mb-6 items-center">
//         <Header name="Products" />
//         <button
//           className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <PlusCircleIcon className="w-5 h-5 mr-2 text-gray-200" />
//           Create product
//         </button>
//       </div>

//       {/* BODY PRODUCTS LIST */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
//         {isLoading ? (
//           <div className="">Loading...</div>
//         ) : (
//           products?.map((product: any) => (
//             <div
//               key={product.productId}
//               className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
//             >
//               <div className="flex flex-col items-center">
//                 img
//                 <h3 className="text-lg text-gray-900 font-semibold">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-800">${product.price.toFixed(2)}</p>
//                 <div className="text-sm text-gray-600 mt-1">
//                   Stock: {product.stockQuantity}
//                 </div>
//                 {product.rating && (
//                   <div className="flex items-center mt-2">
//                     <Rating rating={product.rating} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* MODAL */}
//       <CreateProductModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onCreate={handleCreateProduct}
//       />
//     </div>
//   );
// };

// export default Products;
type ProductResponse = {
  products: Product[];
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: response,
    isLoading,
    isError,
  } = useGetProductsQuery(searchTerm) as {
    data: ProductResponse | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  console.log(response);

  const [createProduct] = useCreateProductMutation();
  const handleCreateProduct = async (productData: ProductFormData) => {
    const newProduct: NewProduct = {
      productId: v4(),
      ...productData,
    };
    await createProduct(newProduct);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <FadeLoader className="mb-40" color="#96989a" />
      </div>
    );
  }

  if (isError || !response?.products) {
    return (
      <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
        <Frown className="text-gray-600 " size={60} />
        <p className="text-2xl font-bold text-gray-600 mb-40">
          Failed to fetch products
        </p>
      </div>
    );
  }

  const products = response.products;

  return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-3 rounded bg-white"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between mb-6 items-center">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 text-gray-200" />
          Create product
        </button>
      </div>

      {/* BODY PRODUCTS LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {products.length === 0 ? (
          <div className="text-center text-gray-600">No products found.</div>
        ) : (
          products.map((product: Product) => (
            <div
              key={product.productId}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
                img
                <h3 className="text-lg text-gray-900 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-800">${product.price.toFixed(2)}</p>
                <div className="text-sm text-gray-600 mt-1">
                  Stock: {product.stockQuantity}
                </div>
                {product.rating && (
                  <div className="flex items-center mt-2">
                    <Rating rating={product.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Products;
