export function Header() {
    return(
        <div className="flex justify-between p-8 bg-gray-700">
        <h2 className="text-white">DD Orçamento</h2>
        <button className="bg-red-600 text-white px-8 py-4 rounded border border-red-200" type="button">Nova Transição</button>
      </div>
    )
}