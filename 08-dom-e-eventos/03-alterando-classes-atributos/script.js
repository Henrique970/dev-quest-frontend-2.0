// Mexendo com classes nos elementos HTML usando classList.
const quadrado = document.querySelector(".quadrado");

console.log(quadrado);

// O classList vai da a lista de classes que esse elemento tem.
console.log(quadrado.classList);

// O remove, remove a classe que você quiser e ele não irá funcionar mais
quadrado.classList.remove("azul");

// O add adiciona a classe que você quiser. Casso a classe não tenha estilização no CSS, ela ainda vai ser adicionada, mas sem nenhuma estilização.
quadrado.classList.add("preto");

// “Se tem a classe → remove”. “Se não tem → adiciona”
quadrado.classList.toggle("preto");
quadrado.classList.toggle("preto");

// O contains é booleano, ou é verdadeiro ou falso na questão do nome das classes
const hasBlue = quadrado.classList.contains("azul");

if (hasBlue) {
    console.log("Tem azul");
} else {
    console.log("Não tem azul");

}

// Mexendo com atributos dos elementosdo HTML






const inputCor = document.getElementById("cor");

// setAtrribute - define um atributo. Adicionamos um atributo e um valor para a tag input do html buscando ela pelo ID. O primeiro valor do parêntese é o atributo e o segundo é o valor desse atributo.
inputCor.setAttribute("placeholder", "Digite uma cor")

const valorPlaceholder = inputCor.getAttribute("placeholder");

// getAttribute - obtem o valor de um atributo
console.log(valorPlaceholder);

// removeAttribute - remove um atributo
inputCor.removeAttribute("placeholder");