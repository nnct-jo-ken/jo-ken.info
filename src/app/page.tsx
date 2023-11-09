import type { ReactNode } from "react";

import Button from "../components/Button/Button";
import * as styles from "./page.css";

export default function Page(): ReactNode {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Hello, world!</h1>
      <Button>Button</Button>
    </main>
  );
}
