
import { useState } from 'react';
import { apiClient } from '../helpers';
import { useNavigate } from "react-router-dom";
import Cron from 'react-cron-generator'
import 'react-cron-generator/dist/cron-builder.css'

function CreateCron() {
    const navigate = useNavigate();
    const [jobName, setJobName] = useState("");
    const [cronString, setCronString] = useState("");
    const [jobQuery, setJobQuery] = useState("");

    console.log(cronString)
    const handleSubmit = async(event)=>{
        event.preventDefault();
       const {data} = await apiClient.post('cron/create', { name: jobName, cronString:cronString, cronQuery: jobQuery})
        console.log(data);
        navigate("/crons")
      }  

    return (
      <div className="main-wrapp">
    <div className="form-wrapper">
      <div className="maxwidth-600">
        <form onSubmit={handleSubmit}>
          <div className="grid-row">
            <div className="grid-6">
              <div className="record-item">
                <div className="input-field w-100">
                  <label className="">Job Name</label>
                  <input className="" type="text" placeholder="job name" value={jobName} 
                      onChange={(e) => setJobName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid-6">
              <div className="record-item">
                <div className="input-field w-100">
                  <label className="">Cron time String</label>
                  <input className="" type="text" placeholder="schedule string" value={cronString}
                      onChange={(e) => setCronString(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid-12">
              <div className="record-item">
                <div className="input-field w-100">
                  <label className="">Query</label>
                  <textarea placeholder="query" value={jobQuery} 
                      onChange={(e) => setJobQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-center">
            <div className="submit-button p-t-5">
                          <input type="submit" value="Create Job " className="theme-btn"/>
                      </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
}

export default CreateCron;

// user don't know about parameters [complete validation with drop downs]
// need to start jobs on server restart
// complete cruds
// frontend validation for query
// dropdown for function execution
// backend tests
// implement context api

//<div className="main-wrapp">
{/* <Cron
onChange={(e)=> {setCronString(e)}}
value={cronString}
showResultText={true}
showResultCron={false}
/>
</div> */}
/*
<div className="main-wrapp">
            <Navbar/>
            <div className="content-wrap">
            <section className="section-space">
          <div className="heading-title text-left">
            <h2>Create New Cron Job</h2>
            <h3>[ Only Admin role can create a new Cron job ] </h3>
          </div>
          <div className="form-wrapper">
            <div className="maxwidth-600">
              <form onSubmit={handleSubmit}>
                <div className="grid-row">
                  <div className="grid-6">
                    <div className="record-item">
                      <div className="input-field w-100">
                        <label className="">Job Name</label>
                        <input className="" type="text" placeholder="job name" value={jobName} 
                            onChange={(e) => setJobName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-6">
                    <div className="record-item">
                      <div className="input-field w-100">
                        <label className="">Cron time String</label>
                        <input className="" type="text" placeholder="schedule string" value={cronString}
                            onChange={(e) => setCronString(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid-12">
                    <div className="record-item">
                      <div className="input-field w-100">
                        <label className="">Query</label>
                        <textarea placeholder="query" value={jobQuery} 
                            onChange={(e) => setJobQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-center">
                  <div className="submit-button p-t-5">
                                <input type="submit" value="Create Job " className="theme-btn"/>
                            </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
            </div>
        </div>
        */
