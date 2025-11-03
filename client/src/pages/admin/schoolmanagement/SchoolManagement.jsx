import AdminLayout from "layouts/adminlayout/AdminLayout";
import Card from "components/card/Card";
import {  FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import {
  MdOutlineRateReview,
  MdOutlinePlaylistAdd,
} from "react-icons/md";

const SchoolManagement = () => {

  // todo ============ data for menu card ============
  const data = [
    {
      id: 0,
      cardColor: "#ebfafa",
      link: "/admin/school-register",
      icon: <FaUser />,
      title: "Add School",
      iconBgColor: "#ff6666",
      subIcon: <MdOutlineRateReview />,
    },
    {
      id: 1,
      cardColor: "#ffe6e6",
      link: "/admin/school-list",
      icon: <RiAdminFill />,
      title: "School List",
      iconBgColor: "#476EAE",
      subIcon: <MdOutlinePlaylistAdd />,
    },
  ];

    // todo ============ data for menu card ============

  return (
    <AdminLayout>
      {/* ============== map function iterate over data */}
      <div className="flex flex-wrap gap-2">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default SchoolManagement;
