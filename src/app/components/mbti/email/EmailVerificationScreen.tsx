import { useState } from "react";

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

interface EmailVerificationScreenProps {
  handleNext: () => void; 
  surveyData: SurveyData;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateAnswer: (category: keyof SurveyData, subCategory:any  | null, field: string, value: string) => void;
}

const EmailVerificationScreen: React.FC<EmailVerificationScreenProps>  = ({ handleNext,step, setStep, surveyData, updateAnswer  }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleUpload = async () => {
    const response = await fetch('/api/uploadTestData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: email,  // 正确地传递 email
        value: surveyData  // 正确地传递 surveyData
      })
    });
    console.log('test1' + JSON.stringify(email))
    console.log('test2' + JSON.stringify(surveyData))
    console.log('test3' + JSON.stringify({
      name: email,  // 正确地传递 email
      value: surveyData  // 正确地传递 surveyData
    }))
    const data = await response.json();
    
  };

  // 处理发送验证码
  const handleSendCode = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // 模拟 API 调用
    console.log("Sending verification code to:", email);
    setIsCodeSent(true);
  };

  // 处理验证码验证
  const handleVerifyCode = () => {
    if (code === "123456") { 
      alert("Verification successful!");
      handleNext();
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      <h2 className="text-lg font-bold text-white bg-blue-600 p-3 rounded-t-lg">
        Pet MBTI Test
      </h2>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        {/* Email 输入框 */}
        <div className="mb-4">
          <label className="text-gray-700 font-semibold">
            <span className="text-red-500">*</span> Enter email to access result
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={surveyData.user_info.email}
            onChange={(e) => {
              setEmail(e.target.value)
              updateAnswer('user_info',  null, 'email', e.target.value)
            }}
            className="border p-2 w-full mt-2 rounded"
          />
        </div>

        {/* 发送验证码 */}
        <div className="mb-4">
          <label className="text-gray-700">
            Or Signup to unlock “Pawfect Match” and save all your testing records
          </label>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border p-2 w-full rounded-l bg-gray-200"
              disabled={!isCodeSent}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-r disabled:bg-gray-400"
              onClick={handleSendCode}
              disabled={isCodeSent}
            >
              {isCodeSent ? "Code Sent" : "Send Code"}
            </button>
          </div>
        </div>

        {/* "Next" 按钮 */}
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded mt-4 w-full"
          onClick={() => {
            handleUpload();
            handleNext();
          }}
          // disabled={!isCodeSent || !code}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationScreen;
