import React, {Fragment, useEffect, useState} from 'react';
import LoadingScreen from './components/Loading/LoadingScreen';
import MainBody from './layout/MainBody';

function App() {

  const [progressCount, setProgressCount] = useState(0);

  useEffect(() => {
    if(progressCount < 100){
      const timer = setTimeout(() => {
        setProgressCount((prevCount) => { return prevCount + 10 })
      }, 100);
  
      return () => clearTimeout(timer);
    }

  }, [progressCount])

  return (
    <Fragment>
      {progressCount !== 100 ? <LoadingScreen progressCount={progressCount} /> : <MainBody />}
    </Fragment>
  );
}

export default App;