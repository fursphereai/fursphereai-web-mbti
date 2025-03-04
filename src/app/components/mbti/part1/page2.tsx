'use client'; 
import React, { useEffect, useState,useRef, ReactElement } from 'react';

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1440px]  h-screen max-h-[650px] flex flex-col items-center justify-center">

     
      
          
        <div className=" flex flex-col  items-center  w-full mx-auto h-full ">

          <div className="  max-w-[540px] flex flex-col items-left  h-full">
            <label className="
                    mt-[40px] md:mt-[85px]
                    text-[16px] md:text-[18px]
                    font-[Inter]
                    font-[400]
                    ml-[10px]
                        ">My pet is a
            </label>

          <div className=" flex flex-row w-[320px] md:w-[540px] h-[44px] mt-[19px]">


          <div className=" relative flex flex-row w-[130px] md:w-[260px] h-[44px]">
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

          <div className="relative flex flex-row ml-[20px] w-[180px] md:w-[260px] h-[44px]">
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
                  
                  w-[300px] md:w-full
                  text-[14px] md:text-[16px]
                  leading-normal
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
              w-[320px] md:w-[540px] 
              h-[44px]
              mt-[20px]
              py-[12px] pl-[12px] 
              border border-[1px] border-[#717680]
              rounded-[22px]
              bg-white
              font-[Inter]
              text-[#27355D]
              focus:outline-none
              placeholder:[#C3C3C3]
              text-[16px]"
          />

         
          <button 
            className="
            w-[44px] md:w-[101px] 
            h-[44px]
            mt-auto md:mt-[120px]
            mb-[48px] md:mb-auto
            self-end
            rounded-[22px]
            bg-[#5777D0] 
            text-[16px]
            text-white
            "
            onClick={handleNext}
            >
              <span className="hidden md:inline">Next</span>
              <svg className="inline md:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5432 16.948L6.00057 24.4907L4.11523 22.6054L10.7152 16.0054L4.11523 9.40535L6.00057 7.52002L13.5432 15.0627C13.7932 15.3127 13.9336 15.6518 13.9336 16.0054C13.9336 16.3589 13.7932 16.698 13.5432 16.948Z" fill="white"/>
              </svg>
          </button>

          {/* <button onClick={() => setIsPopupOpen(true)}>
            Open Popup
          </button> */}

          {/* <Popup 
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSave={() => {
              // Handle save action
              setIsPopupOpen(false);
            }}
          /> */}

          
          
          </div>
           
        </div>
    </div>

  );
};



interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50">
      <div 
        className="
          fixed 
          bottom-0 
          left-0 
          right-0 
          bg-white 
          rounded-t-[20px]
          animate-slide-up
        "
      >
        {/* Header */}
        <div className="flex justify-between px-4 py-3 border-b">
          <button 
            onClick={onClose}
            className="text-[#717680] text-[16px]"
          >
            Cancel
          </button>
          <button 
            onClick={onSave}
            className="text-[#5777D0] text-[16px] font-medium"
          >
            Save
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          <div className="space-y-4">
            <div className="py-3 text-center text-[16px] text-[#27355D] active:bg-gray-100">
              Cat
            </div>
            <div className="py-3 text-center text-[16px] text-[#27355D] active:bg-gray-100">
              Dog
            </div>
            <div className="py-3 text-center text-[16px] text-[#27355D] active:bg-gray-100">
              Other
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Page2;




