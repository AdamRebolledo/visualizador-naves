import { ReactNode } from "react";
import "./card.css";

type props = {
 className?: string;
 children: ReactNode;
};

function DetailCard({ className, children }: props) {
 return (
  <>
   <div className={`custom-card ${className}`}>{children}</div>
  </>
 );
}

export default DetailCard;
