import React, { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  //esta funcion lo que realiza es ayudarnos con el error de boostrap
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="#">Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/formulario">crear producto</Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
