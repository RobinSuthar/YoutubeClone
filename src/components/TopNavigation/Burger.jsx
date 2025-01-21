import toogleImage from "../../Images/menu (4).png";
import YoutubeLogo from "../../Images/github-mark-white.png";

export default function Burger() {
  document.body.style.backgroundColor = "black";
  return (
    <div>
      <div className="flex">
        <img className=" h-10 w-10" src={toogleImage} alt="" />
        <img className=" h-10 w-10" src={YoutubeLogo} alt="" />
      </div>
    </div>
  );
}
