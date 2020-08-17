import axios from "axios"

const baseUrl = "http://localhost:58513/api/"

export default{

    Customer(url = baseUrl + 'customers'){
        return{
            fetchAll : () => axios.get(url),
            create: newRecord => axios.post(url, newRecord)
        }
    },
    Country(url = baseUrl + 'countries'){
        return{
            fetchAll : () => axios.get(url)
        }
    }
}