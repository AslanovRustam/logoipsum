import Image from "next/image";
import clsx from "clsx";
// Componenst
import { ActivityText } from "../ActivityText/ActivityText";
// Utils
import { IActivity } from "@/app/types/activity.interface.";
import { ESocial } from "@/app/types/social.enum";
import { ICON_MAP } from "@/app/utils/icons.utils";
// Styles
import styles from "./socialactivityitem.module.css";

type Props = { item: IActivity };

function SocialActivityItem({ item }: Props) {
  const Icon = ICON_MAP[item.social.toLowerCase()];

  return (
    <li className={styles.item}>
      <div className={styles.userInfo}>
        <Image src={item.avatar} alt={item.name} className={styles.avatar} />
        <p className={styles.name}>{item.name}</p>

        <p className={styles.social}>
          <Icon
            className={clsx(
              styles.icon,
              item.social === ESocial.BLUESKY && styles.bluesky,
              item.social === ESocial.YOUTUBE && styles.youtube
            )}
          />
          {item.social}
        </p>
      </div>
      <div className={styles.content}>
        <ActivityText content={item.content} />
        <p className={styles.date}>{item.date}</p>
      </div>
    </li>
  );
}

export default SocialActivityItem;
