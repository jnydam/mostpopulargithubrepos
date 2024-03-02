import { useSelector } from 'react-redux';
import CounterGridComp from '../../../layout/MainLayoutComp/StatisticsSectionComp/CounterGridComp/CounterGridComp';
import { RootState } from '../../../redux/store';
import styles from './MobileStatisticsSectionComp.module.css';

const MobileStatisticsSectionComp: React.FC = () => {
  const updatedStatusData = useSelector(
    (state: RootState) => state.apiSliceReducer.updateStatusResponseEntryList[0]
  );

  return (
    <div className={styles.mobileStatisticsSectionCompContainer}>
      <span
        style={{
          marginBottom: '0.3rem',
        }}
        className={styles.statisticsTextStyle}
      >
        Last Updated:
      </span>
      <span
        className={styles.statisticsTextStyle}
        style={{
          marginBottom: '1rem',
        }}
      >
        {updatedStatusData
          ? new Date(updatedStatusData.dataLastUpdatedDateString)
              .toUTCString()
              .substring(
                0,
                new Date(
                  updatedStatusData.dataLastUpdatedDateString
                ).toUTCString().length - 4
              )
          : ''}
      </span>
      <CounterGridComp hasFixedHeight></CounterGridComp>
    </div>
  );
};

export default MobileStatisticsSectionComp;
