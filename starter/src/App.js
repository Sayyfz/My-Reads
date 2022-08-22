import "./App.css";
import { useState } from "react";
import { Routes, Route} from 'react-router-dom'
import Shelves from "./components/Shelves";
import Search from "./components/Search";

function App() {
  
  const allBooks = [[
    {
        id: 1,
        cover:  'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
        title: "The Adventures of Tom Sawyer",
        authors: ["Mark Twain" , "Test Name"]
    },
    {
        id: 2,
        cover: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
        title: "Oh, the Places You'll Go!",
        authors: ["Seuss"]
    }
  ]]

  const [currentlyReading, setCurrentlyReading] = useState([
    {
        id: 2,
        cover: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
        title: "Oh, the Places You'll Go!",
        authors: ["Seuss"]
    }
  ])

  const [wantToRead, setWantToRead] = useState([
    {
      id: 1,
      cover:  'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
      title: "The Adventures of Tom Sawyer",
      authors: ["Mark Twain" , "Test Name"]
    }
  ])

  const [read, setRead] = useState([])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element = {<Shelves currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} />}/>
        <Route path="/search" element = {<Search books={allBooks} />}/>
      </Routes>
      
    </div>
  );
}

export default App;
