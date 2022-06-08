import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { CONSTANTS } from '../../helpers/constants'
import * as FaIcons from 'react-icons/fa';

function HomePage() {
  return (
    <>
      <Layout title={CONSTANTS.pages.Home_Page.title}>
        <div className="breadcrumbs-custom">
          <ol class="">
            <li>
              <a href="#">
                <span>
                  <FaIcons.FaHome />
                </span>
                Dashboard
              </a>
            </li>
            <li>
              <span className="seperator">
                <FaIcons.FaAngleRight />
              </span>
            </li>
            <li>
              <a href="#">
                <span>
                  <FaIcons.FaHome />
                </span>
                Second
              </a>
            </li>
            <li>
              <span className="seperator">
                <FaIcons.FaAngleRight />
              </span>
            </li>
            <li class="current">
              <span>
                <FaIcons.FaUsers />
              </span>
              User
            </li>
          </ol>
        </div>
        <div className="dashboard-widget">
          <div className="widget-item">
            <div className="widget-wrap">
              <div className="avatar">
                <span>AB</span>
                <label>Full Name</label>
              </div>
              <div className="information-items">
                <ul class="list-group">
                  <li>
                    <span>
                      <FaIcons.FaEnvelope />
                    </span>{' '}
                    email@gmail.com
                  </li>
                  <li>
                    <span>
                      <FaIcons.FaPhone />
                    </span>{' '}
                    012346
                  </li>
                  <li>
                    <span>
                      <FaIcons.FaUsersCog />
                    </span>{' '}
                    Role here
                  </li>
                  <li>
                    <span>
                      <FaIcons.FaEnvelope />
                    </span>{' '}
                    email@gmail.com
                  </li>
                  <li>
                    {/* <span><FaIcons.FaUserCheck /></span> Permissions: */}
                    {/* <br /> */}
                    <div className="perm-list text-center">
                      <label>Perm 1</label>
                      <label>Perm 2 </label>
                      <label>Perm 3</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="table-wrapper">
        <div className='text-right'>
                <a href="#" className='table-action-btn'>
                    <span><FaIcons.FaPlus /></span>
                    Add User
                </a>
            </div>
          <table class="responsive-table">
            <thead class="responsive-table__head">
              <tr class="responsive-table-row">
                <th class="responsive-table__head__title responsive-table__head__title--name">
                  User Name
                </th>
                <th class="responsive-table__head__title responsive-table__head__title--name">
                  Email
                </th>
                <th class="responsive-table__head__title responsive-table__head__title--name">
                  Role
                </th>
                <th class="responsive-table__head__title responsive-table__head__title--name">
                  Permissions
                </th>
                <th class="responsive-table__head__title responsive-table__head__title--name">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="responsive-table__body">
              <tr class="responsive-table-row">
                <td class="responsive-table__body__text responsive-table__body__text--name">
                  adnan
                </td>
                <td class="responsive-table__body__text responsive-table__body__text--name">
                  adnan@gmail.com
                </td>
                <td class="responsive-table__body__text responsive-table__body__text--name">
                  admin
                </td>
                <td class="responsive-table__body__text responsive-table__body__text--permission">
                  <span class="permmission-indicator permmission-indicator--create">
                    manage
                  </span>
                </td>
                <td class="responsive-table__body__text responsive-table__body__text--permission">
                  <a href="#" className='table-action'>
                  <FaIcons.FaPencilAlt />
                  </a>
                  <a href="#" className='table-action delete'>
                  <FaIcons.FaTrashAlt />
                  </a>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <Outlet />
      </Layout>
    </>
  );
}

export default HomePage;
