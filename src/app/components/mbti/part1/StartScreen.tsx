import React, { useState } from 'react';
import Image from 'next/image';

interface StartScreenProps {
  handleNext: () => void; 
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StartScreen: React.FC<StartScreenProps> = ({ handleNext, step, setStep }) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const faqData = [
    {
      question: "What is MBTI?",
      answer: "MBTI (Myers-Briggs Type Indicator) is a personality assessment that identifies 16 personality types based on four key dichotomies: Extraversion (E) vs. Introversion (I), Sensing (S) vs. Intuition (N), Thinking (T) vs. Feeling (F), and Judging (J) vs. Perceiving (P). It helps individuals understand their strengths, decision-making styles, and interactions with others."
    },
    {
      question: "How does the MBTI Petsonality Test work?",
      answer: "The test consists of a series of behavioral questions that assess how your pet interacts with people, environments, and routines. Based on your answers, your pet is classified into one of 16 personality types, providing insights into their social tendencies, problem-solving style, and daily habits."
    },
    {
      question: "Can pets really have personality types like humans?",
      answer: "While pets don't think the way humans do, they show distinct patterns in how they interact, learn, and react to their surroundings. Some are naturally curious and eager to explore, while others prefer familiarity and routine. This test doesn't assign deep psychology to pets but instead helps identify their behavioral tendencies in a way that makes sense to owners."
    },
    {
      question: "How can this test help me as a pet owner?",
      answer: "This test is a fun way to see the world through your pet's eyes. Maybe your dog is a social butterfly, always ready to greet new friends, or your cat is an independent observer, happiest in their own space. Some pets thrive on routine, while others embrace spontaneity.\nUnderstanding their personality can make training easier, playtime more enjoyable, and your bond even stronger. It's a simple way to appreciate what makes your fluffy angle unique and create a life that suits them perfectly."
    }
  ];

  return (
    <>
      <div className="w-full relative bg-white min-h-screen pb-20 overflow-visible font-inter b">
        <div className="relative mt-20 mx-auto w-full max-w-[1106px] flex flex-col items-center gap-20 px-5 md:gap-20 ">
          {/* Top Section with Text and Image */}
          <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-[507px] flex flex-col items-start gap-20 md:order-1">
              <div className="w-full md:w-[432px] text-[32px] text-[#27355D] order-1 leading-[40px]">
                Did you know that your pet has a unique "<span className="font-semibold text-[#5777D0]">Petsonality</span>", just like humans?
              </div>
              <div className="hidden md:block w-full text-base text-[#101828] order-2">
                <p>Some pets are naturally outgoing, love socializing, and always stay by your side, while others are more independent and prefer their own space.</p>
                <p className="mt-4">The <span className="font-semibold text-[#5777D0]">FurSphere</span> Team—a group of young pet lovers driven by curiosity and deep affection for their furry family members—has developed a series of AI-powered, engaging tests to help pet owners bridge the language gap, gain deeper insights into their pets' unique traits, and strengthen the bond between them and their furry companions, making this cherished relationship even more meaningful.</p>
              </div>
            </div>
            <div className="w-full md:w-[507px] order-2 md:order-2">
              <Image
                src="/quizpage_dog_cat.png"
                alt="Pet illustration"
                width={507}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Test Cards Section */}
          <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 px-5 md:px-0">
            {/* MBTI Petsonality Card */}
            <div className="w-[calc(100vw-40px)] md:w-full max-w-none md:max-w-[500px] relative rounded-[32px] border border-[#717680] h-[calc((100vw-40px)*0.890)] md:h-[285px]">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 md:gap-4 w-full px-4 md:px-0">
                <div className="rounded-lg bg-[#D1D7EF] h-8 px-4 flex items-center justify-center">
                  <span className="font-semibold text-[#27355D]">🎉 100% Free</span>
                </div>
                <div className="w-full text-[28px] md:text-[32px] text-[#27355D] font-semibold text-center">
                  MBTI Petsonality
                </div>
                <div className="w-full text-[14px] md:text-sm text-center text-[#717680] max-w-[280px] md:max-w-[320px]">
                  Only 3 minutes to learn what Petsonality they are and why they do things the way they do.
                </div>
              </div>
              <button 
                className="absolute bottom-10 md:bottom-8 left-1/2 -translate-x-1/2 rounded-[32px] bg-[#5777D0] h-11 px-8 text-white border-none cursor-pointer font-semibold flex items-center justify-center"
                onClick={handleNext}
              >
                Start now
              </button>
            </div>

            {/* Pawfect Match Card */}
            <div className="w-[calc(100vw-40px)] md:w-full max-w-none md:max-w-[500px] relative rounded-[32px] bg-[#F8F8F8] border border-[#717680] h-[calc((100vw-40px)*0.890)] md:h-[285px]">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 md:gap-4 w-full px-4 md:px-0">
                <div className="rounded-lg bg-[#C3C3C3] h-8 px-4 flex items-center">
                  <Image 
                    src="lock.svg"
                    alt="Lock icon"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
                <div className="w-full text-[28px] md:text-[32px] text-[#27355D] font-semibold text-center">
                  Pawfect Match Test
                </div>
                <div className="w-full text-[14px] md:text-sm text-center text-[#27355D] max-w-[280px] md:max-w-[320px]">
                  In just 1 minute, discover how well you and your pet get along, or how they bond with other pets!
                </div>
                <button className="mt-4 rounded-[32px] bg-[#27355D] h-11 px-8 text-white border-none cursor-pointer font-semibold flex items-center justify-center">
                  Login to unlock
                </button>
              </div>
            </div>
          </div>

          {/* Description Text for Mobile */}
          <div className="w-full md:hidden text-[18px] text-[#101828]">
            <p>Some pets are naturally outgoing, love socializing, and always stay by your side, while others are more independent and prefer their own space.</p>
            <p className="mt-4">The <span className="font-semibold text-[#5777D0]">FurSphere</span> Team—a group of young pet lovers driven by curiosity and deep affection for their furry family members—has developed a series of AI-powered, engaging tests to help pet owners bridge the language gap, gain deeper insights into their pets' unique traits, and strengthen the bond between them and their furry companions, making this cherished relationship even more meaningful.</p>
          </div>

          {/* FAQ Section */}
          <div className="w-full max-w-[1060px]">
            {faqData.map((item, index) => (
              <div key={index} className="w-full border-t border-[#717680] py-8">
                <div 
                  className="md:px-8 flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    if (expandedIndexes.includes(index)) {
                      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
                    } else {
                      setExpandedIndexes([...expandedIndexes, index]);
                    }
                  }}
                >
                  <div className="w-[840px] text-[24px] md:text-[28px] font-normal md:font-semibold text-[#27355D] font-inter">
                    {item.question}
                  </div>
                  <div className="transform transition-transform duration-300">
                    {expandedIndexes.includes(index) ? (
                      <Image 
                        src="/minusign.svg"
                        alt="Collapse icon"
                        width={24}
                        height={24}
                        className="w-20 h-20 md:w-12 md:h-12 opacity-70"
                      />
                    ) : (
                      <Image 
                        src="/icon.svg"
                        alt="Expand icon"
                        width={24}
                        height={24}
                        className="w-20 h-20 md:w-12 md:h-12 opacity-70"
                      />
                    )}
                  </div>
                </div>
                {expandedIndexes.includes(index) && (
                  <div className="md:px-8 pt-8 text-base text-[#27355D] leading-6">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer section */}
      <section className="w-full h-[50vh] bg-[#5777D0] relative mt-20 md:mt-20" />
    </>
  );
};
  
export default StartScreen;
  