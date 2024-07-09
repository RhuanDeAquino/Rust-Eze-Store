/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";

import { useState, useEffect } from "react";
import BannerComponent from "./components/banner";
import CardComponent from "./components/card";
import HeaderComponent from "./components/header";
import styles from "./page.module.css";
import Image from "next/image";
import { api } from "./services/api";

const carImg = "/assets/Doc_Hudson.webp";
const catsRamon = "/assets/ramon-cars.png"
const catsRamonType = "/assets/ramon-type.png"

export default function Home() {
  const [data, setData] = useState([]);

  const tipo = "camry";
  const apiTipo = api(tipo);

  useEffect(() => {
    fetch(apiTipo, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "6Voq/22FhMgkM9xkUBDiMQ==whLX1w7MIju5Gdc7",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  console.log(data);

  return (
    <div className={styles.content}>
      <HeaderComponent />
      <BannerComponent />
      <section className={styles.sectionCards}>
        <h2 className={styles.titleSection}>CAMRY</h2>
        <div className={styles.contentBox}>
          <img src={carImg} alt="Car" layout="responsive" width={100} height={300} className={styles.sectionImg} />
        <div className={styles.boxCards}>
          {data.filter((item) => item.model === "camry").map((item) => (
            <CardComponent
              key={item.id}
              name={item.model}
              price={item.year}
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/dg6yupc-7f10743e-e561-48f0-aa85-5849a5bc083c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyMDQ3ODY4LWViM2YtNDVhOS04NGFjLWExMjUxMGJmZWRkOVwvZGc2eXVwYy03ZjEwNzQzZS1lNTYxLTQ4ZjAtYWE4NS01ODQ5YTViYzA4M2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.llQV4RWAG7RkvYiLXXhQrkMoVvtuCGYhKVnP2fjXy8I"
            />
          ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionCards}>
        <h2 className={styles.titleSection}>CAMRY WAGON</h2>
        <div className={styles.contentBoxLeft}>
          <img src={catsRamon} alt="Car" layout="responsive" width={100} height={300} className={styles.sectionImg} />
        <div className={styles.boxCards}>
          {data.filter((item) => item.model === "camry wagon").map((item) => (
            <CardComponent
              key={item.id}
              name={item.model}
              price={item.year}
              image={catsRamonType}
            />
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}
