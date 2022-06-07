const CONSTANTS = {
    pages: {
        Basic_User_Page: {
            title: 'Basic User Page',
            subTitle: 'This page is only visible to basic users'
        },
        Home_Page: {
            title: 'Dashboard',
            subTitle: 'This page is visible to all users'
        },
        Create_Cron_Page: {
            title: 'Create Cron Job',
            subTitle: 'This is visible only to users with write access'
        },
        Cron_List_Page: {
            title: 'Cron Jobs List',
            subTitle: 'Visible to all users with read access'
        },
        Users_List_Page: {
            title: 'Users List',
            subTitle: 'visible only to users with admin roles'
        },
        Reports_Page: {
            title: 'Reports Page',
            subTitle: 'Visible only to specific users'
        }
    }
}
export {
    CONSTANTS
};