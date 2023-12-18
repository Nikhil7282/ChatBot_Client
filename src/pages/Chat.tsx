import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";

let chatMessages = [
  // Each message is an object with two properties: role and content
  { role: "user", content: "Hello" },
  { role: "assistant", content: "Hi, this is Bing. How can I help you?" },
  { role: "user", content: "What is the weather today?" },
  { role: "assistant", content: "It is sunny and warm today." },
  // And so on
];


const Chat = () => {
  const auth = useAuth();
  console.log(auth);
  
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" } }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You are talking to a chatbot
          </Typography>
          <Typography>
            You can ask some questions related to
            knowledge,business,advices,education,etc... But avoid sharing
            personal information
          </Typography>
          <Button sx={{width:"200px",my:"auto",color:"white",fontWeight:"700", borderRadius:3,mx:"auto",bgcolor:red[300],"hover":{bgcolor:red.A400}}}>
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            // <div>{chat.content}</div>
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        {/* <div
          style={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </div> */}
      </Box>
    </Box>
  );
};

export default Chat;
