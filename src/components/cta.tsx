import { Button } from "./ui/button"

const Cta = () => {
  return (
    <div className="bg-gray-900 text-gray-50 w-full p-4 rounded-md">
      <div className="w-full flex flex-col justify-between sm:items-center items-start lg:flex-row gap-4">
        <span>Training 2 or more people? Get your team access your E-Learnings Top Courses</span>
        <div className="flex gap-2">
            <Button  variant="outline" className="text-gray-800">Buy Now</Button>
             <Button variant="default">Dismiss</Button>
        </div>
      </div>
    </div>
  )
}

export default Cta
