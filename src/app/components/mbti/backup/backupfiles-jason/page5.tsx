'use client'; 

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

interface SurveyScreen5Props {
  handleNext: () => void; 
  surveyData: SurveyData;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}

const SurveyScreen5: React.FC<SurveyScreen5Props>  = ({ handleNext, step, setStep, surveyData, updateAnswer  }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
        Pet MBTI Test
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
        <h2 className="text-lg font-semibold">Basic info</h2>
        <ul className="text-left mt-4 space-y-2">

        <li>1. Does he/she prefer things a certain way (e.g., food placement, favorite spots)? (Rigid habits ↔ Goes with the flow)</li>
            <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={surveyData.personality_and_behavior.Structure_Spontaneity.prefer_structure}
            onChange={(e) => updateAnswer('personality_and_behavior', 'Structure_Spontaneity', 'prefer_structure', e.target.value)}
            className="border p-2 w-full mt-2"
            />
        <li>2. How does he/she react to unexpected changes (e.g., trip to the vet, new furniture)? (Gets stressed ↔ Adjusts quickly)</li>
          <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={surveyData.personality_and_behavior.Structure_Spontaneity.react_unexpected_change}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Structure_Spontaneity', 'react_unexpected_change', e.target.value)}
              className="border p-2 w-full mt-2"
              />
        <li>3. Is he/she more likely to follow commands or do things on his/her own terms? (Always listens ↔ Does what he/she wants)</li>
          <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={surveyData.personality_and_behavior.Structure_Spontaneity.follow_commands}
              onChange={(e) => updateAnswer('personality_and_behavior', 'Structure_Spontaneity', 'follow_commands', e.target.value)}
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

export default SurveyScreen5;
