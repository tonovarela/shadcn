
'use client'
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function Page() {
    const [sliderValue, setSliderValue] = useState(10)
    const [rangeValue, setRangeValue] = useState([10,20])
    return (
        <div>
            
            <div className="grid grid-cols-1 gap-3">
                <span>SliderValue:{sliderValue}</span>
                <Slider defaultValue={[sliderValue]}
                onValueChange={(value) => setSliderValue(value[0])}
                 max={100} step={1} 
                
                />
                    <span>rangeValue:{rangeValue.join(",")}</span>
                <Slider defaultValue={rangeValue}
                onValueChange={setRangeValue}
                 max={100} step={1} 
                
                />
            </div>



        </div>
    )

}