import { useEffect } from 'react';
import MainLayoutComp from './layout/MainLayoutComp/MainLayoutComp';
import { useDispatch, useSelector } from 'react-redux';
import { exportedActionObject as breakpointActions } from './redux/slices/breakpointSlice';
import { RootState } from './redux/store';
import MobileLayoutComp from './layout/MobileLayoutComp/MobileLayoutComp';
import {
  fetchCountStatusData,
  fetchDataByLanguage,
  fetchUpdateStatusData,
} from './Util';
import { exportedActionObject as apiDataSliceExportedActions } from './redux/slices/apiDataSlice';

function App() {
  const dispatch = useDispatch();

  const currentBreakpoint = useSelector(
    (state: RootState) => state.breakpointSliceReducer.breakpoint
  );

  // for fetching API data

  const handleCountAndUpdateStatusFetching = async () => {
    const baseUrl = import.meta.env.VITE_BASE_API_URL;

    const [countStatusInfo, updateStatusInfo] = await Promise.all([
      fetchCountStatusData(baseUrl),
      fetchUpdateStatusData(baseUrl),
    ]);

    dispatch(
      apiDataSliceExportedActions.actions.setCountStatusResponseEntryList(
        countStatusInfo
      )
    );
    dispatch(
      apiDataSliceExportedActions.actions.setUpdateStatusResponseEntryList(
        updateStatusInfo
      )
    );
  };

  const handleDataFetching = async () => {
    const baseUrl = import.meta.env.VITE_BASE_API_URL;

    const [javascriptRepos, pythonRepos, cPlusPlusRepos, javaRepos] =
      await Promise.all([
        fetchDataByLanguage(baseUrl, 'javascript'),
        fetchDataByLanguage(baseUrl, 'python'),
        fetchDataByLanguage(baseUrl, 'cpp'),
        fetchDataByLanguage(baseUrl, 'java'),
      ]);

    dispatch(
      apiDataSliceExportedActions.actions.setJavaScriptRepoList(javascriptRepos)
    );
    dispatch(
      apiDataSliceExportedActions.actions.setPythonRepoList(pythonRepos)
    );
    dispatch(
      apiDataSliceExportedActions.actions.setCPlusPlusRepoList(cPlusPlusRepos)
    );
    dispatch(apiDataSliceExportedActions.actions.setJavaRepoList(javaRepos));
  };

  // for retrieving data
  useEffect(() => {
    handleDataFetching();
    handleCountAndUpdateStatusFetching();
  }, []);

  // for registering breakpoint
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 1160px)');

    dispatch(
      breakpointActions.actions.changeBreakpoint(
        window.innerWidth <= 1150 ? 'mobile' : 'desktop'
      )
    );

    const mediaQueryChangeHandler = () => {
      if (mobileMediaQuery.matches) {
        dispatch(breakpointActions.actions.changeBreakpoint('mobile'));
      } else {
        dispatch(breakpointActions.actions.changeBreakpoint('desktop'));
      }
    };

    mobileMediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return () => {
      mobileMediaQuery.removeEventListener('change', mediaQueryChangeHandler);
    };
  }, []);

  return currentBreakpoint === 'desktop' ? (
    <MainLayoutComp></MainLayoutComp>
  ) : (
    <MobileLayoutComp></MobileLayoutComp>
  );
}

export default App;
