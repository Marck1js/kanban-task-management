import style from "./BoardNoEmpty.module.scss";
import { Column } from "..";
import { useTheme } from "@/context/theme-provider";
const BoardNoEmpty = () => {
  const {isDarkMode: theme} = useTheme()
  return (
    <div className={style.contenedor}>
        <Column colorTask={'0e0f90'} nameTask={'todo'}/>
        <Column colorTask={'eda124'} nameTask={'doing'}/>
        <Column colorTask={'f2e59c'} nameTask={'verify'}/>
        <Column colorTask={'23f19c'} nameTask={'done'}/>
      
       
      <button 
      className={
        theme
          ? `${style.addNewColumn} ${style.addNewColumn_dark}`
          : `${style.addNewColumn}`
      }
      >+New Column</button>
    </div>
  );
};

export default BoardNoEmpty;
