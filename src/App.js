import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SongDetail from "./components/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import GlobalStyle from "./Theme/GlobalStyles";



/*const audioAPI = axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/2" 
});*/

function App() {
  
  return(
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    <Header />
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/album/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App;