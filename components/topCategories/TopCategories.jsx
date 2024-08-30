import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { TopSubCategory } from "./topSubCategory/TopSubCategory";
import styles from "./topCategories.module.scss";

import Image from "next/image";

export const TopCategories = () => {
  //const { topCategories } = useContext(DataContext);
  const { elements } = useContext(DataContext);

  return (
    //   <div className="d-flex justify-content-center align-items-center min-vh-100">
    //     <section className={`container`} id={styles.topCategories}>
    //       {topCategories.length > 0 ? (
    //         <>
    //           {topCategories.map((category, index) => (
    //             <div key={index} className={styles.category}>
    //               <div>
    //                 <Image
    //                   src={category.image}
    //                   width={65}
    //                   height={65}
    //                   alt="ikona"
    //                 />
    //                 <h3>{category.name}</h3>
    //               </div>
    //               {category.subcategories &&
    //                 category.subcategories.length > 0 && (
    //                   <ul>
    //                     {category.subcategories.map((subCategory, subIndex) => (
    //                       <TopSubCategory
    //                         key={subIndex}
    //                         name={subCategory.name}
    //                         description={subCategory.description_short}
    //                       />
    //                     ))}
    //                   </ul>
    //                 )}
    //             </div>
    //           ))}
    //         </>
    //       ) : (
    //         <p>Kategorie nejsou načteny</p>
    //       )}
    //     </section>
    //   </div>

    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <section className={`container`} id={styles.topCategories}>
        {elements && elements.length > 0 ? (
          <>
            {elements.map((element, index) => (
              <div
                key={index}
                className={styles.category}
                id={element.identifier}
                dangerouslySetInnerHTML={{ __html: element.content }}
              />
            ))}
          </>
        ) : (
          <p>No elements available</p>
        )}
      </section>
    </div>
  );
};
