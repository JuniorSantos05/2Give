import { createContext, ReactNode, useState } from "react";

interface IUserContext {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const GiveContext = createContext<IUserContext>({} as IUserContext);

const GiveProvider = ({ children }: IUserProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  return (
    <GiveContext.Provider
      value={{ showMenu, setShowMenu, closeModal, setCloseModal }}
    >
      {children}
    </GiveContext.Provider>
  );
};
export default GiveProvider;
