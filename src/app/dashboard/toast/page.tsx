"use client"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function Page() {
    const { toast } = useToast()
    return (
        <div>
            <h1 className="pb-5">Toast Page</h1>        
            <Button
      variant="outline"
      onClick={() => {
        toast({
        variant: "success",        
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction 
            className="hover:text-emerald-500"
            onClick={() => {console.log("Listo")}}
            altText="Goto schedule to undo">OK</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
        </div>
    )

}