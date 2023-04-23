import { useForm, SubmitHandler } from "react-hook-form";
import { TAuthFormValues } from "./types-and-interfaces";

export const useReactHookForm = () => {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors, isValid } = formState;
  console.log("hook",isValid);

   const onSubmit = (data: TAuthFormValues) => {
     console.log(data);
     console.log(formState);
   };
    
  const handleSubmitPatientPersonalInfo = handleSubmit(onSubmit);

  return {
    control,
    handleSubmit,
    handleSubmitPatientPersonalInfo,
    watch,
    reset,
    isValid,
    errors,
    formState,
  };
};
