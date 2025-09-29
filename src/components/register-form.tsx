import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a new account</h1>
            <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to sign up and get started
            </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" type="text" placeholder="Juan Dela Cruz" required />
        </div>
         <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Doe223" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
          <div className="grid gap-3">
          <Label htmlFor="email">User Type</Label>
          <div className="w-full">
          <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a user type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="apple">Student</SelectItem>
                        <SelectItem value="banana">Teacher</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
          </div>
        </div>
        

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Create Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Link to="/dashboard">
          <Button type="submit" className="w-full">
          Sign up
        </Button>
        </Link>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  )
}
