import clsx from "clsx";
import { ReactNode } from "react";
// Types
import { EButtonTypes, EButtonVariant } from "@/app/types/button.enum";
// Styles
import styles from "./button.module.css";

type Props = {
  text: string;
  type?: EButtonTypes;
  onClick?: () => void;
  className?: string;
  variant?: EButtonVariant;
  children?: ReactNode;
  fullWidth?: boolean;
};

function Button({
  text,
  type = EButtonTypes.BUTTON,
  onClick,
  className,
  variant,
  fullWidth,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.button,
        variant === EButtonVariant.GRADIENT && styles.gradient,
        variant === EButtonVariant.WHITE && styles.white,
        variant === EButtonVariant.TRANSPARENT && styles.transparent,
        variant === EButtonVariant.TEXT_GRADIENT && styles.textGradient,
        fullWidth && styles.fulWidth,
        className
      )}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
