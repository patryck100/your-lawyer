import styled from "styled-components";

import { ReactComponent as CaseIconSvg } from "../../assets/case.svg";

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CaseIcon = styled(CaseIconSvg)`
  width: 24px;
  height: 24px;
`;

//setting the item-count to be in the at bottom right of the case
export const ItemCountContainer = styled.span`
  position: relative;
  font-size: 10px;
  font-weight: bold;
  top: 14px;
`;
