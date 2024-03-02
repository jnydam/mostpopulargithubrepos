import ProgOverviewEntryComp from '../ProgOverviewEntryComp/ProgOverviewEntryComp';
import styles from './MobileWhiteBodySectionComp.module.css';
import javaIconPath from '../../../assets/progicons/javaicon.svg';
import javascriptIconPath from '../../../assets/progicons/jsicon.svg';
import pythonIconPath from '../../../assets/progicons/pythonicon.svg';
import cPlusPlusIconPath from '../../../assets/progicons/cplusplusicon.svg';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const MobileWhiteBodySectionComp: React.FC = () => {
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
    <div className={styles.mobileWhiteBodySectionCompContainer}>
      <ProgOverviewEntryComp
        languageRepoData={javascriptLanguageData}
        languageIconPath={javascriptIconPath}
        languageTitle='JavaScript'
      ></ProgOverviewEntryComp>
      <ProgOverviewEntryComp
        languageRepoData={javaLanguageData}
        languageIconPath={javaIconPath}
        languageTitle='Java'
      ></ProgOverviewEntryComp>
      <ProgOverviewEntryComp
        languageRepoData={cPlusPlusLanguageData}
        languageIconPath={cPlusPlusIconPath}
        languageTitle='C++'
      ></ProgOverviewEntryComp>
      <ProgOverviewEntryComp
        languageRepoData={pythonLanguageData}
        languageIconPath={pythonIconPath}
        languageTitle='Python'
      ></ProgOverviewEntryComp>
    </div>
  );
};

export default MobileWhiteBodySectionComp;
