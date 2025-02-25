'use client'; 
import React, { useEffect, useState, useRef } from 'react';
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


const Page4: React.FC<BasicInfoScreenProps> = ({ handleNext, handleBack, step, setStep, surveyData, updateAnswer }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const ageOptions = [
    'I don\'t know',
    '0~6 months',
    '7~12 months',
    '1 year',
    '2 years',
    '3 years',
    '4 years',
    '5 years',
    '6 years',
    '7 years',
    '8 years',
    '9 years',
    '10 years',
    '11 years',
    '12 years',
    '13 years',
    '14 years',
    '14+ years',
  ];

  useEffect(() => {
    console.log('Current Survey Data:', surveyData);
  }, [surveyData]);

  const getMatchingIndex = (searchTerm: string, options: string[]) => {
    // 完全匹配
    const exactMatch = options.findIndex(age => 
      age.toLowerCase() === searchTerm.toLowerCase()
    );
    if (exactMatch !== -1) return exactMatch;

    // 开头匹配
    const startMatch = options.findIndex(age => 
      age.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    if (startMatch !== -1) return startMatch;

    // 数字匹配 - 优先匹配精确的年份
    if (/^\d+$/.test(searchTerm)) {
      // 先尝试精确匹配年份（比如 "7 years"）
      const exactYearMatch = options.findIndex(age => 
        age === `${searchTerm} year${searchTerm === '1' ? '' : 's'}`
      );
      if (exactYearMatch !== -1) return exactYearMatch;

      // 再尝试匹配包含这个数字的年份范围
      const yearRangeMatch = options.findIndex(age => 
        age.includes('year') && age.match(/\d+/)?.some(num => num === searchTerm)
      );
      if (yearRangeMatch !== -1) return yearRangeMatch;

      // 最后才匹配月份
      const monthMatch = options.findIndex(age => 
        age.includes('month') && age.match(/\d+/)?.some(num => num === searchTerm)
      );
      if (monthMatch !== -1) return monthMatch;
    }

    return -1;
  };

  useEffect(() => {
    if (searchTerm && scrollContainerRef.current) {
      const matchingOptionIndex = getMatchingIndex(searchTerm, ageOptions);
      if (matchingOptionIndex !== -1) {
        const optionHeight = 47; // 44px height + 3px gap
        scrollContainerRef.current.scrollTop = matchingOptionIndex * optionHeight;
      }
    }
  }, [searchTerm]);

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
    updateAnswer('pet_info', null, 'PetAge', age);
  };

  return (
    <div className="w-full h-[720px] bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="absolute top-[157px] left-[calc(50%-270px)] w-[540px]">
        <div className="how-old-is text-black text-[18px] font-normal">How old is she?</div>
        
        <div className="dropdown mt-5">
          <div 
            className={`drop-down border ${isDropdownOpen ? 'border-[#FFC542]' : 'border-[#717680]'} 
              rounded-[22px] h-[44px] px-3 flex items-center cursor-pointer w-[540px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <input
              type="text"
              className="flex-1 outline-none bg-transparent text-[#151B38] placeholder-[#C3C3C3] caret-[#151B38]"
              placeholder={!searchTerm ? "Age" : ""}
              value={searchTerm || selectedAge}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === '') {
                  setSelectedAge('');
                  updateAnswer('pet_info', null, 'PetAge', '');
                }
                setIsDropdownOpen(true);
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(true);
              }}
            />
            <Image 
              src="/Vector 2.svg"
              alt="dropdown arrow"
              width={10}
              height={6}
              className={`ml-auto transition-transform ${isDropdownOpen ? 'rotate-180' : ''} text-[#717680]`}
            />
          </div>

          {isDropdownOpen && (
            <div className="relative">
              <div className="absolute top-[16px] left-0 w-[180px] h-[150px] bg-white border border-[#717680] rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-[6px] z-10">
                <div className="relative h-full">
                  <div 
                    ref={scrollContainerRef}
                    className="h-full overflow-y-auto hide-scrollbar"
                    onScroll={(e) => {
                      const target = e.target as HTMLDivElement;
                      const scrollPercentage = target.scrollTop / (target.scrollHeight - target.clientHeight);
                      const scrollbarElement = target.parentElement?.querySelector('.custom-scrollbar') as HTMLDivElement;
                      if (scrollbarElement) {
                        const maxScroll = 150 - 59 - 25;
                        scrollbarElement.style.transform = `translateY(${scrollPercentage * maxScroll}px)`;
                      }
                    }}
                  >
                    <div className="flex flex-col gap-[3px]">
                      {ageOptions.map((age, index) => (
                        <div
                          key={age}
                          className={`h-[44px] min-h-[44px] w-full rounded-[22px] flex items-center px-[10px] cursor-pointer
                            ${searchTerm && getMatchingIndex(searchTerm, [age]) !== -1 ? 'bg-[#F8F8F8]' : ''} 
                            hover:bg-[#F8F8F8]`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAgeSelect(age);
                            setSearchTerm('');
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span className="text-[#151B38] text-[16px] tracking-[-0.4px]">{age}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div 
                    className="custom-scrollbar absolute right-0 w-[6px] h-[59px] bg-[#7C7C7C] rounded-[4px] transition-transform duration-200"
                    style={{
                      top: '6px'
                    }}
                  />
                </div>
              </div>
            </div>
          )}
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
            ${selectedAge ? 'bg-[#5777D0]' : 'bg-[#C3C3C3]'}`}
          onClick={handleNext}
        >
          <span className="font-semibold">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Page4;
