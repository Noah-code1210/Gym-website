import Aboutme from "../../components/Aboutme";
import Applynow from "../../components/Applynow";
import Calender from "../../components/Calender";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Schedule from "../../components/Schedule";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Applynow />
        <Schedule />
        <Calender />
        <Aboutme />
      </div>
    </>
  );
}
