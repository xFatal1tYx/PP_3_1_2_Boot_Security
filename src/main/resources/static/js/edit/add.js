document.querySelector('#formAddUser').innerHTML = `
                <b>Gender</b>
                <br>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="genderMale" name="gender" class="custom-control-input" value="M" required>
                  <label class="custom-control-label" for="genderMale">Male</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="genderFemale" name="gender" class="custom-control-input" value="F" required>
                  <label class="custom-control-label" for="genderFemale">Female</label>
                </div>
                <br><br>
        
                <b><label for="inputName">Name</label></b>
                <br>
                <input type="text" id="inputName" minlength="2" maxlength="50"
                       style="width: 300px" required/>
                <br><br>
        
                <b><label for="inputSurname">Surname</label></b>
                <br>
                <input type="text" id="inputSurname" minlength="2" maxlength="50"
                       style="width: 300px" required/>
                <br><br>
        
                <b><label for="inputAge">Age</label></b>
                <br>
                <input type="number" id="inputAge" min="0" max="99" style="width: 300px"
                       required/>
                <br><br>
        
                <b><label for="inputUsername">Username</label></b>
                <br>
                <input type="text" id="inputUsername" minlength="3" maxlength="50"
                       style="width: 300px" required/>
                <br><br>
        
                <b><label for="inputPassword">Password</label></b>
                <br>
                <input type="password" id="inputPassword" minlength="3"
                       maxlength="50" style="width: 300px" required/>
                <br><br>
        
                <b><label for="selectRole">Role</label></b>
                <br>
                <select name="rolesList" id="selectRole" style="width: 300px" multiple size="3" required>
                    <option id="1" value="USER">
                            USER
                    </option>
                    <option id="2" value="ADMIN">
                            ADMIN
                    </option>
                    <option id="3" value="GUEST">
                            GUEST
                    </option>
                </select>
                <br><br>
        
                <button class="btn btn-success" type="submit">Add new user</button>
            `;

document.getElementById('tab_addUser').addEventListener('submit', async (e) => {

    const genderMale = document.getElementById('genderMale');
    const genderFemale = document.getElementById('genderFemale');
    const name = document.getElementById('inputName');
    const surname = document.getElementById('inputSurname');
    const age = document.getElementById('inputAge');
    const username = document.getElementById('inputUsername');
    const password = document.getElementById('inputPassword');
    const roles = document.getElementById('selectRole');

    e.preventDefault();
    await fetch('/api/admin/users', {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            gender: genderMale.checked ? genderMale.value : genderFemale.value,
            name: name.value,
            surname: surname.value,
            age: age.value,
            username: username.value,
            password: password.value,
            roles: roleArray(roles)
        })
    });
    showUsersTable();

    name.value = '';
    surname.value = '';
    age.value = '';
    username.value = '';
    password.value = '';
    roles.value = '';
    genderMale.checked = false;
    genderFemale.checked = false;
});
