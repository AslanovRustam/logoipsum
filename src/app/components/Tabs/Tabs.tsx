import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
// Utils
import { ACTIVITY_TABS } from "@/app/contants/activity";
// Images
import SearchIcon from "../../../../public/icons/search.svg";
// Styles
import styles from "./tabs.module.css";

type Props = {
  activeTab: number;
  selectTab: (id: number) => void;
  tabs: { id: number; type: string; count: number }[];
};

function Tabs({ activeTab, selectTab, tabs }: Props) {
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeEl = itemsRef.current.find(
      (_, idx) => ACTIVITY_TABS[idx].id === activeTab
    );
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tabs.map((item, index) => (
          <li
            key={item.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={clsx(
              styles.item,
              item.id === activeTab && styles.active
            )}
            onClick={() => selectTab(item.id)}
          >
            {item.type} &nbsp;
            <span>({item.count})</span>
          </li>
        ))}
        <span
          className={styles.underline}
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
        <li className={styles.item}>
          <SearchIcon className={styles.icon} />
          Search
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
