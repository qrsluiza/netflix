import './FilmeDetalhes.css'
import thumb from '../img/thumb2.webp'
import icone from '../img/perfil.png'
import mais from '../img/mais2.png'
import myname from '../img/myname.png'
import estrela from '../img/estrela.png'
import comentario from '../img/chat.png'
import coracao from '../img/coracao.png'
import mariana from '../img/Mariana.jpg'
import wal from '../img/wal.jpg'
import luiza from '../img/lu.jpg'
import carol from '../img/carol.jpg'


function FilmeDetalhes(){
    return (

    
        <div className='home'>
    

            <div className='thumb-serie'>
                <img className='capa-principal' src={thumb} alt="thumb" />
               <div className='gradiente-overlay'></div>
            </div>

            <div className='thumb-info'>
                <div className='thumb-titulo'>
                <img src={myname} alt="myname" />
                </div>

                <div className='thumb-textos'>
                    <span className='star'>⭐⭐⭐⭐⭐</span>
                    <span>2021</span>
                    <span className='number-text'>16</span>
                    <span>1 temporada</span>
                </div>

              <div className='thumb-escrito1'>
                    <span>
                        Conta a história de Yoon Ji-woo, uma jovem que testemunha o assassinato de seu pai. Determinada a vingar sua morte, ela se infiltra em uma organização criminosa e, sob orientação do chefão, entra para a polícia como informante.
                    </span>
              </div>

              <div className='thumb-escrito2'>
                <span> Estrelando: Han So-hee, Park Hee-soon, Kim Sang-ho, Lee Hak-joo.  </span>
                  <span> Gênero: Ação, Suspense, Drama </span>
                  <span> Cenas e Momentos: Emocionantes </span>
              </div>

             
                <div className='card-info'>
                <img className='icone-ator' src={icone} alt="icone" />
                <span> Han So-hee, Park Hee-soon, Ahn Bo-hyun, Kim Sang-ho, Lee Hak-joo, Chang Ryul, Yoon Kyung-ho, Baek Joo-hee, Moon Sang-min. </span>
             
               </div>

               <div className='card-lista'>
                 <img className='icone-mais' src={mais} alt="mais" />
                 <span>MINHA LISTA</span>
             
               </div>

               <div className='card-menu'>
    
                 <span className='cor-visao'>COMENTÁRIOS</span>
                 <span>TITULOS SEMELHANTES</span>
                 <span>DETALHES</span>
               </div>
            </div>
          
              
      <div className='menu-inferior'>

      <div className='card-comentario'>
        <img  src={mariana} className='icone-coment' alt="mariana" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>_marianavanessa</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>A série é bem envolvente e cheia de reviravoltas. Gostei muito das cenas de luta, que são bem coreografadas e realistas, além da trilha sonora que combina com o clima tenso. A protagonista é forte e carismática, mas às vezes achei que algumas situações foram previsíveis. No geral, foi uma boa experiência, principalmente para quem gosta de drama policial com bastante ação.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >5 likes</span>
        </div>

        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>

      </div>
      </div>
     </div>

     <div className='card-comentario'>
        <img  src={wal} className='icone-coment' alt="wal" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>walggz</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>Assisti My Name por indicação, mas confesso que não é muito o tipo de série que me prende. A trama tem um ritmo acelerado e entrega bastante ação, o que pode agradar a muita gente, mas pra mim acabou ficando um pouco pesado e repetitivo. As lutas são bem feitas, intensas e realistas, só que depois de algumas cenas comecei a sentir que estava vendo mais do mesmo.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >27 likes</span>
        </div>
        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>
      </div>
     </div>


     <div className='card-comentario'>
        <img  src={luiza} className='icone-coment' alt="luiza" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>lulizita</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>Gostei bastante de My Name. Achei a protagonista intensa e muito convincente, principalmente nas cenas de luta, que são bem realistas e cheias de energia. A série é curta, direta e não fica enrolando, o que me prendeu do início ao fim. Para quem curte ação misturada com drama, vale muito a pena.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >19 likes</span>
        </div>
        <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>
      </div>
     </div>


     <div className='card-comentario'>
        <img  src={carol} className='icone-coment' alt="carol" />

        <div className='textos-comentarios'>
        <span className='coment-text1'>annecarolinefbg</span>
      <div className='card-avaliacao'>

          <div className='card-star'>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star'/>
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        <img  src={estrela} className='icone-star' />
        </div>

        <img  src={comentario} className='icone-tag' />
      
      </div>
       <span className='coment-text'>As cenas de ação são o ponto alto: nada coreografado de forma “bonitinha”, mas sim lutas cruas, rápidas e dolorosas, que passam uma sensação de realismo difícil de encontrar em outras produções. Outro detalhe que gostei muito foi a fotografia escura e pesada, que cria a atmosfera perfeita para a trama. Achei também que a duração da série é ideal, porque não enrola e mantém a tensão até o fim.</span>
        
      <div className='card-interacao'>

        <img  src={coracao} className='icone-like'/>
        <span className='interacao-text'>Likes do Review</span>
        <span >15 likes</span>
        </div>

      <div className='card-interacao2'>
        <span className='interacao-text' >Data de Postagem:</span>
        <span>21/08/2025</span>
      </div>

      </div>
     </div>
      </div>
      
    </div>
       
    );
}

export default FilmeDetalhes;
