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
  const [tempAge, setTempAge] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentOptionRef = useRef<string>('');

  const ageOptions = [
    'Not Sure',
    '0~4 months',
    '4~8 months',
    '8~12 months',
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
    '15 years',
    '16 years',
    '17 years',
    '18 years',
    '19 years',
    '20+ years'
  ];

  useEffect(() => {
    console.log('Current Survey Data:', surveyData);
  }, [surveyData]);

  useEffect(() => {
    if (isDropdownOpen) {
      setTempAge(selectedAge);
    }
  }, [isDropdownOpen]);

  const getMatchingIndex = (searchTerm: string, options: string[]) => {
    // 过滤掉不需要的选项
    const filteredOptions = options.filter(age => 
      !age.includes('months') && age !== 'Not Sure'
    );
    
    // 如果是数字输入
    if (/^\d+$/.test(searchTerm)) {
      const inputNum = parseInt(searchTerm);
      
      // 如果输入数字大于等于20，返回"20+ years"的索引
      if (inputNum > 20) {
        return options.indexOf('20+ years');
      }
      
      // 否则匹配开头包含该数字的年份选项
      const index = filteredOptions.findIndex(age => 
        age.startsWith(searchTerm)
      );
      if (index !== -1) {
        return options.indexOf(filteredOptions[index]);
      }
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
    <div className="w-full h-[calc(100vh-116px)] bg-white overflow-hidden">
      <div className="w-[360px] h-full md:w-full bg-white mx-auto relative">
        <div className="w-full h-full md:absolute md:left-[calc(50%-270px)] md:w-[540px]">
          <div className="w-full h-full flex flex-col">
            <div className="flex-1">
              <div className="text-[16px] md:text-[18px] text-[#101828] font-inter tracking-[-0.4px] mt-[40px] md:mt-[87px] pl-5 md:pl-0">
                How old is your pet?
              </div>
              
              {/* 移动端显示原生选择器 */}
              <div className="md:hidden bg-mt-[20px] pl-5">
                <div 
                  className="w-[180px] h-[44px] rounded-[22px] border border-[#717680] px-4 py-[11px] flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={`text-[16px] font-inter ${selectedAge ? 'text-[#151B38]' : 'text-[#C3C3C3]'}`}>
                    {selectedAge || 'Age'}
                  </span>
                  <Image 
                    src="/Vector 2.svg"
                    alt="dropdown arrow"
                    width={12}
                    height={9}
                    className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </div>

                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 bg-black bg-opacity-50 z-40 overflow-hidden"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-[22px] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
                      <div className="flex justify-between items-center px-5 py-3">
                        <button 
                          className="text-[#717680] text-[16px]" 
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Cancel
                        </button>
                        <button 
                          className="text-[#5777D0] font-semibold text-[16px]" 
                          onClick={() => {
                            if (currentOptionRef.current) {
                              setSelectedAge(currentOptionRef.current);
                              updateAnswer('pet_info', null, 'PetAge', currentOptionRef.current);
                            }
                            setIsDropdownOpen(false);
                          }}
                        >
                          Save
                        </button>
                      </div>
                      <div className="relative h-[300px] overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-full h-[44px] border-t border-b border-[#EFEFEF]" />
                        </div>
                        <div 
                          className="h-full overflow-auto snap-y snap-mandatory"
                          style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollSnapType: 'y mandatory',
                            paddingTop: '128px',
                            paddingBottom: '128px'
                          }}
                          onScroll={(e) => {
                            const target = e.target as HTMLDivElement;
                            const elements = target.getElementsByClassName('age-option');
                            const containerRect = target.getBoundingClientRect();
                            const centerY = containerRect.top + containerRect.height / 2;

                            for (let i = 0; i < elements.length; i++) {
                              const element = elements[i] as HTMLElement;
                              const rect = element.getBoundingClientRect();
                              if (Math.abs(rect.top + rect.height/2 - centerY) < rect.height/2) {
                                currentOptionRef.current = element.dataset.age || '';
                                break;
                              }
                            }
                          }}
                        >
                          {ageOptions.map((age) => (
                            <div
                              key={age}
                              data-age={age}
                              className={`age-option h-[44px] flex items-center justify-center snap-center text-[20px] ${
                                currentOptionRef.current === age ? 'text-[#5777D0] font-semibold' : 'text-[#151B38]'
                              }`}
                            >
                              {age}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* 桌面端显示下拉框 */}
              <div className="hidden md:block dropdown mt-5 px-5">
                <div 
                  className={`drop-down border ${isDropdownOpen ? 'border-[#FFC542]' : 'border-[#717680]'} 
                    rounded-[22px] h-[44px] px-3 flex items-center cursor-pointer w-[540px] -ml-5 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]`}
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
            <div className="fixed left-5 right-5 bottom-[40px] md:absolute md:top-[393px] md:left-0 md:right-0 flex justify-between">
        <button 
                className="w-[44px] h-[44px] rounded-[22px] bg-[#D1D7EF] flex items-center justify-center md:w-[132px] md:p-0"
          onClick={handleBack}
        >
                <span className="hidden md:inline text-white font-semibold">Previous</span>
                <span className="md:hidden text-white">❮</span>
        </button>
        <button 
                className={`w-[44px] h-[44px] rounded-[22px] flex items-center justify-center md:w-[132px] md:p-0
                  ${selectedAge ? 'bg-[#5777D0]' : 'bg-[#C3C3C3]'}`}
          onClick={handleNext}
        >
                <span className="hidden md:inline text-white font-semibold">Next</span>
                <span className="md:hidden text-white">❯</span>
        </button>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Page4;