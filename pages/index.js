import Head from 'next/head'
import DenseTable from '../src/components/tabela/denseTable'
import { useEffect, useState } from 'react';
import myDriver from '../api';
import SplineChart from '../src/components/tabela/highcharts/barchart';
import styl from '../src/styles/cindex.module.css';

export default function indX2() {
    const [nomezin,setNomezin] = useState('inicial');
    const [lista,setLista] = useState(
        {
            "meuArray":[0]
        } 
        )
    const [carreg,setCarreg] = useState(false)
        

        async function handleProcurai(eventoSb){
            eventoSb.preventDefault();
            setCarreg(true);
            let nomezi  = nomezin+"";
               try{        
                   const rsultado = await myDriver.get('/'+nomezi);   
                          
                   setLista(rsultado.data);
                   setCarreg(false);
               }catch(er){
                   console.log('Erow'+er);
               }
           }

    return(
  <>
    <Head>
    
      <title>tabela do gabriel</title>
    </Head>
    <h2><p>gdSheet</p> - Tabela google sheet como API</h2>
    <h3><a href="https://drive.google.com/file/d/194t1ptGWmjV1uDGqepXUZhiEUAgnr8D9/view?usp=sharing">Clique aqui</a> E adicione/edite itens na tabela do google drive</h3>

    <div className={styl.forme} style={{backgroundColor:"black"}}>
    <form onSubmit={handleProcurai}>
        <input placeholder="pesquisa" type="text" value={nomezin}
            onChange={txt=>setNomezin(txt.target.value)}/>
        <button className="button" type="submit">procurai</button>
    </form>
    
     {lista?<DenseTable arrai={lista} carreg={carreg}/>: <h6>não encontrei nada poxa :(</h6>}
     
    </div>
    {lista?
    <SplineChart dados={lista}/>
    :
    <SplineChart />
    }
  </>
)
}
