import styled from "styled-components";

export const LandingPageContainer = styled.div`
    font-size: 1.6rem;

    p {
        font-family: "Red Hat Display", sans-serif;
    }

    button {
        z-index: 1;
    }

    .container {
        width: 100%;
    }

    .content {
        width: 100%;
        max-width: 80vw;
        margin: auto;
        display: flex;
    }

    .mobile {
        display: none;
    }

    .desktop {
        display: initial;
    }

    .title {
        font-size: 4.8rem;
        color: ${(props) => props.theme["green-700"]};
    }

    .subtitle {
        font-size: 1.6rem;
        color: ${(props) => props.theme["gray-300"]};
    }

    /* -- HEADER */
    .header {
        align-items: center;
        justify-content: space-between;
        height: 15vh;
        padding: 2rem;

        img {
            height: 90%;
        }
    }

    .header-nav {
        display: flex;
        gap: 5rem;
        color: ${(props) => props.theme["gray-400"]};
        font-family: "Red Hat Display", sans-serif;
    }

    .header.content a:hover {
        text-decoration: underline;
        color: #000;
        position: relative;
    }

    .header .backgroundObject {
        position: absolute;
        opacity: 0.4;
        z-index: -1;
        left: 0;
        width: 60rem;
    }

    /* -- INTRO SECTION */
    .intro {
        height: 85vh;
        justify-content: center;
        align-items: center;
    }

    .intro .text-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }

    .intro .text-section h1 {
        font-size: 4.2rem;
    }

    .intro .text-section p {
        font-size: 2rem;
    }

    .notebookManImg {
        /* Notebook man */
        z-index: -1;
        width: 50%;
    }

    .intro .backgroundObject {
        position: absolute;
        z-index: -5;
        right: 0;
        width: 50%;
    }

    /* -- PARTNERS SECTION */
    .partners.container {
        background-color: ${(props) => props.theme["green-300"]};
    }

    .partners {
        justify-content: center;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .partners .text-section {
        text-align: center;
    }

    .partners .cards {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 10rem;
        margin: auto;
    }

    .partners .card {
        width: 100%;
        max-width: 20rem;
    }

    .partners .card img {
        width: 100%;
        object-fit: cover;
    }

    /* --DATA SECTION */
    .data.content {
        justify-content: center;
        align-items: center;
        /* height: 70vh; */
        text-align: center;
        flex-direction: column;
        gap: 10rem;
    }

    .data.content .cards {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 20rem;
    }

    .data .cards span {
        color: ${(props) => props.theme["green-500"]};
    }

    .data .card {
        display: flex;
        flex-direction: column;
    }

    .data .card h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6.4rem;
    }

    .data .card p {
        font-size: 2.4rem;
    }

    /* -- WORK SECTION */
    .work.container {
        background-color: ${(props) => props.theme["green-300"]};
    }

    .work.content {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 5rem 0;
        gap: 10rem;
    }

    .work .cards {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 5rem;
    }

    .work .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 50rem;
        flex: 1;
    }

    .work .card h4 {
        color: ${(props) => props.theme["green-700"]};
        font-size: 2rem;
    }

    .work .card p {
        color: ${(props) => props.theme["gray-300"]};
        font-size: 1.8rem;
    }

    .image-box {
        padding: 1.6rem;
        background-color: ${(props) => props.theme["green-500"]};
        border-radius: 2.4rem;
        width: 10rem;
        height: 10rem;
        margin-bottom: 2rem;
    }

    .image-box img {
        max-width: 100%;
    }

    .separator {
        border: 2px solid ${(props) => props.theme["green-500"]};
        border-radius: 2rem;
    }

    /* -- FORMS SECTION */
    .forms-section {
        padding: 10rem 0;
        justify-content: center;
        align-items: center;
        gap: 20rem;
    }

    .forms-section .text-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2rem;
    }

    .forms-section img {
        width: 60%;
    }

    .forms-section form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        box-shadow: 0 0 2px 2px ${(props) => props.theme["gray-300"]};
        border-radius: 1rem;
        padding: 2rem;
        max-width: 50rem;
        transition: box-shadow 200ms;
    }

    .forms-section form:hover {
        box-shadow: 0 0 5px 5px ${(props) => props.theme["gray-300"]};
    }

    form div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        width: 90%;
    }

    .error-yup {
        color: ${(props) => props.theme.status?.error || "#e74c3c"};
    }

    form label,
    form p {
        font-size: 2rem;
    }

    form label i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        border-radius: 4px;
        background-color: ${(props) => props.theme["green-500"]};
        color: ${(props) => props.theme.white};
    }

    form > div input {
        all: unset;
        border: 1px solid ${(props) => props.theme["gray-300"]};
        width: 100%;
        padding: 1rem;
        border-radius: 0.5rem;
    }

    form > button {
        margin: auto;
    }

    /* -- BENEFITS SECTION */
    .benefits.container {
        background-color: ${(props) => props.theme["green-300"]};
        text-align: center;
    }

    .benefits {
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        gap: 10rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 4rem;
    }

    .grid div {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 40rem;
        text-align: center;
        gap: 2rem;
    }

    .grid div img,
    .grid div i {
        font-size: 6rem;
    }

    .grid div p {
        font-size: 1.8rem;
    }

    /* -- FOOTER */
    footer.container {
        padding: 5rem;
    }

    footer .content {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    footer ul {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    footer li {
        width: 10rem;
        text-align: center;
    }

    footer ul a:hover {
        text-decoration: underline;
    }

    footer ul a {
        font-weight: 700;
    }

    footer hr {
        align-self: stretch;
        width: 60%;
        margin: auto;
        border: 1px solid ${(props) => props.theme["gray-400"]};
    }

    footer img {
        height: 6rem;
        transition: transform 200ms;
    }

    footer img:hover {
        transform: scale(1.05);
    }

    .footer-bottom {
        display: flex;
        gap: 1.2rem;
        align-items: center;

        span:hover {
            color: ${(props) => props.theme["green-600"]};
            text-decoration: underline;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 1080px) {
        width: 100vw;
        height: 100vh;
        font-size: 1.6rem;

        .content {
            width: 95vw;
            gap: 2.5rem;
            .header-btn {
                padding: 0.7rem;
                font-size: 1.5rem;
            }

            .header-nav {
                align-items: center;
            }
        }

        .intro {
            .text-section {
                h1 {
                    font-size: 2.3rem;
                }
            }

            .cards {
                .card {
                }
            }
        }

        .partners {
            .text-section {
                h1 {
                    font-size: 3.5rem;
                }
            }
            .partners {
                justify-content: center;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .partners .text-section {
                text-align: center;
            }

            .partners .cards {
                gap: 3rem;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
        }

        .data.content {
            height: auto;
            gap: 5rem;
            .text-section {
                h1 {
                    font-size: 3.5rem;
                }
            }

            .cards {
                display: flex;
                flex-direction: column;
                gap: 4rem;

                .card {
                    i {
                        font-size: 3.4rem;
                    }
                    span {
                        font-size: 4rem;
                    }
                    h2 {
                        font-size: 2.5rem;
                    }
                }
            }
        }

        .work.content {
            .text-section {
                h1 {
                    font-size: 3.5rem;
                }
            }

            .cards {
                gap: 2rem;

                .card {
                    h4 {
                        font-size: 1.8rem;
                    }
                }
            }
        }

        .forms-section {
            flex-direction: column;

            .text-section {
                h1 {
                    font-size: 3.5rem;
                }
                h2 {
                    font-size: 2.5rem;
                }
                img {
                    width: 35%;
                }
            }

            .form {
                div {
                    label {
                        font-size: 1.8rem;
                    }
                }
            }
        }

        .benefits.container {
            .title-container {
                .title {
                    font-size: 3.5rem;
                }
                .subtitle {
                    font-size: 2.5rem;
                }
            }

            .grid {
                gap: 2.2rem;

                div {
                    img {
                        width: 23%;
                    }
                    i {
                        font-size: 4rem;
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;

        .mobile {
            display: initial;
        }

        .desktop {
            display: none !important;
        }

        .content {
            width: 95vw;
        }

        .title,
        .intro .text-section h1 {
            font-size: 3rem;
        }

        .subtitle,
        .intro .text-section p {
            font-size: 1.6rem;
        }

        /* -- HEADER */
        .header {
            flex-direction: column;
            gap: 1rem;
            height: 15vh;

            .logo {
                width: 100%;
            }

            .backgroundObject {
                width: 100%;
                top: -55vh;
            }
        }

        /* -- INTRO SECTION */
        .intro {
            flex-direction: column;
            height: 85vh;
            align-items: center;
            text-align: center;

            a {
                margin: auto;
            }

            .text-section {
                h1 {
                    font-size: 2.5rem;
                    margin-top: 2.5rem;
                }
            }
        }

        .notebookManImg {
            margin: auto;
        }

        /* -- BENEFITS SECTION */
        .my-toast {
            font-size: 1rem;
        }

        /* -- PARTNERS SECTION */
        .partners {
            justify-content: center;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .partners .text-section {
            text-align: center;
        }

        .partners .cards {
            gap: 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            div:last-child {
                grid-column: 1/3;
                margin: auto;
            }
        }

        /* -- DATA SECTION */
        .data.content {
            height: auto;
            gap: 5rem;
            padding: 2rem 0;
        }

        .data.content .cards {
            display: flex;
            flex-direction: column;
            gap: 5rem;

            .card {
                h2 {
                    font-size: 5.2rem;

                    i {
                        font-size: 3.2rem;
                    }
                }
                p {
                    font-size: 2rem;
                }
            }
        }

        /* -- WORK SECTION */
        .work.content {
            gap: 5rem;
        }

        .work .cards {
            flex-direction: column;
        }

        /* -- BENEFITS SECTION */
        .benefits {
            gap: 5rem;
        }

        .grid {
            row-gap: 1.7rem;
            gap: 1rem;
        }

        .grid div img,
        .grid div i {
            font-size: 5rem;
            width: 5rem;
        }

        .grid div p,
        .grid div h1 {
            font-size: 1.3rem;
        }

        /* -- FOOTER */
        .container {
            display: flex;
        }
    }
`;
