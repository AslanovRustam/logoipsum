import Image from "next/image";
// Components
import Button from "../Button/Button";
// Utils
import { EButtonVariant } from "@/app/types/button.enum";
import { ACCOUNT } from "@/app/contants/user";
// Images
import IconAvatar from "../../../../public/icons/avatar.svg";
import IconEdit from "../../../../public/icons/edit.svg";
// Styles
import styles from "./head.module.css";

export default function Head() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.info}>Welcome back!</p>
        <div className={styles.btnContainer}>
          <Button text="Update Cover" />
          <Button text="Edit Profile" variant={EButtonVariant.WHITE} />
        </div>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.avatarContainer}>
          <Image
            src={ACCOUNT.avatar}
            alt="user avatar"
            className={styles.avatar}
          />
          <div className={styles.editContainer}>
            <IconEdit className={styles.iconEdit} />
          </div>
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{ACCOUNT.name}</p>
          <div className={styles.iconContainer}>
            <IconAvatar className={styles.iconAvatar} />
            <p className={styles.date}>Foundation: {ACCOUNT.createDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
