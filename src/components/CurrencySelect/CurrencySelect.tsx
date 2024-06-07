import { FC, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside/useClickOutside";
import styles from "./CurrencySelect.module.css";

interface CurrencySelectProps {
  options: string[][] | [string, number][];
  onSelect: (currency: string) => void;
  type: "text" | "number";
}

const CurrencySelect: FC<CurrencySelectProps> = ({
  options,
  onSelect,
  type,
}) => {
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(wrapperRef, () => {
    setIsOpen(false);
    setSearch("");
  });

  const handleSelect = (currency: string) => {
    onSelect(currency);
    setIsOpen(false);
  };

  const filteredOptions = options.filter(([code]) =>
    code.includes(search.toUpperCase())
  );

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <input
        type={type}
        className={`${styles.input} ${isOpen ? styles.inputFocus : ""}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder="Поиск..."
      />
      {isOpen && (
        <ul className={styles.optionsList}>
          {filteredOptions.map(([code]) => (
            <li
              key={code}
              onClick={() => handleSelect(code)}
              className={styles.option}
            >
              {code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelect;
