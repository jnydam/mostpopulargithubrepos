import HeaderComp from '../../components/desktop/HeaderComp/HeaderComp';
import styles from './MainLayoutComp.module.css';
import StatisticsSectionComp from './StatisticsSectionComp/StatisticsSectionComp';
import WhiteBodySectionComp from './WhiteBodySectionComp/WhiteBodySectionComp';

const MainLayoutComp: React.FC = () => {
  return (
    <div className={styles.mainLayoutCompContainer}>
      <HeaderComp></HeaderComp>
      <StatisticsSectionComp></StatisticsSectionComp>
      <WhiteBodySectionComp></WhiteBodySectionComp>
    </div>
  );
};

export default MainLayoutComp;
