import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import { Container } from "../layout/Container";

export default function SectionWrapper(
  props: AppProps & { noContainer?: boolean; className?: string }
) {
  const { children, noContainer = false, className } = props;
  return (
    <section className={cn("py-20", className)}>
      {noContainer ? children : <Container>{children}</Container>}
    </section>
  );
}
