import React from "react";
import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 90px;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
`;

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;

  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
`;

export const Button = styled.button`
  font-size: 1.5em;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
`;

export const Input = styled.input`
  font-size: 1.45em;
  border: 1px solid ${props => props.theme.borderColor};
`;
