'use client'; 
import { useEffect, useState } from "react";

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

interface MbtiResultProps {
  handleNext: () => void; 
  surveyData: SurveyData;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}

const MbtiResult: React.FC<MbtiResultProps>  = ({ handleNext,step, setStep, surveyData, updateAnswer  }) => {

  const [result, setResult] = useState(null);

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8765");


  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     console.log("收到处理结果:", data);
  //     setResult(data);
  //   };

  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8765/");

  
    ws.onopen = () => {
      console.log("✅ WebSocket 连接成功");
    };
  
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("📩 解析 WebSocket 数据:", data);
        setResult(data);
      } catch (error) {
        console.error("⚠️ 解析 WebSocket 数据失败:", error);
      }
    };
    
  
    ws.onerror = (error) => {
      console.error("❌ WebSocket 连接错误:", error);
    };
  
    ws.onclose = () => {
      console.log("⚠️ WebSocket 连接已关闭");
    };
  
    return () => {
      ws.close();
    };
  }, []);
  

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="bg-blue-600 text-white text-xl font-bold p-3 rounded-t-lg text-center">
        Result
      </div>
      <div className="bg-gray-100 p-6 rounded-b-lg text-center">
       <div className=" text-black text-[40px] font-bold p-3 rounded-t-lg text-center">
        Picture + Text
        {result ? (
        <p>
         {result}
        </p>
      ) : (
        <p>等待数据处理...</p>
      )}
      </div>
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

export default MbtiResult;
