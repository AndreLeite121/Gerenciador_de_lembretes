import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus-within {
    border-color: #1671ed;
  }
`;

export const Label = styled.div`
  display: flex;
  padding: 14px;
  height: 50px;
  width: 120px;
  font-size: 18px;
  color: #515151;
  background-color: #ccc;
  border-radius: 1px 0 0 1px;
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  border: none;
  padding: 10px;
  flex: 1;
`;

export const Button = styled.button`
  height: 50px;
  width: 120px;
  color: #fff;
  background: #1671ed;
  border-radius: 5px;
  border: none;
  align-self: flex-end;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4285f4;
  }
`;

export const DateIcon = styled(IoIosCloseCircleOutline)`
  color: #f00;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 25px;
`;

export const LembreteItem = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: none;
`;
export const LembreteItemContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 3rem;
`;

export const LembreteHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const LembreteTitle = styled.h2`
  font-size: 20px;
`;

export const LembreteContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 4rem;
`;
