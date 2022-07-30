import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 8rem;
`;

export const Input = styled.input`
  min-height: 48px;
  width: 100%;
  padding: 0 1rem;
  color: #fff;
  font-size: 22px;
  border: 1px solid #ff4757;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
  outline: none;
  text-align: center;
`;

export const SearchButton = styled.input`
  min-height: 50px;
  max-width: 30%;
  padding: 0.5em 1em;
  border: 1px solid #ff4757;
  border-radius: 0 6px 6px 0;
  background-color: #ff4757;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
