import { useState } from "react";

const PcBuilderHelper = () => {
  const [pcBuilderData, setPcBuilderData] = useState({});

  return {
    pcBuilderData,
    setPcBuilderData,
  };
};

export default PcBuilderHelper;
