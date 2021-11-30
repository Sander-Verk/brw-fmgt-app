import * as React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  value: string
}


const Translated: React.FC<Props> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <span>{ t(value) }</span>
  );
};

export default Translated;