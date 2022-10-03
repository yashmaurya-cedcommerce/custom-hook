import { useState } from "react";

export default function useFetchData() {

    const [result, setResult] = useState([]);

    const fetchData=(type="fetch")=> {
        
        switch(type) {
            case "fetch":
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=>res.json())
                .then(temp=> {
                    setResult([...temp])
                })
                break;
            default: 
            console.log("Default Case")
        }
    }
    return {result, fetchData};
}