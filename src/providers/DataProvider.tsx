import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import {
  TClinic,
  TDoctor,
  TFilterOptions,
  THandleFilterChange,
  TOptionsData,
} from "~/common";
import { useGetData } from "~/hooks";

interface IContextData {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  doctors: TDoctor[];
  filteredDoctors: TDoctor[];
  clinics: TClinic[];
  filteredClinics: TClinic[];
  optionsData: TOptionsData;
  setFilteredDoctors: (value: SetStateAction<TDoctor[]>) => void;
  filterOptions: TFilterOptions;
  selectedFilters: TFilterOptions;
  setSelectedFilters: (value: SetStateAction<TFilterOptions>) => void;
  handleFilterChange: THandleFilterChange;
}

export const DataContext = createContext<IContextData>({} as IContextData);

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState<string>("Вся Україна");
  const {
    doctors,
    filteredDoctors,
    clinics,
    filteredClinics,
    optionsData,
    setFilteredDoctors,
    filterOptions,
    selectedFilters,
    setSelectedFilters,
    handleFilterChange,
  } = useGetData();

  return (
    <DataContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        doctors,
        filteredDoctors,
        clinics,
        filteredClinics,
        optionsData,
        setFilteredDoctors,
        filterOptions,
        selectedFilters,
        setSelectedFilters,
        handleFilterChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
