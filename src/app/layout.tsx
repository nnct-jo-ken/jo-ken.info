import "#src/styles/global.css";

import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): ReactNode {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
