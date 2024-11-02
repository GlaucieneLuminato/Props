Props: Passando Dados entre Componentes React
Props (abreviação de "properties") são um mecanismo fundamental em React para passar dados de um componente pai para um componente filho. Eles permitem a criação de componentes reutilizáveis e a construção de hierarquias de componentes.
Como funcionam as Props?
 * Definição: O componente pai define as props que deseja passar ao componente filho.
 * Passagem: As props são passadas como atributos HTML ao componente filho.
 * Uso: O componente filho recebe as props como argumentos em sua função.
Exemplo:
// Componente Pai
function ParentComponent() {
  const name = "Alice";
  const age = 30;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

// Componente Filho
function ChildComponent(props) {
  return (
    <div>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age}</p>
    </div>
  );
}

Pontos importantes a considerar:
 * Props são imutáveis: Não é possível modificar o valor de uma prop diretamente dentro do componente filho.
 * Passagem de funções: Além de dados simples, você pode passar funções como props para permitir a comunicação entre componentes.
 * Default props: Você pode definir valores padrão para props usando o método defaultProps.
 * Prop types: É recomendado usar o pacote prop-types para definir os tipos esperados para cada prop, ajudando a prevenir erros.
Exemplo com função como prop:
function ParentComponent() {
  const handleClick = () => {
    console.log("Botão clicado!");
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <button onClick={props.onClick}>Clique aqui</button>
  );
}

Em resumo:
Props são uma ferramenta essencial para criar componentes reutilizáveis e modularizados em React. Ao entender como usá-las, você pode construir aplicações React mais complexas e organizadas.
Gostaria de ver mais exemplos ou tem alguma dúvida específica sobre props?
Possíveis tópicos para explorar:
 * Passagem de props complexas (objetos, arrays)
 * Uso de destructuring para simplificar a sintaxe
 * Prop types para validação
 * Context API como alternativa para passar props profundamente
Qual tópico você gostaria de saber mais?
