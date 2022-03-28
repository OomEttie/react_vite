import React, { useState, ChangeEvent } from "react";

type Option = {
  value: number | string;
  label: string;
};

type SelectProps = {
  options: Option[];
};

const Select = ({ options }: SelectProps) => {
  const [value, setValue] = useState(options[0]?.value);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const mockOptions = [
  { value: "banana", label: "Banana 🍌" },
  { value: "apple", label: "Apple 🍎" },
  { value: "coconut", label: "Coconut 🥥" },
  { value: "watermelon", label: "Watermelon 🍉" },
];

// `Select` usage
export default function Generics2() {
  return (
    <>
      <h1>Generic list 2</h1>
      <Select options={mockOptions} />
    </>
  );
}
