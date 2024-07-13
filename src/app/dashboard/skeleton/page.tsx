'use client'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return '123456789'.split('');
}

export default async function Page() {

    const data = await getData();
    return (
        <div>
            <h1>Skeleton Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" >
                {
                    data.map((d) =>
                        <Card key={d}>
                            <CardHeader className="flex flex-row">
                                <Image src="https://github.com/shadcn.png"
                                    className="rounded-full mr-2 w-10 h-10"
                                    alt="A" width={100} height={100}></Image>
                                <div>
                                    <CardTitle>
                                        Card title {d}
                                    </CardTitle>
                                    <CardDescription>
                                        Card description
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardFooter className="flex justify-end" >
                                Ver mas
                            </CardFooter>
                        </Card>

                    )
                }

            </div>
            


        </div>
    )

}