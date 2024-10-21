"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Frown } from "lucide-react";
import { FadeLoader } from "react-spinners";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <FadeLoader className="mb-40" color="#96989a" />
      </div>
    );
  }

  if (isError || !users) {
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
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-800"
      />
    </div>
  );
};

export default Users;
