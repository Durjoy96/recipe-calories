import PageLink from "./PageLink";
import Search from "./Search";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-6 py-8">
      <h3 className="text-lg font-bold text-base-content md:text-xl lg:text-3xl">
        Recipe Calories
      </h3>
      <div className="hidden lg:flex lg:gap-12 lg:items-center">
        <PageLink text="Home"></PageLink>
        <PageLink text="Recipes"></PageLink>
        <PageLink text="About"></PageLink>
        <PageLink text="Search"></PageLink>
      </div>
      <div>
        <Search></Search>
      </div>
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <RiMenu3Fill className="h-8 w-8 fill-base-content" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-[1] w-32 p-2 shadow"
          >
            <li>
              <PageLink text="Home"></PageLink>
            </li>
            <li>
              <PageLink text="Recipes"></PageLink>
            </li>
            <li>
              <PageLink text="About"></PageLink>
            </li>
            <li>
              <PageLink text="Search"></PageLink>
            </li>
            <li>
              <PageLink text="Profile"></PageLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
