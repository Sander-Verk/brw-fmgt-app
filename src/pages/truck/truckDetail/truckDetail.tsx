import { PageHeader, Radio, RadioChangeEvent } from "antd";
import * as React from "react";
import { GetTruckQuery, LogbookItem, LogBookItemType, useGetLogbookQuery } from "graphql/schema";
import AddCompartmentModal from "./components/addCompartmentModal/addCompartmentModal";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import CompartmentList from "components/compartmentList/compartmentList";
import LogbookList from "components/logbookList/logbookList";
import RoleGuard from "components/rolesGuard/rolesGuard";
import { Role } from "components/rolesGuard/roles.enum";
import AppButton from "components/appButton/appButton";


interface Props {
  data: GetTruckQuery
}

const className = "TruckDetail";

const TruckDetail: React.FC<Props> = ({ data }) => {
  const history = useHistory();
  const { data: logbookData } = useGetLogbookQuery({
    variables: { filter: { truckIds: [data.truck.id] } }
  });

  const [radioValue, setRadioValue] = React.useState<string>("info");

  const goToOverview = () => {
    history.push("/trucks");
  };

  const goToDetail = (id: string) => {
    history.push(`/logbook/${id}`);
  };

  const onRadioChange = (event: RadioChangeEvent) => {
    setRadioValue(event.target.value);
  };

  const addMaterialCheck = () => {
    history.push(`/logbook/new?type=${LogBookItemType.MaterialCheck}&truckId=${data.truck.id}`);
  };

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
                { label: "Info", value: "info" },
                { label: "Compartments", value: "compartments" },
                { label: "Logbook", value: "logbook" },
              ]}
              value={radioValue}
              onChange={onRadioChange}
              optionType="button"
              buttonStyle="solid"
            />

            <div className="action-group">
              <AppButton text="truckDetail.addMaterialCheck" onClick={addMaterialCheck}/>  
              {radioValue === "compartments" && <RoleGuard role={Role.Manager}><AddCompartmentModal truckId={data.truck.id}></AddCompartmentModal></RoleGuard>}
            </div>
          </div>

          {radioValue === "compartments" && (<CompartmentList truckId={data.truck.id} compartments={data.truck.compartments} />)}
          {radioValue === "logbook" && (<LogbookList data={logbookData?.logbook.items as LogbookItem[] || []} onClick={goToDetail} />)}
        </>
      )}
    </div>
  );
};

export default TruckDetail;