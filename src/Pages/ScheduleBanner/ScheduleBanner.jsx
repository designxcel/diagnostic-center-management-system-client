import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ScheduleBanner = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: drlists = [] } = useQuery({
    queryKey: ["drlists"],
    queryFn: async () => {
      const res = await axiosPublic.get("/drlists");
      return res.data;
    },
  });

  const { data: centers = [] } = useQuery({
    queryKey: ["centers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/center");
      return res.data;
    },
  });
    return (
        <div className='text-center py-10'>
            <h2 className='text-4xl font-bold uppercase mb-10'>You are <span className='text-cyan-400'>Looking</span> For!</h2>
            <Tabs>
                <TabList>
                <Tab>DOCTOR'S APPOINTMENT</Tab>
                <Tab>LAB SCHEDULE</Tab>
                <Tab>DIAGNOSTIC CENTER</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-center uppercase font-bold text-4xl mt-10'>Doctors List</h2>
                    <div className='divider divider-success max-w-5xl mx-auto'></div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
                        {
                            drlists.map(doctor =>
                                <div key={doctor._id} className="card card-side bg-base-100 shadow-md p-2">
                                <figure><img className='h-32 rounded-full' src={doctor.image} alt="doctor"/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{doctor.name}</h2>
                                    <p className="text-xs">{doctor.degree}</p>
                                    <p className="text-sm font-semibold">{doctor.specialist}</p>
                                    <p className="text-sm font-semibold">Chamber: {doctor.chamber}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-cyan-400 uppercase btn-block">Book Your Doctor</button>
                                    </div>
                                </div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2 className='text-4xl font-bold uppercase mb-10'>No Lab Schedule right now!!</h2>
                </TabPanel>
                <TabPanel>
                 <h2 className='text-center uppercase font-bold text-4xl mt-10'>Diagnostic Center</h2>
                    <div className='divider divider-success max-w-5xl mx-auto'></div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
                        {
                            centers.map(center =>
                                <div key={center._id} className="card w-96 bg-base-100 shadow-md">
                                <figure className="px-10 pt-10">
                                    <img src={center.image} alt="Shoes" className="rounded-xl h-48" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{center.name}</h2>
                                    <p>{center.phone}</p>
                                    <p className='text-xl font-semibold'>{center.location}</p>
                                    <div className="card-actions">
                                    <button className="btn bg-cyan-400">Contact Now</button>
                                    </div>
                                </div>
                                </div>
                                )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ScheduleBanner;