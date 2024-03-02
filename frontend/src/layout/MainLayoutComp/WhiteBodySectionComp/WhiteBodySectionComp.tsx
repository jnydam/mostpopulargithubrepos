import LanguageGridContainer from '../../../components/desktop/LanguageGridContainer/LanguageGridContainer';
import styles from './WhiteBodySectionComp.module.css';

const WhiteBodySectionComp: React.FC = () => {
  return (
    <div className={styles.whiteBodySectionCompContainer}>
      <LanguageGridContainer></LanguageGridContainer>
    </div>
  );
};

export default WhiteBodySectionComp;
