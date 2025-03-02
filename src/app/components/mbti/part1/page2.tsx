'use client'; 
import React, { useEffect, useState,useRef } from 'react';

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





const Page2: React.FC<BasicInfoScreenProps>  = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected2, setSelected2] = useState('');
  const PetSpecies: string[] =  [
    'Dog', 'Cat', 'Bird', 'Fish', 'Hamster', 
    'Rabbit', 'Guinea Pig', 'Turtle', 'Other'
  ];
 

  const getPetBreed = (petType: string): string[] => {
    switch (petType) {
      case 'Dog':
        return ['Gold', 'Blue'];
      case 'Cat':
        return ['blue cat', 'green cat', 'red cat', 'yellow cat', 'black cat', 'white cat', 'orange cat', 'gray cat', 'purple cat', 'pink cat', 'brown cat', 'Unknown'];
      default:
        return ['Male', 'Female', 'Other'];
    }
  };
  

  const PetBreed = getPetBreed(selected);

  useEffect(() => {
    setSelected2('');
  }, [selected]);

  return (
    <div className="mx-auto max-w-[1440px]   h-screen max-h-[650px]">

     
      
          
        <div className="flex flex-col  w-[540px] mx-auto h-full ">
          <label className="
                  mt-[85px]
                  text-[18px]
                  font-[Inter]
                  font-[400]
                  ml-[10px]
                      ">My pet is a
          </label>

          <div className="relative flex flex-row w-[540px] h-[44px] mt-[19px]">


          <div className="relative flex flex-row w-[260px] h-[44px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full h-full
              pl-[16px] 
              border border-[#717680] border-[1px]
              rounded-[22px]
              bg-white
              focus:outline-none focus:border-[#FFC542]
              font-[Inter]
              text-left
              ${selected ? 'text-[#27355D]' : 'text-[#C3C3C3]'}
              text-[16px]
              `}
            >
          {selected || 'Species'}
        </button>

          <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none"
              className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path 
                d="M1 1L5 5L9 1" 
                stroke="#717680" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
                {/* Dropdown menu */}
        {isOpen && (
          <div className="
            bg-[#FFFFFF]
            absolute
            top-[60px]
            w-full
            text-[16px]
            bg-white
            border border-[1px] border-[#F8F8F8]
            rounded-[22px]
            shadow-lg
            py-[6px]
            px-[6px]
            z-10
          ">
            <div className="
              max-h-[150px]
              overflow-y-auto
              pr-[15px]
            
            ">
            {PetSpecies.map((option: string) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`
            
                  px-[10px]
                  py-[13px]
                  hover:bg-[#F8F8F8]
                  cursor-pointer
                  font-[Inter]
                  text-[#27355D]
                  rounded-[22px]
                `}
              >
                {option}
              </div>
           
              ))}
            </div>
            </div>
         )}

          </div>

          <div className="relative flex flex-row ml-[20px] w-[260px] h-[44px]">
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className={`
              w-full h-full
              pl-[16px] 
              border border-[#717680] border-[1px]
              rounded-[22px]
              bg-white
              focus:outline-none focus:border-[#FFC542]
              font-[Inter]
              text-left
             ${selected2 ? 'text-[#27355D]' : 'text-[#C3C3C3]'}
              text-[16px]
          `}
          >
          {selected2 || 'Breed'}
        </button>

          <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none"
              className={`transform transition-transform duration-200 ${isOpen2 ? 'rotate-180' : ''}`}
            >
              <path 
                d="M1 1L5 5L9 1" 
                stroke="#717680" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
                {/* Dropdown menu */}
        {isOpen2 && (
          <div className="
            bg-[#FFFFFF]
            absolute
            top-[60px]
            w-full
            text-[16px]
            bg-white
            border border-[1px] border-[#F8F8F8]
            rounded-[22px]
            shadow-lg
            py-[6px]
            px-[6px]
            z-10
          ">
            <div className="
              max-h-[150px]
              overflow-y-auto
              pr-[15px]
            
            ">
            {PetBreed.map((option: string) => (
              <div
                key={option}
                onClick={() => {
                  setSelected2(option);
                  setIsOpen2(false);
                }}
                className={`
            
                  px-[10px]
                  py-[13px]
                  hover:bg-[#F8F8F8]
                  cursor-pointer
                  font-[Inter]
                  text-[#27355D]
                  rounded-[22px]
                `}
              >
                {option}
              </div>
           
              ))}
            </div>
            </div>
         )}

          </div>

          </div>




          <label className="
                  text-[16px]
                  font-[Inter]
                  font-[400]
                  text-[#A0A0A0]
                  mt-[20px] ml-[10px]
                      ">*If you can not find your pet's breed in our list, please enter here
          </label>
          <input 
              type="text"
              placeholder="Please enter a breed / species"
              className="
              w-[540px] h-[44px]
              mt-[20px]
              py-[12px] pl-[12px] pr-[130px]
              border border-[1px] border-[#717680]
              rounded-[22px]
              bg-white
              font-[Inter]
              text-[#27355D]
               focus:outline-none
              placeholder:[#C3C3C3]"
          />
           <div className=" flex flex-col justify-end h-full ">
          <button 
            className="
            w-[101px] h-[44px]
            ml-[439px] mb-[213px]
            rounded-[22px]
            px-[32px] 
            bg-[#5777D0] 
            text-[16px]
            text-white"
            onClick={handleNext}
            >
              Next
          </button>
          </div>
        </div>
    </div>

  );
};

export default Page2;
