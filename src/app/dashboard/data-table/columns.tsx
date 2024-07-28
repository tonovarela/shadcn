"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import {  ColumnDef, FilterFn, HeaderContext, Row, SortDirection } from "@tanstack/react-table"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
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

const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {

   const filterParts = filterValue.split(" ");
   const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLowerCase();
   return filterParts.every((part) => rowValues.includes(part));

}


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
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",    
    size:50,
    minSize: 100,
    maxSize:150,
    enableResizing:true,
    enableHiding:false,
    header: (header) => {      
      return (
        <div className="flex justify-start"  >                  
         <HeaderSortedTemplate header={header} headerName="Client Name" />
         </div>
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

      return <Badge className="uppercase w-32 "  variant={variant}>
        <div className="w-full text-center tracking-widest">{status}</div>
      </Badge>

    }
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
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
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding:false,
    
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
