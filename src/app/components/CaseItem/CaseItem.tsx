import Image from "next/image";
// Components
import Button from "../Button/Button";
// Types
import { ICause } from "@/app/types/causes.type";
import { EButtonVariant } from "@/app/types/button.enum";
// Images
import Arrow from "../../../../public/icons/arrow.svg";
// Styles
import styles from "./caseitem.module.css";

type Props = { item: ICause };

function CaseItem({ item }: Props) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.bg.src})` }}
      >
        <Image src={item.avatar} alt={item.name} className={styles.avatar} />
        <div>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.position}>{item.position}</p>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.description}>{item.description}</p>
        <ul className={styles.raisedList}>
          {item.raised.map((el, idx) => (
            <li className={styles.raisedItem} key={`${el}-${idx}`}>
              <p className={styles.founds}> {el}</p>
              <p className={styles.text}>Raised Funds</p>
            </li>
          ))}
        </ul>
        <Button
          text="Invest"
          variant={EButtonVariant.GRADIENT}
          fullWidth
          className={styles.button}
        >
          <Arrow className={styles.arrow} />
        </Button>
      </div>
    </li>
  );
}

export default CaseItem;
