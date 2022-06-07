import { useEffect, useState, useContext, useMemo } from 'react';
import ListingTable from '../components/table/table';
import TableHead from '../components/table/tableHead';
import { apiClient, AuthContext } from '../helpers'

function CronPage() {
    const [jobs, setJobs] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const jobsTableHeadings = [
        {
            title: 'Job Name',
            permissions: ['all']
        },
        {
            title: 'Time String', 
            permissions: ['all']
        },
        {
            title: 'Job Query', 
            permissions: ['all']
        },
        {
            title: 'Job Status', 
            permissions: ['all']
        },
        {
            title: 'Actions', 
            permissions: ['admin', 'sub-admin', 'manager']
        }
    ];

    useEffect(() => {
        async function fetchJobs() {
            const { data } = await apiClient.get('cron/list-all')
            setJobs(data)
        }
        fetchJobs();
    }, []);
    
    const checkPermissions = (user) => {
        const permissionsCheck = ["manage", "update"];
        return permissionsCheck.some((el) => user.permissions.includes(el));
    };
    
    const stopJob = async (id) => {
        const { data } = await apiClient.patch(`cron/stop-job/${id}`);
        if (data.id) {
            const newJobArray = jobs.map(job => {
                if (job.id === id) {
                    job.status = 'stopped'
                }
                return job;
            });
            setJobs(newJobArray);
        }
        
    };
    
    const startJob = async (id) => {
        const { data } = await apiClient.patch(`cron/start-job/${id}`);
        if (data.id) {
            const newJobArray = jobs.map(job => {
                if (job.id === id) {
                    job.status = 'running'
                }
                return job;
            });
            setJobs(newJobArray);
        }
        
    };
    
    const allowed = useMemo(() => checkPermissions(currentUser), [currentUser]);

    return (
        <div className="table-wrapper">
        <table className="responsive-table">
        <TableHead headings={jobsTableHeadings} user={currentUser} />
            <tbody className="responsive-table__body">
                {jobs.length > 0 ? jobs.map((job, index) => {
                    return (<tr className="responsive-table-row" key={index}>
                        <td className="responsive-table__body__text responsive-table__body__text--name">
                            {job.name}
                        </td>
                        <td className="responsive-table__body__text responsive-table__body__text--email">
                            {job.cronString}
                        </td>
                        <td className="responsive-table__body__text responsive-table__body__text--role">
                            {job.cronQuery}
                        </td>
                        <td className={`responsive-table__body__text responsive-table__body__text--permission ${job.status === 'stopped ? run-btn : stop-btn'}`}>
                            {job.status}
                        </td>
                        {allowed ? <td className="responsive-table__body__text responsive-table__body__text--actions">
                            <div className='buttn-tables'>
                                {job.status === 'running' ?
                                    <a href="#" onClick={() => stopJob(job.id)} className='stop-btn'>Stop</a> : <a href="#" onClick={() => startJob(job.id)} className='run-btn'>Run</a>}
                            </div>
                        </td> : null}
                    </tr>);
                }) : null}
            </tbody>
        </table>
    </div>
    );
}

export default CronPage;
