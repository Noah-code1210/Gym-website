function Worksinfo() {
  return (
    <>
      <div className="w-full max-w-[1920px] h-[1000px] flex justify-center items-start mt-24">
        <div className="flex flex-col gap-y-10">
          <div className="work__border ">
            <div className="works__title w-[1000px]">
              Book Your Discovery Call
            </div>
            <div className="works__description">
              Pick a time on the calender that fits your schedule.
            </div>
          </div>
          <div className="work__border ">
            <div className="works__title">Goals</div>
            <div className="works__description">
              Answer the application question so I know more about your fitness
              goals and how to best serve you on the call.
            </div>
          </div>
          <div className="work__border ">
            <div className="works__title">Call</div>
            <div className="works__description">
              Once you have booked your discovery call, you will be sent a
              confirmation email and instructions on how to prepare for your
              discovery call.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worksinfo;
