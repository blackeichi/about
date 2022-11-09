import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isBigState, resizeState } from "./utils/atom";

const Box = styled.div``;
const BottomIcon = styled.img<{ big: string }>`
  width: ${(props) => (props.big === "Big" ? "50px" : "40px")};
  height: ${(props) => (props.big === "Big" ? "50px" : "40px")};
  border-radius: 50%;
  position: fixed;
  right: ${(props) => (props.big === "Big" ? "20px" : "10px")};
  bottom: ${(props) => (props.big === "Big" ? "20px" : "10px")};
`;

export const Home = () => {
  const size = useRecoilValue(resizeState);
  const big = useRecoilValue(isBigState);
  return (
    <Box>
      <a href="malito:blackeichi@naver.com">이메일</a>
      <BottomIcon big={big} src={`${process.env.PUBLIC_URL}/img/rhythm.gif`} />
    </Box>
  );
};
