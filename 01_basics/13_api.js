const fetchdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw new Error(`HTTP error: status ${response}`);
        }
            const data = await response.json()  
            const obj = {
                title:[
                    ...data.map((item)=>(item.title))
                ]
            };
            console.log(obj);
            
           

        
    } catch (error) {
        console.error(error);
        
    }
}
fetchdata();