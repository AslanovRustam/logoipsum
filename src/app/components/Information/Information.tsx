import Acounts from "../Acounts/Acounts";
import styles from "./information.module.css";

type Props = {};

function Information({}: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Hey there! I'm a freelance creator who dabbles in all things
        entrepreneurship. I also happen to be a self-proclaimed coffee expert
        and infuriatingly humble beeraholic (I know, it's a strange
        combination). When I'm not working or sipping on a cold one, you can
        find me in the kitchen experimenting with new recipes as a proud food
        practitioner.<br></br> <br></br> Oh, and I'm a bit of a Twitter buff, so
        feel free to connect with me there too. Thanks for stopping by!
      </p>
      <Acounts />
    </div>
  );
}

export default Information;
