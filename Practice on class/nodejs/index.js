
// Đặng Quốc Thành - 1911062578
function Emloyee(EmployeeID, Name, PhoneNumber, Age, Salary){
    this.EmployeeID=EmployeeID;
    this.Name=Name;
    this.PhoneNumber = PhoneNumber;
    this.Age = Age;
    this.Salary = Salary;
    this.getinfo = function(){
        return `Thông tin Nhan vien la: ${this.EmployeeID} - ${this.Name} - ${this.PhoneNumber} - ${this.Age}`;
    }
}
var employee = new Emloyee('1911062578','Thanh', '091124567','22');
console.log(employee.getinfo());

