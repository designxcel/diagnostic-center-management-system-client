import { Helmet } from "react-helmet-async";
import errorImg from "../../assets/error.jpg"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>TECHMED | ERROR!</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-[75vh]">
            <img src={errorImg} alt="" />
            
            </div>
            <div className="text-center">
                <Link to="/">
                    <h2 className="text-2xl font-bold underline text-blue-700">Back to HomePage</h2>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;