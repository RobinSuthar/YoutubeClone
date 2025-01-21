import Burger from "./Burger";
import Profile from "./Profile";
import Search from "./Serach";

export default function TopNaviagtion() {
  return (
    <div>
      <div className="flex justify-between">
        <Burger></Burger>
        <Search></Search>
        <Profile></Profile>
      </div>
    </div>
  );
}
