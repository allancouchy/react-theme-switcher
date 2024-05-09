import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks/useTheme";

const GlobalStyleComponent = createGlobalStyle`
    body {
        background-color: ${
            props => props.mode === 'light'
            ? props.theme.color.white
            : props.theme.color.black
        };
        margin: 0;
    }
    
    * {
        box-sizing: border-box;
        font-family: "Roboto Mono", sans-serif;
        font-size: 0.9rem;
        text-decoration: none;
        color: ${
            props => props.mode === 'light'
            ? props.theme.color.black
            : props.theme.color.white
        };
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 100%;
        height: 100%;
        objec-fit: cover;
    }
`;

export const GlobalStyle = () => {
    const { theme } = useTheme()
    return <GlobalStyleComponent mode={theme} />
}