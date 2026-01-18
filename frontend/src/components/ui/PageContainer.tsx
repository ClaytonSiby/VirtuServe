import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return <div className="container mx-auto px-4 max-w-7xl">{children}</div>;
}
