import styles from './TwoRowContainerComp.module.css';
import blueStarImage from '../../../../../../assets/staricon.svg';
import blueWrenchImage from '../../../../../../assets/wrenchicon.svg';
import calendarImage from '../../../../../../assets/calendaricon.svg';

interface TwoRowContainerCompProps {
  isFirstRow: boolean;
  starCount?: number;
  ownerName?: string;
  ownerAvatarImageUrl?: string;
  calendarDate?: string;
  openIssuesCount?: number;
}

const TwoRowContainerComp: React.FC<TwoRowContainerCompProps> = (props) => {
  return (
    <div className={styles.twoRowContainerCompStyle}>
      <div className={styles.childBlockContentStyle}>
        <img
          className={styles.imageSpacer}
          src={props.isFirstRow ? blueStarImage : blueWrenchImage}
        ></img>
        <span className={styles.textInfoStyle}>
          {props.isFirstRow
            ? props.starCount?.toLocaleString()
            : props.openIssuesCount}
        </span>
      </div>
      <div className={styles.childBlockContentStyle}>
        <img
          className={styles.imageSpacer}
          style={{
            borderRadius: props.isFirstRow ? '0.3rem' : '0rem',
          }}
          src={props.isFirstRow ? props.ownerAvatarImageUrl : calendarImage}
        ></img>
        <span className={styles.textInfoStyle}>
          {props.isFirstRow
            ? ''
            : props.calendarDate
            ? new Date(props.calendarDate).getFullYear()
            : ''}
        </span>
      </div>
    </div>
  );
};

export default TwoRowContainerComp;
