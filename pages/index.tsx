import Head from "next/head";
import Image from "next/image";
import { Inter, Sumana } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
import Card from "../components/card";

const inter = Inter({ subsets: ["latin"] });
export type listType = {
  name: string;
  age: number;
  henchmen: number;
  description: string;
};
export default function Home() {
  const [list, setList] = useState<listType[]>([]);
  const [item, setItem] = useState<listType | null>(null);
  const formRef = useRef(null);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e?.currentTarget);

    const newList: listType = {
      name: e.target.name.value == "" ? "Default" : e.target.name.value,
      age: e.target.age.value == 0 ? 1 : e.target.age.value,
      henchmen: e.target.henchmen.value == 0 ? 1 : e.target.henchmen.value,
      description:
        e.target.description.value == ""
          ? "Description"
          : e.target.description.value,
    };

    setList([...list, newList]);
    formRef.current.reset();
  };
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: number
  ) => {
    e.preventDefault();

    setItem(item == list[key] ? null : list[key]);
  };
  return (
    <div>
      <main className="grid grid-cols-3 h-full min-h-screen p-4">
        <form
          ref={formRef}
          onSubmit={submitForm}
          className="flex flex-col items-start"
        >
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input id="name" name="name" type="text" />
          <label htmlFor="age" className="font-semibold">
            Age
          </label>
          <input type="text" name="age" id="age" />
          <label htmlFor="henchmen" className="font-semibold">
            Number of Henchmen
          </label>
          <input type="text" name="henchmen" id="henchmen" />
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <input type="text" name="description" id="description" />

          <button
            type="submit"
            className="bg-red-600 text-white rounded-lg px-2 shadow-lg"
          >
            Add
          </button>
        </form>

        <div className="flex flex-col gap-2 items-start justify-start text-start">
          <h1 className="text-2xl font-bold">Evil Scientists</h1>
          {list?.map((item, key) => (
            <button key={key} onClick={(e) => handleClick(e, key)}>
              <article className="border hover:scale-105 transform transition duration-200 ease-in-out rounded-lg  py-1 px-2">
                <h1 className="text-xl  capitalize">
                  <span className="font-semibold">{item.name}</span>
                </h1>
              </article>
            </button>
          ))}
        </div>

        <Card item={item} />
      </main>
    </div>
  );
}
