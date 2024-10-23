import PageLink from "./PageLink";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <h3 className="text-3xl font-bold text-base-content">Recipe Calories</h3>
      <div className="flex gap-12 items-center">
        <PageLink text="Home"></PageLink>
        <PageLink text="Recipes"></PageLink>
        <PageLink text="About"></PageLink>
        <PageLink text="Search"></PageLink>
      </div>
      <div>
        <Search></Search>
      </div>
    </div>
  );
};

export default Navbar;
