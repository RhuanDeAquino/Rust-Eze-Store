import Image from "next/image";
import styles from "./header.module.css";

export default function HeaderComponent() {
  return (
    <header>
      <Image width={100} height={70} src="/assets/logo-rust-eze.webp" alt="Logo" />
      <p className={styles.text}>X</p>
      <Image width={100} height={70} src="/assets/95-RM.png" alt="Logo" />
    </header>
  );
}
