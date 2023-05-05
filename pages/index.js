import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

import firebaseApp from "@/firebase";
import { collection, getFirestore, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

const db = getFirestore(firebaseApp);

const inter = Inter({ subsets: ["latin"] });

export default function Home({ personas }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <h1>Personas</h1>
        <div>
          {personas.map((persona) => (
            <div key={persona.id}>
              <h2>{persona.nombre}</h2>
              <p>{persona.apellido}</p>
              <p>{persona.edad}</p>
              <button onClick={() => router.push(`/persona/${persona.id}`)}>
                view
              </button>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

//server side rendering
//funcionalidad de next que nos permite obviar el uso de useEffect y useState (react)
//detecta de forma dinamica los combios que se estan realizando en la base de datos
//es un fecth pero firebase
export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "Personas"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return {
    props: {
      personas: docs,
    },
  };
};
//ahora persona contiene toda la data del DB
