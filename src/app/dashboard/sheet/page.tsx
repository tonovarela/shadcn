'use client'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { useState } from "react";

export default function Page() {
   const [open, setOpen] = useState(false)
    return (
        <div>
            <h1>Sheet Page</h1>
            
            <div className="flex  justify-center ">
            <Button onClick={()=>setOpen(true)}>Open</Button>
                <Sheet open={open} onOpenChange={setOpen}>
                    {/* <SheetTrigger>Open</SheetTrigger> */}
                    <SheetContent side={'right'}>
                        <SheetHeader>
                            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )

}