import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
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
