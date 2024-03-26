localStorage.setItem('studtents','Nguyen Van A')
localStorage.getItem('studtents')
console.log(localStorage.getItem('studtents'));

function ValidateEmail(email) 
{
 return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

function save(){
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = "";
    if (document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    }
    
    if(_.isEmpty(fullName) || fullName.length < 2){
        fullName='';
        document.getElementById('fullName-error').innerHTML = "Vui lòng nhập họ và tên";
    } else {
        document.getElementById('fullName-error').innerHTML = "";
    }
    // email
    if(_.isEmpty(email)){
        email='';
        document.getElementById('email-error').innerHTML = "Vui lòng nhập email";
    } else if(!ValidateEmail(email)){  
        email='';
        document.getElementById('email-error').innerHTML = "Email is not valid";
    }
    else {
        document.getElementById('email-error').innerHTML = "";
    }
    //phone
    if(_.isEmpty(phone)){
        phone = '';
        document.getElementById('phone-error').innerHTML = "Vui lòng nhập số điện thoại";
    } else if(phone.trim().length >10){
        phone = ''
        document.getElementById('phone-error').innerHTML = "Vui lòng nhập số điện thoại";
    } 
    else {
        document.getElementById('phone-error').innerHTML = "";
    }
    //address
    if(_.isEmpty(address)){
        address = ''
        document.getElementById('address-error').innerHTML = "Vui lòng nhập địa chỉ";
    } else {
        document.getElementById('address-error').innerHTML = "";
    }
    //gender
    if(_.isEmpty(gender)){
        gender=''
        document.getElementById('gender-error').innerHTML = "Vui lòng chọn giới tính";
    } else {
        document.getElementById('gender-error').innerHTML = "";
    }
    if (fullName && phone && email && address && gender){
        let student = {
            fullName : fullName,
            email : email,
            phone : phone,
            address : address,
            gender : gender,
        }
        let students = []
        students.push(student);
    }
}   
function renderListSutdent() {
    let students = localStorage.getItem('students');
    if (students.isEmpty()) {
        JSON.parse(localStorage.getItem('students'))
    }
    else []
    if (students.length ===0) return false;
    let tableContent = `<tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Địa chỉ</th>
        <th>Giới tính</th>
        <td>Hành động</td>
        </tr>`;

        students.forEach((student, index) => {
            let genderlabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
            index = index + 1;
            tableContent+= `<tr>
                <td>${index}</td>
                <td>${student.fullName}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${genderlabel}</td>
                <td>
                    <a href="#">Edit</a> |
                    <a href="#">Delete</a>
                </td>
                </tr>`
        }
        )
        document.getElementById('grid-students').innerHTML = tableContent;
}