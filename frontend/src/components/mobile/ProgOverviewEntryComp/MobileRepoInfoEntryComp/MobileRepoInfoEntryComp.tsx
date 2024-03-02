import styles from './MobileRepoInfoEntryComp.module.css';
import MobileStatisticsInfoBlockComp from './MobileStatisticsInfoBlockComp/MobileStatisticsInfoBlockComp';

interface MobileRepoInfoEntryCompProps {
  repoName: string;
  starCount: number;
  htmlUrl: string;
  issueCount: number;
  ownerName: string;
  ownerAvatarImageUrl: string;
  createdDateString: string;
}

const MobileRepoInfoEntryComp: React.FC<MobileRepoInfoEntryCompProps> = (
  props
) => {
  return (
    <div className={styles.mobileRepoInfoEntryBlockContainer}>
      <a
        href={props.htmlUrl}
        style={{
          textDecoration: 'none',
          cursor: 'pointer',
          marginTop: '1.5rem',
        }}
      >
        <span
          style={{
            color: '#0400DA',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}
        >
          {props.repoName}
        </span>
      </a>
      <MobileStatisticsInfoBlockComp
        calendarDateString={props.createdDateString}
        openIssueCount={props.issueCount}
        ownerAvatarImageUrl={props.ownerAvatarImageUrl}
        ownerName={props.ownerName}
        starCount={props.starCount}
      ></MobileStatisticsInfoBlockComp>
    </div>
  );
};

export default MobileRepoInfoEntryComp;
