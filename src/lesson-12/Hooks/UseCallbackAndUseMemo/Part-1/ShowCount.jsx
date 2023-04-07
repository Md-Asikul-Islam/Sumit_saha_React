function ShowCount({count, title }){
    console.log(`redering ${title} ......`);

    return(
        <div>
            <p>{title} is { count}</p>
        </div>
    )
}
export default ShowCount