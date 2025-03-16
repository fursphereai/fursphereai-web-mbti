'use client'; 
import React, { useEffect, useState } from 'react';
import ImageUpload from '../ImageUpload';
import { motion, AnimatePresence } from 'framer-motion';

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
    updateAnswer: (category: keyof SurveyData, subCategory: any, field: string, value: string | File) => void;
}

const Page19: React.FC<BasicInfoScreenProps>  = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer  }) => {
  
  
  const [comment, setComment] = useState('');
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/test1.svg',
    '/test2.svg',
  ];

  const handleNextClick = () => {
    setShowGallery(true);
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };



  return (

    <div className=" relative  w-full mx-auto h-[calc(100vh-40px)] md:h-[calc(100vh-140px)] max-h-[1440px]">

    {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-[600px] h-[600px] object-cover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            {currentImageIndex < images.length - 1 && (
              <button 
                onClick={handleNextImage}
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.5432 16.948L6.00057 24.4907L4.11523 22.6054L10.7152 16.0054L4.11523 9.40535L6.00057 7.52002L13.5432 15.0627C13.7932 15.3127 13.9336 15.6518 13.9336 16.0054C13.9336 16.3589 13.7932 16.698 13.5432 16.948Z" fill="#5777D0"/>
                </svg>
              </button>
            )}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-[#5777D0]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
       
      <div className=" flex flex-col w-[320px] md:w-[540px] mx-auto ">
        <label
          className= {`
            mt-[40px] md:mt-[85px]
            text-[16px] md:text-[18px]
            font-[Inter]
            font-[400]
            ml-[10px]`}
        >
          Anything else you want to tell us?
        </label>
        <input
          type="text"
          placeholder="Tell us more about your pet"
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
            placeholder:[#C3C3C3] placeholder:text-[16px] md:placeholder:text-[18px]
          "
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

      </div>

     <div className="  mx-auto w-[320px] md:w-[540px] absolute max-md:bottom-[48px] md:top-[393px] left-0 right-0 flex justify-between">
              <button 
                className="w-[44px] h-[44px] rounded-[22px] bg-[#D1D7EF] flex items-center justify-center md:w-[132px] md:p-0"
                onClick={handleBack}
              >
                <span className="hidden md:inline text-white">Previous</span>
                <svg className="inline md:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.45677 16.948L9.99943 24.4907L11.8848 22.6054L5.28477 16.0054L11.8848 9.40535L9.99943 7.52002L2.45677 15.0627C2.20681 15.3127 2.06638 15.6518 2.06638 16.0054C2.06638 16.3589 2.20681 16.698 2.45677 16.948Z" fill="white"/>
                </svg>
              </button>

              <button 
                className="w-[44px] h-[44px] rounded-[22px] flex items-center justify-center md:w-[101px] md:p-0 bg-[#5777D0]"
                onClick={handleNextClick}
              >
                <span className="hidden md:inline text-white">Next</span>
               <svg className="inline md:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="32" viewBox="0 0 16 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5432 16.948L6.00057 24.4907L4.11523 22.6054L10.7152 16.0054L4.11523 9.40535L6.00057 7.52002L13.5432 15.0627C13.7932 15.3127 13.9336 15.6518 13.9336 16.0054C13.9336 16.3589 13.7932 16.698 13.5432 16.948Z" fill="white"/>
              </svg>
              </button>

            </div>
      </div>
  );
};

export default Page19;
