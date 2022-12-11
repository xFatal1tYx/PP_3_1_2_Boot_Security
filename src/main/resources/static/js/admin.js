const table = document.getElementById('adminTable');

showUsersTable();
async function showUsersTable() {
    let tableInfo = '';
    await fetch(`api/admin/users`)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                tableInfo += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.gender}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.username}</td>
                    <td>${user.roles.map(r => r.role)}</td>
                    <td>
                        <button type="button" class="btn btn-info" 
                            onclick="getModalEdit(${user.id})">
                            Edit
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" 
                            onclick="getModalDelete(${user.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
            })
            table.innerHTML = tableInfo;
        });
}