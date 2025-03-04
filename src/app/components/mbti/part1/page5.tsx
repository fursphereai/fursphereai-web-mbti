'use client'; 
import React, { useEffect, useState } from 'react';
import ImageUpload from '../ImageUpload';

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





const Page5: React.FC<BasicInfoScreenProps>  = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer  }) => {
  const [showBanner, setShowBanner] = useState(true);
  const handleCloseBanner = () => {
    setShowBanner(false);
  }
  return (
    <div className="mx-auto h-screen max-h-[650px]">
        {showBanner && (
        <div className="w-full bg-[#FEF0C7] p-4 flex items-center justify-center">
          <div className="md:w-[540px] flex items-center justify-between">
            <div className="flex flex-col items-left  ">
              <span className="md:w-[500px] w-[90%] text-sm text-[#27355D]">
                A name and image help us create a more personalized result poster for you, but feel free to skip if you're not comfortable!
              </span>
              <a
                href="#sample" 
                className="mt-[10px] text-sm text-[#27355D] underline hover:opacity-80"
              >
                View Sample
              </a>
            </div>

            <button
              onClick={handleCloseBanner}
              className="text-[#27355D] hover:opacity-80 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col md:w-[540px] mx-auto ">
        <label
          className="
            mt-[40px]
            text-[18px]
            font-[Inter]
            font-[400]
            ml-[10px]
          "
        >
          Her name is
        </label>
        <input
          type="text"
          placeholder="Please enter a name"
          className="
            w-[100%] 
            md:w-[540px] 
            md:h-[44px]
            mt-[20px]
            py-[12px] pl-[12px] pr-[130px]
            border border-[1px] border-[#717680]
            rounded-[22px]
            bg-white
            font-[Inter]
            text-[#27355D]
            focus:outline-none focus:border-[#FFC542]
            placeholder:[#C3C3C3]
          "
        />

        <label
          className="
            mt-[20px]
            mb-[20px]
            text-[18px]
            font-[Inter]
            font-[400]
            ml-[10px]
          "
        >
          Please upload her stunning photo
        </label>
        <ImageUpload />

      </div>

      <div className="mt-[40px] md:ml-[calc(50%-270px)] w-[100%] md:w-[540px] h-[44px] flex justify-between ">
        <button
          className="
            md:w-[132px] 
            md:h-[44px]
            md:rounded-[22px]
            bg-[#D1D7EF]
            text-white
            flex items-center justify-center
            hover:opacity-90
            transition-all
            w-[44px] 
            h-[44px] 
            rounded-full 
          "
          onClick={handleBack}
        >
          <span className="hidden md:block font-semibold">Previous</span>
          <svg
            className="block md:hidden" 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="
            w-[100px] h-[44px]
            rounded-[22px]
            text-black
            flex items-center justify-center
            hover:opacity-90
            border border-[1px] border-[#C3C3C3]
            transition-all
            bg-[#ffffff]
          "
          onClick={handleNext}
        >
          <span className="font-semibold">Skip</span>
        </button>

        <button
          className="
            md:w-[132px] md:h-[44px]
            md:rounded-[22px]
            text-white
            flex items-center justify-center
            hover:opacity-90
            transition-all
            bg-[#5777D0]
            w-[44px] 
            h-[44px] 
            rounded-full 
          "
          onClick={handleNext}
        >
          <span className="hidden md:block font-semibold">Next</span>
          <svg
            className="block md:hidden" 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Page5;
