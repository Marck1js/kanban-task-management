import style from "./NewBoard.module.scss";
import { FluentBoard } from "@/svgComponents"; 
const NewBoard = ({nameBoard, active = false}) => {
  return (
    <li className={`${style.newBoard}  ${active && style.newBoard_active }`}>
      <FluentBoard /> <span>{nameBoard}</span>
    </li>
  );
};

export default NewBoard;
