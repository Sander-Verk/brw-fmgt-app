import { PageHeader, Radio, RadioChangeEvent } from 'antd';
import * as React from 'react';
import { GetTruckQuery } from 'generated/graphql';
import AddCompartmentModal from './components/addCompartmentModal/addCompartmentModal';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import CompartmentList from 'components/compartmentList/compartmentList';
import LogbookList from 'components/logbookList/logbookList';


interface Props {
  data: GetTruckQuery
}

const className = 'TruckDetail';

const TruckDetail: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const [radioValue, setRadioValue] = React.useState<string>('info');

  const goToOverview = () => {
    history.push("/trucks");
  }

  const goToDetail = (id: string) => {
    history.push(`/logbook/${id}`);
  }

  const onRadioChange = (event: RadioChangeEvent) => {
    setRadioValue(event.target.value);
  }

  return (
    <div className={className}>
      {data && data.truck && (
        <>
          <PageHeader
            className="site-page-header"
            onBack={goToOverview}
            title={`${data.truck.name} - (${data.truck.code})`}
          />

          <div className='btn-header'>
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

            {radioValue === 'compartments' && <AddCompartmentModal truckId={data.truck.id}></AddCompartmentModal>}
          </div>

          {radioValue === 'compartments' && (<CompartmentList compartments={data.truck.compartments} />)}
          {radioValue === 'logbook' && (<LogbookList filters={{truckIds: [data.truck.id]}} onClick={goToDetail} />)}
        </>
      )}
    </div>
  );
};

export default TruckDetail;