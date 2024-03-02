import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CounterGridComp from './CounterGridComp/CounterGridComp';
import styles from './StatisticsSectionComp.module.css';

const StatisticsSectionComp: React.FC = () => {
  const updatedStatusData = useSelector(
    (state: RootState) => state.apiSliceReducer.updateStatusResponseEntryList[0]
  );

  return (
    <div className={styles.statisticsSectionCompContainer}>
      <div className={styles.countLeftAlignOverlayContainer}>
        <span
          style={{
            fontSize: '0.7rem',
            marginLeft: '0.5rem',
            color: '#0400DA',
          }}
        >
          {updatedStatusData
            ? `Last Updated: ${new Date(
                updatedStatusData.dataLastUpdatedDateString
              ).toUTCString()}`.substring(0, 39)
            : ''}
        </span>
      </div>
      <CounterGridComp></CounterGridComp>
    </div>
  );
};

export default StatisticsSectionComp;
