import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  Container,
  ProfileWrapper,
  Image,
  ProfileDetails,
  Text,
  Name,
  OtherInfo,
  Link,
} from "./styles";

function Profile() {
  const userDetails = useContext(UserContext);

  return (
    <Container>
      {userDetails && (
        <ProfileWrapper>
          <Image src={userDetails.avatar_url} alt="github profile" />
          <ProfileDetails>
            <Name>{userDetails.name}</Name>
            <Text>Username: {userDetails.login}</Text>
            <Text>Bio: {userDetails.bio}</Text>
            <Text>Location: {userDetails.location}</Text>
            <Text>
              Blog: <Link href={userDetails.blog}>{userDetails.blog}</Link>
            </Text>

            <OtherInfo>
              <Text>Seguidores: {userDetails.followers}</Text>
              <Text>Seguindo: {userDetails.following}</Text>
              <Text>Repositórios: {userDetails.public_repos}</Text>
            </OtherInfo>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </Container>
  );
}

export default Profile;
