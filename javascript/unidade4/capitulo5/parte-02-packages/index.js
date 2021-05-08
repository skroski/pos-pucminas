import { v4 } from 'uuid';
import translate from 'translate';

output.innerHTML = `<p>Seu ID é ${v4()}</p>`

translate.engine = 'libre';
translate.from = 'pt';
translate.to = 'en';


output2.innerHTML = `<p>
<input type="text" id="original"></p>
<button id="traduzir"> Traduzir</button>
<p id="traduzida"></p>
`

traduzir.onclick = () => {
   translate(original.value).then((t) => (traduzida.innerHTML = t));
}
    
