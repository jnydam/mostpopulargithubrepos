import MobileHeaderComp from '../../components/mobile/MobileHeaderComp/MobileHeaderComp';
import MobileStatisticsSectionComp from '../../components/mobile/MobileStatisticsSectionComp/MobileStatisticsSectionComp';
import MobileWhiteBodySectionComp from '../../components/mobile/MobileWhiteBodySectionComp/MobileWhiteBodySectionComp';
import styles from './MobileLayoutComp.module.css';

const MobileLayoutComp: React.FC = () => {
  return (
    <div className={styles.mobileLayoutCompContainer}>
      <MobileHeaderComp></MobileHeaderComp>
      <MobileStatisticsSectionComp></MobileStatisticsSectionComp>
      <MobileWhiteBodySectionComp></MobileWhiteBodySectionComp>
    </div>
  );
};

export default MobileLayoutComp;
