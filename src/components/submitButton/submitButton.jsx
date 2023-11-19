/* eslint-disable react/prop-types */

export const SubmitButton = ({ disabled = false }) => {
  return (
    <button
      type="submit"
      className="w-1/2 h-10 bg-indigo-500 text-white font-bold rounded-md mt-3 disabled:opacity-60"
      disabled={disabled}
    >
      Submit
    </button>
  );
};
