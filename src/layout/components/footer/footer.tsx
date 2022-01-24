import { Footer } from "antd/lib/layout/layout";
import { useTranslation } from "react-i18next";

interface Props {

};

const AppFooter: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <Footer className="no-print" style={{ textAlign: 'center' }}>{t('footer.mainText')}</Footer>
  );
}

export default AppFooter;