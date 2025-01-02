const ; // Sua chave de API

function obterPrevisao() {
    const cidade = document.getElementById('cidade').value;
    if (!cidade) {
        alert('Por favor, insira o nome da cidade!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('Cidade não encontrada!');
                return;
            }

            const nomeCidade = data.name;
            const temperatura = data.main.temp;
            const sensacao = data.main.feels_like;
            const chuva = data.weather[0].main === 'Rain' ? 'Sim' : 'Não';

            document.getElementById('nome-cidade').textContent = nomeCidade;
            document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
            document.getElementById('sensacao').textContent = `Sensação Térmica: ${sensacao}°C`;
            document.getElementById('chuva').textContent = `Chance de Chuva: ${chuva}`;
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            alert('Houve um erro ao obter os dados da previsão.');
        });
}