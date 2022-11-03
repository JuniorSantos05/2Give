import { createContext, ReactNode } from "react";

interface IUserContext {}

interface IUserProviderProps {
  children: ReactNode;
}

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  return (
    <GiveContext.Provider value={"valores"}>{children}</GiveContext.Provider>
  );
};
export default GiveProvider;
