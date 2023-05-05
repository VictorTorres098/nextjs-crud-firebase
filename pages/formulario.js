import React, { useState } from "react";
import { useRouter } from "next/router";

import firebaseApp from "@/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default function Formulario() {
  const router = useRouter;

  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
  };
  const [dato, setDato] = useState(valorInicial);

  //capturar inputs
  const obtenerInputs = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
  };

  //const enviarInfo a DB
  const enviarInfo = async (e) => {
    //evitar que recargue la pagina
    e.preventDefault();
    try {
      await addDoc(collection(db, "Personas"), {
        ...dato,
      });
    } catch (error) {
      console.log(error);
    }
    alert("los datos fueron enviados");
    //rediccion
    //router.push("/");
  };

  return (
    <div>
      <form onSubmit={enviarInfo}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="nombre"
          value={dato.nombre}
          onChange={obtenerInputs}
          required
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          name="apellido"
          value={dato.apellido}
          onChange={obtenerInputs}
          required
        />
        <input
          type="text"
          placeholder="edad"
          name="edad"
          value={dato.edad}
          onChange={obtenerInputs}
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
