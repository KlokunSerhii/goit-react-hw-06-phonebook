import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
`;
export const TitleList = styled.h2`
  font-size: 32px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 10px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  padding-bottom: 20px;
  border: 1px solid;
  border-radius: 10px;
`;
export const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: none;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 100%,
    rgba(148, 187, 233, 1) 100%
  );
  :hover {
    box-shadow: 10px 17px 36px -11px rgba(0, 51, 255, 0.84);
    fill: #454141;
  }
  svg {
    width: 30px;
    height: 30px;
    color: rgb(152, 140, 140);
    &: hover {
      color: #454141;
    }
  }
`;
export const DivFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
