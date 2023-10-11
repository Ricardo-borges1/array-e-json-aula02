/********************************************************************************
 * Objetivo: Trabalhar com os conceitos de array e Json
 * Data: 27/09/2023
 * Autor: Ricardo Borges do Amaral
 * Versão 1.0
 ********************************************************************************/


// [ ] -> significa uma estrtura de Array
// { } -> significa uma estrutura Json

const conceitoArray = function(){
    //Criando um array e atribuindo conteuido a ele 
    let listaDenome = ['Jose', 'Maria', 'Luiz', 'Ana', true];


    // cria tabela mostrando os índices
    console.log(listaDenome);
    console.table(listaDenome);


    // exibe apenas um conteúdo do array, através do índice 
    console.log(listaDenome [0])


    // typeof -> retorna um tipo de dado do array ou do conteudo de cada indice //
    console.log (typeof (listaDenome))
    console.log (typeof (listaDenome [3]))

    listaDenome [1] = 'Maria da Silva';
    console.table(listaDenome);

    // push -> adiciona novos elementos ao meu array, porém no fim dele, na sequencia// 
    listaDenome.push('André da Silva')
    listaDenome.push('Carlos da Silva', 'Suzane da Silva', 'Julia da Silva')
    console.table (listaDenome);

    // unshift -> adiciona novos elementos, porem no inicio do array
    // CUIDADO pois ele reorganiza todos os índices e seus conteúdos 
    listaDenome.unshift('Nathalia da Silva', 'Pedro da Silva');
    console.table (listaDenome);


    // pop -> remove elementos do fim, do ultimo indice
    listaDenome.pop ();
    console.table (listaDenome);


    // exclui os indices, (3,3) = remova o indice 3, 3 posições
    listaDenome.splice(3,3);
    console.table ( listaDenome);

  // remove do inicio, faz o processo inverso do unshift 
    listaDenome.shift();
    console.table ( listaDenome);
}

const percorrendoArray = function(){
    let listaDeProdutos = [
    'mouse', 
    'teclado', 
    'monitor', 
    'computador', 
    'caixa de som',
    'impressora',
    'fone de ouvido',
    'web cam',
    'microfone',
    'hd',
    'memória'
]

    //length -> retorna a quantidade de elementos de um array
    // console.log(listaDeProdutos.length);


//--------------------------------------------------------------------------------------//

    //WHILE

   // let cont = 0;
    //while (cont < listaDeProdutos.length){
        //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);
       // cont +=1;
   //}


  //--------------------------------------------------------------------------------------//


   //FOR
   //for(let cont=0 ; cont <listaDeProdutos.length; cont++){
    //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);

   //}


   //--------------------------------------------------------------------------------------//


    //FOREACH -> estrutura de repetição feita para trabalhar com array, ele gerencia o índice, ele pega o arrray "Lista de produtos" 
    //e ele cria na memoria uma replica dsse array, pegando o conteudo do array e joga numa variavel de callback

   // listaDeProdutos.forEach(function(produto){
    //console.log (`Nome do Produto: ${produto}`)

   // })

   //--------------------------------------------------------------------------------------//


   //IndexOf -> Permite localizar um conteudo de um array e retorna o seu índice
   console.log (listaDeProdutos.indexOf ('fone de ouvido'));


   // Includes -> retorna verdadeiro se ele encontrar e falso se ele nao encontrar, devolve um booleano
   console.log(listaDeProdutos.includes('impressora'));

}

const filtrarProduto = function(nomeProduto){
 let listaDeProdutos = [
    'mouse', 
    'teclado', 
    'monitor', 
    'computador', 
    'caixa de som',
    'impressora',
    'fone de ouvido',
    'web cam',
    'microfone',
    'hd',
    'memória'
];


let nome = nomeProduto;
let status = false
let cont = 0;
    //Usando o indexOf
        //if (listaDeProdutos.indexOf(nome) >= 0) 
            //status = true;

    //Usando o includes
        //if(listaDeProdutos.includes(nome))
            //status = listaDeProdutos.includes(nome);

    // Fazendo o filtro manual 
        listaDeProdutos.forEach(function(produto){
            if (produto.toUpperCase() == nome.toUpperCase())
            cont ++;
        })


    return cont;

}

const conceitoJSON = function(){
    //Criando uma variavel JSON e colocando atributos manuais
    let aluno = {nome:'José Da Slva', telefone: '114789254', celular: '11987487771'};
    let aluno2 = {nome:'Maria Da Slva', telefone: '114755485', celular: '11987487427'};
    let aluno3 = {nome:'André Da Slva', telefone: '1147554545', celular: '1198754487427'};
    let arrayAlunos = [];

    //Criando um objeto do tipo Array e guardando dois elemento Json dentro dele
    arrayAlunos.push(aluno, aluno2,aluno3);

    //CRIANDO NOVOS ATRIBUTOS DO JSON//
    aluno.email = 'jose@gmail.com';
    aluno.ra = 123456;

    // Exibindo todos os atributos da variável
    //console.log(aluno);

    // Fazer uma consulta de um atributo especifico
    //console.log('O nome do aluno é: ' + aluno.nome)


    //USAMOS FOREACH PRA FAZER UMA CONSULTA DE TODOS OS ATRIBUTOS
    arrayAlunos.forEach(function(aluno){
        console.log(`Nome do aluno: ${aluno.nome}`)
        console.log(`Telefone do aluno: ${aluno.telefone}`)
        if(aluno.email != undefined)
        console.log(`Email do aluno: ${aluno.email}`)
        if(aluno.ra != undefined)
        console.log(`RA do aluno: ${aluno.ra}`)
        console.log(`Celular do aluno: ${aluno.celular}`)
        console.log('***************************\n')
    });

    console.table(arrayAlunos);


    //console.log(arrayAlunos);

    //console.log('O nome do aluno é:' + arrayAlunos[1].nome);
    //console.log('O celular da aluna é:' + arrayAlunos[1].celular);


    
}

const cadastroProdutos = function(){
    let categorias = [
                         {id: 1, nome: 'Hardware', descricao: 'Equipamentos de hardware para PC'},   
                         {id: 2, nome: 'Periféricos', descricao: 'Periféricos para PC'},
                         {id: 3, nome: 'Games', descricao: 'Jogos e acessórios para PC'},
                         {id: 4, nome: 'Escritório', descricao: 'Itens de infórmatica para escritório'}      
                    ];

    let cores = [
                {id: 1, nome: 'Preto'},         
                {id: 2, nome: 'Branco'},     
                {id: 3, nome: 'Cinza'},     
                {id: 4, nome: 'Azul'},     
                {id: 5, nome: 'Vermelho'},     
                ];
                
    let marcas = [
                {id: 1, nome: 'Dell', telefone:'1192992982', email: 'dell@gmail.com'},
                {id: 2, nome: 'Intel', telefone:'114542982', email: 'intel@gmail.com'},
                {id: 3, nome: 'AMD', telefone:'1323492982', email: 'amd@gmail.com'},
                {id: 4, nome: 'Multilaser', telefone:'11168237982', email: 'multilaser@gmail.com'},
                {id: 5, nome: 'Logitech', telefone:'11391276982', email: 'logitech@gmail.com'},
                {id: 6, nome: 'Positivo', telefone:'1192022982', email: 'positivo@gmail.com'}
                  ];

            }


// usado para executar nossa função

//conceitoJSON();
//conceitoArray();
//percorrendoArray();
//console.log (filtrarProduto('mOuse'));