'use client'; 
import React, { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar';
import Image from 'next/image';

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





const Page1: React.FC<BasicInfoScreenProps>  = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer  }) => {
  
  return (
    <div className=" bg-[#F5F5F5] h-screen ">
      
      <div className="flex flex-col  mx-auto max-w-[1440px] max-h-[720px] items-center h-full ">
        <label className="
                  mt-[40px]
                  text-[14px]
                  text-[#C3C3C3]
                  font-[400]
                  font-[Inter]
                      ">This test has two parts.
        </label>

        <label className="
                  mt-[20px]
                  text-[20px]
                  text-[#5777D0]
                  font-[600]
                  font-[Inter]
                      ">Part 1
        </label>

        <label className="
                  text-[32px]
                  text-[#27355D]
                  font-[600]
                  font-[Inter]
                      ">Basic Info
        </label>

        <Image
          src="/cat_dog.svg"
          alt="pet" 
          width={320}
          height={320}
          className="w-[320px] h-[320px]  mt-[-33px]"
        />

        <label className="
                  w-[540px]
                  text-[14px]
                  text-[#27355D]
                  font-[400]
                  font-[Inter]
                      ">Your pet’s species, breed, age, and gender, which play a crucial role in shaping their personality.
        </label>
    

       
          {/* <div className="text-left mt-4 space-y-2">
            <p>My pet is a</p>
              <input
              type="text"
              placeholder="cat or dog"
              value={surveyData.pet_info.PetSpecies}
              onChange={(e) => updateAnswer('pet_info', null, 'PetSpecies', e.target.value)}
              className="border p-2 w-full mt-2"
              />
          </div> */}
          <div className=" flex flex-col justify-end h-full ">
          <button 
            className="
            flex flex-row items-center justify-center
            w-[150px] h-[44px]
            rounded-[22px]
            mb-[156px]
            bg-[#5777D0] 
            text-[16px]
            text-white"
            onClick={handleNext}
            >
              Let’s go
              <svg 
                className="ml-2" 
                width="16" 
                height="32" 
                viewBox="0 0 16 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M13.5432 16.948L6.00057 24.4907L4.11523 22.6054L10.7152 16.0054L4.11523 9.40535L6.00057 7.52002L13.5432 15.0627C13.7932 15.3127 13.9336 15.6518 13.9336 16.0054C13.9336 16.3589 13.7932 16.698 13.5432 16.948Z" 
                  fill="currentColor"
                />
              </svg>
          </button>
          </div>

      </div>
      
    </div>
 
  );
};

export default Page1;
