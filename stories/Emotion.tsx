import React from "react";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";

type ButtonProps = {
  primary?: boolean;
};

type ContainerProps = {
  column?: "row" | "row-reverse" | "column" | "column-reverse";
};

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;

export const Container = styled.div<ContainerProps>((props) => ({
  display: "flex",
  flexDirection: props.column || "column",
}));

export const Basic = ({ className }: { className?: string }) => (
  <div className={className}>Some Text</div>
);

export const Fancy = styled(Basic)`
  color: hotpink;
`;

export const Section = styled.section`
  background: #333;
  color: #fff;
`;
export const Aside = Section.withComponent("aside");

export const Child = styled.div`
  color: red;
`;

export const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

export const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({
    color: props.color,
  })
);

export const H1Color = styled("h1", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "color",
})((props) => ({
  color: "hotpink",
}));

const dynamicStyle = (props: { color?: string }) => css`
  color: ${props.color};
`;

export const DynamicContainer = styled.div<{ color?: string }>`
  ${dynamicStyle};
`;

export const Span = styled("span")`
  color: "lightgreen";
  & > a {
    color: "hotpink";
  }
`;
