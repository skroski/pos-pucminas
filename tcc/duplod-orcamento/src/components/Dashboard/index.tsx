import { useEffect } from "react"
import { api } from "../../services/api"

export function Dashboard() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])
    return(
        <div className="text-white h-2">Dashboard</div>
    )
}