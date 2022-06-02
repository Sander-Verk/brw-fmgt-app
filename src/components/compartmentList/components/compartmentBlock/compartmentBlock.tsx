import { Collapse } from "antd";
import { Role } from "components/rolesGuard/roles.enum";
import RoleGuard from "components/rolesGuard/rolesGuard";
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
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isSectionOpen, setIsSectionOpen] = React.useState<boolean>(false);

  const callback = (keys: string | string[]) => {
    setIsSectionOpen(!!keys.length);
  };

  const renderAddBtn = () => (
    isSectionOpen &&
    <RoleGuard role={Role.Manager}>
      <AddSectionModal truckId={truckId} compartmentId={compartment.id} onChange={setIsModalOpen}></AddSectionModal>
    </RoleGuard>
  );

  return (
    <Collapse expandIconPosition="right" collapsible={isModalOpen ? "disabled" : undefined} onChange={callback}>
      <Panel header={compartment.name} key={compartment.id} extra={renderAddBtn()} forceRender={true}>
        { compartment.sections.map((section) => (<SectionBlock key={section.id} truckId={truckId} compartmentId={compartment.id} section={section} />))}
      </Panel>
    </Collapse>
  );
};

export default CompartmentBlock;