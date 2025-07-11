import styles from "./activitytext.module.css";

export const ActivityText = ({
  content,
}: {
  content: { text: string; type?: string }[];
}) => {
  return (
    <p>
      {content.map((part, index) => {
        const lines = part.text.split("\n");
        return lines.map((line, i) => (
          <span
            key={`${index}-${i}`}
            className={part.type === "hashtag" ? styles.hashtag : styles.normal}
          >
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ));
      })}
    </p>
  );
};
