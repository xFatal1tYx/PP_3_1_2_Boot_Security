function getModalDelete(id) {
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
                                <h5 class="modal-title">Delete user</h5>
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
                                      <input type="radio" id="genderMale" class="custom-control-input" 
                                      value="M" ${genderMale} disabled>
                                      <label class="custom-control-label" for="genderMale">Male</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                      <input type="radio" id="genderFemale"  class="custom-control-input" 
                                      value="F" ${genderFemale} disabled>
                                      <label class="custom-control-label" for="genderFemale">Female</label>
                                    </div>
                                    <br>

                                    <b><label for="inputNameEdit">Name</label></b>
                                    <br>
                                    <input class="form-control" type="text" id="inputNameEdit" value="${user.name}"
                                           minlength="2" maxlength="50"
                                           style="width: 300px" readonly/>
                                    <br>

                                    <b><label for="inputSurnameEdit">Surname</label></b>
                                    <br>
                                    <input class="form-control" type="text" id="inputSurnameEdit" value="${user.surname}"
                                           minlength="2" maxlength="50"
                                           style="width: 300px" readonly/>
                                    <br>

                                    <b><label for="inputAgeEdit">Age</label></b>
                                    <br>
                                    <input class="form-control" type="number" id="inputAgeEdit" value="${user.age}"
                                           min="0" max="99"
                                           style="width: 300px"
                                           readonly/>
                                    <br>

                                    <b><label for="inputUsernameEdit">Username</label></b>
                                    <br>
                                    <input class="form-control" type="text" id="inputUsernameEdit" value="${user.username}"
                                           minlength="3" maxlength="50"
                                           style="width: 300px" readonly/>
                                    <br>

                                    <b><label for="selectRoleEdit">Role</label></b>
                                    <br>
                                    <select class="form-control" name="rolesList" id="selectRoleEdit"
                                            style="width: 300px" multiple size="3" disabled>
                                        <option value="ADMIN" ${adminRole}>ADMIN</option>
                                        <option value="USER" ${userRole}>USER</option>
                                        <option value="GUEST" ${guestRole}>GUEST</option>
                                    </select>
                                    <br>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal" 
                                            onclick="userDelete(${user.id})">
                                            Delete
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

async function userDelete(id) {
    await fetch('/api/admin/user/' + id, {
        method: 'DELETE', headers: {'Content-Type': 'application/json'},
    });
    showUsersTable();
}