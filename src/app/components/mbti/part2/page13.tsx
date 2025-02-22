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

interface BasicInfoScreenProps {
    handleNext: () => void; 
    handleBack: () => void;
    surveyData: SurveyData;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    updateAnswer: (category: keyof SurveyData, subCategory: any | null, field: string, value: string) => void;
}





const Page13: React.FC<BasicInfoScreenProps>  = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer  }) => {
  
  return (
    <div className="mx-auto">

     
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">

        <h2 className="text-lg font-semibold">Page13</h2>
         

         
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          onClick={handleBack}
        >
          Back
        </button>
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

export default Page13;
