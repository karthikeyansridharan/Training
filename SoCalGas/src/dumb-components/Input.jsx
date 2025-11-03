import React from "react";

const Input = ({ style, name, htmlFor, type, placeholder, register, errors}) => {
  return (
    <div className={style.div}>
      <label className={style.label} htmlFor={htmlFor}>
        <span className={`${errors[name] ? 'text-red-500' : 'text-black'}`}>{errors[name] ? errors[name].message : name }</span>
      </label>
      <input
        className={style.input}
        type={type}
        name={htmlFor}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
