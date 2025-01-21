import Burger from "./Burger";
import Profile from "./Profile";
import Search from "./Serach";

export default function TopNaviagtion() {
  return (
    <div>
      <div className="flex justify-between border-b-gray-700 bg-Robin h-16 border-b-2">
        <Burger></Burger>
        <Search></Search>
        <Profile></Profile>
      </div>
    </div>
  );
}
