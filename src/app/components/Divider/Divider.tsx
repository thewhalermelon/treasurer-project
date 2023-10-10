import styles from './divider.module.scss';

interface DividerProps {}

const Divider: React.FC<DividerProps> = () => {
  return <hr className={styles.divider}></hr>;
};

export default Divider;
