'use client'
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
export default function Page() {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(90), 500);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            <h1>Progress Page</h1>
            <Progress value={progress} indicatorColor={
                cn({
                    'bg-red-500': progress < 50,
                    'bg-yellow-500': progress >= 50 && progress < 80,
                    'bg-green-500': progress >= 80
                })
            } />
        </div>
    )
}