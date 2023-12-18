import { FormImageUploaderProps } from "../../types";

const FormImageUploader = ({
  label,
  handleChange,
  name,
  id,
  src = "",
  fileName = "",
}: FormImageUploaderProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 relative">
            {src === "" ? (
              <>
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </>
            ) : (
              <div className="flex flex-row space-x-2 items-center">
                <img src={src} className="rounded-xl left-0 top-0 w-28 h-28" alt="Uploaded task img"/>
                <div className="relative">
                  <input
                    name="fileName"
                    value={fileName}
                    className="bg-none dark:bg-none dark:text-gray-300 dark:bg-transparent"
                    readOnly
                    disabled
                  />
                </div>
              </div>
            )}
          </div>
          <input
            id={id}
            name={name}
            type="file"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>{}</div>
    </>
  );
};

export default FormImageUploader;
