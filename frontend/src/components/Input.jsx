import React from 'react'
const Input = ({ animate, type = 'text', name, id, placeholder, className, value, onChange = () => { } }) => {
    return (
        <>
            {animate &&
                <input type="text" />}
            <input type={type} name={name} id={id} placeholder={placeholder} className={styles.btn} onChange={onChange} value={value} />
        </>
    )
}
<style type='text/css'>

</style>
export default Input
