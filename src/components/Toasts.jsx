import React from 'react'
import {ToastContainer,toast,Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Toasts = () => {
    formSubmitToast = () => {
        toast.success('תודה שיצרת עימנו קשר,נחזור אליך בהקדם',{
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
     
    // not used
    gallerySearchToast = () => {
        toast.warn('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

  return (
    <div>
      formSubmitToast()
    </div>
  )
}

export default Toasts