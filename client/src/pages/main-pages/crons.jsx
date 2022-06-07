import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { CONSTANTS } from '../../helpers/constants';

function CronPage() {
    return (
            <div>
            <h1>{CONSTANTS.pages.Cron_List_Page.title}</h1>
            <Outlet />
            </div>
    );
}

export default CronPage;
