import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CustomCard } from "../CustomCard/CustomCard";
import styles from "./MainBody.module.scss";

export const MainBody = () => {
  const { data } = useContext(DataContext);

  return (
    <section className={`p-strip ${styles["main-body"]}`}>
      <div className="row">
        {data.map((each: any) => (
          <div key={each.id} className="col-4">
            <CustomCard
              id={each.id}
              header={each._embedded["wp:term"][1][0].name}
              imageSrc={each.featured_media}
              title={each.title.rendered}
              author={each._embedded.author[0].name}
              date={each.date}
              content={each.content.rendered}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
