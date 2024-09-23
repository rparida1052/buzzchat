import axios from 'axios'
import React, { useEffect } from 'react'

const ChatPage = () => {

  const fetchData = async () => {
    const response = await axios.get("/api/chat");
    console.log(response)
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage