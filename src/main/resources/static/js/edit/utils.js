const modal = document.getElementById('modalWindow');

function roleArray(roles) {
    let array = [];
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].selected) {
            let role = {
                id: roles[i].id,
                role: roles[i].value
            };
            array.push(role);
        }
    }
    return array;
}