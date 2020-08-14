import React from "react";
import styled from "styled-components";
import { bug } from "react-icons-kit/entypo/bug";
import { Icon } from "react-icons-kit";

const Error500 = () => {
  return (
    <Wrapper>
      <Icon size={50} icon={bug} />
      <h1>
        Something went wrong.. refresh the page or contact us for assistance.
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    padding: 30px;
  }
`;

export default Error500;
