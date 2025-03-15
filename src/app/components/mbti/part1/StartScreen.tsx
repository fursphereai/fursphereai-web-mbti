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
      <div style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        paddingBottom: '80px',
        overflow: 'visible',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{
          position: 'relative',
          top: '80px',
          marginLeft: '198px',
          width: '1106px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '80px'
        }}>
          <div style={{
            alignSelf: 'stretch',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '32px'
          }}>
            <div style={{
              width: '507px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '80px'
            }}>
              <div style={{
                width: '432px',
                fontSize: '32px',
                color: '#101828'
              }}>
                Did you know that your pet has a unique "<span style={{ fontWeight: 600, color: '#5777D0' }}>Petsonality</span>", just like humans?
              </div>
              <div style={{
                alignSelf: 'stretch',
                fontSize: '16px',
                color: '#101828'
              }}>
                <p>Some pets are naturally outgoing, love socializing, and always stay by your side, while others are more independent and prefer their own space. 
                <p>&nbsp;</p>
                  The <span style={{ fontWeight: 600, color: '#5777D0' }}>FurSphere</span> Team—a group of young pet lovers driven by curiosity and deep affection for their furry family members—has developed a series of AI-powered, engaging tests to help pet owners bridge the language gap, gain deeper insights into their pets' unique traits, and strengthen the bond between them and their furry companions, making this cherished relationship even more meaningful.</p>
              </div>
            </div>
            <Image
              src="/quizpage_dog_cat.png"
              alt="Pet illustration"
              width={507}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '32px'
          }}>
            {/* MBTI Petsonality Card */}
            <div style={{
              width: '500px',
              position: 'relative',
              borderRadius: '32px',
              border: '1px solid #717680',
              height: '285px'
            }}>
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '90px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  borderRadius: '8px',
                  backgroundColor: '#D1D7EF',
                  height: '32px',
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontWeight: 600, color: '#27355D' }}>🎉 100% Free</span>
                </div>
                <div style={{
                  width: '320px',
                  fontSize: '32px',
                  color: '#27355D',
                  fontWeight: 600,
                  textAlign: 'center'
                }}>
                  MBTI Petsonality
                </div>
                <div style={{
                  width: '320px',
                  fontSize: '14px',
                  textAlign: 'center',
                  color: '#717680'
                }}>
                  Only 3 minutes to learn what Petsonality they are and why they do things the way they do.
                </div>
              </div>
              <button 
                style={{
                  position: 'absolute',
                  top: '212px',
                  left: '180px',
                  borderRadius: '32px',
                  backgroundColor: '#5777D0',
                  height: '44px',
                  padding: '0 32px',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '44px'
                }}
                onClick={handleNext}
              >
                Start now
              </button>
            </div>

            {/* Pawfect Match Card */}
            <div style={{
              width: '500px',
              position: 'relative',
              borderRadius: '32px',
              backgroundColor: '#F8F8F8',
              border: '1px solid #717680',
              height: '285px'
            }}>
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '78px',
                width: '344px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    borderRadius: '8px',
                    backgroundColor: '#C3C3C3',
                    height: '32px',
                    padding: '0 16px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Image 
                      src="lock.svg"
                      alt="Lock icon"
                      width={24}
                      height={24}
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 600,
                    textAlign: 'center',
                    color: '#27355D'
                  }}>
                    Pawfect Match Test
                  </div>
                  <div style={{
                    fontSize: '14px',
                    textAlign: 'center',
                    color: '#27355D'
                  }}>
                    In just 1 minute, discover how well you and your pet get along, or how they bond with other pets!
                  </div>
                </div>
                <button style={{
                  position: 'absolute',
                  top: '170px',
                  borderRadius: '32px',
                  backgroundColor: '#27355D',
                  height: '44px',
                  padding: '0 32px',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '44px'
                }}>
                  Login to unlock
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{
            width: '1060px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {faqData.map((item, index) => (
              <div key={index} style={{
                alignSelf: 'stretch',
                borderTop: '1px solid #717680',
                padding: '32px 0',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 32px',
                    width: '100%',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    if (expandedIndexes.includes(index)) {
                      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
                    } else {
                      setExpandedIndexes([...expandedIndexes, index]);
                    }
                  }}
                >
                  <div style={{
                    width: '840px',
                    fontSize: '32px',
                    color: '#101828'
                  }}>
                    {item.question}
                  </div>
                  <div style={{
                    transform: `rotate(${expandedIndexes.includes(index) ? '180deg' : '0deg'})`,
                    transition: 'transform 0.3s ease'
                  }}>
                    <Image 
                      src="icon.svg"
                      alt="Expand icon"
                      width={48}
                      height={48}
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                </div>
                {expandedIndexes.includes(index) && (
                  <div style={{
                    padding: '24px 32px 0 32px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#27355D',
                    animation: 'fadeIn 0.3s ease',
                    whiteSpace: 'pre-line'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 新增大型 section，只保留背景色 */}
      <section style={{
        width: '100%',
        height: '50vh',
        backgroundColor: '#5777D0',
        position: 'relative',
        marginTop: '80px'
      }} />
    </>
  );
};

export default StartScreen;
  