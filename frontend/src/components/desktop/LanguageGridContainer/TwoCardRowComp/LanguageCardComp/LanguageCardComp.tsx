import styles from './LanguageCardComp.module.css';
import { RepoEntryData } from '../../../../../models/RepoEntryData';
import { determineProgLangPath } from './LanguageCardCompUtil';
import starsIcon from '../../../../../assets/staricon.svg';
import profileIcon from '../../../../../assets/accounticon.svg';
import wrenchIcon from '../../../../../assets/wrenchicon.svg';
import calendarIcon from '../../../../../assets/calendaricon.svg';
import RepoEntryHorizComp from './RepoEntryHorizComp/RepoEntryHorizComp';

// stars/

// profile

// wrench

// calendar

interface LanguageCardCompProps {
  cardPosition: 'left' | 'right';
  cardTitle: string;
  hasCardMarginTop?: boolean;
  hasCardMarginBottom?: boolean;
  cardRepoData: RepoEntryData[];
}

const LanguageCardComp: React.FC<LanguageCardCompProps> = (props) => {
  return (
    <div
      style={{
        marginTop: props.hasCardMarginTop ? '0.25rem' : '0rem',
        marginLeft: props.cardPosition === 'left' ? '0.5rem' : '0.5rem',
        marginRight: props.cardPosition === 'right' ? '0.5rem' : '0.5rem',
        // marginBottom: props.hasCardMarginBottom ? '0.5rem' : '0rem',
      }}
      className={styles.languageCardCompContainer}
    >
      <div className={styles.cardHeaderContainer}>
        <img
          style={{
            height: '1.5rem',
            width: '1.5rem',
            marginRight: '1rem',
          }}
          src={determineProgLangPath(props.cardTitle)}
        ></img>
        {props.cardTitle !== 'C++' && (
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            {props.cardTitle}
          </span>
        )}
      </div>
      <div className={styles.cardCategoryRowContainer}>
        <div className={styles.rightSideContainer}>
          <img src={starsIcon}></img>
        </div>
        <div className={styles.rightSideContainer}>
          <img src={wrenchIcon}></img>
        </div>
        <div className={styles.rightSideContainer}>
          <img src={profileIcon}></img>
        </div>
        <div className={styles.rightSideContainer}>
          <img src={calendarIcon}></img>
        </div>
      </div>
      <div className={styles.repoListContainer}>
        {props.cardRepoData.map((cardRepoEntry, index) => (
          <RepoEntryHorizComp
            key={index}
            htmlUrl={cardRepoEntry.htmlUrl}
            ownerAvatarUrl={cardRepoEntry.ownerAvatarImageUrl}
            creationDateString={cardRepoEntry.createdAtDateString}
            issueCount={cardRepoEntry.openIssues}
            name={cardRepoEntry.repoName}
            starCount={cardRepoEntry.stars}
            ownerName={cardRepoEntry.ownerName}
          ></RepoEntryHorizComp>
        ))}
      </div>
    </div>
  );
};

export default LanguageCardComp;
