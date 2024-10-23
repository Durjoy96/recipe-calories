import { HiOutlineUserCircle } from "react-icons/hi2";

const UserProfile = () => {
  return (
    <div className="hidden lg:w-10 lg:h-10 lg:rounded-full lg:bg-primary lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
      <HiOutlineUserCircle className="h-8 w-8 stroke-1 stroke-base-content"></HiOutlineUserCircle>
    </div>
  );
};

export default UserProfile;
