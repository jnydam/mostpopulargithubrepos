import { RepoEntryData } from '../../../../models/RepoEntryData';
import LanguageCardComp from './LanguageCardComp/LanguageCardComp';
import styles from './TwoCardRowComp.module.css';

interface TwoCardRowCompProps {
  firstCardTitle: string;
  firstCardRepoData: RepoEntryData[];
  secondCardTitle: string;
  secondCardRepoData: RepoEntryData[];
  hasMarginTop?: boolean;
  hasCardMarginTops?: boolean;
  hasCardMarginBottoms?: boolean;
}

const TwoCardRowComp: React.FC<TwoCardRowCompProps> = (props) => {
  return (
    <div
      style={{
        marginTop: props.hasMarginTop ? '1.3rem' : '0rem',
      }}
      className={styles.twoCardRowCompContainer}
    >
      <LanguageCardComp
        hasCardMarginBottom={props.hasCardMarginBottoms}
        hasCardMarginTop={props.hasCardMarginTops}
        cardTitle={props.firstCardTitle}
        cardRepoData={props.firstCardRepoData}
        cardPosition='left'
      ></LanguageCardComp>
      <LanguageCardComp
        hasCardMarginBottom={props.hasCardMarginBottoms}
        hasCardMarginTop={props.hasCardMarginTops}
        cardTitle={props.secondCardTitle}
        cardRepoData={props.secondCardRepoData}
        cardPosition='right'
      ></LanguageCardComp>
    </div>
  );
};

export default TwoCardRowComp;
