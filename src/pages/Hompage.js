import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

export default function Hompage() {
  const navigate = useNavigate();
  return (
    <main>
      <Header />
      <section className="homepage__container">
        <button
          className="homepage__start"
          onClick={() => {
            navigate("/nextSession");
          }}
        >
          START NEW SESSION
        </button>
      </section>
    </main>
  );
}
