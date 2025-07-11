import Link from "next/link";
// Components
import User from "../User/User";
// Utils
import { ROUTES } from "@/app/contants/routes";
// Images
import Logo from "../../../../public/icons/logo.svg";
import Question from "../../../../public/icons/question.svg";
// Styles
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={ROUTES.home}>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href={ROUTES.home} className={styles.link}>
            <Question className={styles.question} />
            <p className={styles.linkText}>How it Works</p>
          </Link>
        </div>
        <User />
      </div>
    </header>
  );
}
