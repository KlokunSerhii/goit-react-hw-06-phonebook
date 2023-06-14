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
  display: flex;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  border: none;

  background: linear-gradient(
    90deg,
    rgba(152, 140, 140, 0.9276960784313726) 0%,
    rgba(0, 36, 11, 1) 100%
  );

  svg {
    width: 30px;
    height: 30px;
    color: color: rgb(152, 140, 140);
    &: hover {
      color:  #454141;
    }
  }
`;
