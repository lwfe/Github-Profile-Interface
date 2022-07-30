import { useState } from "react";
import api from "../../Services/api";
import { Container, InputGroup, Input, SearchButton } from "./styles";
import { UserContext } from "../../context/UserContext";

function App({ children }) {
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [userRepos, setUserRepos] = useState();

  function getUser(user) {
    api.get("users/" + user).then((response) => setUserDetails(response.data));
    api
      .get("users/" + user + "/repos")
      .then((response) => setUserRepos(response.data));
  }

  function handleChange(e) {
    setUser(e.target.value);
  }

  function handleClick() {
    getUser(user);
  }

  return (
    <Container>
      <UserContext.Provider value={{ userDetails, userRepos }}>
        <InputGroup>
          <Input type="text" onChange={handleChange} />
          <SearchButton type="submit" value="Search" onClick={handleClick} />
        </InputGroup>
        {children}
      </UserContext.Provider>
    </Container>
  );
}

export default App;
