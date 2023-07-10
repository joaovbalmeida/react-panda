import React from "react";

export interface PandaProps {
  label: string;
}

const Panda = (props: PandaProps) => {
  return <button>{props.label}</button>;
};

export default Panda