import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

a {
  all: unset;
  cursor: pointer;
  color: inherit;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Anybody", cursive;
  font-weight: 700;
}

/* Modal */
.modal-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 10000;
    display: grid;
    place-items: center;
  }

  .modal-content {
    max-width: 60vw;
    min-width: 30vw;
    height: fit-content;
    position: absolute;
    position: relative;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 1.5rem;
    outline: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
    -5px -5px 10px rgba(0,0,0,0.1);

    animation: intro-modal 400ms;
    
    @keyframes intro-modal {
        0% {
          margin-top: 60rem;
        }
        100% {
          margin: 0;
        }
      }
  }

  @media screen and (min-width: 601px) and (max-width: 1080px){
    .modal-content {
      min-width: 70vw;
    }
  }

  @media (max-width: 600px) {
    .modal-content {
      min-width: 80vw;
    }
  }

`;
