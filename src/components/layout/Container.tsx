import { cn } from "@/lib/utils";
import type { AppProps } from "@/types";

export function Container(props: AppProps) {
  const { children } = props;
  return <div className={cn("container")}>{children}</div>;
}
