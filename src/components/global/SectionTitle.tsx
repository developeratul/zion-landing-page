import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import { Fade } from "react-reveal";
import { Container } from "../layout/Container";

type SectionTitleProps = {
  title: string;
  description?: string;
  gradient?: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title, description, gradient } = props;
  return (
    <Container>
      <Fade>
        <div className="flex flex-col place-items-center gap-4 text-center">
          <h2
            className={cn(
              "w-full max-w-6xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl",
              poppinsBold.className,
              gradient,
              "bg-clip-text text-transparent"
            )}
          >
            {title}
          </h2>
          {description && (
            <p className="w-full max-w-lg px-2 text-lg md:max-w-xl">
              {description}
            </p>
          )}
        </div>
      </Fade>
    </Container>
  );
}
