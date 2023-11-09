import { clsx } from "clsx";

import { forwardRef } from "../utils/forward-ref";
import * as styles from "./Button.css";

export interface ButtonProps {}

export default forwardRef<"button">(
  "Button",
  ({ as: Component = "button", className, ...rest }, ref) => {
    return (
      <Component
        {...rest}
        className={clsx(styles.button, className)}
        ref={ref}
      />
    );
  },
);
