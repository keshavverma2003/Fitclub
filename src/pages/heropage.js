import Hero from "../components/hero/hero"
import Program from "../components/programs/program"
import Footerpage from "./footerpage"
import Joinpage from "./joinpage"
import Planspage from "./planspage"
import Reasonspage from "./reasonspage"
import Testimonialspage from "./testimonialspage"
const Heropage = ()=>{
    return(
        <>
        {<Hero/>}
        {<Program/>}
        {<Reasonspage/>}
        {<Planspage/>}
        {<Testimonialspage/>}
        {<Joinpage/>}
        {<Footerpage/>}
        </>
    )
}
export default Heropage