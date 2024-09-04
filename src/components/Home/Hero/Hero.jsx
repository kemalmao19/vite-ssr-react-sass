import styles from "./hero.module.scss";
export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <h1>Welcome to React-SaSS Starter</h1>
        <a href="https://github.com/kemalmao19/vite-ssr-react-sass">Github</a>
      </div>
    </div>
  );
};
