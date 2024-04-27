"use client"
import PrivateRoutes from "../components/private-routes"

const Notes = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Notes</h1>
            </div>
        </div>
    )
}

export default PrivateRoutes(Notes)