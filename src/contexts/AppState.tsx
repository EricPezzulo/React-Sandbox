import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  routePath: string;
  regions: Regions[];
  setRegions: React.Dispatch<React.SetStateAction<Regions[]>>;
}
interface AppProviderProps {
  children: ReactNode;
}
export interface Regions {
  nameserver: string;
  displayName: string;
}

export const AppContext = createContext<AppContextProps>({
  firstName: "",
  setFirstName: () => {},
  routePath: "",
  regions: [],
  setRegions: () => {},
});

export function AppProvider({ children }: AppProviderProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [regions, setRegions] = useState<Regions[]>([]);
  const routePath = "";

  return (
    <AppContext.Provider
      value={{
        firstName,
        setFirstName,
        routePath,
        regions,
        setRegions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
