"use client";

import ProgressBar from '../components/mbti/ProgressBar';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import StartScreen from '../components/mbti/part1/StartScreen'
import StartScreen2 from '../components/mbti/part1/StartScreen2';
import StartScreen3 from '../components/mbti/part1/StartScreen3';
import Page1 from '../components/mbti/part1/page1';
import Page2 from '../components/mbti/part1/page2'
import Page3 from '../components/mbti/part1/page3';
import Page4 from '../components/mbti/part1/page4';
import Page5 from '../components/mbti/part1/page5';
import Page6 from '../components/mbti/part2/page6';
import Page7 from '../components/mbti/part2/page7';
import Page8 from '../components/mbti/part2/page8';
import Page9 from '../components/mbti/part2/page9';
import Page10 from '../components/mbti/part2/page10'; 
import Page11 from '../components/mbti/part2/page11';
import Page12 from '../components/mbti/part2/page12';
import Page13 from '../components/mbti/part2/page13';
import Page14 from '../components/mbti/part2/page14';
import Page15 from '../components/mbti/part2/page15';
import Page16 from '../components/mbti/part2/page16';
import Page17 from '../components/mbti/part2/page17';
import Page18 from '../components/mbti/part2/page18';
import Page19 from '../components/mbti/part2/page19';





import EmailVerificationScreen from '../components/mbti/backup/backupfiles-jason/email/EmailVerificationScreen'
import MbtiResult from '../components/mbti/backup/backupfiles-jason/result/MbtiResult';
import StartPawfectMatch from '../components/mbti/backup/backupfiles-jason/match/StartPawfectMatch';
import PawfectMatch from '../components/mbti/backup/backupfiles-jason/match/PawfectMatch';
import PawfectMatchResult from '../components/mbti/backup/backupfiles-jason/match/PawfectMatchResult';

import {useLoggin} from '../context/LogginContext'



const PetMBTIFlow = () => {

  const { loggin, setLoggin } = useLoggin();
  const initialStep = 0; 
  const [step, setStep] = useState(initialStep);

  // 从 localStorage
    // const savedStep = localStorage.getItem('currentStep');
    // return savedStep ? parseInt(savedStep, 10) : initialStep;

  useEffect(() => {
    console.log("loggin test" + loggin);

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.step !== undefined) {
        setStep(event.state.step);
      } else {
        setStep((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // step 改变时，更新 URL 和 localStorage
    window.history.replaceState({ step }, '', `?step=${step}`);
    localStorage.setItem('currentStep', step.toString());
  }, [step]);



  type SurveyData = {
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
  };

  const [surveyData, setSurveyData] = useState<SurveyData>({
    user_info: {
      name: '',
      email: '',
      ip: '',
      mbti: ''
    },
    pet_info: {
      PetSpecies: '',
      PetBreed: '',
      PetGender: '',
      PetSex: '',
      PetAge: '',
      PetName: '',
      PetPhoto: ''
    },
    personality_and_behavior: {
      Energy_Socialization: {
        seek_attention: '',
        interact_with_toys: '',
        stranger_enter_territory: '',
      },
      Routin_Curiosity: {
        prefer_routine: '',
        friend_visit_behaviors: '',
        fur_care_7days: '',
      },
      Decision_Making: {
        react_when_sad: '',
        toy_out_of_reach: '',
        react_new_friend: '',
      },
      Structure_Spontaneity: {
        react_new_environment: '',
        respond_to_scold: '',
        follow_commands: '',
      }
    }
  });


  const updateAnswer = <
  T extends keyof typeof surveyData,
  K extends keyof typeof surveyData[T]
    >(
      category: T,
      subCategory: K | null,
      field: keyof typeof surveyData[T] | string,
      value: string
    ) => {
      setSurveyData(prev => ({
        ...prev,
        [category]: subCategory
          ? {
              ...prev[category],
              [subCategory]: {
                ...prev[category][subCategory as keyof typeof surveyData[T]],
                [field]: value
              }
            }
          : {
              ...prev[category],
              [field]: value
            }
      }));
      console.log(surveyData);
};

const handleNext = () => {
  const nextStep = step + 1;
  window.history.pushState({ step: nextStep }, '', `?step=${nextStep}`);
  setStep(nextStep);
};

const handleBack = () => {
  const lastStep = step - 1;
  window.history.pushState({ step: lastStep }, '', `?step=${lastStep}`);
  setStep(lastStep);
};


const handleNext2 = () => {
  
  setStep(7);
};
const handleNext3 = () => {
  
  setStep(8);
};
  
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header/>
      <ProgressBar step={step}/>
      <div 
        className="flex-1 flex flex-col"
        style={{
          marginTop: 'calc(var(--header-height) + 70px)',
          height: 'calc(100vh - var(--header-height) - 70px)'
        }}>
        <div className="flex-1 h-full overflow-y-auto">
          {step === 0 && loggin === false && <StartScreen handleNext={handleNext} step={step} setStep={setStep} />}
          {step === 0 &&  loggin === true && <StartScreen2 handleNext2={handleNext2} handleNext3={handleNext3}  step={step} setStep={setStep} />}
          {/* {step === 0 && <StartScreen3 handleNext={handleNext} step={step} setStep={setStep} />} */}
          {step === 1 && <Page1 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 2 && <Page2 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep} surveyData={surveyData} updateAnswer={updateAnswer}/>}
          {step === 3 && <Page3 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 4 && <Page4 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 5 && <Page5 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 6 && <Page6 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 7 && <Page7 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 8 && <Page8 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 9 && <Page9 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 10 && <Page10 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 11 && <Page11 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 12 && <Page12 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 13 && <Page13 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 14 && <Page14 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 15 && <Page15 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 16 && <Page16 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 17 && <Page17 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 18 && <Page18 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 19 && <Page19 handleNext={handleNext} handleBack={handleBack} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {/* {step === 6 && <EmailVerificationScreen handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 7 && <MbtiResult handleNext={handleNext}  step={step}setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 8 && <StartPawfectMatch handleNext={handleNext} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 9 && <PawfectMatch handleNext={handleNext} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
          {step === 10 && <PawfectMatchResult  handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>} */}
          {/* {step === 'test' && <TestScreen onComplete={() => {
            setMbtiResult('ESFP');
            setStep('result');
          }} />}
          {step === 'result' && <ResultScreen mbtiResult={mbtiResult} email={email} setEmail={setEmail} isRegistered={isRegistered} setIsRegistered={setIsRegistered} onNext={() => setStep('pawfectMatch')} />}
          {step === 'pawfectMatch' && <PawfectMatchScreen />} */}
        </div>
      </div>
    </div>
  );
};

export default PetMBTIFlow;
