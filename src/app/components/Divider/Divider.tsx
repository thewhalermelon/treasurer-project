import styles from './divider.module.scss';

interface DividerProps {
  color: string;
}

const Divider: React.FC<DividerProps> = ({ color }) => {
  return <hr className={`${styles.divider} container`} style={{ backgroundColor: color }}></hr>;
};

export default Divider;
