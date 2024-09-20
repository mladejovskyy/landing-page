'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./style.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    //load aos animations .
    AOS.init();
  }, []);

  return (
      <>
        <Navbar/>
        <main>
          <section className="hero" id="hero">
            <div className="container">
              <div className="row">
                <div className="item left">
                  <h1>Tvořím úspěšné weby pro podnikatele a firmy </h1>
                  <p className="hero-p">
                    Pomůžu vám získat více zákazníků díky webové identitě. Začněte růst na internetu ještě dnes a domluvte
                    si konzultaci zdarma.
                  </p>
                  <div className="btns-row">
                    <div
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="0">
                      <button className="btn btn-secondary">
                        Konzultace zdarma
                      </button>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-delay="150">
                      <button className="btn">
                        Moje práce -&gt;
                      </button>
                    </div>
                  </div>
                  <div className="reviews-row">
                    <img src="/images/reviews-photo.webp" className="people" alt="" draggable={false} loading="eager"/>
                    <div>
                      <img src="/images/reviews-stars.svg" className="stars" alt="" draggable={false} loading="eager"/>
                      <p><span>100+</span> vytvořených úspěšných webů</p>
                    </div>
                  </div>
                </div>
                <div className="item right">
                  <img src="/images/hero-photo2.webp" alt="" draggable={false} loading="eager"/>
                </div>
              </div>
            </div>
          </section>
          <img src="/images/pattern-left-dots.svg" className="pattern left-dots" alt="" draggable={false} loading="eager"/>
          <img src="/images/pattern-bottom-lines.svg" className="pattern lines" alt="" draggable={false} loading="eager"/>
          <img src="/images/pattern-right-dots.svg" className="pattern right-dots" alt="" draggable={false} loading="eager"/>
        </main>
      </>
  );
}

export default App;
