"use client";
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false)
const handleClickRefresh = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
}

    return (
        <div>
            <h1 className="mb-[50px]">Button Page</h1>

            <div className="grid grid-cols-5 gap-20">

                <Button disabled variant='default'>default</Button>
                <Button disabled variant='secondary'>secondary</Button>
                <Button disabled variant='ghost'>ghost</Button>
                <Button disabled variant='destructive'>destructive</Button>
                <Button disabled variant='link'>link</Button>
                <Button disabled variant='outline'>outline</Button>
                <Button variant='outline' onClick={() => { console.log('Hola') }}>click</Button>
                <Button variant='success' capitalize >success</Button>
            </div>
            <div className="flex flex-row gap-x-2 mt-2">
                <Button variant="outline" size="icon">
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button>
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button  onClick={handleClickRefresh} disabled={isLoading}>
                    {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? 'Loading...' : 'Refresh'}
                </Button>
            </div>

        </div>

    )
}