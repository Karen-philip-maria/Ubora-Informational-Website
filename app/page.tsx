<<<<<<< Updated upstream
import Image from "next/image";
// import DashboardOverview from "./component/Overview"
import PracticalsPage from "./component/Practicals"
  // import SelectionPage from "./component/Selection";

export default function Home() {
  return (
    <div>
      <main>
    {/* <SelectionPage/> */}
    {/* <DashboardOverview/> */}
    <PracticalsPage/>
      </main>
    </div>
  );
}



=======
import Navbar from "@/app/components/Navbar";
import Homepage from "@/app/components/Homepage";


export default function Home(){
  return(
    <div>
      <Navbar/>
      <Homepage/>
    </div>
  );
}
>>>>>>> Stashed changes
