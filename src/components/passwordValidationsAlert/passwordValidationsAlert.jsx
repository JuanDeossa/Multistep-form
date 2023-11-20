/* eslint-disable react/prop-types */
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export const PasswordValidationsAlert = ({ validations }) => {
  return (
    <ul className="max-h-[120px] overflow-y-auto">
      {validations.map(({ id, message, valid }) => (
        <li
          key={id}
          className={`flex  items-center gap-1 ${
            valid ? "text-green-700" : "text-red-600"
          }`}
        >
          {valid ? (
            <CheckCircleIcon width={22} height={22} />
          ) : (
            <XCircleIcon width={22} height={22} />
          )}
          {message}
        </li>
      ))}
    </ul>
  );
};
