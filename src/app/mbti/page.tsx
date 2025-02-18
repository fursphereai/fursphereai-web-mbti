"use client";


import React, { useEffect, useState } from 'react';
import StartScreen from '../components/mbti/StartScreen';
import StartScreen2 from '../components/mbti/StartScreen2';
import StartScreen3 from '../components/mbti/StartScreen3';
import SurveyScreen1 from '../components/mbti/test/SurveyScreen1';
import SurveyScreen2 from '../components/mbti/test/SurveyScreen2';
import SurveyScreen3 from '../components/mbti/test/SurveyScreen3';
import SurveyScreen4 from '../components/mbti/test/SurveyScreen4';
import SurveyScreen5 from '../components/mbti/test/SurveyScreen5';
import EmailVerificationScreen from '../components/mbti/email/EmailVerificationScreen'
import MbtiResult from '../components/mbti/result/MbtiResult';
import StartPawfectMatch from '../components/mbti/match/StartPawfectMatch';
import PawfectMatch from '../components/mbti/match/PawfectMatch';
import PawfectMatchResult from '../components/mbti/match/PawfectMatchResult';

// import TestScreen from './TestScreen';

// import ResultScreen from './ResultScreen';
// import PawfectMatchScreen from './PawfectMatchScreen';

type SurveyData = {
  user_info: {
    email: string,
    ip: string,
    name: string,
    mbti: string
  };
  pet_info: {
    PetKind: string;
    PetName: string,
    PetBreed: string,
    PetSex: string,
    PetAge: string
  };
  personality_and_behavior: {
      Energy_Socialization: {
          seek_attention: string,
          react_new_people: string,
          behave_with_animals: string,
      },
      Routin_Curiosity: {
          prefer_routine: string,
          react_new_env: string,
          lost_in_thought: string,
      },
      Decision_Making: {
          react_when_sad: string,
          face_challenge: string,
          hold_grudges:string,
      },
      Structure_Spontaneity: {
          prefer_structure:string,
          react_unexpected_change:string,
          follow_commands:string,
      };
  };
};

const PetMBTIFlow = () => {
  const initialStep = 0; 
  const [step, setStep] = useState(initialStep);

  // 从 localStorage 中读取步骤
    // const savedStep = localStorage.getItem('currentStep');
    // return savedStep ? parseInt(savedStep, 10) : initialStep;

  useEffect(() => {
    
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

  const [email, setEmail] = useState('');
  const [mbtiResult, setMbtiResult] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const [surveyData, setSurveyData] = useState<SurveyData>({
    user_info: {
      email:'',
      ip: '',
      name: '',
      mbti: ''
    },
    pet_info: {
      PetKind: '',
      PetName: '',
      PetBreed: '',
      PetSex: '',
      PetAge: ''
    },
    personality_and_behavior: {
      Energy_Socialization: {
        seek_attention: '',
        react_new_people: '',
        behave_with_animals: '',
      },
      Routin_Curiosity: {
        prefer_routine: '',
        react_new_env: '',
        lost_in_thought: '',
      },
      Decision_Making: {
        react_when_sad: '',
        face_challenge: '',
        hold_grudges: '',
      },
      Structure_Spontaneity: {
        prefer_structure: '',
        react_unexpected_change: '',
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
const handleNext2 = () => {
  
  setStep(7);
};
const handleNext3 = () => {
  
  setStep(8);
};
  
  return (
    <div className="p-4">
      {step === 0 && <StartScreen handleNext={handleNext} step={step} setStep={setStep} />}
      {/* {step === 0 && <StartScreen2 handleNext2={handleNext2} handleNext3={handleNext3}  step={step} setStep={setStep} />} */}
      {/* {step === 0 && <StartScreen3 handleNext={handleNext} step={step} setStep={setStep} />} */}
      {step === 1 && <SurveyScreen1 handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 2 && <SurveyScreen2 handleNext={handleNext} step={step} setStep={setStep} surveyData={surveyData} updateAnswer={updateAnswer}/>}
      {step === 3 && <SurveyScreen3 handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 4 && <SurveyScreen4 handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 5 && <SurveyScreen5 handleNext={handleNext} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 6 && <EmailVerificationScreen handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 7 && <MbtiResult handleNext={handleNext}  step={step}setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 8 && <StartPawfectMatch handleNext={handleNext} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 9 && <PawfectMatch handleNext={handleNext} step={step} setStep={setStep}  surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {step === 10 && <PawfectMatchResult  handleNext={handleNext} step={step} setStep={setStep} surveyData = {surveyData} updateAnswer = {updateAnswer}/>}
      {/* {step === 'test' && <TestScreen onComplete={() => {
        setMbtiResult('ESFP');
        setStep('result');
      }} />}
      {step === 'result' && <ResultScreen mbtiResult={mbtiResult} email={email} setEmail={setEmail} isRegistered={isRegistered} setIsRegistered={setIsRegistered} onNext={() => setStep('pawfectMatch')} />}
      {step === 'pawfectMatch' && <PawfectMatchScreen />} */}
    </div>
  );
};

export default PetMBTIFlow;
