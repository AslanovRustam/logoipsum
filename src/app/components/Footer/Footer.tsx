import styles from "./footer.module.css";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2025 SpreadYourCause.com. All rights reserved.</p>
      <ul className={styles.list}>
        <li className={styles.item}>White Paper</li>
        <li className={styles.item}>Terms of Use</li>
      </ul>
    </footer>
  );
}
