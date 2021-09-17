import React, {useState} from 'react'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardButton,
  CardLink
} from "../Signup css";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      setUsername("");
      setEmail("");
      setPassword("");
      const account = { username, email, password };
      fetch("localhost:9292/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(account),
      });
  };
    return (
        <div >
        <CardWrapper className="teams">
          <CardHeader>
            <CardHeading>Welcome Please Signup</CardHeading>
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
              <CardInput 
                    type="text"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </CardFieldset>
  
            <CardFieldset>
              <CardInput 
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </CardFieldset>
  
            <CardFieldset>
              <CardInput 
               type="password"
               placeholder="Password"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
              <CardIcon />
            </CardFieldset>  
            <CardFieldset>
             
  
              <CardOptions>
                <CardOptionsItem>
                  <CardIcon  />
                </CardOptionsItem>
  
                <CardOptionsItem>
                  <CardIcon />
                </CardOptionsItem>
  
                <CardOptionsItem>
                  <CardIcon />
                </CardOptionsItem>
              </CardOptions>
            </CardFieldset>
  
            <CardFieldset>
              <CardButton type="submit" onClick={handleSubmit}>Sign Up</CardButton>
            </CardFieldset>
            <CardFieldset>
              <CardLink>I already have an account</CardLink>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    )
}
{/* <BoxContainer>
            <FormContainer>
                <Input
                    
                />
                <Input
                    
                />
                <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                />
            </FormContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>
                <Link to="/quiz"> Start</Link>
            </SubmitButton>

            <MutedLink href="Home.js">
                Already have an account?
                <BoldLink>Signin</BoldLink> */}
