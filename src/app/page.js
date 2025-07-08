import Aboutinfo from "../../components/Aboutinfo";
import Aboutme from "../../components/Aboutme";
import Applynow from "../../components/Applynow";
import Calender from "../../components/Calender";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Schedule from "../../components/Schedule";
import Works from "../../components/Works";
import Worksinfo from "../../components/Worksinfo";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Applynow />
        <Schedule />
        <Calender />
        <Works />
        <Worksinfo />
        <Aboutme />
        <Aboutinfo />
        <Footer />
      </div>
    </>
  );
}
