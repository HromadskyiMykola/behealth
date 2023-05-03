import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationContextData {
  city: string;
  setCity: (city: string) => void;
}

export const LocationContext = createContext<LocationContextData>(
  {} as LocationContextData
);

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<string>("Вся Україна");
  return (
    <LocationContext.Provider
      value={{
        city,
        setCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
