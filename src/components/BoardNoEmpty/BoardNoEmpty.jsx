"use client";
import style from "./BoardNoEmpty.module.scss";
import { Column, EditBoard, OverviewTask } from "..";
import { useTheme } from "@/context/theme-provider";
import { useEffect, useState } from "react";
import { colorRGBAleatorio as RGB } from "@/helpers";
import { reorder } from "@/helpers";
import { useBoards } from "@/store";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import Overview from "../OverviewTask/OverviewTask";
const BoardNoEmpty = ({ data }) => {
  const { isDarkMode: theme } = useTheme();
  const [editBoard, setEditBoard] = useState(false);
  const [platformBoard, setPlatformBoard] = useState(data[0].columns);


  const handleDragTask = (result) => {
    const { source, destination, type } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (
      source.droppableId === destination.droppableId &&
      source.index != destination.index
    ) {
      const platform = [...platformBoard];
      const [elemento] = platform[source.droppableId].tasks.splice(
        source.index,
        1
      );
      platform[source.droppableId].tasks.splice(destination.index, 0, elemento);
      setPlatformBoard(platform);
    }
    if (source.droppableId !== destination.droppableId) {
      const platform = [...platformBoard];
      const [elemento] = platform[source.droppableId].tasks.splice(
        source.index,
        1
      );
      platform[destination.droppableId].tasks.splice(
        destination.index,
        0,
        elemento
      );
      setPlatformBoard(platform);
    }
  };

  return (
    <>
      <div
        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        <DragDropContext
         
          onDragEnd={handleDragTask}
        >
          <div className={style.dragDropContext}>
            {platformBoard.map((elem, index) => (
              <Droppable key={index} droppableId={index.toString()}>
                {(providedDrop, snapshot) => (
                  <div
                    {...providedDrop.droppableProps}
                    ref={providedDrop.innerRef}
                  >
                    <Column
                      listColumns={platformBoard.map((e) => e.name)}
                      key={elem.id}
                      colorTask={"ff0000"}
                      nameTask={elem.name}
                      tasks={elem.tasks}
                    >
                      {elem.tasks.map((task, idx) => (
                        <Draggable
                          draggableId={task.id.toString()}
                          key={task.id}
                          index={idx}
                        >
                          {(providedDrag, snapshot) => (
                           
                            <div
                              {...providedDrag.dragHandleProps}
                              {...providedDrag.draggableProps}
                              ref={providedDrag.innerRef}
                            >
                              <OverviewTask
                                key={task.id}
                                listColumns={task}
                                detailsInfo={task}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </Column>
                    {providedDrop.placeholder}

                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
        
        {/* Button Add Column */}
        <button
          onClick={() => setEditBoard(true)}
          className={
            theme
              ? `${style.addNewColumn} ${style.addNewColumn_dark}`
              : `${style.addNewColumn}`
          }
        >
          +New Column
        </button>
      </div>

      {editBoard && <EditBoard setEditBoard={setEditBoard} />}
    </>
  );
};

export default BoardNoEmpty;
