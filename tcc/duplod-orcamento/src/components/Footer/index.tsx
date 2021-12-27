export function Footer() {
    return (
        <div className="flex justify-between p-8 bg-gray-700">
            <h2 className="text-white">Footer</h2>
            <button className=" text-white px-8 py-4 rounded border border-red-200" type="button">Site Duplo D</button>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}