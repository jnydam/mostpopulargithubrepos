import styles from './MobileStatisticsInfoBlockComp.module.css';
import TwoRowContainerComp from './TwoRowContainerComp/TwoRowContainerComp';

interface MobileStatisticsInfoBlockCompProps {
  starCount: number;
  ownerAvatarImageUrl: string;
  ownerName: string;
  openIssueCount: number;
  calendarDateString: string;
}

const MobileStatisticsInfoBlockComp: React.FC<
  MobileStatisticsInfoBlockCompProps
> = (props) => {
  return (
    <div className={styles.mobileStatisticsInfoBlockCompContainer}>
      <TwoRowContainerComp
        starCount={props.starCount}
        ownerAvatarImageUrl={props.ownerAvatarImageUrl}
        ownerName={props.ownerName}
        isFirstRow
      ></TwoRowContainerComp>
      <TwoRowContainerComp
        openIssuesCount={props.openIssueCount}
        calendarDate={props.calendarDateString}
        isFirstRow={false}
      ></TwoRowContainerComp>
    </div>
  );
};

export default MobileStatisticsInfoBlockComp;
