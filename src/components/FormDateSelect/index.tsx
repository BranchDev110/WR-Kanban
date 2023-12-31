import { FormDateSelectProps } from "../../types";

const FormDateSelect = ({label, id, name, placeholder, value, handleChange, error}: FormDateSelectProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="date"
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
				value={value}
				onChange={handleChange}
      />
      <span className="text-red-800 dark:text-red-400 text-sm">{error}</span>
    </>
  );
};

export default FormDateSelect;
