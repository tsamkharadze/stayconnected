import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchBlock:React.FC = () => {
    return(
        <div className="flex items-center gap-4 w-full lg:w-1/2"> 
        <Input placeholder="Search..." /> 
        <Button variant="secondary"><Search /></Button>
        </div>
    )
}
export default SearchBlock