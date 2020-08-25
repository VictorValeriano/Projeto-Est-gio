
function HandleClick(){
	const getUl= document.getElementById("list-content")  //const var let

	var getInputValue = document.getElementById("name").value
	var list = getInputValue.split(' ');
	var value = `Aluno: ${list[0]} | telefone: ${list[1]} | CPF: ${list[2]} | ID: ${randomId()} ` 
	var valueNode = document.createTextNode(value)
	
	var form = document.getElementById('list-container');
	

	const CreateList = document.createElement("li") // = <li>aqui</li>
	
	CreateList.appendChild(valueNode) // <li>name</li>
	getUl.appendChild(CreateList) // <ul><li>name</li></ul>
	form.style.display = 'block';


}
function randomId(){
	var id = Math.floor(Math.random()*100000+0)
	return id
}
function HandleClickCurso(){
	const getUl= document.getElementById("list-content")  //const var let

	var getInputValue = document.getElementById("name").value
	var list = getInputValue.split(' ');
	var value = `ID do Curso: ${list[0]} | Curso: ${list[1]}` 
	var valueNode = document.createTextNode(value)
	
	var form = document.getElementById('list-container');
	

	const CreateList = document.createElement("li") // = <li>aqui</li>
	
	CreateList.appendChild(valueNode) // <li>name</li>
	getUl.appendChild(CreateList) // <ul><li>name</li></ul>
	form.style.display = 'block';

}




 

