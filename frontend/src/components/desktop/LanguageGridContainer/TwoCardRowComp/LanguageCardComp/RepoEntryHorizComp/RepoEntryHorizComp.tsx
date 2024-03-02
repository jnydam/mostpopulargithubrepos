import styles from './RepoEntryHorizComp.module.css';

interface RepoEntryHorizCompProps {
  name: string;
  starCount: number;
  issueCount: number;
  htmlUrl: string;
  ownerName: string;
  ownerAvatarUrl: string;
  creationDateString: string;
}

const RepoEntryHorizComp: React.FC<RepoEntryHorizCompProps> = (props) => {
  return (
    <div className={styles.repoEntryHorizCompContainer}>
      <div className={styles.leftSideContent}>
        <a
          href={props.htmlUrl}
          style={{
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              color: '#0400DA',
              marginLeft: '1rem',
            }}
            className={styles.entryTextStyle}
          >
            {props.name}
          </span>
        </a>
      </div>
      <div className={styles.rightSideContent}>
        <div className={styles.infoIconEntryStyle}>
          {props.starCount.toLocaleString()}
        </div>
        <div className={styles.infoIconEntryStyle}>
          {props.issueCount.toLocaleString()}
        </div>
        <div className={styles.infoIconEntryStyle}>
          <img
            style={{
              borderRadius: '0.7rem',
              height: '1.3rem',
              width: '1.3rem',
            }}
            src={props.ownerAvatarUrl}
          ></img>
        </div>
        <div className={styles.infoIconEntryStyle}>
          {new Date(props.creationDateString).getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default RepoEntryHorizComp;
