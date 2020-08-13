import styled from "styled-components";
import { COLORS } from "../constants";

import UnstyledButton from "../components/UnstyledButton";

export default styled(UnstyledButton)`
  font-size: 16px;
  margin: 10px 0px 0px;
  padding: 12px;
  color: black;
  border: solid black 3px;
  transition: 0.15s;
  text-align: center;
  &:hover {
    background-color: ${COLORS.primary};
    border: solid ${COLORS.primary} 3px;
    color: white;
  }
`;
