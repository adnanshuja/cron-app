import Layout from '../components/layout/layout';
import { CONSTANTS } from '../helpers/constants';

function BasicUser() {
    return (
        <Layout 
        title={CONSTANTS.pages.Basic_User_Page.title} 
        subTitle= {CONSTANTS.pages.Basic_User_Page.subTitle}
        />
    );
  }
  
  export default BasicUser;
  