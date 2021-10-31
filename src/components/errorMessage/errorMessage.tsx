import { InfoCircleOutlined } from '@ant-design/icons';
import { Alert, Tooltip } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface Props {
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  const { t } = useTranslation();

  return (
    <>
      <Alert className="errorMessage"
      message={ t("errors.somethingWentWrong")}
      showIcon
      type="error"
      action={
        message && (
          <Tooltip placement="bottom" title={message}>
            <InfoCircleOutlined />
          </Tooltip>
        )
      }
    />
    </>
  );
};

export default ErrorMessage;