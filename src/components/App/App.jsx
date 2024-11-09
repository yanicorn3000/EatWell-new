import React from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "../Routes/Routes";
import styles from "./App.module.scss";
import "../../main.scss";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Features from "./features/Feautures";
import Example from "./example/Example";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    <Header />
    <Hero />
    <Features />
    <Example />

    <section>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "36px" }}
      >
        <h1>Kalkulator kalorii</h1>
      </div>
    </section>

    <section className="faq">
      <div className="container">
        <h2 className="section__title">FAQ</h2>
        <div className="faq__tabs">
          <input type="checkbox" id="faq__tab-1" />
          <label htmlFor="faq__tab-1">Jak to działa?</label>

          <div className="faq__tab">
            <div className="faq__tab__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id et
              mollitia voluptates eius voluptate quibusdam sed?
            </div>
          </div>

          <input type="checkbox" id="faq__tab-2" />
          <label htmlFor="faq__tab-2">Jakie są metody płatności?</label>

          <div className="faq__tab">
            <div className="faq__tab__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem?
            </div>
          </div>

          <input type="checkbox" id="faq__tab-3" />
          <label htmlFor="faq__tab-3">Jak załozyć konto uzytkownika?</label>

          <div className="faq__tab">
            <div className="faq__tab__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit qui enim illum officiis ratione quibusdam.
            </div>
          </div>

          <input type="checkbox" id="faq__tab-4" />
          <label htmlFor="faq__tab-4">
            Jak zaprosić znajomych do współdzielonej listy zakupów?
          </label>

          <div className="faq__tab">
            <div className="faq__tab__content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id et
              mollitia voluptates eius voluptate quibusdam sed?
            </div>
          </div>

          <input type="checkbox" id="faq__tab-5" />
          <label htmlFor="faq__tab-5">Jak załozyć konto twórcy?</label>

          <div className="faq__tab">
            <div className="faq__tab__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              sunt, a necessitatibus ducimus cum voluptatem commodi adipisci
              illum doloremque aliquid tenetur at soluta saepe provident rerum
              nemo maxime consequatur aperiam accusamus dicta!
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="page__footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__info-wrapper">
            <div className="page__logo page__logo-footer">
              <a href="" className="logo">
                Eat.Well
              </a>
            </div>
            <div className="footer__info-contact">
              <a href="mailto:example@eatwell.com" className="footer__mail">
                example@eatwell.com
              </a>
              <a href="tel:+456433343" className="footer__tel">
                +4564333453
              </a>
            </div>
            <div className="footer__social">
              <a href="" className="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>
              </a>
              <a href="" className="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="" className="tiktok">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
              <a href="" className="pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7c3.9-16 8.5-35 13.9-57.9c0 0-7.3-14.8-7.3-36.5c0-70.7 75.5-78 75.5-25c0 13.5-5.4 31.1-11.2 49.8c-3.3 10.6-6.6 21.5-9.1 32c-5.7 24.5 12.3 44.4 36.4 44.4c43.7 0 77.2-46 77.2-112.4c0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56c2 2.4 2.3 4.5 1.7 7c-1.1 4.7-3.1 12.9-4.7 19.2c-1 4-1.8 7.3-2.1 8.6c-1.1 4.5-3.5 5.5-8.2 3.3c-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8c0 84.6-53.3 152.7-127.4 152.7c-24.9 0-48.3-12.9-56.3-28.2c0 0-12.3 46.9-15.3 58.4c-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <a href="" className="blog">
              Blog
            </a>
            <a href="" className="terms">
              Regulamin
            </a>
            <a href="" className="policy">
              Polityka prywatności
            </a>
            <a href="" className="payment">
              Metody płatności
            </a>
          </div>
        </div>
        <form className="footer__form">
          <div className="footer__form-newsletter">
            <label htmlFor="email" className="newsletter__label">
              E-mail
            </label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              className="newsletter"
              title="E-mail"
              value=""
            />
            <button type="submit" className="newsletter-button">
              Zapisz się
            </button>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="gdpr" name="gdpr" checked />
            <label htmlFor="gdpr">
              Zgadzam się na przetwarzanie moich danych osobowych przez EatWell
              z siedzibą w Warszawie, w celu wysyłki na podane dane kontaktowe
              Newslettera zawierającego treści marketingowe zgodnie z
              <a href="" className="terms__link">
                Regulaminem
              </a>
            </label>
          </div>
        </form>
      </div>
    </footer>
  </>
);
