import styled from 'styled-components';
import { Form, Field } from 'formik';
export const Title = styled.h1`
  font-size: 36px;
`;
const Forma = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border: 1px solid;
  border-radius: 7px;
  padding: 20px 20px 80px 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 700;
  color: #000000;
`;

const Input = styled(Field)`
  width: 500px;
  height: 25px;
  font-size: 26px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  &:focus {
    border: 4px solid #454141;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;
const ModalDiv = styled.div`
  position: absolute;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  text-align: center;
`;
const Button = styled.button`
  position: absolute;
  right: 35px;
  bottom: 20px;
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

export { Overlay, ModalDiv, Forma, Button, Input, Label };
