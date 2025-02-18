import { useState } from "react";

interface SurveyData {
  user_info: {
    email: string,
    ip: string;
    name: string,
    mbti: string
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

interface StartPawfectMatchProps {
  handleNext: () => void; 
  surveyData: SurveyData;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}

const StartPawfectMatch: React.FC<StartPawfectMatchProps>  = ({ handleNext,step, setStep,  surveyData, updateAnswer  }) => {


  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
       Start Pawfect Match now
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
       <div className=" text-black text-[100px] font-bold p-3 rounded-t-lg text-center">
        Pawfect Match
      </div>
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

export default StartPawfectMatch;
