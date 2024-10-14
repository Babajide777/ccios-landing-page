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
    height: 320px;
    width: 100%;

    fieldset {
      padding: 7px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      legend {
        background-color: #ccc;
        padding: 2px 6px;
      }
      .checkboxes {
        display: flex;
        input {
          margin: 0.4rem;
        }
      }
    }

    .postal-code-input {
      color: #ccc;
    }

    .select-option {
      display: flex;
      flex-direction: column;
      padding: 7px 0;

      label {
        color: #ccc;
        padding-bottom: 7px;
      }
      .select-field {
        font-size: 0.9rem;
        padding: 4px 5px;
        width: 100%;
        option {
          width: 100%;
        }
      }
    }

    .icon-box {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
      height: 200px;
      padding: 0 20px;
      padding-top: 20px;
      .social-media {
        border-radius: 10px;
        padding: 20px 10px;
        border: white;
        background-color: white;
        height: 50px;
        display: flex;
        align-items: center;
        .social-size {
          display: flex;
          align-items: center;
          .social-text {
            display: flex;
            flex-direction: column;
            text-align: left;
            padding-left: 10px;
            font-size: 12px;
            .bold {
              font-weight: 900;
              font-size: 16px;
            }
          }
        }
      }
    }

    h1 {
      font-size: 3em;
      margin-bottom: 20px;
      width: 70%;
      line-height: 75px;
    }

    .email-text {
      margin-bottom: 20px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .input-field {
        width: 300px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

    .submit-btn {
      display: flex;
      justify-content: center;

      .submit {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #bb9457;
        color: #1e1e1e;
        width: 130px;
        height: 40px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
        transition: background-color 0.3s ease;
        border: none;

        &:hover {
          background-color: #d4a76a;
        }
      }
    }

    p {
      color: white;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 800px) {
    .hero-content {
      width: 400px;
      border-radius: 10px;

      .icon-box {
        padding: 0 30px;
        padding-top: 20px;
      }
    }
  }
`;
