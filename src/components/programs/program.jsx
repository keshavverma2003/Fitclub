import './program.css'
import { programsData } from '../../pages/programsdata'
const Program = ()=>{
    return(
        <>
        <div className="Programs" id='programs'>
            {/* header programs */}
            <div className="program-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            {/* program categorie */}
            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>join Now</span><img src="/images/download14.png" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div> 
        </> 
    )
}
export default Program