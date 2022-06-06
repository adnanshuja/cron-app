import Layout from '../components/layout/layout';
import { CONSTANTS } from '../helpers/constants';

function HomePage() {
    return (
        <Layout 
        title={CONSTANTS.pages.Home_Page.title} 
        subTitle= {CONSTANTS.pages.Home_Page.subTitle}
        />
    );
  }
  
  export default HomePage;
  