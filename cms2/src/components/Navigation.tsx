import React, { ReactElement, FC } from "react";

interface Props {
  title: String
}

const Navigation: FC<Props> = ({ title }): ReactElement => {
  return (
    <div>
       {title}
    </div>
  );
};

export default Navigation;