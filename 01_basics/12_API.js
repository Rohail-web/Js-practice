// Fetch data from an API
// const fetchData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) {
//         (`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json(); // Convert response to JSON
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// };

// fetchData();

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
        if (response.ok) {
            const data = await response.json();

            // Transforming the data into the required structure
            const obj = data.reduce((acc, item) => {
                console.log(acc[item.userId])
                if (!acc[item.userId]) {
                    console.log("Inner: ",acc[item.userId])
                    acc[item.userId] = []; // Initialize array for each userId
                    console.log("Inner: ",acc[item.userId]) //[]
                }

                acc[item.userId].push({
                    id: item.id,
                    body: item.body,
                    title: item.title
                });
                console.log("outer: ",acc)
                return acc;
            }, {});
        } else {
            console.log("Response error:", response.message);
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function
fetchData();




// title: {
//     []
// }
// array iterate
// is main say wo walay titles nikalo jin ki lenght 20 say ziada hai