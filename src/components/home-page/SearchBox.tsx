import { Input } from "../ui/input"

const SearchBox = ({noSearch = false}) => {
    return (
        <>{!noSearch && (
            <div className="relative container rounded-md h-[45px] mt-[6px] mb-1 ">
              <Input
                type="text"
                placeholder="Search premium bestsellers"
                className="my-3 py-2 h-12 shadow-md"
              />
            </div>
          )}</>
        
    )
}

export default SearchBox