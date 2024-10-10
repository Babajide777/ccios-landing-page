import styled from "styled-components";

export const Homestyled = styled.main`
  background-color: #121212;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;

  h1,
  h2 {
    color: #d4a76a;
  }

  .features {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
  }

  @media screen and (min-width: 800px) {
    .features {
      flex-direction: row;
      gap: 20px;
    }
  }
`;
