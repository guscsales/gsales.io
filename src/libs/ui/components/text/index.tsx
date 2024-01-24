import React from "react";
import {tv} from "tailwind-variants";

type Props = {
  as?: keyof HTMLElementTagNameMap;
  highlight?: boolean;
  family?: "sans" | "code" | "blast";
  type?: "common" | "paragraph";
};

const Text = React.forwardRef(
  (
    {
      as = "span",
      family = "sans",
      highlight = false,
      type = "common",
      children,
      className,
      ...props
    }: Props & React.HTMLAttributes<HTMLElement>,
    ref
  ) => {
    const defaultColors = React.useMemo(() => {
      if (highlight) {
        return "selection:text-blue-700 dark:selection:text-blue-100 text-zinc-900 dark:text-zinc-50";
      }

      if (!new RegExp(/text-[a-z]+-\d+/).test(className || "")) {
        return "text-zinc-600 dark:text-zinc-400";
      }

      return "";
    }, [highlight, className]);

    const defaultClassName = tv({
      base: defaultColors,
      variants: {
        family: {
          sans: "font-sans",
          code: "font-code",
          blast: "font-blast",
        },
        type: {
          common: "",
          paragraph: "leading-relaxed lg:leading-loose",
        },
      },
    });

    return React.createElement(
      as,
      {
        ref,
        ...props,
        className: defaultClassName({class: className, family, type}),
      },
      children
    );
  }
);

Text.displayName = "Text";

export default Text;
