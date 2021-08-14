import Circle from "./Circle";
import styles from "./CircleWrapper.module.css";

import beachyHead from "../assets/locations/beachyHead.jpg";
import crookedForest from "../assets/locations/crookedForest.jpg";
import santaMaria from "../assets/locations/santaMaria.jpg";
import fuji from "../assets/locations/fuji.jpg";
import tajMahal from "../assets/locations/tajMahal.jpg";
import bambooForest from "../assets/locations/bambooForest.jpg";
import baobabs from "../assets/locations/baobabs.jpg";
import goygol from "../assets/locations/goygol.jpg";
import cappadocia from "../assets/locations/cappadocia.jpg";
import baikal from "../assets/locations/baikal.jpg";
import lavenderFields from "../assets/locations/lavenderFields.jpg";
import bolivia from "../assets/locations/bolivia.jpg";

const CircleWrapper = () => {
  return (
    <div className={styles.circleWrapperDiv}>
      <Circle
        url={beachyHead}
        Tag="Beachy Head"
        href="https://en.wikipedia.org/wiki/Beachy_Head"
      />
      <Circle
        url={crookedForest}
        Tag="Crooked Forest"
        href="https://en.wikipedia.org/wiki/Crooked_Forest"
      />
      <Circle
        Tag="Santa Maria dell'Isola"
        url={santaMaria}
        href="https://it.wikipedia.org/wiki/Santuario_di_Santa_Maria_dell%27Isola_di_Tropea"
      />
      <Circle
        Tag="Mount Fuji"
        url={fuji}
        href="https://en.wikipedia.org/wiki/Mount_Fuji"
      />
      <Circle
        Tag="Taj Mahal"
        url={tajMahal}
        href="https://en.wikipedia.org/wiki/Taj_Mahal"
      />
      <Circle
        Tag="Bamboo Forest"
        href="https://en.wikipedia.org/wiki/Bamboo_Forest_(Kyoto,_Japan)"
        url={bambooForest}
      />
      <Circle
        Tag="Avenue of the Baobabs"
        href="https://en.wikipedia.org/wiki/Avenue_of_the_Baobabs"
        url={baobabs}
      />
      <Circle
        Tag="Göygöl"
        href="https://az.wikipedia.org/wiki/G%C3%B6yg%C3%B6l"
        url={goygol}
      />
      <Circle
        Tag="Kapadokya"
        href="https://tr.wikipedia.org/wiki/Kapadokya"
        url={cappadocia}
      />
      <Circle
        Tag="Baikal"
        url={baikal}
        href="https://en.wikipedia.org/wiki/Lake_Baikal"
      />
      <Circle
        Tag="Provence"
        url={lavenderFields}
        href="https://en.wikipedia.org/wiki/Provence"
      />
      <Circle
        url={bolivia}
        Tag="Salar de Uyuni"
        href="https://en.wikipedia.org/wiki/Salar_de_Uyuni"
      />
    </div>
  );
};

export default CircleWrapper;
