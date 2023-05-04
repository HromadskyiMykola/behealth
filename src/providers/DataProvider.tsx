import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  TDoctor,
  TFilterOptions,
  THandleFilterChange,
  TOptionsData,
} from "~/common";
import { useDoctorsData } from "~/hooks";

interface IContextData {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  doctors: TDoctor[];
  optionsData: TOptionsData;
  filteredDoctors: TDoctor[];
  setFilteredDoctors: (value: SetStateAction<TDoctor[]>) => void;
  filterOptions: TFilterOptions;
  selectedFilters: TFilterOptions;
  setSelectedFilters: (value: SetStateAction<TFilterOptions>) => void;
  handleFilterChange: THandleFilterChange;
  handleCheck: any;
}

export const DataContext = createContext<IContextData>({} as IContextData);

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState<string>("Вся Україна");
  const {
    doctors,
    filteredDoctors,
    optionsData,
    setFilteredDoctors,
    filterOptions,
    selectedFilters,
    setSelectedFilters,
    handleFilterChange,
    handleCheck,
  } = useDoctorsData();

  return (
    <DataContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        doctors,
        filteredDoctors,
        optionsData,
        setFilteredDoctors,
        filterOptions,
        selectedFilters,
        setSelectedFilters,
        handleFilterChange,
        handleCheck,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
