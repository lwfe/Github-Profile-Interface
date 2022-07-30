import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  background: #ff6b81;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  border: 1px solid #ff6b81;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 250px;
  border-radius: 250px;
  margin: 24px;
  border: 2px solid #ff4757;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 24px;
  height: 80%;
`;

export const Name = styled.h1`
  color: #2f3542;
  font-family: Monospace;
`;
export const Text = styled.p`
  margin: 0 12px;
  font-size: 18px;
  font-family: Monospace;
  color: #2f3542;
`;

export const Link = styled.a`
  font-size: 18px;
  font-family: Monospace;
  color: #2f3542;
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
