"use client";

import { Badge } from "@/app/_components/ui/badge";
import type { Product } from "@/app/generated/prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "price",
    header: "Valor Unitário",
  },
  {
    accessorKey: "stock",
    header: "Quantidade",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const getStatus = (status: string) => {
        switch (status) {
          case "IN_STOCK":
            return (
              <Badge variant="default" className="gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#00A180" />
                </svg>
                Em Estoque
              </Badge>
            );
          default:
            return (
              <Badge variant="outline" className="gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#64748B" />
                </svg>
                Fora de Estoque
              </Badge>
            );
        }
      };
      return getStatus(row.original.status);
    },
  },
];
