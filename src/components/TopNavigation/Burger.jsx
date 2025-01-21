import toogleImage from "../../Images/menu (4).png";
import YoutubeLogo from "../../Images/github-mark-white.png";

export default function Burger() {
  document.body.style.backgroundColor = "black";
  return (
    <div>
      <div className="flex gap-4 mt-4 text-white ml-4 ">
        <div className="border-2 p-1 h-8 rounded border-gray-700">
          <img className="  align-middle h-5 w-5" src={toogleImage} alt="" />
        </div>
        <div>
          <img className=" h-8 w-8" src={YoutubeLogo} alt="" />
        </div>
        <div className="text-sm font-medium text-gray-200 mt-2">Dashboard</div>
      </div>
    </div>
  );
}
