import { tours } from "../data.js";
import Title from "./Title.jsx";
import Tour from "./Tour.jsx";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
