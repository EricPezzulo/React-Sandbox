import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
    firstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    routePath: string;
    value: object
}
interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({
    firstName: '',
    setFirstName: () => { },
    routePath: '',
    value: {
        first: '',
        second: '',
        third: ''
    }
})

export function AppProvider({
    children,
}: AppProviderProps) {
    const [firstName, setFirstName] = useState<string>('')

    const routePath = ''
    const value = {
        first: '',
        second: '',
        third: ''
    }

    return (
        <AppContext.Provider
            value={{
                firstName,
                setFirstName,
                routePath,
                value
            }}>
            {children}
        </AppContext.Provider>
    )
}