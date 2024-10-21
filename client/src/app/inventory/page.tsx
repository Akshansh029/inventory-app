"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FadeLoader } from "react-spinners";
import { Frown } from "lucide-react";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  //   console.log(products.products);
  const rows = products?.products || products || [];

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <FadeLoader className="mb-40" color="#96989a" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
        <Frown className="text-gray-600 " size={60} />
        <p className="text-2xl font-bold text-gray-600 mb-40">
          Failed to fetch products
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Inventory;
