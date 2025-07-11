"use client";
import { useState } from "react";
import clsx from "clsx";
// Components
import Search from "../Search/Search";
import Title from "../Title/Title";
import CaseItem from "../CaseItem/CaseItem";
import Button from "../Button/Button";
// Utils
import { CAUSES } from "@/app/contants/causes";
import { EButtonVariant } from "@/app/types/button.enum";
// Styles
import styles from "./causes.module.css";

function Causes() {
  const [search, setSearch] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleSubmit = (value: string) => {
    setSearch(value);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const filteredCauses = CAUSES.filter((cause) =>
    cause.title.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  const visibleCauses = expanded ? filteredCauses : filteredCauses.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Title title="Aligned causes" count={CAUSES.length} />
        <Search onSearch={handleSubmit} />
      </div>
      <ul className={clsx(styles.list, expanded && styles.expanded)}>
        {visibleCauses.map((item) => (
          <CaseItem key={item.id} item={item} />
        ))}
      </ul>
      {filteredCauses.length > 3 && (
        <Button
          text={expanded ? "Hide" : "Show More"}
          variant={EButtonVariant.TEXT_GRADIENT}
          fullWidth
          className={styles.button}
          onClick={toggleExpand}
        />
      )}
    </div>
  );
}

export default Causes;
