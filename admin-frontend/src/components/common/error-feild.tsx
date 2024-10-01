import { cn } from "@/utils/cn";
import { FieldErrors, FieldValues } from "react-hook-form";

interface ErrorFieldProps {
  errors?: FieldErrors<FieldValues>; //remove optional
  name: string;
  className?: string;
}

const ErrorField: React.FC<ErrorFieldProps> = ({ errors, name, className }) => {
  return errors && errors?.[name] && errors?.[name]?.message ? (
    <p
      className={cn(
        "d-regular-14 h-6 normal-case text-jaw-primary-pink",
        className
      )}
    >
      <span className="text-res-">*</span>{" "}
      {String(errors[name]?.message)}
    </p>
  ) : (
    <p className="h-6" />
  );
};

export default ErrorField;
