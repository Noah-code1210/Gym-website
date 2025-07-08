"use client";
function Navbar() {
  function handleScrollToSchedule() {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    });
  }
  function handleScrollToAbout() {
    window.scrollTo({
      top: 2560,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div id="navbar">
        <div className="w-full max-w-[1920px] h-[14vh] bg-black relative p-3 pr-12">
          <div className="flex justify-between items-center">
            <img
              className="w-[210px] h-[109px]"
              src="https://api.removal.ai/download/g2/preview/d378ae8e-f4b0-432e-9e3f-64f876f9ebe7.png"
              alt=""
            />
            <ul className="flex gap-12 ">
              <li className="list" onClick={handleScrollToSchedule}>
                Schedule
              </li>
              <li className="list">
                How It Works
              </li>
              <li className="list" onClick={handleScrollToAbout}>
                About Me
              </li>
              <li className="list">Contact Me</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
