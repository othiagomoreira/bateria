// Adiciona um evento de teclado em toda a página
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase()); 
})

// Responsavel por executar as composições digitada no input
document.querySelector('.btn-composition').addEventListener('click', () => {
    // Seleciona o conteudo digitado dentro do input 
    let song = document.querySelector('#input').value;

    if(song !== '')  {
        // Transforma cada letra digitado em um item de um array
        let songArray = song.split('');

        //Função que executa o songArray
        playComposition(songArray)
    
    }
})


function playSound(sound) {
    // Seleciona o arquivo de audio baseado na tecla que foi digitada
    let audioElement = document.querySelector(`#s_${sound}`);

    // Seleciona data-key de cada tecla
    let keyElement = document.querySelector(`div[data-key="${sound}"`);

    
    if(audioElement) {
        // Zera  o audio assim que outra tecla é pressionada
        // Tirando aquele efeito de "lerdeza" quando teclas são precionadas
        audioElement.currentTime = 0; 
        
        //Função que toca o audio
        audioElement.play(); 
    }

    //Adiciona a class active e remova após 300 milisegundos
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
    
}


function playComposition(songArray) {
    let wait = 0;
    
    songArray.forEach((songItem) => {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait)

        wait += 250;

    })
};