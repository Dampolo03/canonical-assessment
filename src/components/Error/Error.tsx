import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const ErrorComponent = () => {
  const { error } = useContext(DataContext);

  return (
    <section className="p-strip">
      <div className="row">
        <div className="col-6 col-medium-3 u-vertically-center u-align--center">
          <img
            src="https://assets.ubuntu.com/v1/03c7318e-image-404.svg"
            alt="Something went wrong"
            width="360"
            height="365"
          />
        </div>
        <div className="col-6 col-medium-3 u-vertically-center">
          <div>
            <h1>{error}</h1>
            <p className="p-heading--4">Please refresh the page.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
