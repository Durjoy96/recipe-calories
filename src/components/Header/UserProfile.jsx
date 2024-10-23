import { HiOutlineUserCircle } from "react-icons/hi2";

const UserProfile = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-primary flex justify-center items-center cursor-pointer">
      <HiOutlineUserCircle className="h-8 w-8 stroke-1 stroke-base-content"></HiOutlineUserCircle>
    </div>
  );
};

export default UserProfile;
