import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const BlogsDetails = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>TECHMED | Blog</title>
            </Helmet>
            <div className='bg-gradient-to-r from-purple-400 to-pink-600 p-20 text-white font-bold text-3xl text-center mb-10'>
                <h2>BLOG</h2>
            </div>
            <div className="">
                <h2 className="uppercase text-3xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{blogs.title}</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-gray-400 text-md border-l-4">
                    <h2 className="ml-4">{blogs.date}</h2>
                </div>
                <div className="mt-5">
                    <img className="w-full rounded-lg" src={blogs.image} alt="" />
                </div>
                <div className="mt-10 flex gap-8 p-10">
                    <div className="text-justify">
                        <p className="">{blogs.details}</p>
                    </div>
                    <div>
                        <img src={blogs.banner_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;