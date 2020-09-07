import axios from "axios"

const baseUrl = "http://localhost:60000/api/"

export default{

    Customer(url = baseUrl + 'customers/'){
        return{
            fetchAll : () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },
    Country(url = baseUrl + 'countries/'){
        return{
            fetchAll : () => axios.get(url)
        }
    }
}