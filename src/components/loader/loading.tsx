import * as React from 'react';
import './styles.scss';
import Gif from './loading.gif';

interface Props {
}

const className = 'LoadingOverview';

const Loading: React.FC<Props> = () => {
  return (
    <div className={className}>
      <img src={Gif as any} alt='Loading Animation' width={75}/>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;