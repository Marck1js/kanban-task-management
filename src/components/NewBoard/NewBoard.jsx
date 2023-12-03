import Link from "next/link";
import style from "./NewBoard.module.scss";
import { FluentBoard } from "@/svgComponents";
import { convertirTexto } from "@/helpers";
const NewBoard = ({ nameBoard, active = false }) => {
  return (
    <li className={`${style.newBoard}  ${active && style.newBoard_active}`}>
      <Link className={style.link} href={`${convertirTexto(nameBoard)}`}>
        <FluentBoard />
        <span> {nameBoard}</span>
      </Link>
    </li>
  );
};

export default NewBoard;
