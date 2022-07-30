import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RepoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
`;

export const RepoCard = styled.div`
  width: 100%;
  background: #ff6b81;
  margin: 2rem;
  border-radius: 8px;
`;

export const Info = styled.div`
  padding: 2rem;
`;

export const Link = styled.a`
  font-family: Monospace;
  color: #2f3542;
`;

export const Title = styled.h1`
  font-family: monospace;
  font-size: 20px;
`;

export const Text = styled.p`
  font-family: monospace;
  font-size: 18px;
  text-align: justify;
`;

export const SubTitle = styled.p`
  font-family: monospace;
  font-size: 12px;
  opacity: 0.6;
`;
