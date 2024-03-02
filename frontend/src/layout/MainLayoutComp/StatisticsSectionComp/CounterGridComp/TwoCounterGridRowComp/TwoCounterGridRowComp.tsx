import styles from './TwoCounterGridRowComp.module.css';

interface TwoCounterGridRowCompProps {
  firstIconImagePath: string;
  firstCountNumber: number;
  secondIconImagePath: string;
  secondCountNumber: number;
  hasBorderBottom?: boolean;
}

const TwoCounterGridRowComp: React.FC<TwoCounterGridRowCompProps> = (props) => {
  return (
    <div
      style={{
        borderBottom: props.hasBorderBottom ? '1px solid #0400DA' : '0px',
      }}
      className={styles.twoCounterGridRowCompContainer}
    >
      <div
        style={{
          borderRight: '1px solid #0400DA',
        }}
        className={styles.numRepoInfoStyle}
      >
        <img
          style={{
            marginRight: '0.5rem',
            height: '1rem',
          }}
          src={props.firstIconImagePath}
        ></img>
        <span className={styles.counterNumberStyle}>
          {props.firstCountNumber.toLocaleString()}
        </span>
      </div>
      <div className={styles.numRepoInfoStyle}>
        <img
          style={{
            marginRight: '0.5rem',
          }}
          src={props.secondIconImagePath}
        ></img>
        <span className={styles.counterNumberStyle}>
          {props.secondCountNumber.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default TwoCounterGridRowComp;
