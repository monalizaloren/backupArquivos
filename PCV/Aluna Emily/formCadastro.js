import React, { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleNomeChange = (event) => setNome(event.target.value);
  const handleIdadeChange = (event) => setIdade(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSenhaChange = (event) => setSenha(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("E-mail: " + email);
    console.log("Senha: " + senha);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src="user (1).png" className="profile" alt="Profile" />
      <h1>Cadastro</h1>
      <p>Nome:</p>
      <input type="text" id="nome" value={nome} onChange={handleNomeChange} />

      <p>Idade:</p>
      <input type="number" id="idade" value={idade} onChange={handleIdadeChange} />

      <p>E-mail:</p>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <p>Senha:</p>
      <input type="password" id="senha" value={senha} onChange={handleSenhaChange} />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastro;
