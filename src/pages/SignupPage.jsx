import { useState } from "react";
import "./SignupPage.css";
import styled from "styled-components";
import { useAuth } from "../Hooks/useUserAuth";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const nav = useNavigate();
  // const { signup } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const sendSignupRequest = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/v1/users/register",
        data
      );
      console.log(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data.User));
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      nav("/")
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    // signup(data)
    sendSignupRequest(data);
    console.log(data);
  };

  //10101

  return (
    // <div className="App">
    <Container>
      <Header>
        <Logo>Aracade.IO</Logo>
        <Title>Sign Up New Player..</Title>
      </Header>
      <Main>
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormControl>
            <Label htmlFor="First Name">First Name</Label>
            <Input
              type="text"
              name="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="Last Name">Last Name</Label>
            <Input
              type="text"
              name="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
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
          <FormControl>
            <Label htmlFor="Phone">Phone</Label>
            <Input
              type="text"
              name="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <CTA type="submit">Signup...</CTA>
        </Form>
      </Main>
      <HelperText to="/login">Alredy have an account? Login</HelperText>
    </Container>
    // </div>
  );
};

export default SignupPage;

export const Container = styled.div`
  height: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  color: #ff962c;
  text-align: center;
`;
export const Header = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
`;
export const Logo = styled.div`
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const Title = styled.div`
  font-size: 32px;
  /* font-weight: bold; */
  letter-spacing: 1px;
`;
export const Main = styled.div`
  flex: 2;
  width: 100%;
  /* border: 1px solid white; */
`;
export const Form = styled.form`
  /* border: 1px solid white; */
  padding: 1rem;
  height: 100%;
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  /* padding-bottom: 1rem; */
`;
export const Label = styled.label`
  text-align: left;
`;
export const Input = styled.input`
  /* padding: 1rem; */
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

const HelperText = styled(Link)`
  text-decoration: none;
  color: #ff962c;
`;
