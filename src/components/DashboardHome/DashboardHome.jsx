import dashboardLogo from "../../assets/logo/mainLogo.png"

const DashboardHome = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh]">
            <div>
                <div className="flex justify-center mb-10">
                    <img src={dashboardLogo} alt="" />
                </div>
                <h2 className="text-7xl uppercase font-semibold mb-5">Welcome to the <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TECHMED</span></h2>
                <p className="text-center text-xl text-gray-400">The good physician treats the disease; the great physician treats the patient who has the disease</p>

            </div>
        </div>
    );
};

export default DashboardHome;