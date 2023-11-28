import { FaArrowRight } from 'react-icons/fa';
import './ExtraBanner.css'
import Swal from 'sweetalert2';

const ExtraBanner = () => {
    const handleSubmit = e =>{
        e.preventDefault();
    
        const form = e.target;
    
        const email = form.email.value;
    
        const info = {email}
    
        fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(info)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Email sent successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className='banner uppercase text-center py-44  mb-10 rounded-lg'>
            <h2 className='text-3xl tracking-wider text-white'>WELCOME TO</h2>
            <h1 className='text-6xl font-bold tracking-wide text-white'>Healthy Weekend Check up</h1>
            <div className='mt-10'>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center gap-4 form-control'>
                        <input type="email" name="email" placeholder="email" className="w-2/4 textarea-accent input input-bordered" required />
                        <div>
                            <button className='btn'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExtraBanner;