import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";


async function fetchData(){
    return payments;
}

export default async function Page() {
    const data = await fetchData();

    return (
        <div>
            <h1>Data table</h1>        
            <DataTable columns={columns} data={data} />
        </div>
        
    )

}