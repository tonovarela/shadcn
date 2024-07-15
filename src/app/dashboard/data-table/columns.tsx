"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import {  ColumnDef, HeaderContext, SortDirection } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, ChevronUpIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") {
    return <ChevronUpIcon className="h-4 w-4 ml-2" />
  }
  if (isSorted === "desc") {
    return <ChevronDownIcon className="h-4 w-4 ml-2" />
  }
  return null
}
const HeaderSortedTemplate = ({ header, headerName }: {header:HeaderContext<Payment, unknown>,headerName:string}): JSX.Element => {
  const { column } = header
  return (   
    <div className="flex justify-between cursor-pointer"  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>     
      <Button  variant="ghost"> {headerName}</Button>            
      <span className="self-center">
      <SortedIcon   isSorted={column.getIsSorted()} ></SortedIcon>
      </span>
      
      </div>
  )
}
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    size:50,
    minSize: 100,
    maxSize:150,
    enableResizing:true,
    header: (header) => {
      return (        
         <HeaderSortedTemplate header={header} headerName="Client Name" />
      )
    },
  },
  {
    accessorKey: "status",
    header: (header) => {
      return (
        <HeaderSortedTemplate header={header} headerName="Status"/>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant = {
        pending: 'warning',
        processing: 'info',
        success: 'success',
        failed: 'destructive',
      }[status] ?? ("default" as any);

      return <Badge className="capitalize w-[80%]  " variant={variant}>{status}</Badge>

    }
  },
  {
    accessorKey: "email",
    header: (header) => {
      return (
      <HeaderSortedTemplate header={header} headerName="Email"/>
      )
    }
  },
  {
    accessorKey: "amount",
    header: (header) => {
      return (
      <HeaderSortedTemplate header={header} headerName="Amount"/>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast("Payment ID copied to clipboard", {
                  position: "top-right",
                })

              }
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
