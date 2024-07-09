import styles from "./banner.module.css";

export default function BannerComponent() {
  return (
   <section className={styles.content}>
    <h1 className={styles.title}>
      RAPIDO COMO UM JATO, <br/>
      VELOZ COMO UM FOGUETE
    </h1>
   </section>
  );
}
