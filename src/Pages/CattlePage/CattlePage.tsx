import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { fontSize, opacity, TypographyProps } from "styled-system";
import Counting from "../IntroductionPage/Counting";
import TrendPage from "../TrendPage/TrendPage";

const frame = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;

  }
`;

const Wrapper = styled.div`
  inset: auto;
  margin: 0px;
  display: block;
  position: relative;
  box-sizing: content-box;
  min-height: 0px;
  height: 0px;
  padding-bottom: 300vh;
`;
const Fixed = styled.div`
  position: fixed;
  margin: auto;
  inset: 0px auto auto 0px;
  box-sizing: border-box;
  width: 100%;
`;

const BackgroundImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(https://static.toss.im/assets/career/2021/vision-pc@2x.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const BlackWallpaper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.25;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  text-align: center;

  color: white;
  animation: ${frame} 1s 0s 1 linear alternate;
`;

const CenterFlex = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 38px;
  font-size: 22px;
`;
type activeType = {
  opacity: number;
};
type OpaText = activeType & TypographyProps;

const TextSpan = styled.span<TypographyProps>`
  ${fontSize};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.4;
  color: rgb(255, 255, 255);
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const AbsoluteSection = styled.section<TypographyProps>`
  position: absolute;
  width: 100%;
  right: 0px;
  left: 0px;
`;

const CattlePage = () => {
  const [progress, setProgress] = useState(0);
  const [windowY, setWindowY] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);
  const blackWallpaper = useRef<HTMLDivElement>(null);
  const onLoadHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight; // padding을 포함한 높이
    const scrollHeight = event.currentTarget.scrollHeight; // overflow를 다 포함한 높이
    const scrollTop = event.currentTarget.scrollTop; // SCroll 맨 위의 높이
    console.log(containerHeight, scrollHeight, scrollTop);
  };

  const scrollHandler = (event: Event) => {
    if (!ref.current) {
      return console.log("not assigned");
    }
    const height = ref.current.clientHeight;
    const scrollPercent = window.scrollY / height;
    setProgress(Number(scrollPercent.toFixed(3)));
    console.log(Number(scrollPercent.toFixed(3)) * 100 + "%");
  };

  const styles = {
    transform: `translate(${0}px, ${progress * -20}px)`,
  };
  const easeOutSine = (x: number): number => {
    return 1 - Math.cos((x * Math.PI) / 2);
    // return Math.sin((x * Math.PI) / 2);
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(function () {
        if (!ref.current) {
          return console.log("not existed current ");
        }
        window.scrollTo(0, 0);
        let height = Number(window.scrollY / ref.current.clientHeight);
        height = Number(height.toFixed(3));
        setWindowY(height);
        setProgress(height);
      }, 100);
    });
    document.addEventListener("scroll", scrollHandler);

    return () => {
      console.log("화면에서 나간다.");
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const step = 0.16; // 총 3개의 텍스트 박스가 있고 5단계가 있다. progress가 Y가 되면 모두 멈춘다...
  const speed = 6.25; //

  return (
    <>
      <Wrapper onLoad={onLoadHandler} ref={ref}>
        <Fixed>
          <BackgroundImage
            style={{ display: progress > 4 * step ? "none" : "block" }}
          ></BackgroundImage>
          <BlackWallpaper
            ref={blackWallpaper}
            style={{
              opacity:
                progress > 4 * step
                  ? 1 - (speed - 1.25) * (progress - windowY - 4 * step) //5step
                  : progress * 1.2 + 0.25,
            }}
          ></BlackWallpaper>
          <AbsoluteSection
            style={{
              // opacity: 1 - speed * (progress - windowY), //1step
              // opacity: 1 - speed * (progress - windowY),
              opacity:
                progress > step
                  ? 0 //3step
                  : 1 - easeOutSine(progress * speed), //2step
              ...styles,
            }}
          >
            <TextBox>
              <TextSpan
                fontSize={30}
                onClick={() => {
                  console.log("click");
                }}
              >
                안녕하세요 <br /> 이제 6시입니다.
              </TextSpan>

              <CenterFlex>
                <span>여기는 사무실입니다.</span>
              </CenterFlex>
            </TextBox>
          </AbsoluteSection>
          <AbsoluteSection
            style={{
              opacity:
                progress > 2 * step && progress < 3 * step
                  ? 1 - easeOutSine(speed * (progress - 2 * step)) //3step
                  : progress > step && progress <= 2 * step
                  ? easeOutSine(speed * (progress - step))
                  : 0,
              ...styles,
            }}
          >
            <TextBox>
              <TextSpan fontSize={48}>
                정말 조용합니다.
                <br /> 감사합니다!
              </TextSpan>
            </TextBox>
          </AbsoluteSection>
          <AbsoluteSection
            style={{
              opacity:
                progress > 4 * step && progress < 5 * step
                  ? 1 - easeOutSine(speed * (progress - 4 * step)) //3step
                  : progress > 3 * step && progress <= 4 * step
                  ? easeOutSine(speed * (progress - 3 * step))
                  : 0,
              ...styles,

              // opacity:
              //   progress > 4 * step
              //     ? 1 - speed * (progress - windowY - 4 * step) //5step
              //     : speed * (progress - windowY) - 3, //4step
              // ...styles,
            }}
          >
            <TextBox>
              <TextSpan fontSize={48}>
                퇴근할까요?
                <br />
                <Counting />
              </TextSpan>
            </TextBox>
          </AbsoluteSection>
        </Fixed>
      </Wrapper>
      <TrendPage />
    </>
  );
};
export default CattlePage;
