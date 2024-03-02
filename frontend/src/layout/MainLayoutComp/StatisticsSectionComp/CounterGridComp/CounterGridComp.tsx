import styles from './CounterGridComp.module.css';
import TwoCounterGridRowComp from './TwoCounterGridRowComp/TwoCounterGridRowComp';
import javaScriptBlueImage from '../../../../assets/progicons/bluejsicon.svg';
import javaBlueImage from '../../../../assets/progicons/bluejavaicon.svg';
import pythonBlueImage from '../../../../assets/progicons/bluepythonicon.svg';
import cPlusPlusBlueImage from '../../../../assets/progicons/bluecplusplusicon.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface CounterGridCompProps {
  hasFixedHeight?: boolean;
}

const CounterGridComp: React.FC<CounterGridCompProps> = (props) => {
  const countCardData = useSelector(
    (state: RootState) => state.apiSliceReducer.countStatusResponseEntryList
  );
  return (
    <div
      style={{
        height: props.hasFixedHeight ? '7rem' : '100%',
      }}
      className={styles.counterGridCompContainer}
    >
      <TwoCounterGridRowComp
        hasBorderBottom
        firstCountNumber={parseInt(
          countCardData.length == 4
            ? countCardData.filter(
                (countEntry) => countEntry.countName === 'javascript'
              )[0].countNumber
            : '0'
        )}
        firstIconImagePath={javaScriptBlueImage}
        secondCountNumber={parseInt(
          countCardData.length == 4
            ? countCardData.filter(
                (countEntry) => countEntry.countName === 'java'
              )[0].countNumber
            : '0'
        )}
        secondIconImagePath={javaBlueImage}
      ></TwoCounterGridRowComp>
      <TwoCounterGridRowComp
        firstCountNumber={parseInt(
          countCardData.length == 4
            ? countCardData.filter(
                (countEntry) => countEntry.countName === 'c++'
              )[0].countNumber
            : '0'
        )}
        firstIconImagePath={cPlusPlusBlueImage}
        secondCountNumber={parseInt(
          countCardData.length == 4
            ? countCardData.filter(
                (countEntry) => countEntry.countName === 'python'
              )[0].countNumber
            : '0'
        )}
        secondIconImagePath={pythonBlueImage}
      ></TwoCounterGridRowComp>
    </div>
  );
};

export default CounterGridComp;
