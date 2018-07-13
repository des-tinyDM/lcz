import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0 0;
  padding: 0 0;
  border: 1px solid lightgrey;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 7vh;
  border-bottom: 1px solid lightgrey;

& socialmedialinks {
  font-size: 12px;
  width:20vw;
  display:flex;justify-content:space-between;
}
  & nav {
    display: flex;
    align-items: center;
    height: inherit;
    width:30vw;
  
    & .navLink {
      font-size: 2rem;
      text-decoration: none;
      margin: 0 2vw;
    }
  }
`;

export const SideNav = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95vh;
`;
