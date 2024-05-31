import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import Profile from './components/Profile/profile';
import './App.css';

const data = {
    base: [
        { id: 1, who: "I", name: "Kirill" },
        { id: 2, who: "I", name: "Alex" }
    ],
    additional: [
        {
            id: 1,
            name: "Kirill",
            surname: "Shapovalov",
            home: "RTU_MIREA",
            parents: { mother: "Tatiana", father: "Alex" },
            photo: "https://steamuserimages-a.akamaihd.net/ugc/1937136148759549657/C24D928DE891D54F11F460DBBD00D9A7E4E5CCC6/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        },
        {
            id: 2,
            name: "Alex",
            surname: "Ivanov",
            home: "Moscow State University",
            parents: { mother: "Olga", father: "Igor" },
            photo: "https://get.pxhere.com/photo/person-girl-woman-hair-photography-portrait-model-youth-fashion-blue-lady-hairstyle-smile-long-hair-face-dress-eye-head-skin-beauty-blond-photo-shoot-brown-hair-portrait-photography-108386.jpg"
        }
    ]
};

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/:Id" element={<Main data={data} />} />
                    <Route path="/profile/:productId" element={<Profile data={data} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
