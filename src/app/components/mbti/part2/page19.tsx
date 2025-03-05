
'use client'; 
import React, { useEffect, useState } from 'react';

interface SurveyData {
  user_info: {
    name: string,
    email: string,
    ip: string;
    mbti: string
  };
  pet_info: {
    PetSpecies: string;
    PetBreed: string,
    PetGender: string,
    PetSex: string,
    PetAge: string,
    PetName: string,
    PetPhoto: string,
  };
  personality_and_behavior: {
      Energy_Socialization: {
          seek_attention: string,
          interact_with_toys: string,
          stranger_enter_territory: string,
      },
      Routin_Curiosity: {
          prefer_routine: string,
          friend_visit_behaviors: string,
          fur_care_7days: string,
      },
      Decision_Making: {
          react_when_sad: string,
          toy_out_of_reach: string,
          react_new_friend: string, 
      },
      Structure_Spontaneity: {
          react_new_environment:string,
          respond_to_scold:string,
          follow_commands:string,
      };
  };
}


interface Page19Props {
    handleNext: () => void; 
    handleBack: () => void;
    handleSkip: () => void;
    surveyData: SurveyData;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    updateAnswer: (category: keyof SurveyData, subCategory: any | null, field: string, value: string) => void;
}

const Page19: React.FC<Page19Props> = ({
  handleNext,
  handleBack,
  handleSkip,
  surveyData,
  updateAnswer
}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div className="quiz-container">
      {/* 问题文本 */}
      <div className="question-container">
        <h2>Anything else you want to tell us? </h2>
        
      </div>

      {/* 桌面端: Bubble 选择 */}
      <div className="slider-container desktop" style={{ display: isMobile ? 'none' : 'block' }}>
      <input
          type="text"
          placeholder="Tell us more about your pet"
          className="slider"
        />       
      </div>

      {/* 移动端: Slider 滑动条 */}
      <div className="slider-container mobile" style={{ display: isMobile ? "block" : "none" }}>
          <input
            type="text"
            placeholder="Tell us more about your pet"
            className="slider"
           />
      </div>

      {/* Desktop 端的按钮 */}
      <div className="button-container desktop">
        <button className="nav-button previous" onClick={handleBack}>Previous</button>
        <button className="nav-button skip" onClick={handleSkip}>Skip</button>
        <button className="nav-button next" onClick={handleNext}>Next</button>
      </div>

      {/* Mobile 端的按钮 */}
      <div className="button-container mobile">
        <button className="nav-button mobile previous" onClick={handleBack}>←</button>
        <button className="nav-button mobile skip" onClick={handleSkip}>Skip</button>
        <button className="nav-button mobile next" onClick={handleNext}>→</button>
      </div>


      <style jsx>{`
        /* === 基础样式 === */
        body {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          body {
            font-size: 16px;
            text-align: left !important;
          }
        }

        .quiz-container {
          max-width: 800px;
          margin: auto;
          padding: 80px;
          text-align: left;
        }

        @media (max-width: 768px) {
          .quiz-container {
            margin: auto;
            padding: 40px 0 40px 0;
            max-width: 400px;
            text-align: left;
          }

          .slider-container.mobile {
            width: calc(100% - 40px);
            max-width: 400px; /* 保持和 360px 版本一致 */
          }
          .question-container.mobile h2 {
          text-align: left !important;
          width: 100%;
        }   
        }

        /* === 问题容器 === */
        .question-container.desktop {
          width: 540px; /* Fixed width */
          margin: auto; 
          text-align: center;
        }

        .question-container.desktop h2 {
          font-size: 18px;
          color: #101828;
        }

        .question-container.mobile {
          top: 40px;
          left: 0%;
          transform: none;
          width: 400px;
        }

        .question-container.mobile h2 {
          text-align: left !important; /* 确保标题是左对齐 */
          margin-left: 0;
          font-size: 16px;
          color: #101828;
        }

        @media (max-width: 360px) {
          .question-container.mobile {
            width: calc(100% - 40px);
          }
        }

        /* === 选择滑块 === */
        .slider-container.desktop {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
          padding: 0 10px;
        }

        .slider-container.mobile {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px auto;
        }

        @media (max-width: 360px) {
          .slider-container.mobile {
            width: calc(100% - 40px);
          }
        }

               
        .slider {
        width: 100%; /* 默认宽度为 100% */
        appearance: none; /* 移除默认的浏览器样式 */
        margin-top: 20px; /* 上边距为 20px */
        padding: 12px 130px 12px 12px; /* 内边距：上 12px，右 130px，下 12px，左 12px */
        border: 1px solid #717680; /* 1px 的灰色实线边框 */
        border-radius: 22px; /* 圆角半径为 22px */
        background-color: white; /* 背景颜色为白色 */
        font-family: Inter, sans-serif; /* 字体为 Inter，备用字体为 sans-serif */
        color: #27355D; /* 文字颜色为深蓝色 */
        outline: none; /* 移除默认的聚焦外边框 */
        }

        /* 聚焦状态 */
       .slider:focus {
        border-color: #FFC542; /* 聚焦时边框颜色变为黄色 */
       }

       /* 占位符样式 */
       .slider::placeholder {
        color: #C3C3C3; /* 占位符文字颜色为浅灰色 */
       }

        /* === 按钮样式（桌面端） === */
        .button-container.desktop {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin-top: 160px;
          width: 100%;
        }

        .nav-button {
          font-size: 16px;
          cursor: pointer;
          border-radius: 22px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .previous {
          width: 132px;
          height: 44px;
          background: #d1d7ef;
          color: white;
          font-weight: bold !important;
        }

        .skip {
          width: 98px;
          height: 44px;
          background: transparent;
          border: 1px solid #c3c3c3;
          font-weight: bold !important;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .skip:hover {
          background: #f5f5f5;
        }

        .next {
          width: 101px;
          height: 44px;
          background: #5777d0;
          color: white;
          border: none;
          font-weight: bold !important;
        }

        /* === 按钮样式（移动端） === */
        .button-container.mobile {
          position: fixed;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: calc(100% - 40px);
          max-width: 400px; /* 允许更大一点的空间 */
        }

        @media (max-width: 360px) {
          .button-container.mobile {
            width: calc(100% - 40px);
          }
        }

        .nav-button.mobile {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          border: none;
          background: #5777d0;
          color: white;
        }

        .previous.mobile {
          background: #d1d7ef;
        }

        .skip.mobile {
          width: 98px;
          border-radius: 22px;
          background: white;
          border: 1px solid #c3c3c3;
          color: black;
          font-size: 16px;
        }

        .skip.mobile:hover {
          background: #f5f5f5;
        }

        /* === 响应式设计 === */
        @media (max-width: 768px) {
          .button-container.desktop {
            display: none;
          }
          .button-container.mobile {
            display: flex;
          }
        }

        @media (min-width: 769px) {
          .button-container.mobile {
            display: none;
          }
          .button-container.desktop {
            display: flex;
          }
        }
      `}</style>
            </div>
          );
        };



export default Page19;
