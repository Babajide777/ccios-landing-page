import styled from "styled-components";

export const Headerstyled = styled.header`
  background-color: #1e1e1e;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .logo {
    max-height: 60px;
    width: auto;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  nav ul li {
    margin: 0 15px;
  }

  nav ul li a {
    color: #bb9457;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  nav ul li a:hover {
    color: #d4a76a;
  }
`;
