document.getElementById('responsavelForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const matriculaaluno = document.getElementById('matriculaaluno').value;

    const response = await fetch('/api/responsaveis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cpf, matriculaaluno })
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById('response').textContent = 'Responsável cadastrado com sucesso!';
        document.getElementById('responsavelForm').reset();
    } else {
        document.getElementById('response').textContent = 'Erro ao cadastrar responsável: ' + result.message;
    }
});