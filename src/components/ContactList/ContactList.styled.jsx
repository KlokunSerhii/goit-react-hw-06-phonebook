import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
  padding: 0 20px;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  align-items: center;
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
