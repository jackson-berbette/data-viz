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
export default function References() {
  return (
    <>
      <div className="container-fluid">
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
              <span className="fs-4"> References</span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <Link legacyBehavior href="/" passHref>
                <a
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/posts/first-post" passHref>
                <a
                  className="me-3 py-2 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  Data
                </a>
              </Link>
              <a
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                href="#"
              >
                References
              </a>
            </nav>
          </div>
        </header>
        <main className={styles.main}>
          <div className="border border-0">
            <section className="py-10 text-center container">
              <div className="row py-lg-10">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">References</h1>
                  <p className="lead text-body-secondary">
                    Sources for data points and technology stack used
                  </p>
                </div>
              </div>
            </section>
            <div className="border border-0">
              <div className="album py-5 bg-body-tertiary">
                <div className="row row-cols row-cols row-cols">
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="39%" y="50%" fill="#eceeef" dy=".3em">
                          Financial Data
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          <a href="https://www.kaggle.com/datasets/aayushmishra1512/faang-complete-stock-data?select=Facebook.csv">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://www.kaggle.com/datasets/
                            </p>{" "}
                          </a>
                          <a href="https://fred.stlouisfed.org/tags/series">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://fred.stlouisfed.org/tags/series
                            </p>{" "}
                          </a>
                        </p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="39%" y="50%" fill="#eceeef" dy=".3em">
                          Global Events
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="42%" y="50%" fill="#eceeef" dy=".3em">
                          Front End
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          <a href="https://nextjs.org/">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://nextjs.org/
                            </p>{" "}
                          </a>
                          <a href="https://react.dev/">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://react.dev/
                            </p>{" "}
                          </a>
                          <a href="https://getbootstrap.com/">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://getbootstrap.com/
                            </p>{" "}
                          </a>
                          <a href="https://www.chartjs.org/">
                            {" "}
                            <p className="text-center">
                              {" "}
                              https://www.chartjs.org/
                            </p>{" "}
                          </a>
                        </p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-sm">
                      <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="43%" y="50%" fill="#eceeef" dy=".3em">
                          Back End
                        </text>
                      </svg>
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
