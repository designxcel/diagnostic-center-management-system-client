
import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import { Link} from "react-router-dom";

const AllTest = () => {
  const axiosPublic = UseAxiosPublic();
  // const [currentPage, setCurrentPage] = useState(0)
  // const [testPerPage, setTestPerPage] = useState(10)
  // const {count} = useLoaderData()
  // const numberOfPage = Math.ceil(count / testPerPage)

  // const pages = [...Array(numberOfPage).keys()]

  

  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get('/test');
      return res.data;
    },
  });

  // const handleTestPerPage = e =>{
  //   const value = parseInt(e.target.value)
  //   console.log(value)
  //   setTestPerPage(value)
  //   setCurrentPage(0)
  // }

  // const handlePrevPage = () => {
  //   if(currentPage > 0){
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  // const handleNextPage = () => {
  //   if(currentPage < pages.length - 1){
  //     setCurrentPage(currentPage + 1)
  //   }
  // }
  return (
    <div>
      <Helmet>
        <title>TECHMED | TEST</title>
      </Helmet>
      <div className="">
        <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">All test</h2>
        <div className="divider max-w-7xl mx-auto"></div>
      </div>
      <div className="p-20">
        <div className="overflow-x-auto">
          <table className="table table-md">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Diagnostic Center</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
                {
                    tests.map((test, index) => 
                            <tr key={test._id} test={test}>
                            <th>{index + 1}</th>
                            <td>{test.name}</td>
                            <td>{test.category}</td>
                            <td>{test.center}</td>
                            <td>{test.price}</td>
                            <td>
                              <Link to={`/testdetails/${test._id}`}>
                                <button><FaEye></FaEye></button>
                              </Link>
                            </td>
                            </tr>
                        )
                }
            </tbody>
          </table>
        </div>
        
      </div>
      {/* <div className="pagination flex justify-center items-center mt-20">
                <button onClick={handlePrevPage}>Prev</button>
                {
                  pages.map(page => <button 
                    onClick={()=> setCurrentPage(page)} 
                    key={page} 
                    className={currentPage === page ? 'selected' : undefined}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select className="text-black" onChange={handleTestPerPage} value={testPerPage} name="" id="">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
        </div> */}
    </div>
  );
};

export default AllTest;
