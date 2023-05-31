import React from 'react';
import './reset.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProjectWritingForm from './components/ProjectWritingForm/ProjectWritingForm';
import Main from './pages/Main/Main';
import styles from './index.module.scss';
import Header from './components/Header/Header';
import Project from './pages/Project';
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <Routes>
          {/* 메인 게시글 리스트*/}
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* 게시글 생성(type=study/side-project) */}
          <Route path="/create/:type" element={<ProjectWritingForm />} />
          {/* 게시글 확인 */}
          <Route path="/project/:id" element={<Project />} />
          {/* 유저관련 */}
          {/* <Route path="/login" element={}/> */}
          {/* <Route path="/register" element={}/> */}
          {/* <Route path="/user/editPw" element={}/> */}
          {/* <Route path="/user/delete" element={}/> */}
          <Route path="/user/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
