import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Hooks/useUserAuth";

const LoginPage = () => {
  const nav = useNavigate();
  // const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginRequest = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/v1/users/login",
        data
      );
      console.log(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data.User));
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      nav("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    // login(data)
    sendLoginRequest(data);
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Logo>Aracade.IO</Logo>
        <Title>Player Login</Title>
      </Header>
      <Main>
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormControl>
            <Label htmlFor="Email">Email</Label>
            <Input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="Password">Password</Label>
            <Input
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <CTA type="submit">Login...</CTA>
        </Form>
      </Main>
      <HelperText to="/signup">Don't have an account? Signup</HelperText>
    </Container>
  );
};

export default LoginPage;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ff962c;
  text-align: center;
`;
export const Header = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const Title = styled.div`
  font-size: 32px;
  letter-spacing: 1px;
`;
export const Main = styled.div`
  flex: 2;
  width: 100%;
`;
export const Form = styled.form`
  padding: 1rem;
  height: 100%;
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;
export const Label = styled.label`
  text-align: left;
`;
export const Input = styled.input`
  height: 42px;
`;
export const CTA = styled.button`
  margin-top: 1rem;
  background-color: #ab0000;
  border: none;
  color: #fff;
  padding: 1rem;
  width: 100%;
  font-size: 24px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const HelperText = styled(Link)`
  text-decoration: none;
  color: #ff962c;
`;
