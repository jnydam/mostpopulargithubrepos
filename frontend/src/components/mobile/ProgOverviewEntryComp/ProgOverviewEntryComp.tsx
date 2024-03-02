import styles from './ProgOverviewEntryComp.module.css';
import blueChevronIconImage from '../../../assets/bluechevron.svg';
import { useState } from 'react';
import MobileRepoInfoEntryComp from './MobileRepoInfoEntryComp/MobileRepoInfoEntryComp';
import { RepoEntryData } from '../../../models/RepoEntryData';

interface ProgOverviewEntryCompProps {
  languageTitle: string;
  languageIconPath: string;
  languageRepoData: RepoEntryData[];
}

const ProgOverviewEntryComp: React.FC<ProgOverviewEntryCompProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleParentContainerClick = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <div className={styles.progOverviewEntryCompContainer}>
      <div
        onClick={handleParentContainerClick}
        className={styles.parentOverviewContainer}
      >
        <img
          style={{
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
            height: '1.5rem',
            width: '1.5rem',
          }}
          src={blueChevronIconImage}
        ></img>
        <div className={styles.languageInfoContainer}>
          <img
            style={{
              height: '1.8rem',
              width: '1.8rem',
              marginBottom: '0.5rem',
            }}
            src={props.languageIconPath}
          ></img>
          <span className={styles.languageTitleStyle}>
            {props.languageTitle}
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.mobileRepoListContainer}>
          {props.languageRepoData.map((cardEntry, index) => (
            <MobileRepoInfoEntryComp
              key={index}
              htmlUrl={cardEntry.htmlUrl}
              issueCount={cardEntry.openIssues}
              ownerAvatarImageUrl={cardEntry.ownerAvatarImageUrl}
              ownerName={cardEntry.ownerName}
              starCount={cardEntry.stars}
              repoName={cardEntry.repoName}
              createdDateString={cardEntry.createdAtDateString}
            ></MobileRepoInfoEntryComp>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgOverviewEntryComp;
