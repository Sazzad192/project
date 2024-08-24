import cn from "@/common/helpers/UtilKit";
import { cva } from "class-variance-authority";

const DEFAULT_BUTTON_STYLES =
  "h-fit inline-flex items-center rounded-md text-center focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const PRIMARY_BUTTON_STYLES =
  "bg-primary-500 text-white hover:bg-primary-300 focus:bg-primary-300 px-11 py-2";
const GREEN_BUTTON_STYLES =
  "bg-secondary-500 text-white px-11 py-2";
const OUTLINE_BUTTON_STYLES =
  "bg-primary-100 text-primary-500 px-11 py-1";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      green: GREEN_BUTTON_STYLES,
      outline: OUTLINE_BUTTON_STYLES
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant }), className);

  return (
    <button className={BUTTON_STYLES} {...props}>
      {children}
    </button>
  );
}
