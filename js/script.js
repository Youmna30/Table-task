var myForm = document.getElementById('myForm')


myForm.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.id.value)
    console.log(e.target.elements.name.value)
    console.log(e.target.elements.balance.value)
    addUser(e.target.elements.id.value , e.target.elements.name.value,e.target.elements.balance.value)
    showUsers()
})


bankUsers = []

function addUser(id , name, balance){
    var user = {
        id : id,
        name : name,
        balance: balance
    }
    bankUsers.push(user)
    console.table(bankUsers)

}

var tableContent = document.getElementById('userContent')
function showUsers(){
    tableContent.textContent = "";
    bankUsers.forEach((item , i ) => {
        var tr = document.createElement('tr')
        var removeBtn = document.createElement('button')
        var editBtn = document.createElement('button')
        var td = document.createElement('td')
        tr.classList.add('p-2', 'border-1', 'border-secondary')
        td.classList.add('p-2', 'border-1', 'border-secondary')
        td.innerText = item.id
        tr.append(td)
        var td = document.createElement('td')
        td.classList.add('p-2', 'border-1', 'border-secondary')
        td.innerText = item.name
        tr.append(td)
        var td = document.createElement('td')
        td.classList.add('p-2', 'border-1', 'border-secondary')
        td.innerText = item.balance
        tr.append(td)
        removeBtn.innerText = 'Remove User'
        editBtn.innerText = 'Edit User Balance';
        removeBtn.classList.add('btn' , 'btn-danger' , 'm-3')
        editBtn.classList.add('btn' , 'btn-success', 'm-3')
        tr.append(removeBtn)
        tr.append(editBtn)

        tableContent.append(tr)

        removeBtn.addEventListener('click' , function(){
            removeUser(i)
        })
        editBtn.addEventListener('click' , function(){
            editUser(i)
        })


    });
}

function removeUser(ind){
    bankUsers.splice(ind , 1)
    showUsers()
}
function editUser(index){
    var input = prompt("Enter the new balance")
    bankUsers[index].balance = input
    showUsers()
}

