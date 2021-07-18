import React, { FC } from 'react';
import styled from 'styled-components';

interface ISVGIcon {
  width: string;
  height: string;
  onClick?: () => void;
}

const StyledPath = styled.path`
  fill: ${({ theme: { colors } }) => colors.mainColor};
`;

const CloseIcon: FC<ISVGIcon> = ({ width, height, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 14 14"
    >
      <StyledPath
        id="ic_close_24px"
        d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
        transform="translate(-5 -5)"
      />
    </svg>
  );
};

export default CloseIcon;
