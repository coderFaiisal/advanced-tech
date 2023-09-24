import { createContext, useState } from "react";

export const PcBuilderContext = createContext();

const PcBuilderProvider = ({ children }) => {
  const [pcBuilderData, setPcBuilderData] = useState({});

  const data = { pcBuilderData, setPcBuilderData };

  return (
    <PcBuilderContext.Provider value={data}>
      {children}
    </PcBuilderContext.Provider>
  );
};

export default PcBuilderProvider;
