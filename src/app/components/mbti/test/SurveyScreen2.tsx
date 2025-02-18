'use client'; 
import React, { useEffect, useState } from 'react';

interface SurveyData {
  user_info: {
    email: string,
    ip: string;
  };
  pet_info: {
    PetKind: string;
    PetName: string,
    PetBreed: string,
    PetSex: string,
    PetAge: string
  };
  personality_and_behavior: {
      Energy_Socialization: {
          seek_attention: string,
          react_new_people: string,
          behave_with_animals: string,
      },
      Routin_Curiosity: {
          prefer_routine: string,
          react_new_env: string,
          lost_in_thought: string,
      },
      Decision_Making: {
          react_when_sad: string,
          face_challenge: string,
          hold_grudges:string,
      },
      Structure_Spontaneity: {
          prefer_structure:string,
          react_unexpected_change:string,
          follow_commands:string,
      };
  };
}


interface SurveyScreen1Props {
  handleNext: () => void; 
  surveyData: SurveyData;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}




const SurveyScreen2: React.FC<SurveyScreen1Props>  = ({ handleNext, step, setStep, surveyData, updateAnswer  }) => {

  useEffect(() => {

    // 1️⃣ 记录当前步骤到浏览器历史
    console.log('Current step:', step);
    window.history.replaceState({ step: step }, '', `?step=${step}`);

    // 2️⃣ 监听浏览器后退按钮
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.step) {
        setStep(event.state.step);
      } else {
        setStep((prev) => Math.max(Number(prev) - 1, 1));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);




  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
        Pet MBTI Test
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
        <h2 className="text-lg font-semibold">Basic info</h2>
        <ul className="text-left mt-4 space-y-2">


        
            <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={surveyData.personality_and_behavior.Energy_Socialization.seek_attention}
            onChange={(e) => updateAnswer('personality_and_behavior', 'Energy_Socialization', 'seek_attention', e.target.value)}
            className="border p-2 w-full mt-2"
            />
        <li>2. How does he/she react to new people? (Shy ↔ Outgoing)?</li>
          <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={surveyData.personality_and_behavior.Energy_Socialization.react_new_people}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Energy_Socialization', 'react_new_people', e.target.value)}
              className="border p-2 w-full mt-2"
              />
        <li>3. How does he/she behave around other animals? (Avoids them ↔ Loves making new friends)</li>
          <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={surveyData.personality_and_behavior.Energy_Socialization.behave_with_animals}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Energy_Socialization', 'behave_with_animals', e.target.value)}
              className="border p-2 w-full mt-2"
              />
        </ul>
        <button 
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SurveyScreen2;
