//API Fetch

// function carga() {
//     fetch('https://reqres.in/api/users/')
//         .then(function (resp) {
//             console.log(resp)
//             if(resp.ok){
//                 return resp.json();
//             }
//             console.log(resp);
//         })
//         .then (function (obj) {
//             console.log(obj)
//         })
//         .catch ((erro) => console.log(erro));
// }
// carga();

function carga(n) {
    fetch('https://reqres.in/api/users/' + n)
        .then((resp) => resp.json())
        .then ((obj) => fetch(obj.data.avatar))
        .then((resp) => resp.blob())
        .then((b) => {imagem.src = URL.createObjectURL(b);})
        .catch((erro) => console.log(erro))
    
}
output.innerHTML = `
    <p>
        <input id="idUser" type="number" value="1"/>
        <button id="btn"> Ver Avatar</button>
    </p>
    <p>
    <img id="imagem" />
    </p>
    `;
    btn.onclick = () => carga(idUser.value)

carga(1);