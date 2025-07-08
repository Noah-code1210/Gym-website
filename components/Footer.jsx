'use client'
function Footer() {

    function toInsta() {
        window.open("https://www.instagram.com/_revitalizeu/")
    }

  return (
    <>
    <div id="footer">
        <div className="w-full max-w-[1920px] h-[338px] bg-black flex flex-col justify-center items-center gap-y-7">
            <img className="w-[40px] h-[40px] cursor-pointer" onClick={toInsta}
            src="https://stcdn.leadconnectorhq.com/funnel/icons/light-gray/instagram-light-gray.svg" alt="insta-img" />
            <div className="text-[20px] text-[#0cad60] font-semibold">
                Website Terms
            </div>
            <div className="text-white text-sm pb-[14px] border-b-1">
                Copyright © RevitalizedU 2025
            </div>
            <div className="text-white text-sm">
                Powered by REMOTEFITNESSCEOS.COM
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer