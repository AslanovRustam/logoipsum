import Link from "next/link";
// Utils
import { ACCOUNT } from "@/app/contants/user";
import { ICON_MAP } from "@/app/utils/icons.utils";
// Styles
import styles from "./acounts.module.css";

function Acounts() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Linked Accounts:</p>
      <ul className={styles.list}>
        {ACCOUNT.socials.map(({ id, name, url }) => {
          const Icon = ICON_MAP[name.toLowerCase()];
          return (
            <li key={id} className={styles.item}>
              <Link href={url} className={styles.link}>
                <Icon className={styles.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Acounts;
