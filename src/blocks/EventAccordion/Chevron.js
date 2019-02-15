import React, {PureComponent} from "react";
import styled, { css } from "styled-components";
import { string, func, bool } from "prop-types";

import AuroraChevron from "../../components/Icons/Chevron";

const Wrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  flex: 0;
  min-width: 48px;
  padding-left: 16px;
  padding-right: 8px;
  position: relative;

  && :focus {
    outline: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      > svg {
        transform: rotate(-180deg);
      }
    `};
`;

const StyledComponent = styled(AuroraChevron)`
  transition: all 0.1s linear;
  position: absolute;
  left: 17px;
  top: 26px;
`;

class Chevron extends PureComponent {
  render (){
    const { className, isOpen = false, id = null, onClick = null } = this.props;
    return (
      <Wrapper
        className={className}
        id={id}
        isOpen={isOpen}
        variant="transparent"
        onClick={onClick}
      >
        <StyledComponent id={id} size={15} onClick={onClick} />
      </Wrapper>
    )
  }
}

// const Chevron = ({ className, isOpen = false, id = null, onClick = null }) => (
//   <Wrapper
//     className={className}
//     id={id}
//     isOpen={isOpen}
//     variant="transparent"
//     onClick={onClick}
//   >
//     <StyledComponent id={id} size={15} onClick={onClick} />
//   </Wrapper>
// );

Chevron.propTypes = {
  id: string.isRequired,
  isOpen: bool.isRequired,
  onClick: func.isRequired
};

export default Chevron;