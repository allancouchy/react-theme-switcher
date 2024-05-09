import { ThemeProvider } from 'styled-components';

const styled = {
    color : {
        black: "#646681",
        white: "#fff",
    },
}

export const StyledProvider = ({ children }) => {
    return <ThemeProvider theme={styled}>{children}</ThemeProvider>;
}
