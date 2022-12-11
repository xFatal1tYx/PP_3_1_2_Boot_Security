

function getModalEdit(id) {
    fetch('/api/admin/user/' + id)
        .then(response => response.json())
        .then(user => {

            let genderMale = user.gender === 'M' ? 'checked' : '';
            let genderFemale = user.gender === 'F' ? 'checked' : '';

            let adminRole = '';
            let userRole = '';
            let guestRole = '';
            user.roles.map(r => {
                if (r.role === 'ADMIN') {
                    adminRole = 'selected';
                } else if (r.role === 'USER') {
                    userRole = 'selected';
                } else if (r.role === 'GUEST') {
                    guestRole = 'selected';
                }
            });

            modal.innerHTML = `
                <div class="modal fade" id="modalEdit">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Edit user</h5>
                                <button type="button" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                </button>
                            </div>
                            <div class="modal-body row d-flex justify-content-center">
                                <form>
                                    <b><label for="inputIdEdit">ID</label></b>
                                    <br>
                                    <input class="form-control" type="text" id="inputIdEdit" value="${user.id}"
                                           style="width: 300px" readonly/>
                                    <br>


                                    <b>Gender</b>
                                    <br>
                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" id="genderMaleEdit" name="gender" class="custom-control-input" 
                                      value="M" ${genderMale}>
                                      <label class="custom-control-label" for="genderMaleEdit">Male</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" id="genderFemaleEdit" name="gender" class="custom-control-input" 
                                      value="F" ${genderFemale}>
                                      <label class="custom-control-label" for="genderFemaleEdit">Female</label>
                                    </div>
                                    <br><br>

                                    <b><label for="inputNameEdit">Name</label></b>
                                    <br>
                                    <input type="text" id="inputNameEdit" value="${user.name}"
                                           minlength="2" maxlength="50"
                                           style="width: 300px" required/>
                                    <br><br>

                                    <b><label for="inputSurnameEdit">Surname</label></b>
                                    <br>
                                    <input type="text" id="inputSurnameEdit" value="${user.surname}"
                                           minlength="2" maxlength="50"
                                           style="width: 300px" required/>
                                    <br><br>

                                    <b><label for="inputAgeEdit">Age</label></b>
                                    <br>
                                    <input type="number" id="inputAgeEdit" value="${user.age}"
                                           min="0" max="99"
                                           style="width: 300px"
                                           required/>
                                    <br><br>

                                    <b><label for="inputUsernameEdit">Username</label></b>
                                    <br>
                                    <input type="text" id="inputUsernameEdit" value="${user.username}"
                                           minlength="3" maxlength="50"
                                           style="width: 300px" required/>
                                    <br><br>

                                    <b><label for="inputPasswordEdit">Password</label></b>
                                    <br>
                                    <input type="password" id="inputPasswordEdit"
                                           minlength="3" maxlength="50" style="width: 300px" required/>
                                    <br><br>

                                    <b><label for="selectRoleEdit">Role</label></b>
                                    <br>
                                    <select name="rolesList" id="selectRoleEdit"
                                            style="width: 300px" multiple size="3" required>
                                        <option id="1" value="ADMIN" ${adminRole}>ADMIN</option>
                                        <option id="2" value="USER" ${userRole}>USER</option>
                                        <option id="3" value="GUEST" ${guestRole}>GUEST</option>
                                    </select>
                                    <br><br>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="submit" class="btn btn-primary">
                                            Edit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#modalEdit').modal();

        });
}

modal.addEventListener('submit', async (e) => {
    const idEdit = document.getElementById('inputIdEdit');
    const genderMaleEdit = document.getElementById('genderMaleEdit');
    const genderFemaleEdit = document.getElementById('genderFemaleEdit');
    const nameEdit = document.getElementById('inputNameEdit');
    const surnameEdit = document.getElementById('inputSurnameEdit');
    const ageEdit = document.getElementById('inputAgeEdit');
    const usernameEdit = document.getElementById('inputUsernameEdit');
    const passwordEdit = document.getElementById('inputPasswordEdit');
    const rolesEdit = document.getElementById('selectRoleEdit');

    e.preventDefault();

    await fetch('/api/admin/users', {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
            id: idEdit.value,
            gender: genderMaleEdit.checked ? genderMaleEdit.value : genderFemaleEdit.value,
            name: nameEdit.value,
            surname: surnameEdit.value,
            age: ageEdit.value,
            username: usernameEdit.value,
            password: passwordEdit.value,
            roles: roleArray(rolesEdit)
        })
    });
    $('.modal').trigger('click');
    showUsersTable();
});