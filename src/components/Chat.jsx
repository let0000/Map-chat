import { CloseOutlined, CommentOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="chat">
      {openChat ? (
        <div className="chat_container">
          <div className="chat_container_header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png"
              alt="chatGPT 이미지"
            />
            <h4>Chat GPT</h4>
            <CloseOutlined onClick={() => setOpenChat(false)} />
          </div>
          <div className="chat_container_body">
            <div className="chat_container_body_help">
              <h4>질문을 선택해주세요</h4>
            </div>
            <div className="chat_container_body_question">
              <h4>입을 옷 추천해줘</h4>
            </div>
            <div className="chat_container_body_anwser">
              <h4>
                길게 대답해드립니다길게 대답해드립니다길게 대답해드립니다길게
                대답해드립니다길게 대답해드립니다길게 대답해드립니다길게
                대답해드립니다
              </h4>
            </div>
          </div>
          <div className="chat_container_footer">
            <div className="chat_container_footer_row">
              <div className="chat_container_footer_option">
                <h4>입을 옷 추천해줘</h4>
              </div>

              <div className="chat_container_footer_option">
                <h4>주변 맛집 추천해줘</h4>
              </div>
            </div>
            <div className="chat_container_footer_row">
              <div className="chat_container_footer_option">
                <h4>Chat GPT가 뭐야</h4>
              </div>

              <div className="chat_container_footer_option">
                <h4>직접 질문하기</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat_icon">
          <CommentOutlined onClick={() => setOpenChat(true)} />
        </div>
      )}
    </div>
  );
}
