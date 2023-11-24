import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const Blogs = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });
    return (
        <div className="md:py-20">
            <div className="uppercase text-center md:p-10">
                <h2 className="text-4xl">Our Blogs</h2>
                <h1 className="text-5xl font-bold">Latest News</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-28">
                {
                    blogs.map(blog =>
                    <div key={blog._id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="h-48 w-full" src={blog.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{blog.title}</h2>
                      <p className="text-xs text-gray-400 underline">{blog.date}</p>
                      <p className="text-gray-400">{blog.details}</p>
                      <div className="card-actions">
                        <button className="btn btn-accent uppercase btn-block">Read More</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;