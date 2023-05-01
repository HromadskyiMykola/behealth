
import { TDoctor, useApiService } from "~/common";
import { useEffect, useState } from "react";




export const useDoctorsData = () => {
    const [doctors, setDoctors] = useState([] as TDoctor[]);
    const { getDoctors } = useApiService();
    
    useEffect(() => {
      getDoctors().then(setDoctors);
    }, []);

    return { doctors, setDoctors }
}
