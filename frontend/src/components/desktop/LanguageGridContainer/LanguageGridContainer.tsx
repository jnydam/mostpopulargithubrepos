import { useSelector } from 'react-redux';
import styles from './LanguageGridContainer.module.css';
import TwoCardRowComp from './TwoCardRowComp/TwoCardRowComp';
import { RootState } from '../../../redux/store';

const LanguageGridContainer: React.FC = () => {
  const javascriptLanguageData = useSelector(
    (state: RootState) => state.apiSliceReducer.javascriptRepoList
  );
  const javaLanguageData = useSelector(
    (state: RootState) => state.apiSliceReducer.javaRepoList
  );
  const pythonLanguageData = useSelector(
    (state: RootState) => state.apiSliceReducer.pythonRepoList
  );
  const cPlusPlusLanguageData = useSelector(
    (state: RootState) => state.apiSliceReducer.cPlusPlusRepoList
  );

  return (
    <div className={styles.languageGridContainerStyle}>
      <TwoCardRowComp
        hasCardMarginTops
        firstCardTitle={'JavaScript'}
        firstCardRepoData={javascriptLanguageData}
        secondCardTitle={'Java'}
        secondCardRepoData={javaLanguageData}
      ></TwoCardRowComp>
      <TwoCardRowComp
        hasCardMarginBottoms
        firstCardTitle={'C++'}
        firstCardRepoData={cPlusPlusLanguageData}
        secondCardTitle={'Python'}
        secondCardRepoData={pythonLanguageData}
        hasMarginTop
      ></TwoCardRowComp>
    </div>
  );
};

export default LanguageGridContainer;
