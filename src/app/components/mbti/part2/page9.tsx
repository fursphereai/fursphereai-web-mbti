'use client';
import React, { useState, useEffect } from 'react';

interface SurveyData {
  personality_and_behavior: {
    Energy_Socialization: {
      interact_with_toys: string;
    };
  };
}

interface Page9Props {
  handleNext: () => void;
  handleBack: () => void;
  handleSkip: () => void;
  surveyData: SurveyData;
  updateAnswer: (
    category: keyof SurveyData,
    subCategory: string,
    field: string,
    value: string
  ) => void;
}

const reactionOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const bubbleSizes = [46, 40, 35, 30, 25, 30, 35, 40, 46];

const Page9: React.FC<Page9Props> = ({
  handleNext,
  handleBack,
  handleSkip,
  surveyData,
  updateAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    surveyData.personality_and_behavior.Energy_Socialization.interact_with_toys || '5'
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showInfo, setShowInfo] = useState(true);
  const [extraMargin, setExtraMargin] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 当 `showInfo` 变化时，更新 CSS 变量
  useEffect(() => {
    if (!showInfo) {
      setExtraMargin(isMobile ? 40 : 80);
    } else {
      setExtraMargin(0);
    }
  }, [showInfo, isMobile]);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    updateAnswer('personality_and_behavior', 'Energy_Socialization', 'interact_with_toys', option);
  };

  return (
    <div className="quiz-container">
      {/* 信息提示框 */}
      {showInfo && (
        <div className="info-banner">
          <p>
            More information can help us generate a more accurate MBTI result for your pet. But if
            you are getting tired, here’s the{' '}
            <a href="#" className="shortcut-link">
              shortcut to the final step
            </a>
          </p>
          <button className="close-btn" onClick={() => setShowInfo(false)}>✕</button>
        </div>
      )}

      {/* 问题文本 */}
      <div
        className="question-container"
        style={{
          marginTop: `${extraMargin}px`,
          transition: 'margin-top 0.3s ease-in-out'
        }}
      >
        <h2>What does your pet do when your friends visit you?</h2>
      </div>


      {/* 桌面端: Bubble 选择 */}
      <div className="slider-container desktop" style={{ display: isMobile ? 'none' : 'block' }}>
        <div className="slider-options">
          {reactionOptions.map((option, index) => {
            const size = bubbleSizes[index];
            const optionValue = parseInt(option);
            const selectedValue = parseInt(selectedOption);
            const isLeft = optionValue < 5;
            const isMiddle = optionValue === 5;
            const inSelectionRange = isLeft
              ? optionValue >= selectedValue && optionValue <= 5
              : optionValue <= selectedValue && optionValue >= 5;

            const isMiddleSelected = selectedValue < 5 ? "#FFC542" : "#5777D0";
            const middleBorderColor = selectedValue < 5 ? "#FEF0C7" : "#D1D7EF";

            return (
              <div key={option} className="option-wrapper">
                <div
                  className="option-circle"
                  onClick={() => handleSelectOption(option)}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: isMiddle
                      ? isMiddleSelected
                      : inSelectionRange
                      ? isLeft
                        ? "#FFC542"
                        : "#5777D0"
                      : "#F5F5F5",
                    border: `${isMiddle || inSelectionRange ? "4px" : "1px"} solid ${
                      isMiddle
                        ? middleBorderColor
                        : inSelectionRange
                        ? isLeft
                          ? "#FEF0C7"
                          : "#D1D7EF"
                        : "#C3C3C3"
                    }`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 标签行 */}
        <div className="label-row">
          <span className="option-label">🥰Welcomes</span>
          <span className="option-label">🫣Hides</span>
        </div>
      </div>

      {/* 移动端: Slider 滑动条 */}
      <div className="slider-container mobile" style={{ display: isMobile ? "block" : "none" }}>
        <div className="slider-wrapper">
          <div className="slider-guide-line"></div>

          <input
            type="range"
            min="1"
            max="9"
            value={selectedOption}
            onChange={(e) => handleSelectOption(e.target.value)}
            className="slider"
            style={{
              background:
                Number(selectedOption) === 5
                  ? "#F5F5F5"
                  : Number(selectedOption) < 5
                  ? (() => {
                      const thumbPercent = ((Number(selectedOption) - 1) / 8) * 100;
                      return `linear-gradient(
                        to right,
                        #F5F5F5 0%,
                        #F5F5F5 ${thumbPercent}%,
                        #FFC542 ${thumbPercent}%,
                        #FFC542 50%,
                        #F5F5F5 50%,
                        #F5F5F5 100%
                      )`;
                    })()
                  : (() => {
                      const thumbPercent = ((Number(selectedOption) - 1) / 8) * 100;
                      return `linear-gradient(
                        to right,
                        #F5F5F5 0%,
                        #F5F5F5 50%,
                        #5777D0 50%,
                        #5777D0 ${thumbPercent}%,
                        #F5F5F5 ${thumbPercent}%,
                        #F5F5F5 100%
                      )`;
                    })(),
            }}
          />
        </div>

        {/* 底部标签 */}
        <div className="slider-labels">
          <span>🥰Welcomes</span>
          <span>🫣Hides</span>
        </div>
      </div>

       {/* 按钮 */}
       <div className={`button-container ${isMobile ? 'mobile' : 'desktop'}`}>
        <button className="nav-button previous" onClick={handleBack}>Previous</button>
        <button className="nav-button skip" onClick={handleSkip}>Skip</button>
        <button className="nav-button next" onClick={handleNext}>Next</button>
      </div>

      <style jsx>{`
        /* === 基础样式 === */
        body {
          font-size: 18px;
          text-align: left;
        }

        @media (max-width: 768px) {
          body {
            font-size: 16px;
            text-align: left;
          }
        }

        .quiz-container {
          max-width: 800px;
          margin: auto;
          padding: 0px 80px 0px 80px;
          text-align: left;
        }


        @media (max-width: 768px) {
          .quiz-container {
            margin: auto;
            padding: 0px;
            max-width: 600px;
            text-align: center;
          }

          .slider-container.mobile {
            width: calc(100% - 40px);
            max-width: 400px; /* 保持和 360px 版本一致 */
          }
        }

        /* 信息提示框 */
        .info-banner {
          background-color: #FEF0C7;
          color: #664d03;
          padding: 20px 20px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          width: 100vw;  
          margin-left: calc(-50vw + 50%);
          height: 80px;
        }
        
        .info-banner .content {
          max-width: 60%; /* 这里设为和 .quiz-container 一致的宽度 */
          text-align: left; /* 保持文本左对齐 */
        }

        .info-banner p {
          margin: ;
        }

        .shortcut-link {
          font-weight: bold;
          color: #0056b3;
          text-decoration: none;
        }

        .shortcut-link:hover {
          text-decoration: underline;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          color: #664d03;
          cursor: pointer;
        }

        .close-btn:hover {
          color: #b45309;
        }

        @media (max-width: 768px) {
        .info-banner {
          margin-bottom: 40px;
        }
      }

        /* === 问题容器 === */

       :root {
        --question-container-top-desktop: 0px;
        --question-container-top-mobile: 0px;
      }

        .question-container.desktop { 
          width: 540px;
          margin: auto;
          text-align: center;
          position: relative;
          top: var(--question-container-top-desktop);
        }

        .question-container.desktop h2 {
          font-size: 18px;
          color: #101828;
        }

        .question-container.mobile {
          position: relative;
          left: 0%;
          transform: none;
          width: 400px;
          text-align: left !important;
          padding: 0px 20px;
        }

        .question-container.mobile h2 {
          text-align: left !important; /* 确保标题是左对齐 */
          margin-left: 0;
          font-size: 16px;
          color: #101828;
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
          width: 100%;
          appearance: none;
          height: 12px;
          border-radius: 6px;
          outline: none;
          border: 1px solid #c3c3c3;
          transition: background 0.1s ease;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease, border 0.3s ease;
        }

        .slider-wrapper {
          position: relative;
          width: 100%;
        }

        /* 中间辅助线 */
        .slider-guide-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1.5px;
          height: 36px;
          background-color: black;
          transform: translate(-50%, -50%);
          z-index: -1; /* 位于滑条背后 */
        }
          
        /* === 滑块动态颜色 === */
        .slider[value="5"]::-webkit-slider-thumb {
          background: #5777d0;
          border: 4px solid #d1d7ef;
        }

        .slider[value="1"]::-webkit-slider-thumb,
        .slider[value="2"]::-webkit-slider-thumb,
        .slider[value="3"]::-webkit-slider-thumb,
        .slider[value="4"]::-webkit-slider-thumb {
          background: #ffc542;
          border: 4px solid #fef0c7;
        }

        .slider[value="6"]::-webkit-slider-thumb,
        .slider[value="7"]::-webkit-slider-thumb,
        .slider[value="8"]::-webkit-slider-thumb,
        .slider[value="9"]::-webkit-slider-thumb {
          background: #5777d0;
          border: 4px solid #d1d7ef;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 400px;
          margin-top: 8px;
          padding: 0 5px;
        }

        /* === 选项样式 === */
        .slider-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 80px;
          margin: auto;
        }

        .option-circle {
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 10px auto 0;
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

      
        
export default Page9;
