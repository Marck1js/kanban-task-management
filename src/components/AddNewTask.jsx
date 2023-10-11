import React from "react";
import style from "@style/AddNewTask.module.scss";
const AddNewTask = ({setPortalAddNewTask}) => {
  return (
    <>
      <div
        onClick={() => setPortalAddNewTask(false)}
        className={style.position}
      ></div>
      <div className={style.contenedor}>
        <p className={style.addNewTask}>Add New Task</p>

        {/* Section Title */}
        <div className={style.sectionTitle}>
          <label>Title</label>
          <div className={style.title}>
            <input type="text" placeholder="e.g. Take coffee break" />
          </div>
        </div>
        {/* Section Desctiption */}
        <div className={style.sectionDescription}>
          <label>Description</label>
          <div className={style.textarea}>
            <textarea
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            />
          </div>
        </div>

        {/* Create Task Button */}
        <button className={style.createTask}>create task</button>
      </div>
    </>
  );
};

export default AddNewTask;
