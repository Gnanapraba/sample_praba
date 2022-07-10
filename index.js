import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klenty</title>
      </Head>

      <section>
        <div className="navbar bg-base-100">
          <div className="navbar-start">

            <Image src="/klenty.png" alt="" width={92} height={40} />

            <ul className="menu menu-horizontal p-0 lg:flex hidden font-bold pt-2">
              <li className="pl-2"><a>Platform</a></li>
              <li><a>Pricing</a></li>
              <li><a>Acceleration</a></li>
              <li><a>Resources</a></li>
              <li><a>Customer Stories</a></li>
            </ul>
          </div>
          <div className="md:navbar-end">
            <button className="btn btn-link ">Login</button>
            <div classNameName="px-2">
              <button className="btn btn-outline md:btn-sm btn-primary hidden">Button</button></div>
            <button className="btn md:btn-sm bg-blueWhale-600 hover:bg-blueWhale-600 border-none">TRY FOR FREE</button >
          </div>
        </div>


        {/* Desktop View*/}

        <section className="w-full  justify-center hidden  md:flex ">
          <div className="container mx-auto">
            <div className="items-center flex md:flex-nowrap md:px-12 ">
              <div className=" md:w-8/12 lg:w-6/12 xl:w-2/12 md:px-10 "></div>
              <div className=" md:w-8/12 lg:w-6/12 xl:w-11/12 md:px-10 ">
                <h2 className="md:pt-16 font-bold text-4xl text-blueGray-10">
                  Dont just integrate
                </h2>
                <h2 className="font-bold text-3xl md:mt-2 text-blueGray-20">
                  Accelerate your CRM
                </h2>
                <p className=" md:mt-2 text-base leading-relaxed">
                  Propel Your sales team into a state of flow with CRM Accelerations. Switch out
                  boring hours of repetitive work with high impact activities. Build a repeatable sales process.
                </p>
                <button className="btn border-none rounded bg-blueWhale-600 hover:bg-blueWhale-600 mt-4 sm:btn-sm md:btn-sm ">
                  GET STARTED
                </button>

              </div>
              <div className="md:w-8/12 lg:w-6/12 xl:w-11/12 px-10 py-12 justify-center">
                <Image src="/group-5.png" alt="" width={400} height={400} />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*Mobile View */}

      <section className="block md:hidden py-6">
        <div className="container mx-auto items-center flex flex-wrap ">
          <div className="w-full  py-6">
            <h2 className="md:pt-16 font-bold  text-2xl text-blueGray-10">
              Dont just integrate
            </h2>
            <h2 className="font-bold text-2xl md:mt-2 text-blueGray-20">
              Accelerate your CRM
            </h2>
            <p className=" md:mt-2 text-base leading-relaxed">
              Propel Your sales team into a state of flow with CRM Accelerations. Switch out
              boring hours of repetitive work with high impact activities. Build a repeatable sales process.
            </p>
            <button className="btn border-none rounded bg-blueWhale-600 hover:bg-blueWhale-600 mt-4 btn-sm ">
              GET STARTED
            </button>
            <Image src="/group-5.png" alt="" width={400} height={370} />
          </div>
        </div>
      </section>

      {/* second Section*/}

      <section className="bg-blueWhale-500 font-family  py-8">
        <h1 className="text-center text-2xl text-blueGray-10 font-bold font-Paytone mt-4">
          CRM Acceleration
        </h1>
        <p className="text-center pt-2 text-base">
          Everything CRM Integrations was supposed to be. And more.
        </p>
        <div className="py-10 w-full flex relative flex-wrap justify-center  bg-neutral-100">

          <div className="mb-6 w-full h-full md:px-4 md:w-1/2 lg:w-1/4  " style={{
            padding: "1%"
          }}>

            <div className=" bg-white rounded-xl p-6  shadow hover:shadow-lg">
              <Image src="/group-1.png" alt="" width={50} height={50} />
              <h2 className="text-lg  text-blueGray-10 mt-4 font-semibold">
                Never update your contacts manually
              </h2>
              <p className="mt-2  text-sm   font-normal">
                Any contact you add in CRM gets updated automatically in Klenty.
                Set up Triggers to drive leads from Klenty back into the CRM.
                Save hours everyday to focus on critical activities
              </p>
            </div>
          </div>

          <div className="mb-6 w-full h-full md:px-4 md:w-1/2 lg:w-1/4" style={{
            padding: "1%"
          }}>

            <div className=" bg-white rounded-xl p-6 shadow hover:shadow-lg">
              <Image src="/group-2.png" alt="" width={50} height={50} />
              <h2 className="text-lg text-blueGray-10 mt-4 font-semibold">
                Engage instantly with prospects who show intent
              </h2>
              <p className="mt-2  text-sm   font-normal">
                Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM.
                Get notified immediately. Followup without skipping a beat.
              </p>
            </div>
          </div>

          <div className="mb-6 w-full h-full md:px-4 md:w-1/2 lg:w-1/4 " style={{
            padding: "1%"
          }}>

            <div className=" bg-white rounded-xl p-6 shadow hover:shadow-lg">
              <Image src="/group-3.png" alt="" width={50} height={50} />
              <h2 className="text-lg  text-blueGray-10 mt-4 font-semibold">
                Outreach without leaving your CRM
              </h2>
              <p className="mt-2  text-sm  font-normal">
                Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty.
                No more switching screens to execute sales outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Desktop View */}

      <section className="w-full  justify-center hidden py-12 md:flex ">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl text-blueGray-10 pt-12 font-bold font-Paytone">
            What Our Customers have to Say
          </h1>
          <div className=" flex md:flex-nowrap md:px-12 py-6 ">
            <div className=" md:w-8/12 lg:w-2/12 xl:w-4/12 px-10 ">
            </div>
            <div className=" mt-4 md:w-8/12 lg:w-6/12 xl:w-11/12 md:px-10 ">
              <Image src="/vector.png" alt="" width={50} height={50} />
              <p className=" mt-2 text-lg font-bold text-blueGray-10 ">
                Klenty has helped us engage a far greater num of leads per
                week, resulting in an outbound revenue jump of 93%.
              </p>
              <div className=" flex md:flex-nowrap ">
                <div className=" mt-6 md:w-8/12 lg:w-12/12 xl:w-2/12">
                  <Image src="/double-logo.png" alt="" width={150} height={80} />
                </div>
                <div className="md:w-8/12 lg:w-6/12 xl:w-11/12 justify-right mt-8 pl-2 ">
                  <h1 className="text-xs border-l border-black pl-1">Adam Weinger<br></br>
                    President, Double the Donation</h1>
                </div>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-6/12 xl:w-11/12 md:px-10 pt-4 justify-center">
              <Image src="/group-6.png" alt="" width={250} height={280} />
            </div>
          </div>
        </div>
      </section>


      {/* Mobile View*/}
      <section className="block md:hidden pb-28">
        <div className="container mx-auto items-center flex flex-wrap ">
          <div className="w-full">
            <h1 className="text-center text-3xl text-blueGray-10 pt-12 font-bold font-Paytone">
              What Our Customers have to Say
            </h1>
            <div className="justify-center mt-4 text-center">
              <Image src="/group-6.png" alt="" width={120} height={130} />
            </div>
            <div className=" mt-4 pb-28">
              <Image src="/vector.png" alt="" width={50} height={50} />
              <p className=" mt-2 text-lg font-bold text-blueGray-10 ">
                Klenty has helped us engage a far greater num of leads per
                week, resulting in an outbound revenue jump of 93%.
              </p>
              <div className="mt-2 flex flex-nowrap ">
                <div className=" justify-center">
                  <Image src="/double-logo.png" alt="" width={80} height={50} />
                </div>
                <div className="justify-right mt-2 pl-2 ">
                  <h1 className="text-xs border-l border-black pl-1">Adam Weinger<br></br>
                    President, Double the Donation</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
