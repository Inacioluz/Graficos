function desenhargraficos() {

    //Grafico de Pizza -----------------------------------
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'categorias');
    tabela.addColumn('number', 'valores');
    tabela.addRows([

        ['Educação', 2000],
        ['Transporte', 500],
        ['Lazer', 230],
        ['Saúde', 50],
        ['Cartão de crédito', 900],
        ['Alimentação', 260]
    ]);
    
    //Opçoes ------------------------------------------------

    var opcoes = {
        'title': 'Tipos de Gastos',
        'height': 400,
        'width': 900,
        is3D: true,
        legend: 'labeled',
        pieSliceText: 'value',
        slices:
        {
            0: {},
            1: { color: 'pink' },
            2: { color: 'yellow' },
            3: { color: 'green' },
            4: { offset: 0.4 },
            5: { color: 'blue' },
            6: { color: 'gray' }
        }
    };
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
        grafico.draw(tabela, opcoes)

    //Grafico de Linha -------------------------------------------

    tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'mês');
    tabela.addColumn('number', 'gastos');
    tabela.addRows([
        ['jan', 800],
        ['fev', 400],
        ['mar', 1100],
        ['abr', 400],
        ['mai', 500],
        ['jun', 750],
        ['jul', 1500],
        ['ago', 650],
        ['set', 850],
        ['out', 400],
        ['nov', 1000],
        ['dez', 720]
    ]);

    //Opçoes ------------------------------------------------

    var opcoes = {
        title: 'Gastos por mês',
        width: 650,
        height: 300,
        vAxis:
            {
            format: 'currency',
            gridlines:
            {
                count: 5,
                color: 'transparent'
            }
        },
        curveType: 'function',
        legend: 'none'
    }
    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
        grafico.draw(tabela, opcoes);

    //Grafico de Coluna ----------------------------------------

    var tabela = google.visualization.arrayToDataTable([
        ['Mês', 'Entrada', 'Saída'],
        ['jan', 2500, 1000],
        ['fev', 1000, 500],
        ['mar', 3000, 1300],
        ['abr', 1500, 1700],
        ['mai', 5000, 2250],
        ['jun', 3567, 3000],
        ['jul', 3452, 1468],
        ['ago', 1833, 5250],
        ['set', 1800, 1000],
        ['out', 1800, 1000],
        ['nov', 3569, 1500],
        ['dez', 3000, 1740]
    ]);

    //Opçoes -----------------------------------------------

    var opcoes = {

        title: 'Entradas e saídas da conta',
        width: 800,
        height: 400,
        vAxis: {
            gridlines: { color: 'transparent' },
            format: 'currency',
            title: 'Valores'
        },
        hAxis: { title: 'Mês' }
    }
    var grafico = new google.visualization.ColumnChart(
        document.getElementById('graficoColuna'));
        grafico.draw(tabela, opcoes);

    //Colunas Surpresas -----------------------------

    var dadosJson = $.ajax({
        url: 'https://gist.githubusercontent.com/Inacioluz/e01ba9a188a49b05a3fd0cb3d0748165/raw/bcd530f847d9b632129c56354d5f378f56ded3a9/dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);

    //ordenando a tebela pela coluna de indice 1

    tabela.sort([{ column: 1, desc: true }]);

    //Opçoes --------------------------------------

    var opcoes = {
        title: 'Tipos de Gastos',
        height: 400,
        width: 900,
        vAxis: 
            {
            gridlines:
            {
                count: 0
            },
            textPosition: 'none'
        },
        legend: 'none',
        hAxis: {
            gridlines:
            {
                color: 'transparent'
            },
            format: 'currency',
            textPosition: 'none'
        },
        annotations: { alwaysOutside: true }
    };
    var grafico = new google.visualization.BarChart(
        document.getElementById('graficoColunaSurpresas'));
        grafico.draw(tabela, opcoes)

    //grafico de barras com arquivo json --------------------------

    var dadosJson = $.ajax({
        url: 'https://gist.githubusercontent.com/Inacioluz/bdd14d94108aa55a07c2c05eaf3123ac/raw/d841bfbbf7093e658dbf0b9d90939ba6ccc29c13/dados.json',
        dataType: 'json',
        async: false
    }).responseText;

    var tabela = new google.visualization.DataTable(dadosJson);
    tabela.sort([{
        column: 1,
        desc: true
    }]);

    //Opçoes -------------------------------------------------------

    var opcoes = {
        title: 'Usuários e Poupanças',
        height: 400,
        width: 900,
        legend: 'none',
        hAxis: {
            gridlines: 
            {
            color: 'transparent'
            },
            textPosition: 'none'
        },
        annotations: { alwaysOutside: true }
    }
    var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));
        grafico.draw(tabela, opcoes);
}