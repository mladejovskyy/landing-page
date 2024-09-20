"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./style.css";
import "./not-found.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    //load animations
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="container not-found">
          <div>
            <h1>ERROR 404</h1>
            <h3>
              Stránka, kterou hledáte, pravděpodobně neexistuje nebo byla
              smazána.
            </h3>
            <Link href="../">
              <button className="btn btn-secondary">Vrátit se zpět</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
