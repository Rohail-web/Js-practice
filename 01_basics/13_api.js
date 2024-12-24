const fetchdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("ERROR");
        }
        const data = await response.json();              // {[]}
        // const obj = {
        //     fetch_data: data.map((item) => ({
        //         titles: item.title,
        //         userID: item.userId,
        //         id: item.id,
        //         body: item.body
        //     })),
        // };
        const obj =  data.map((item)=>({titles :item.title,id :item.id}))         // [{}]
        console.log(obj);

    } catch (error) {
        console.error(message, error);
    }
}
fetchdata();
