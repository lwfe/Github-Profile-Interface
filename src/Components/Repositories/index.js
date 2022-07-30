import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  Container,
  RepoWrapper,
  RepoCard,
  Title,
  Text,
  SubTitle,
  Info,
  Link,
} from "./styles";

function Repositories() {
  const { userRepos } = useContext(UserContext);

  return (
    <Container>
      {userRepos && (
        <RepoWrapper>
          {userRepos.map((repo) => (
            <RepoCard key={repo.id}>
              <Info>
                <Title>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAg0lEQVRIiWNgGI7Am4GB4QkDA8N/EvFjBgYGT2IseEyG4TD8iBgLYIpJBVj1MZFhEEmAGAvI9RHRFlAEWIhQw0iJBaNxQBCMxgFVLKAIDP04IMYHuMKfKJ8NSCp6QqIZyKnsMTEaPNEUwgw4AMXoyRa5NvMg0XEMDFBD7ZH49lCxwQEAytU4u+ch4osAAAAASUVORK5CYII="
                    alt="repository icon"
                  />
                  <Link href={repo.html_url} target="_blank">
                    {repo.name}
                  </Link>
                  <SubTitle>{repo.visibility}</SubTitle>
                  <SubTitle>{repo.full_name}</SubTitle>
                </Title>
                <Text>{repo.description || "Sem Descrição"}</Text>
                <SubTitle>{repo.language}</SubTitle>
              </Info>
            </RepoCard>
          ))}
        </RepoWrapper>
      )}
    </Container>
  );
}

export default Repositories;
