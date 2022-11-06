import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from "./components";

const App = ()=>(
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Feed/>}/>
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route exact path="/channel/:id" element={<ChannelDetail/>}/>
      <Route exact path="/search/:searchTerm" element={<SearchFeed/>}/>
     </Routes>
    </Box>
    </BrowserRouter>
  )


export default App;
