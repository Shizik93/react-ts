import React from 'react';

const MySelect = ({options, defaultValue,onChangeSelect, ...props}: MySelectPropsType) => {
    return (
        <select value={props.value} onChange={(e)=>onChangeSelect(e.target.value)}>
            <option disabled value={''}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>)}

        </select>
    );
};

export default MySelect;

type MySelectPropsType = {
    options: Array<{ value: string, name: string }>,
    defaultValue: string
    onChangeSelect: (value: string) => void
} & React.SelectHTMLAttributes<HTMLSelectElement>