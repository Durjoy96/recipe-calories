import { CiSearch } from "react-icons/ci";
import UserProfile from "./UserProfile";

const Search = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="w-[260px] relative">
        <input
          className="w-full bg-base-200 pl-12 pr-6 py-3 rounded-full focus:outline-primary"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="w-7 h-7 fill-base-content-secondary cursor-pointer absolute top-1/2 -translate-y-1/2 left-3"></CiSearch>
      </div>
      <UserProfile></UserProfile>
    </div>
  );
};

export default Search;
