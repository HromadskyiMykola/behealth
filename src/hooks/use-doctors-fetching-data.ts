import { TDoctor, useApiService } from "~/common";
import { useEffect, useState } from "react";

// TODO: is it necessary??

export const useDoctorsData = () => {
  const [doctors, setDoctors] = useState([] as TDoctor[]);
  const { getDoctors } = useApiService();

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return { doctors, setDoctors };
};
