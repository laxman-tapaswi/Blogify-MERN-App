import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState({ username: "", name: "" });
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default ContextProvider;
