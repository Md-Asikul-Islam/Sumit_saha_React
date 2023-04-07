function Button({handleClick, children}){
    console.log(`redering button ${children}`);
    return(
        <div>
            <button type="button" onClick={handleClick} >
                {children}
             </button>
        </div>
    )
}

export default Button ;