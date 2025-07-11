import styles from "./title.module.css";

type Props = { title: string; count: number };

export default function Title({ title, count }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}&nbsp;</p>
      <span>({count})</span>
    </div>
  );
}
