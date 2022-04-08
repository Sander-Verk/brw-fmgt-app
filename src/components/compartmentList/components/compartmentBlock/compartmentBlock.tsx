import { Collapse } from "antd";
import { Compartment } from "graphql/schema";
import * as React from "react";
import AddSectionModal from "../addSectionModal/addSectionModal";
import SectionBlock from "../sectionBlock/sectionBlock";
import "./styles.scss";

const { Panel } = Collapse;

interface Props {
  truckId: string;
  compartment: Compartment;
}

const CompartmentBlock: React.FC<Props> = ({ truckId, compartment }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const callback = (keys: string | string[]) => {
    setIsOpen(!!keys.length);
  };
  const renderAddBtn = () => (
    isOpen &&
    <AddSectionModal truckId={truckId} compartmentId={compartment.id} />
  );

  return (
    <Collapse expandIconPosition="right" onChange={callback}>
      <Panel header={compartment.name} key={compartment.id} extra={renderAddBtn()} forceRender={true}>
        { compartment.sections.map((section) => (<SectionBlock key={section.id} section={section} />))}
      </Panel>
    </Collapse>
  );
};

export default CompartmentBlock;