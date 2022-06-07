import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { CONSTANTS } from '../../helpers/constants';

function HomePage() {
    return (
        <Layout
            title={CONSTANTS.pages.Home_Page.title}
        >
            <Outlet />
        </Layout>
    );
}

export default HomePage;
