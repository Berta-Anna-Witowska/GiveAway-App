import React from "react";

export default function HomeThreeColumns() {
  return (
    <section className="threecolumns">
      <ul className="threecolumns-all">
        <li className="column">
          <h2 className="column-number">10</h2>
          <h3 className="column-title">oddanych worków</h3>
          <p className="column-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </li>
        <li className="column">
          <h2 className="column-number">5</h2>
          <h3 className="column-title">wspartych organizacji</h3>
          <p className="column-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </li>
        <li className="column">
          <h2 className="column-number">7</h2>
          <h3 className="column-title">zorganizowanych zbiórek</h3>
          <p className="column-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </li>
      </ul>
    </section>
  );
}
