import Head from 'next/head'
import DenseTable from '../src/components/tabela/denseTable'
import { useEffect, useState } from 'react';
import myDriver from '../api';

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
        useEffect(()=>{setTimeout(()=>{
           
        },[])

        async function handleProcurai(eventoSb){
            eventoSb.preventDefault();
               const jsnm = {    nomezin}
               try{        
                   const rsultado = await myDriver.post('/',jsnm);
                   
                   
                   setLista(rsultado.data);
               }catch(er){
                   console.log('Erow'+er);
               }
           }

    return(
  <>
    <Head>
      <title>tabela do gabriel</title>
    </Head>
    <h2>gdSheet - minha tabela excel</h2>
    
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
