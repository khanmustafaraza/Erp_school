import { MdAdminPanelSettings } from "react-icons/md"

const MainHeading = ({title}) => {
  return (
    <div>
       {/* =============heading of  page ============== */}
                <div className="flex justify-between">
                  <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-1 rounded-md">
                    <h2 className="text-lg font-semibold"> <MdAdminPanelSettings className="text-green-600 text-2xl" /> {title}</h2>
                   
                  </div>
      
                
                </div>
                          {/* =============heading of  page ============== */}
    </div>
  )
}

export default MainHeading
