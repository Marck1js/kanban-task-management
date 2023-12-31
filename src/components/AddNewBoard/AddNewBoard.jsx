"use client";
import { revalidateTag } from "next/cache";
import React, { useState } from "react";
import style from "./AddNewBoard.module.scss";
import { useTheme } from "@/context/theme-provider";
import { IconCross } from "@/svgComponents";
import { Toaster, toast } from "sonner";
import { SubInputs } from "..";
import { postNewBoard } from "@/fetching";
import { useRouter } from "next/navigation";
const AddNewBoard = ({ setShowAddNewBoard }) => {
  const { isDarkMode: theme } = useTheme();

  // Para el buton al envia el form.xD
  const [sending, setSending] = useState(false);
  // ---------------------------------

  const [form, setForm] = useState({
    name: "",
    columns: ["Todo", "Doing"],
  });
  const router = useRouter();
  const onHandleChange = (e) => {
    let { name, value } = e.target;
    let index = parseInt(name);
    console.log(`Estas editando el indice ${index}`);
    setForm((prev) => {
      const updateCol = [...prev.columns];
      updateCol[index] = value;
      return {
        ...prev,
        columns: updateCol,
      };
    });
  };

  const deleteInput = (e) => {
    const newColumn = [...form.columns];
    newColumn.splice(e, 1);
    setForm({
      ...form,
      columns: newColumn,
    });
  };

  const promise = async () => {
    
    setSending(true);
    setTimeout(async () => {
      console.log("creating...");

      await postNewBoard(form)
        .then((e) => {
          console.log(e);
          toast.success(e?.msg ?? "Event has been created successfully");
        })
        // .catch((Error) => toast.error(Error));
        .catch((error) => {
          console.log(error)
          // const parsedError = JSON.parse(error.message);
          // toast.error(parsedError.msg); // Manejo del error como objeto JSON
        });
        revalidateTag('board')

      setForm({
        name: "",
        columns: ["Todo", "Doing"],
      });
      setSending(false);
      // setTimeout(() => {
      //   router.push(`/${form.name}`);
      // }, 1);
    }, 4000);
  };

  return (
    <>
      <div
        onClick={() => setShowAddNewBoard(false)}
        className={style.position}
      ></div>

      <div
        // className={style.contenedor}

        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        <p className={style.addNewTask}>Add New Board</p>

        {/* Section Title */}
        <div
          className={
            theme
              ? `${style.sectionTitle} ${style.sectionTitle_dark}`
              : `${style.sectionTitle}`
          }
        >
          <label>Name</label>
          <div className={style.title}>
            <input
              type="text"
              value={form.name}
              placeholder="e.g. Web Design"
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
            />
          </div>
        </div>

        {/* Section Columns */}
        <div
          className={
            theme
              ? `${style.sectionSubtasks} ${style.sectionSubtasks_dark}`
              : `${style.sectionSubtasks}`
          }
        >
          {/* <SubInputs/> inputs */}

          <label>Columns</label>

          <div className={style.mapContenedorSubtask}>
            {form.columns.length > 0 &&
              form.columns.map((column, index) => (
                <SubInputs
                  deleteInput={deleteInput}
                  id={index}
                  placeholder={"e.g. Todo"}
                  value={column}
                  key={index}
                  name={index.toString()}
                  onHandleChange={onHandleChange}
                />
              ))}
          </div>

          {/* Add new column <SubInputs/> */}
          <button
            onClick={() => {
              setForm((prev) => {
                return {
                  ...prev,
                  columns: [...prev.columns, ""],
                };
              });
            }}
            disabled={sending}
            className={style.addNewSubtask}
          >
            +Add New Column
          </button>
        </div>

        {/* Create Task Button */}

        {/* <button className={style.createTask}>Create New Board</button> */}

        <div>
          <Toaster richColors position="top-right" />
          <button
            disabled={sending}
            className={style.createTask}
            onClick={() => promise()}
            // onClick={() => console.log(form)}
          >
            Create New Board
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewBoard;
