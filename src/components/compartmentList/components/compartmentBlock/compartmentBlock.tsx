import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Collapse } from 'antd';
import { Compartment } from 'graphql/schema';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import SectionBlock from '../sectionBlock/sectionBlock';
import './styles.scss';

const { Panel } = Collapse;

interface Props {
  compartment: Compartment;
}

const CompartmentBlock: React.FC<Props> = ({ compartment }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const callback = (keys: string | string[]) => {
    setIsOpen(!!keys.length);
  }
  const renderAddBtn = () => (
    isOpen &&
    <Button
      ghost
      className='addSection-btn'
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <PlusCircleOutlined />
      {t('addSectionModal.openBtn')}
    </Button>
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