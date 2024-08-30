import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const ElementTest = () => {
  const { elements } = useContext(DataContext);

  return (
    <>
      {elements.map((elem, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: elem.content }} />
        </div>
      ))}
    </>
  );
};
