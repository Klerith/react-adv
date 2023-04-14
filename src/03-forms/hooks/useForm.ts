import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formData });
  };

  const reset = () => {
    setFormData({ ...initialData });
  };

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    ...formData,
    formData,
    onChange,
    onSubmit,
    reset,
    isValidEmail
  };
};
