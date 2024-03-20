import React from 'react'
import { ToastContainer, toast,Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ContectUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('תודה שיצרת עימנו קשר,נחזור אליך בהקדם', {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5001}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce/>
            <strip className="container-fluid">
                <div className="strip_img m-auto ">
                    <img src="/images/IBRC_Header.png" alt="ibrc" title="שחפיות גמדיות מטובעות" className="col-12" />
                </div>
            </strip>
            <main className="container-fluid p-3">
                <div className="container align-items-center justify-content-between">
                    <div className="row align-items-center justify-content-center">
                        <form onSubmit={handleSubmit} className="form col-md-6 p-2 border-start">
                            {/* /ty.html */}
                            <h3>צור קשר</h3>
                            <label for="name">שם:</label>
                            <input type="text" className="form-control" />
                            <br />
                            <label for="phone">טלפון:</label>
                            <input type="tel" className="form-control" />
                            <br />
                            <label for="exampleFormControlInput1" className="form-label">דוא"ל:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="israel@example.com" required />
                            <br />
                            <label for="exampleFormControlTextarea1" className="form-label">נושא הפניה:
                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            <br />
                            <button type="submit" className="btn btn-success ">שליחה</button>
                        </form>
                        <div className="video-container col-md-6 col-sm-10 rounded-4">
                            <video className="embed-responsive-item" width="100%" controls autoPlay muted>
                                <source src="images/received_3241257112755792.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContectUs




