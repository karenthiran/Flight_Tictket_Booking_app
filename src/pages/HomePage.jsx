import Main from "../components/Main";
import { Sidebar } from "../components/Sidebar";

export const Homepage = () => {
  return (
    <div>
        {/* sidebar */}
        <div className="d-flex gap-3">
        <Sidebar/>
        <div className="main-container">
          <Main/>
        </div>
        </div>
    {/* main */}
    

    {/* filter */}
    </div>
  )
}

export default Homepage;