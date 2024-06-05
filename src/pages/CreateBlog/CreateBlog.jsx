import React from 'react'

const CreateBlog = () => {
  return (
      <section className="bg-zinc-50 dark:bg-zinc-950 dark:text-white">
        <div className="py-44"></div>
        <div className="grid grid-cols-5 mx-10 sm:mx-24 py-12  ">
          {/* head */}
          <div className="col-span-5 col-start-1 col-end-6 sm:col-start-2 sm:col-end-5 cursor-default  ">
            {/* content */}
            <div className="grid grid-cols-6 auto-rows-min auto-cols-min gap-6  ">
              <div className="col-span-7 sm:col-span-6 relative overflow-hidden ">
                
              </div>
              {/* Text */}
              <div className="col-span-7 ">
                <div className="flex flex-col sm:flex-row justify-start items-start py-24 sm:space-y-0 space-y-4 ">
                  <h1 className="w-3/6 text-2xl ">Create</h1>
                  <p className="w-full text-justify text-xs sm:text-lg leading-10 text-black dark:text-zinc-300">
                    Within this{" "}
                      about section
                    , we present a concise overview of the subject matter. Through
                    a comprehensive description, our objective is to delineate the
                    goals, missions, and core values associated with our topic. By
                    emphasizing the intrinsic significance of the subject under
                    discussion, we aim to convey its inherent importance. Our hope
                    is that through this information, you will discern the added
                    value it offers.
                  </p>
                </div>
                {/* Text */}
                <div className="flex flex-col sm:flex-row space-y-4">
                  <h1 className="w-3/6 text-2xl ">Contact</h1>
                  <div className="w-full space-y-10 flex flex-col text-start justify-start items-start">
                      <h1
                        className="flex flex-col gap-4 text-xl font-normal  "
                      >
                        <span
                          className="cursor-pointer text-lg  text-zinc-400 hover:text-zinc-900 ease-in-out duration-300 transition-all dark:text-zinc-700 hover:dark:text-zinc-500"
                        >
                        </span>
                      </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default CreateBlog;