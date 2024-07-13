'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export default function Page() {

    return (
        <div>
            <h1>Sonner Page</h1>
            <div className="grid grid-cols-4 gap-2 mt-5" >
                <Button
                    variant="outline"
                    onClick={() => {
                        toast("Event has been created", {
                            description: `${new Date().toISOString()}`,
                            position: "bottom-center",
                            duration: 1000,
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                        })
                    }
                    }
                >
                    Show Toast Success
                </Button>
                <Button

                    onClick={() => {
                        toast.success("Event has been created", {                            
                            classNames: {                                 
                                // toast: 'bg-black-500',
                                 title: 'text-white',
                                // description: 'text-red-500',
                                // actionButton: 'bg-red-500',                                                                
                              },
                            description: `${new Date().toISOString()}`,
                            position: "top-center",
                            duration: 1000,
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                        })
                    }
                    }
                >
                    Show Toast
                </Button>
            </div>
        </div>
    )

}