import Navbar from '../components/navbar.js';

function BasicUser() {
    
    return (
        <div className="main-wrapp">
            <Navbar/>
            <div className="content-wrap">
            <section className="section-space">
                    <div className="heading-title text-left">
                        <h2>This page is only visible to basic user</h2>
                    </div>
            </section>
            </div>
        </div>
    );
  }
  
  export default BasicUser;
  