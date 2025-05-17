import React from 'react'

interface InputTypesProps {
    inputPlaceholder: string;
    inputType: string;
}

const Input: React.FC<InputTypesProps> = ({ inputPlaceholder,  inputType }) => {
    return (
        <input type={inputType} className='outline-0 border-[1px] border-solid border-gray-400 pl-[20px] pt-[10px] pb-[10px] pr-[10px] rounded-full' placeholder={inputPlaceholder} />
    )
}

export default Input