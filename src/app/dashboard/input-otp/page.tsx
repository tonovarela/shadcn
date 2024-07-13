'use client'
import { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export default function Page() {
    const [value, setValue] = useState('');
    return (
        <div className="flex justify-center h-[500px]">

            
            <InputOTP maxLength={6} value={value}
                onChange={(value) =>{
                    setValue(value);
                    console.log(value.length);
                }}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
            {value}
        </div>
    )

}