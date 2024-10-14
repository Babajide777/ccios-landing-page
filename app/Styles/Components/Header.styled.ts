import styled from "styled-components";

export const Headerstyled = styled.header`
  background-color: #1e1e1e;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .header-content {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    .logo {
      height: 50px;
      width: auto;
      border-radius: 50%;
    }
    P {
      color: #ccc;
      margin-left: 10px;
      font-size: 20px;
      font-weight: 900;
    }
  }
`;
