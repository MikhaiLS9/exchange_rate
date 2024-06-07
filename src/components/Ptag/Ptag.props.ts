import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size: "small" | "large" | "medium";
  isError?: boolean;
  isSuccess?: boolean;
}
