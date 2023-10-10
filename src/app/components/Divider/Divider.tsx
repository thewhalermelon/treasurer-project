import styles from './divider.module.scss';

interface DividerProps {
  color: string;
  width?: string;
}

const Divider: React.FC<DividerProps> = ({ color, width }) => {
  return <hr className={`${styles.divider} container`} style={{ backgroundColor: color, width: width }}></hr>;
};

export default Divider;
