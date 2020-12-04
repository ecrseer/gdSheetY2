import Head from 'next/head'
import DenseTable from '../src/components/tabela/denseTable'
import { useEffect, useState } from 'react';

async function handleProcurai(eventoSb){
    eventoSb.preventDefault();
       const jsnm = {    nomezin}
       try{        
           const rsultado = await myDriver.post('/',jsnm);
           console.log(rsultado.data.meuArray);
           setLista(rsultado.data);
       }catch(er){
           console.log('Erow'+er);
       }
   }
export default function indX2() {
    const [nomezin,setNomezin] = useState('inicial');
    const [lista,setLista] = useState(
        {
            "meuArray":[
                ['bem','vindo'],
        ['oi','td','b'],
        ['sim','e']
        ]
        }
        
        )
    return(
  <>
    <Head>
      <title>next-pwa example</title>
    </Head>
    <h1>Next.js + PWA = AWESOME!</h1>
    <h2>Following image will fallback to placeholder when offline</h2>
    <img src='https://source.unsplash.com/600x400/?cat' />
    <div>
    <form onSubmit={handleProcurai}>
        <input placeholder="pesquisa" type="text" value={nomezin}
            onChange={txt=>setNomezin(txt.target.value)}/>
        <button className="button" type="submit">procurai</button>
    </form>
    
     {lista?<DenseTable arrai={lista}/>: <h6>não encontrei nada poxa :(</h6>}
     
    </div>


  </>
)
}
