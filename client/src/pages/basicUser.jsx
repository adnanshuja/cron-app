import Layout from '../components/layout/layout';
import { CONSTANTS } from '../helpers/constants';

function BasicUser() {
    return (
        <>
        <h1>{CONSTANTS.pages.Basic_User_Page.title}</h1>
        <h3>{CONSTANTS.pages.Basic_User_Page.subTitle}</h3>
        </>
    );
  }
  
  export default BasicUser;
  