import Image from "next/image";
// Utils
import { ACCOUNT } from "@/app/contants/user";
// Styles
import styles from "./user.module.css";

export default function User() {
  return (
    <div className={styles.container}>
      <Image src={ACCOUNT.avatar} alt="user avatar" className={styles.avatar} />
      <div className={styles.wrapper}>
        <p className={styles.name}>{ACCOUNT.name}</p>
        <a href={`mailto:${ACCOUNT.email}`} className={styles.email}>
          {ACCOUNT.email}
        </a>
      </div>
    </div>
  );
}
