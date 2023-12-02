"use client";
import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import useSessionStore from "@/stores/sessionStore";
import axios from "axios";
import Link from "next/link";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useRouter } from "next/navigation";

const PresensiTable = () => {
  const token = useSessionStore((state) => state.token);

  const { data, isLoading } = useQuery({
    queryKey: ["presensi"],
    queryFn: () =>
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/presensi`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  });

  const arrayPresensi = data?.data?.presensi;

  // Isi tabel
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: () => <span>ID</span>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("nis", {
      header: () => <span>NIS</span>,
      cell: (info) => <p>{info.getValue()}</p>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("nama", {
      header: () => <span>Nama</span>,
      cell: (info) => <p>{info.getValue()}</p>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("tanggal", {
      header: () => <span>Tanggal</span>,
      cell: (info) => <p>{info.getValue()}</p>,
      footer: (info) => info.column.id,
    }),

    columnHelper.display({
      id: "aksi",
      header: () => <p className="w-full text-center">Aksi</p>,
      cell: (props) => (
        <span className="flex flex-row justify-center gap-3">
          {/* Tombol Update */}
          <Link
            href={`/admin/presensi/edit/${props.row.original.id}`}
            className="flex justify-center custom-outline w-10 py-2 hover:bg-primary hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>

          {/* Tombol Hapus */}
          <button
            onClick={() => openDeleteModal(props.row.original.id)}
            className="flex justify-center custom-outline w-10 py-2 hover:bg-primary hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </span>
      ),
    }),
  ];

  // Sorting table
  const [sorting, setSorting] = useState(null);

  const table = useReactTable({
    data: arrayPresensi ? arrayPresensi : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    enableSortingRemoval: false,
    // debugTable: true,
  });

  // State untuk modal delete
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idPresensi, setIdPresensi] = useState(0);

  const openDeleteModal = (idPresensi) => {
    setIsModalOpen(true);
    setIdPresensi(idPresensi);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full inline-block rounded-xl overflow-hidden custom-outline">
      <table className="w-full">
        <thead className="bg-primary text-white text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="border border-collapse border-primary rounded-md"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th className="p-4" key={header.id}>
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick:
                        header.column.getToggleSortingHandler(),
                    }}
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    {{
                      asc: <span className="pl-2">↑</span>,
                      desc: <span className="pl-2">↓</span>,
                    }[header.column.getIsSorted()] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => (
            <tr
              className="border-t border-collapse border-primary rounded-md"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="p-4" key={cell.id}>
                  {flexRender(
                    cell?.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        idPresensi={idPresensi}
        token={token}
      />
    </div>
  );
};

export const ModalDelete = ({
  isModalOpen,
  setIsModalOpen,
  idPresensi,
  token,
}) => {
  const router = new useRouter();

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (formData) => {
      return axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/presensi/${idPresensi}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (response, variables, context) => {
      // console.log(response?.data?.user?.name);
      setIsModalOpen(false);
      queryClient.invalidateQueries("presensi");
    },
  });

  return (
    <PureModal
      className="rounded-md"
      header={`Hapus presensi dengan ID ${idPresensi}?`}
      footer={
        <div className="flex flex-row gap-4">
          <button
            onClick={() => deleteMutation.mutate()}
            className="rounded-md px-2 py-0.5 my-2 bg-primary text-white font-medium hover:bg-transparent hover:text-primary transition outline-1 outline outline-primary"
          >
            Hapus
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-md px-2 py-0.5 my-2 font-medium hover:bg-primary hover:text-white transition outline-1 outline outline-primary"
          >
            Batal
          </button>
        </div>
      }
      isOpen={isModalOpen}
      closeButton="x"
      closeButtonPosition="bottom"
      onClose={() => {
        setIsModalOpen(false);
        return true;
      }}
    >
      <p>Aksi ini tidak dapat dibalikkan.</p>
    </PureModal>
  );
};

export default PresensiTable;
