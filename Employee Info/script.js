
class Employee {
    constructor(id, name, skill, doj, department) {
      this.id = id;
      this.name = name;
      this.skill = skill;
      this.doj = new Date(doj);
      this.department = department;
    }
  
    getExperience() {
      const currentDate = new Date();
      const experience = currentDate.getFullYear() - this.doj.getFullYear();
      return experience;
    }
  }
  
  
  let employees = [];
  
  function showSection(section) {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(s => {
      s.classList.remove('active-section');
    });
    
    const activeSection = document.getElementById(section);
    if (activeSection) {
      activeSection.classList.add('active-section');
    }
  
    document.getElementById('employeeDetails').innerHTML = '';
    document.querySelectorAll('.sidebar li a').forEach(a => {
      a.classList.remove('active');
    });
    document.querySelector(`.sidebar li a[href='#']`).classList.add('active');
  }
  
 
  function addEmployee() {
    const id = document.getElementById('empId').value;
    const name = document.getElementById('empName').value;
    const skill = document.getElementById('empSkill').value;
    const doj = document.getElementById('empDOJ').value;
    const department = document.getElementById('empDept').value;
  

    if (!id || !name || !skill || !doj || !department) {
      alert("Please fill out all fields.");
      return;
    }
  
    
    const newEmployee = new Employee(id, name, skill, doj, department);
  
    employees.push(newEmployee);
  
    document.getElementById('empId').value = '';
    document.getElementById('empName').value = '';
    document.getElementById('empSkill').value = '';
    document.getElementById('empDOJ').value = '';
    document.getElementById('empDept').value = '';
  
    displayEmployeeList();
  }
  
  
  function removeEmployee() {
    const removeId = document.getElementById('removeId').value;
  
    employees = employees.filter(employee => employee.id !== removeId);
  
   
    document.getElementById('removeId').value = '';
  
    displayEmployeeList();
  }
  

  
