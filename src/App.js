import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { UserStorage } from './UserStorage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Router from './Components/Login/Router';
import User from './Components/User/User';
import Protected from './services/Protected';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './services/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <UserStorage>
          <Header />

          <main className="AppBody">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Router />} />
              <Protected path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
