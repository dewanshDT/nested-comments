import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import PostList from "./components/PostList"
import { Route, Routes } from "react-router-dom"
import { PostProvider } from "./context/PostContext"
import Post from "./components/Post"

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Routes>
          <Route path="/posts" element={<PostList />} />
          <Route
            path="/posts/:id"
            element={
              <PostProvider>
                <Post />
              </PostProvider>
            }
          />
        </Routes>
      </div>
      <p className="read-the-docs">Post List</p>
    </div>
  )
}

export default App
