import { GalleryVerticalEnd } from "lucide-react"
import bg from "@/assets/bg.png"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import React from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function ForgotPage() {
  const [value, setValue] = React.useState("")

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Image Section */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-6 p-6 md:p-10 min-h-svh">
        {/* Logo/Header */}
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="#" className="flex items-center gap-2 font-medium">
                <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                    <GalleryVerticalEnd className="size-4" />
                </div>
                Acme Inc.
                </a>
            </div>

            {/* OTP Verification Content */}
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md space-y-4">
                <Link to="/" className="flex justify-start">
                    <FaArrowLeft className="h-10 w-10 p-2.5 bg-gray-100 rounded-full cursor-pointer mb-4" />
                </Link>

                <h1 className="text-2xl font-bold">Verify Your Identity</h1>
                <p className="text-muted-foreground text-sm mb-4">
                    Enter the 6-digit code sent to your phone or email to continue.
                </p>

                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={(value: string) => setValue(value)}
                >
                    <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <InputOTPSlot
                        key={i}
                        index={i}
                        className="h-12 w-12 text-xl sm:h-16 sm:w-16 sm:text-2xl"
                        />
                    ))}
                    </InputOTPGroup>
                </InputOTP>

                <Button
                    disabled={value.length < 6}
                    className="mt-4 cursor-pointer"
                    size="lg"
                >
                    Verify Code
                </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
