// Employee class to represent each employee
class Employee {
    constructor(id, name, skill, doj, department) {
      this.id = id;
      this.name = name;
      this.skill = skill;
      this.doj = new Date(doj);
      this.department = department;
    }
  
    // Method to calculate the years of experience based on DOJ
    getExperience() {
      const currentDate = new Date();
      const experience = currentDate.getFullYear() - this.doj.getFullYear();
      return experience;
    }
  }
  
  // Store employees in an array
  let employees = [];
  
  // Function to show the corresponding section based on the sidebar menu
  function showSection(section) {
    const sections = document.querySelectorAll('.form-section');
    sections.forEach(s => {
      s.classList.remove('active-section');
    });
    
    const activeSection = document.getElementById(section);
    if (activeSection) {
      activeSection.classList.add('active-section');
    }
  
    // Reset employee details section
    document.getElementById('employeeDetails').innerHTML = '';
    document.querySelectorAll('.sidebar li a').forEach(a => {
      a.classList.remove('active');
    });
    document.querySelector(`.sidebar li a[href='#']`).classList.add('active');
  }
  
  // Function to add an employee
  function addEmployee() {
    const id = document.getElementById('empId').value;
    const name = document.getElementById('empName').value;
    const skill = document.getElementById('empSkill').value;
    const doj = document.getElementById('empDOJ').value;
    const department = document.getElementById('empDept').value;
  
    // Validate input fields
    if (!id || !name || !skill || !doj || !department) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Create a new employee object
    const newEmployee = new Employee(id, name, skill, doj, department);
  
    // Add the employee to the array
    employees.push(newEmployee);
  
    // Clear the input fields
    document.getElementById('empId').value = '';
    document.getElementById('empName').value = '';
    document.getElementById('empSkill').value = '';
    document.getElementById('empDOJ').value = '';
    document.getElementById('empDept').value = '';
  
    // Update the employee list on the UI
    displayEmployeeList();
  }
  
  // Function to remove an employee by ID
  function removeEmployee() {
    const removeId = document.getElementById('removeId').value;
  
    // Find and remove the employee by ID
    employees = employees.filter(employee => employee.id !== removeId);
  
    // Clear the input field
    document.getElementById('removeId').value = '';
  
    // Update the employee list on the UI
    displayEmployeeList();
  }
  
  //
  