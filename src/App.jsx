import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/main/Blogs'
import Bookmark from './components/main/Bookmark'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddedBM = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };

  const handleReadTime = (time, id) => {
    const allReadTime = time + readTime;
    setReadTime(allReadTime)
    const remainBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-x-5'>
        <Blogs
          handleAddedBM={handleAddedBM}
          handleReadTime={handleReadTime}
        ></Blogs>
        <Bookmark
          bookmarks={bookmarks}
          readTime={readTime}
        ></Bookmark>
      </div>
    </>
  )
}

export default App
