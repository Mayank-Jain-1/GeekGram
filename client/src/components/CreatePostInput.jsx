import React from "react";

const CreatePostInput = ({
  className,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={className}>
      <textarea
        onChange={onChange}
        type="text"
        rows={1}
        name={name}
        placeholder={placeholder}
        value={value}
        className="bg-brandBase w-full border-b p-3 outline-none min-h-12"
      />
    </div>
  );
};

export default CreatePostInput;
