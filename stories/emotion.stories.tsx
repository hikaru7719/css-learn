import React from "react";
import {
  Aside,
  Button,
  Child,
  Container,
  DynamicContainer,
  Fancy,
  H1,
  H1Color,
  Parent,
  Section,
  Span,
} from "./Emotion";

export default {
  title: "emotion/Button",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const ButtonC = () => {
  return <Button>This is my button component</Button>;
};

export const ContainerButtonC = () => {
  return (
    <Container column="column">
      <Button>This is regular button</Button>
      <Button primary>This is primary button</Button>
    </Container>
  );
};

export const FancyC = () => <Fancy />;

export const SectionC = () => {
  return (
    <div>
      <Section>This is a section</Section>
      <Aside>This is a aside</Aside>
    </div>
  );
};

export const ParentAndChildC = () => {
  return (
    <div>
      <Parent>
        <Child>child component</Child>
      </Parent>
      <Child>normal component</Child>
    </div>
  );
};

export const HeaderC = () => {
  return <H1 color="lightgreen">This is light green</H1>;
};

export const HeaderColorC = () => {
  return <H1Color color="lightgreen">This is light green</H1Color>;
};

export const DynamicContainerC = () => {
  return (
    <DynamicContainer color="lightgreen">This is light green</DynamicContainer>
  );
};

export const SpanC = () => {
  return (
    <Span>
      This is a <a>nested</a>
    </Span>
  );
};
