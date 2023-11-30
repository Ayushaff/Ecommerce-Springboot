import React from "react";

const HomeCard = ({product}) => {
  
  return (
    <div className="cursor-pointer
    
    flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem]">
      <div className="h-[13rem] w-[10rem] ">
        <img
          src={product.imageUrl}
          alt=""
          className="object-cover object-top h-full w-full border border-gray-200"
        />
      </div>
      <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeCard;
