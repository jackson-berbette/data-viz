import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, { HtmlHTMLAttributes } from "react";
const inter = Inter({ subsets: ["latin"] });
const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
  console.log(event);
};
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4"> DataViz</span>
          </a>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              href="#"
            >
              Home
            </a>
            <Link legacyBehavior href="/posts/first-post" passHref>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="#"
              >
                Data
              </a>
            </Link>
            <Link legacyBehavior href="/posts/references" passHref>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="#"
              >
                References
              </a>
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className="py-10 text-center container">
          <div className="row py-lg-10">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Welcome to DataViz</h1>
              <p className="lead text-body-secondary">
                Visualize the financial data through the lens of global events
              </p>
              <p>
                <Link href="/posts/first-post" passHref>
                  <button
                    className="btn btn-primary my-2"
                    onClick={(e) => {
                      handleNavClick(e);
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
