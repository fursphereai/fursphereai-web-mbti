import React, { useState } from 'react';

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

interface ImageUploadProps {
  updateAnswer: (category: keyof SurveyData, subCategory: any | null, field: string, value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ updateAnswer }) => {
  const [image, setImage] = useState<File | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateAnswer('pet_info', null, 'PetPhoto', base64String);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col">
      <label
        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex items-center justify-center cursor-pointer
        border border-[1px] border-[#717680] rounded-[20px] bg-white
        font-[Inter] text-[#27355D] hover:border-[#FFC542] hover:bg-[#F9F9F9]
        transition-all duration-200 ease-in-out"
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded preview"
            className="w-full h-full object-cover rounded-[15px]"
          />
        ) : (
          <div className="text-center">
            <span className="text-3xl text-[#717680]">+</span>
            <p className="text-[#717680] mt-2 text-sm">Add image</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          style={{ width: '50px', height: '50px' }} 
        />
      </label>
    </div>
  );
};

export default ImageUpload;
