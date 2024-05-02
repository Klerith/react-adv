import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

export const useForm = <
  T extends { [key: string]: string },
  K extends {
    [key: string]: [
      fn: (value?: string | readonly string[] | undefined) => boolean,
      erro: string
    ];
  }
>(
  initForm: T,
  formValidations: K
) => {
  console.log(formValidations);

  const [formState, setStateForm] = useState(initForm);
  const [formValidation, setFormValidation] = useState(formValidations);

  useEffect(() => {
    createValidators();
  }, [formState]);

  const createValidators = () => {
    console.log("createValidators");
    const formCheckedValues: { [key: string]: string | null } = {};
    console.log(isFormValid);
    for (const formField of Object.keys(formValidations)) {
      const [fn, error] =
        formValidations[formField as keyof typeof formValidations];
      //console.log(formField, error);
      //console.log();
      const data = fn(formState[formField]) ? null : error;
      console.log(formField, data);
      formCheckedValues[`${formField}Valid`] = data;
      console.log("======", formCheckedValues);
      /* formCheckedValues[`${ formField }Valid`] = fn[0]( formState[formField] ) ? null : errorMessage; */
    }
  };
  const isFormValid = useMemo(() => {
    console.log("====isFormValid", formValidation);
    for (const formValue of Object.keys(formValidation)) {
      console.log(formValue);

      console.log(formValidation[formValue as keyof typeof formValidation]);

      if (formValidation[formValue as keyof typeof formValidation] !== null)
        return false;
    }
    return true;
  }, [formValidation]);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setStateForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
    onReset();
  };
  const onReset = () => {
    setStateForm(initForm);
  };
  return {
    ...formState,
    onChange,
    onSubmit,
  };
};
