import { ChangeEvent, KeyboardEvent, useState } from "react";
// Images
import SearchIcon from "../../../../public/icons/search.svg";
// Styles
import styles from "./search.module.css";

type Props = { onSearch: (value: string) => void };

function Search({ onSearch }: Props) {
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    onSearch(search);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon className={styles.icon} onClick={handleSubmit} />
    </div>
  );
}

export default Search;
