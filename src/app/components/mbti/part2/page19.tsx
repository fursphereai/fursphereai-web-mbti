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
      Routin_Curiosity: {
          prefer_routine: string,
      },
  };
}

const reactionOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const bubbleSizes = [46, 40, 35, 30, 25, 30, 35, 40, 46]; // 中间最小，越往两边越大

interface Page19Props {
    handleNext: () => void; 
    handleBack: () => void;
    handleSkip: () => void; 
    surveyData: SurveyData;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    updateAnswer: (category: keyof SurveyData, subCategory: string, field: string, value: string) => void;
}



const Page19: React.FC<Page19Props>  = ({ 
  handleNext, 
  handleBack, 
  handleSkip, 
  step, 
  setStep, 
  surveyData, 
  updateAnswer  
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    surveyData.personality_and_behavior.Routin_Curiosity.prefer_routine || "5"
    // 默认选5
  );

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    updateAnswer("personality_and_behavior", "Routin_Curiosity", "prefer_routine", option);
  };
  
  return (
    <div className="quiz-container">
    {/* Question */}
    <div className="question-container">
          <h2>Anything else you want to tell us?</h2>
    </div>

    <input 
              type="text"
              placeholder="Tell us more about your pet"
              className="mt-[19px] px-[12px] py-[12px] w-[540px] h-[44px] rounded-[22px] border border-[#717680] bg-white text-[#27355D] focus:outline-none placeholder:[#C3C3C3] text-[16px] items-center"
      />

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
        margin-top: 0px;
      }

      .question-container {
        margin-top: 85px;
      }
      .question-container h2 {
        color: #101828;
        font-size: 18px;
      }

      /* Likert 量表 */
      .slider-container {
        margin-top: 19px;
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
        width: 540px;
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
        margin-top: 187px;
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

export default Page19;