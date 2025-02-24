'use client'; 
import React, { useEffect, useState } from 'react';
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

const Page3: React.FC<BasicInfoScreenProps> = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer }) => {
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(null);

  useEffect(() => {
    console.log('Current Survey Data:', surveyData);
  }, [surveyData]);

  const handleGenderSelect = (gender: 'boy' | 'girl') => {
    setSelectedGender(gender);
    updateAnswer('pet_info', null, 'PetGender', gender);
  };

  return (
    <div className="w-full h-[720px] bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="absolute top-[157px] left-[calc(50%-270px)] w-[540px]">
        <div className="what-gender-is text-black text-[18px] font-normal">What gender is your cat?</div>
        
        <div className="relative h-[44px] mt-5">
          <button 
            className={`absolute left-0 w-[260px] h-[44px] rounded-[22px] border border-[#717680] flex items-center justify-center gap-[10px] transition-all
              ${selectedGender === 'boy' ? 'bg-[#5777D0] text-white border-[#5777D0]' : 'bg-white text-[#5777D0]'}`}
            onClick={() => handleGenderSelect('boy')}
          >
            <div className={selectedGender === 'boy' ? 'brightness-0 invert' : ''}>
              <Image 
                src="/boy.svg" 
                alt="Boy icon" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </div>
            <span className="font-semibold text-[16px]">Boy</span>
          </button>
          
          <button 
            className={`absolute left-[280px] w-[260px] h-[44px] rounded-[22px] border border-[#717680] flex items-center justify-center gap-[10px] transition-all
              ${selectedGender === 'girl' ? 'bg-[#FFC542] text-white border-[#FFC542]' : 'bg-white text-[#FFC542]'}`}
            onClick={() => handleGenderSelect('girl')}
          >
            <div className={selectedGender === 'girl' ? 'brightness-0 invert' : ''}>
              <Image 
                src="/girl.svg" 
                alt="Girl icon" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
            </div>
            <span className="font-semibold text-[16px]">Girl</span>
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[463px] left-[calc(50%-270px)] w-[540px] h-[44px] flex justify-between">
        <button 
          className="w-[132px] h-[44px] rounded-[22px] bg-[#D1D7EF] text-white flex items-center justify-center hover:opacity-90 transition-all"
          onClick={handleBack}
        >
          <span className="font-semibold">Previous</span>
        </button>
        <button 
          className={`w-[132px] h-[44px] rounded-[22px] text-white flex items-center justify-center hover:opacity-90 transition-all
            ${selectedGender ? 'bg-[#5777D0]' : 'bg-[#C3C3C3]'}`}
          onClick={handleNext}
        >
          <span className="font-semibold">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Page3;
