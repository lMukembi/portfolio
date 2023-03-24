import React from 'react'
import "../css/jobs.css"
import Technaire from "../resouces/Technaire.png"
import Peejeysmart from "../resouces/Peejeysmart.png"
import Writterly from "../resouces/Writterly.png"

const jobs = () => {
  return (
    <>
    <h1 className='works_header'>Work history.</h1>
    <div className='works' id='workhistory'>
             <p>
                <img src={Technaire} alt='Technaire.com, a technology reviews website.' className='work_cover'/>
                <p>TECHNAIRE SOLUTIONS.</p>
                <p>Founder, CEO & Developer.</p>
                <p>Technaire is a technology reviews center based in Machakos, Kenya.</p>
                <button className='jobs_button'>I SOLD IT</button>
            </p>
            <p>
                <img src={Peejeysmart} alt='Peejey smart solutions, a computer, software, and accessories reseller.' className='work_cover'/>
                <p>PEEJEY SMART SOLUTIONS.</p>
                <p>Developer & SEO.</p>
                <p>Peejey Smart Solutions is a Computer, software, and accessories reseller based in Nairobi, Kenya.</p>
                <button className='jobs_button'><a href='https://peejeysmart.com'>CHECK IT OUT</a></button>
            </p>
            <p>
                <img src={Writterly} alt="Writterly, an expert easy writing service." className="work_cover"/>
                <p>WRITTERLY.</p>
                <p>Senior Developer.</p>
                <p>Writterly is an expert easy writing service based in Nairobi, Kenya.</p>
                <button className='jobs_button'><a href='https://writterly.com'>CHECK IT OUT</a></button>
            </p>
    </div>
    </>
  )
}

export default jobs