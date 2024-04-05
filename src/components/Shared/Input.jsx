const Input = ({ label, text, ...props }) => {
  return (
    <div className="flex flex-col mb-4 p-1 border border-2 rounded-md border-gray-300 ">
      <label
        className="text-sm text-gray-400 font-semibold pl-3"
        htmlFor={label}
      >
        {text}
      </label>
      <input
        id={label}
        {...props}
        name={label}
        className="bg-transparent w-full pl-3 focus:outline-none "
      />
    </div>
  );
};

export default Input;
