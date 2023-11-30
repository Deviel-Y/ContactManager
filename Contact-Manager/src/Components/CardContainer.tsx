import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return <section className="card_container_section">{children}</section>;
};

export default CardContainer;
