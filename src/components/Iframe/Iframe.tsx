import React, { ReactEventHandler } from "react";
import styled from "styled-components/macro";
import { flex, FlexboxProps } from "styled-system";
import { ContainerProps } from "react-select";

const StyledIframe = styled.iframe<FlexboxProps>`
  ${flex};
  overflow-x: auto;
`;

const Iframe = ({ src, flexNumber }: { src: string; flexNumber: number }) => {
  const resizeIframe: ReactEventHandler<HTMLIFrameElement> = (event) => {
    const iframeElement = event.currentTarget;
    if (iframeElement.contentWindow) {
      iframeElement.height =
        iframeElement.contentWindow.document.body.scrollHeight + "px";
    }
  };

  return (
    <>
      <StyledIframe
        flex={flexNumber}
        src={src}
        frameBorder="0"
        scrolling="no"
        onLoad={resizeIframe}
      ></StyledIframe>
    </>
  );
};

export default Iframe;
