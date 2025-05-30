import React from 'react'

interface ButtonTypesProps {
    buttonText: string;
    buttonBG: string;
    buttonTextColor: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonTypesProps> = ({ buttonText, buttonBG, onClick, buttonTextColor, isDisabled = false }) => {
    return (
      <button disabled={isDisabled} onClick={onClick} className={`border-0 ${isDisabled ? 'opacity-50 cursor-not-allowed': 'cursor-pointer'} outline-0 ${buttonBG} ${buttonTextColor} pr-[20px] pl-[20px] pt-[10px] pb-[10px] rounded-full cursor-pointer`}>{buttonText}</button>
    )
}

export default Button