import React from 'react'
import styled from 'styled-components'
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
  CardOptionsNote,
  CardButton,
  CardLink
} from "./Signup css";
import './App.css';

export default function Signup() {
    return (
        <div >
        <CardWrapper className="teams">
          <CardHeader>
            <CardHeading>Welcome</CardHeading>
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
              <CardInput placeholder="Username" type="text" required />
            </CardFieldset>
  
            <CardFieldset>
              <CardInput placeholder="E-mail" type="text" required />
            </CardFieldset>
  
            <CardFieldset>
              <CardInput placeholder="Password" type="password" required />
              <CardIcon className="fa fa-eye" eye small />
            </CardFieldset>
  
            <CardFieldset>
              <CardOptionsNote>Or sign up below</CardOptionsNote>
  
              <CardOptions>
                <CardOptionsItem>
                  <CardIcon className="fab fa-google" big />
                </CardOptionsItem>
  
                <CardOptionsItem>
                  <CardIcon className="fab fa-twitter" big />
                </CardOptionsItem>
  
                <CardOptionsItem>
                  <CardIcon className="fab fa-facebook" big />
                </CardOptionsItem>
              </CardOptions>
            </CardFieldset>
  
            <CardFieldset>
              <CardButton type="button">Sign Up</CardButton>
            </CardFieldset>
  
            <CardFieldset>
              <CardLink>I already have an account</CardLink>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
    )
}
