fetch('api/user')
    .then(response => response.json())
    .then(user => {
        document.querySelector('#userTable').innerHTML = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.gender}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.username}</td>
                    <td>${user.roles.map(r => r.role)}</td>
                </tr>
            `;
    });


