import React from 'react'
import '../stylesheets/btn.css'

const Button = ({ onClick = () => { }, type = 'button', className = 'text-capitalize', loading = false, variant = 'default', text = 'button component', size = 'md', ripple = 'ripple ripple-surface ripple-surface', rippleColor = 'light' }) => {
    return (
        <>

            <button onClick={onClick} type={type} data-mdb-init data-mdb-ripple-color="#fff" className={`${ripple}-${rippleColor} btn btn-${variant} btn-${size} ` + className}>
                {loading &&
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                }
                {text}
            </button>
        </>
    )
}


export default Button
