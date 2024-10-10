import styled from "styled-components";

export const Herostyled = styled.div`
  background-image: url("/assets/relaxation-room.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    height: 300px;
    width: 100%;
    /* border-radius: 5px; */

    h1 {
      font-size: 3em;
      margin-bottom: 20px;
      width: 70%;
      line-height: 75px;
    }

    p {
      color: white;
      margin-bottom: 20px;
    }

    .button {
      display: flex;
      justify-content: center;
    }

    .cta-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #bb9457;
      color: #1e1e1e;
      width: 130px;
      height: 50px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #d4a76a;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .hero-content {
      width: 350px;
      border-radius: 10px;
    }
  }
`;
