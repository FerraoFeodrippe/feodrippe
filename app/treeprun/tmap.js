

export default async function TMap(){
    let w = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }
    await w(3000);

    return(
        <div>
            <p>
                T Map after 3 seconds test!
            </p>
        </div>
    )    
}
