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
  OtherText,
} from "./styles";

function Profile() {
  const { userDetails } = useContext(UserContext);

  return (
    <Container>
      {userDetails && (
        <ProfileWrapper>
          <Image src={userDetails.avatar_url} alt="github profile" />
          <ProfileDetails>
            <Name>{userDetails.name}</Name>
            <Text>Username: {userDetails.login}</Text>
            <Text>Bio: {userDetails.bio}</Text>

            <Text>
              Blog:
              <Link href={userDetails.blog} target="_blank">
                {userDetails.blog}
              </Link>
            </Text>
            <Text>Location: {userDetails.location}</Text>

            <OtherInfo>
              <OtherText>
                Seguidores
                <br /> {userDetails.followers}
              </OtherText>
              <OtherText>
                Seguindo <br />
                {userDetails.following}
              </OtherText>
              <OtherText>
                Repositórios <br /> {userDetails.public_repos}
              </OtherText>
            </OtherInfo>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </Container>
  );
}

export default Profile;
