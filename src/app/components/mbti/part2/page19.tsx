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





const Page19: React.FC<Page19Props>  = ({ handleNext, handleBack, handleSkip, step, setStep, surveyData, updateAnswer  }) => {
  
  return (
    <div className="quiz-container">
      {/* 问题文本 */}
      <div className="question-container">
        <h2>Anything else you want to tell us?</h2>
      </div>

      {/* Likert 量表 */}
      <div className="slider-container">
        {/* 标签行 */}
         <input 
              type="text"
              placeholder="Tell us more about your pet"
              className="label-row"
         />
        
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
        .label-row {
          w-[540px] h-[44px]
              mt-[20px]
              py-[12px] pl-[12px] pr-[130px]
              border border-[1px] border-[#717680]
              rounded-[22px]
              bg-white
              font-[Inter]
              text-[#27355D]
               focus:outline-none
              placeholder:[#C3C3C3]
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
