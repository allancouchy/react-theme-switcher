import ThemeButton from './components/ThemeButton';
import { StyledProvider } from './context/StyledContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyle } from './styled-components/GlobalStyle';

function App() {
  return (
    <StyledProvider>
      <ThemeProvider>
        <GlobalStyle />
        <ThemeButton />
      </ThemeProvider>
    </StyledProvider >
  );
}

export default App;


