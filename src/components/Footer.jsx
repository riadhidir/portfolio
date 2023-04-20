
import { Link } from "react-router-dom" 
function Footer() {
  return (
   
    <div className="flex justify-between align-baseline items-center bg-[#222222]  text-[rgba(255,255,255,0.5)] px-10 border border-[#333333]">
        <div className="inline-flex gap-5  py-4 ">
            <Link className="hover:text-white" to="/">Linkdin</Link>
            <Link className="hover:text-white" to="/">Github</Link>
            <Link className="hover:text-white" to="/">twitter</Link>
        </div>
        <p>© 2022 All rights reserved.</p>
    </div>
    
  )
}

export default Footer