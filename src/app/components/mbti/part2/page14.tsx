'use client';
import React, { useState } from 'react';

interface SurveyData {
  personality_and_behavior: {
    Structure_Spontaneity: {
      follow_commands: string;
    };
  };
}

interface Page14Props {
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
const bubbleSizes = [46, 40, 35, 30, 25, 30, 35, 40, 46]; // 中间最小，越往两边越大

const Page14: React.FC<Page14Props> = ({
  handleNext,
  handleBack,
  handleSkip,
  surveyData,
  updateAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    surveyData.personality_and_behavior.Structure_Spontaneity.follow_commands || '5' // 默认选5
  );

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    updateAnswer('personality_and_behavior', 'Structure_Spontaneity', 'follow_commands', option);
  };

  return (
    <div className="quiz-container">
      {/* 问题文本 */}
      <div className="question-container">
        <h2>How well does your pet follow commands?</h2>
      </div>

      {/* Likert 量表 */}
      <div className="slider-container">
        <div className="slider-options">
          {reactionOptions.map((option, index) => {
            const size = bubbleSizes[index];
            const optionValue = parseInt(option);
            const selectedValue = parseInt(selectedOption);
            const isLeft = optionValue < 5; // 1-4 左侧，5-9 右侧

            // 计算是否在选中范围内
            const inSelectionRange = isLeft
              ? optionValue >= selectedValue && optionValue <= 5
              : optionValue <= selectedValue && optionValue >= 5;

            return (
              <div key={option} className="option-wrapper">
                <div
                  className="option-circle"
                  onClick={() => handleSelectOption(option)}
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: inSelectionRange
                      ? isLeft
                        ? '#FFC542' // 选中时左侧填充黄色
                        : '#5777D0' // 选中时右侧填充蓝色
                      : '#F5F5F5', // 未选中默认灰色
                    border: `${inSelectionRange ? '5px' : '1px'} solid ${
                      inSelectionRange
                        ? isLeft
                          ? '#FEF0C7' // 选中左侧外圈淡黄色
                          : '#D1D7EF' // 选中右侧外圈淡蓝色
                        : '#C3C3C3' // 未选中默认边框灰色
                    }`,
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* 标签行 */}
        <div className="label-row">
          <span className="option-label">🙅 Disobedient</span>
          <span className="option-label">✅ Always Follows</span>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="button-container">
        <button className="nav-button previous" onClick={handleBack}>
          Previous
        </button>
        <button className="nav-button skip" onClick={handleSkip}>
          Skip
        </button>
        <button className="nav-button next" onClick={handleNext}>
          Next
        </button>
      </div>

      {/* 样式 */}
      <style jsx>{`
        .quiz-container {
          max-width: 80%;
          margin: auto;
          padding: 20px;
          text-align: center;
        }

        .question-container {
          margin-top: 157px;
        }
        .question-container h2 {
          color: #101828;
          font-size: 18px;
        }

        /* Likert 量表 */
        .slider-container {
          margin-top: 39px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .slider-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 600px;
          height: 80px;
        }

        .option-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
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
          max-width: 600px;
          margin-top: 10px;
        }

        .option-label {
          font-size: 14px;
          color: #a0a0a0;
          font-weight: bold;
        }

        /* 按钮部分 */
        .button-container {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 100px;
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
          color: #1c1c1c;
        }

        .skip {
          width: 98px;
          height: 44px;
          background: transparent;
          border: 1px solid #c3c3c3;
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
        }

        /* 小屏幕优化 */
        @media (max-width: 480px) {
          .quiz-container {
            max-width: 90%;
            padding: 10px;
          }

          .slider-options {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }

          .option-circle {
            width: 30px !important;
            height: 30px !important;
          }

          .label-row {
            flex-direction: column;
            text-align: center;
          }

          .button-container {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .nav-button {
            width: 100%;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};



export default Page14;
