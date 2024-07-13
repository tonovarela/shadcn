import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const data = "123456".split('');
export default function Loading() {    
    return (
        <div>
        <h1>Skeleton Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" >
            {
                data.map((d) =>
                    <Card key={d}>
                        <CardHeader className="flex flex-row">
                            <Skeleton 
                                className="rounded-full mr-2 w-10 h-10"
                                ></Skeleton>
                            <div className="flex-col flex-grow">
                                <Skeleton className="h-4 w-1/2 mb-2 " />                                                                 
                                <Skeleton className="h-3 w-full " />                                                                 
                            </div>
                        </CardHeader>

                        <CardFooter className="flex justify-end" >
                            <Skeleton className="h-8 w-20 "></Skeleton>
                            
                        </CardFooter>
                    </Card>

                )
            }
        </div>       
    </div>
    )
}