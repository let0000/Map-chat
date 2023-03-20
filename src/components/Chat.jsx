import { CloseOutlined, CommentOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAddress } from "../features/locationSlice";
import { selectTemp } from "../features/weatherSlice";
import "./Chat.css";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const GPT_API_KEY = "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";
const GPT_API_URL = `https://api.openai.com/v1/engines/text-davinci-003/completions`;

export default function Chat() {
  const [openChat, setOpenChat] = useState(false); // 채팅창을 열기 위한 변수
  const [answer, setAnswer] = useState(""); // GPT의 대답을 담는 변수
  const [question, setQuestion] = useState(""); // 선택한 질문을 담는 변수
  const [loading, setLoading] = useState(false); // 프로그레스바를 띄우기 위한 변수
  const [option, setOption] = useState(""); // 선택한 질문을 다시시도하기 위해서 필요한 변수
  const [after, setAfter] = useState(false); // 질문을 한 후 다음 요청을 받기 위한 변수
  const [inputQuestion, setInputQuestion] = useState(""); // 사용자가 입력하는 질문을 담기 위한 변수
  const [direct, setDirect] = useState(false); // 사용자가 직접입력을 선택했을 때 input 창을 띄우기 위한 변수

  const address = useSelector(selectAddress); // redux에서 가져온 주소값
  const temp = useSelector(selectTemp); // redux에서 가져온 온도
  const questiontemp = Math.round(((temp - 273.15) * 10) / 10); // 온도를 도로 나타내기 위한 변수

  const handleOptionClick = async (option) => {
    setLoading(true);
    setOption(option);

    let prompt;
    switch (option) {
      case "clothing":
        prompt = `${questiontemp}도에 입을만한 옷차림 좀 추천해줘`;

        break;
      case "restaurant":
        prompt = `${address} 주변 맛집 좀 추천해줘`;
        break;
      case "about":
        prompt = "Chat GPT가 뭔지 설명해줘";
        break;
      case "question":
        prompt = inputQuestion;
        break;
      default:
        return;
    }

    setQuestion(prompt);
    setInputQuestion("");

    console.log(question);

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${GPT_API_KEY}`,
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(
        GPT_API_URL,
        {
          prompt: prompt,
          max_tokens: 1000,
          temperature: 0.5,
          n: 1,
        },
        axiosConfig
      )
      .then((response) => {
        console.log(response.data);
        const result = response.data.choices[0].text;
        const answer = result.replace(/^\n+/, "");
        console.log(answer);
        setAnswer(answer);
        setLoading(false);
        setAfter(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAfter(true);
      });
  };

  const handleOptionReset = () => {
    setAfter(false);
    setDirect(false);
  };

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
            <div
              className="chat_container_body_question"
              style={{ display: question ? "inline-block" : "none" }}
            >
              <h4>{question}</h4>
            </div>
            {loading ? (
              <div className="chat_container_body_loading">
                <CircularProgress />
              </div>
            ) : (
              <div
                className="chat_container_body_anwser"
                style={{ display: question ? "inline-block" : "none" }}
              >
                <h4>{answer}</h4>
              </div>
            )}
          </div>
          {after ? (
            <div className="chat_container_after">
              <div className="chat_container_after_row">
                <div
                  onClick={() => handleOptionClick(option)}
                  className="chat_container_after_option"
                >
                  <h4>다시 물어보기</h4>
                </div>

                <div
                  onClick={handleOptionReset}
                  className="chat_container_after_option"
                >
                  <h4>다른 질문하기</h4>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="chat_container_footer"
              style={{ flex: direct ? "0.1" : "0.2" }}
            >
              {direct ? (
                <div className="chat_container_footer_direct">
                  <div className="chat_container_footer_input">
                    <input
                      type="text"
                      value={inputQuestion}
                      onChange={(e) => setInputQuestion(e.target.value)}
                    />
                  </div>
                  <div className="chat_container_footer_button">
                    <Button
                      onClick={() => handleOptionClick("question")}
                      className="mui_button"
                      variant="outlined"
                    >
                      질문
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="chat_container_footer_question">
                  <div className="chat_container_footer_row">
                    <div
                      onClick={() => handleOptionClick("clothing")}
                      className="chat_container_footer_option"
                    >
                      <h4>입을 옷 추천해줘</h4>
                    </div>

                    <div
                      onClick={() => handleOptionClick("restaurant")}
                      className="chat_container_footer_option"
                    >
                      <h4>주변 맛집 추천해줘</h4>
                    </div>
                  </div>
                  <div className="chat_container_footer_row">
                    <div
                      onClick={() => handleOptionClick("about")}
                      className="chat_container_footer_option"
                    >
                      <h4>Chat GPT가 뭐야</h4>
                    </div>

                    <div
                      onClick={() => setDirect(true)}
                      className="chat_container_footer_option"
                    >
                      <h4>직접 질문하기</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="chat_icon">
          <CommentOutlined onClick={() => setOpenChat(true)} />
        </div>
      )}
    </div>
  );
}
