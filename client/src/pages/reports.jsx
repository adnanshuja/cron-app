import Layout from '../components/layout/layout';
import { CONSTANTS } from '../helpers/constants';

function ReportsPage() {
    return (
        <Layout 
        title={CONSTANTS.pages.Reports_Page.title} 
        subTitle= {CONSTANTS.pages.Reports_Page.subTitle}
        />
    );
  }
  
  export default ReportsPage;
  