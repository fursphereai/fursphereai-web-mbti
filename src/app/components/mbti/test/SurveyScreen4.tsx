'use client'; 

interface SurveyScreen4Props {
  handleNext: () => void; 
}

interface SurveyData {
  user_info: {
    email: string,
    ip: string;
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
}

interface SurveyScreen4Props {
  handleNext: () => void; 
  surveyData: SurveyData;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}

const SurveyScreen4: React.FC<SurveyScreen4Props>  = ({ handleNext,step, setStep, surveyData, updateAnswer  }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
        Pet MBTI Test
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
        <h2 className="text-lg font-semibold">Basic info</h2>
        <ul className="text-left mt-4 space-y-2">


        <li>1. How does he/she react when you’re sad? (Ignores it ↔ Comforts you immediately)</li>
            <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={surveyData.personality_and_behavior.Decision_Making.react_when_sad}
            onChange={(e) => updateAnswer('personality_and_behavior', 'Decision_Making', 'react_when_sad', e.target.value)}
            className="border p-2 w-full mt-2"
            />
        <li>2. When faced with a challenge (e.g., reaching food or a toy), does he/she:</li>
          <input
              type="text"
              placeholder="When faced with a challenge (e.g., reaching food or a toy), does he/she:"
              value={surveyData.personality_and_behavior.Decision_Making.face_challenge}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Decision_Making', 'face_challenge', e.target.value)}
              className="border p-2 w-full mt-2"
              />
        <li>3. Does he/she seem to hold grudges? (Forgets instantly ↔ Remembers and reacts later)</li>
          <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={surveyData.personality_and_behavior.Decision_Making.hold_grudges}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Decision_Making', 'hold_grudges', e.target.value)}
              className="border p-2 w-full mt-2"
              />
        </ul>
        <button 
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SurveyScreen4;
