import { Button, PageHeader, Radio, RadioChangeEvent } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GetTruckQuery } from 'generated/graphql';
import AddCompartmentModal from './components/addCompartmentModal/addCompartmentModal';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import CompartmentList from 'components/compartmentList/compartmentList';


interface Props {
  data: GetTruckQuery,
  printDetail: () => void
}

const className = 'TruckDetail';

const TruckDetail: React.FC<Props> = ({ data, printDetail }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [radioValue, setRadioValue] = React.useState<string>('info');

  const goToOverview = () => {
    history.push("/trucks");
  }

  const onRadioChange = (event: RadioChangeEvent) => {
    setRadioValue(event.target.value);
  }

  return (
    <div className={className}>
      {data && data.truck && (
        <>
          <div className="truck-header">
            <PageHeader
              className="site-page-header"
              onBack={goToOverview}
              title={`${data.truck.name} - (${data.truck.code})`}
            />

            <div>
              <Button type="primary" className="printBtn" onClick={printDetail}>
                {t('truckDetail.printList')}
              </Button>
              <AddCompartmentModal truckId={data.truck.id}></AddCompartmentModal>
            </div>
          </div>

          <Radio.Group
            className='radio-group'
            options={[
              { label: 'Info', value: 'info' },
              { label: 'Compartments', value: 'compartments' },
              { label: 'Logbook', value: 'logbook' },
            ]}
            value={radioValue}
            onChange={onRadioChange}
            optionType="button"
            buttonStyle="solid"
          />

          { radioValue === 'compartments' && (<CompartmentList compartments={data.truck.compartments} />)}
        </>
      )}
    </div>
  );
};

export default TruckDetail;