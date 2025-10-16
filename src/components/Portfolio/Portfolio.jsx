import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div id="portfolio" className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://bamboo-bungalows.com/wp-content/uploads/2021/03/photo-1507525428034-b723cf961d3e.jpeg"
              alt="coding"
            />
          </Tilt>
          <p>ทะเล</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
