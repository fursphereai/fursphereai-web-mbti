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


interface BasicInfoScreenProps {
    handleNext: () => void; 
    surveyData: SurveyData;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    updateAnswer: (category: keyof SurveyData, subCategory: any | null, field: string, value: string) => void;
}





const BasicInfoScreen: React.FC<BasicInfoScreenProps>  = ({ handleNext, step, setStep, surveyData, updateAnswer  }) => {
  
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
        Pet MBTI Test
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
        <h2 className="text-lg font-semibold">Basic info</h2>
        <ul className="text-left mt-4 space-y-2">
          <li>1. Is your pet a cat or a dog?</li>
            <input
            type="text"
            placeholder="Is your pet a cat or a dog?"
            value={surveyData.pet_info.PetSpecies}
            onChange={(e) => updateAnswer('pet_info', null, 'PetKind', e.target.value)}
            className="border p-2 w-full mt-2"
            />
          <li>2. What’s his/her name?</li>
            <input
            type="text"
            placeholder="What’s his/her name??"
            value={surveyData.pet_info.PetName}
            onChange={(e) => updateAnswer('pet_info', null, 'PetName', e.target.value)}
            className="border p-2 w-full mt-2"
            />
          <li>3. What breed is he/she?</li>
            <input
              type="text"
              placeholder="What breed is he/she?"
              value={surveyData.pet_info.PetBreed}
              onChange={(e) => updateAnswer('pet_info',  null, 'PetBreed', e.target.value)}
              className="border p-2 w-full mt-2"
              />
          <li>4. Is your pet a boy or a girl?</li>
            <input
              type="text"
              placeholder="What breed is he/she?"
              value={surveyData.pet_info.PetSex}
              onChange={(e) => updateAnswer('pet_info',  null, 'PetSex', e.target.value)}
              className="border p-2 w-full mt-2"
            />
          <li>5. How old is he/she?</li>
            <input
              type="text"
              placeholder="What breed is he/she?"
              value={surveyData.pet_info.PetAge}
              onChange={(e) => updateAnswer('pet_info',  null, 'PetAge', e.target.value)}
              className="border p-2 w-full mt-2"
            />
          <li>6. Upload a photo</li>

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

export default BasicInfoScreen;
