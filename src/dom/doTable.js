const employees = [
  { id: 1, name: "Amit Sharma", age: 28, department: "IT", salary: 45000, city: "Mumbai", email: "amit.sharma@company.com", isActive: true },
  { id: 2, name: "Priya Verma", age: 32, department: "HR", salary: 38000, city: "Delhi", email: "priya.verma@company.com", isActive: true },
  { id: 3, name: "Rahul Patil", age: 26, department: "Finance", salary: 42000, city: "Pune", email: "rahul.patil@company.com", isActive: false },
  { id: 4, name: "Sneha Iyer", age: 30, department: "Marketing", salary: 47000, city: "Bangalore", email: "sneha.iyer@company.com", isActive: true },
  { id: 5, name: "Vikas Singh", age: 35, department: "Operations", salary: 50000, city: "Hyderabad", email: "vikas.singh@company.com", isActive: true },
  { id: 6, name: "Neha Joshi", age: 27, department: "IT", salary: 44000, city: "Chennai", email: "neha.joshi@company.com", isActive: false },
  { id: 7, name: "Arjun Mehta", age: 29, department: "Sales", salary: 41000, city: "Ahmedabad", email: "arjun.mehta@company.com", isActive: true },
  { id: 8, name: "Kavita Nair", age: 31, department: "HR", salary: 39000, city: "Kochi", email: "kavita.nair@company.com", isActive: true },
  { id: 9, name: "Rohit Deshmukh", age: 34, department: "Finance", salary: 52000, city: "Nagpur", email: "rohit.deshmukh@company.com", isActive: false },
  { id: 10, name: "Pooja Kulkarni", age: 25, department: "Marketing", salary: 36000, city: "Pune", email: "pooja.kulkarni@company.com", isActive: true },

  { id: 11, name: "Manish Yadav", age: 33, department: "IT", salary: 48000, city: "Noida", email: "manish.yadav@company.com", isActive: true },
  { id: 12, name: "Anjali Gupta", age: 28, department: "Sales", salary: 40000, city: "Lucknow", email: "anjali.gupta@company.com", isActive: true },
  { id: 13, name: "Suresh Reddy", age: 37, department: "Operations", salary: 55000, city: "Hyderabad", email: "suresh.reddy@company.com", isActive: false },
  { id: 14, name: "Meera Nanda", age: 29, department: "HR", salary: 37000, city: "Delhi", email: "meera.nanda@company.com", isActive: true },
  { id: 15, name: "Kunal Shah", age: 31, department: "Finance", salary: 53000, city: "Mumbai", email: "kunal.shah@company.com", isActive: true },
  { id: 16, name: "Divya Rao", age: 26, department: "IT", salary: 46000, city: "Bangalore", email: "divya.rao@company.com", isActive: false },
  { id: 17, name: "Harsh Jain", age: 30, department: "Sales", salary: 42000, city: "Jaipur", email: "harsh.jain@company.com", isActive: true },
  { id: 18, name: "Ritu Kapoor", age: 27, department: "Marketing", salary: 39000, city: "Chandigarh", email: "ritu.kapoor@company.com", isActive: true },
  { id: 19, name: "Deepak Mishra", age: 36, department: "Operations", salary: 56000, city: "Indore", email: "deepak.mishra@company.com", isActive: true },
  { id: 20, name: "Shalini Das", age: 28, department: "Finance", salary: 45000, city: "Kolkata", email: "shalini.das@company.com", isActive: false },

  { id: 21, name: "Gaurav Bansal", age: 32, department: "IT", salary: 49000, city: "Gurgaon", email: "gaurav.bansal@company.com", isActive: true },
  { id: 22, name: "Nikita Soni", age: 24, department: "HR", salary: 35000, city: "Surat", email: "nikita.soni@company.com", isActive: true },
  { id: 23, name: "Yash Thakur", age: 29, department: "Sales", salary: 41000, city: "Bhopal", email: "yash.thakur@company.com", isActive: true },
  { id: 24, name: "Anita Roy", age: 34, department: "Marketing", salary: 47000, city: "Kolkata", email: "anita.roy@company.com", isActive: false },
  { id: 25, name: "Sanjay Pillai", age: 38, department: "Operations", salary: 60000, city: "Chennai", email: "sanjay.pillai@company.com", isActive: true },
  { id: 26, name: "Tanya Arora", age: 27, department: "Finance", salary: 43000, city: "Delhi", email: "tanya.arora@company.com", isActive: true },
  { id: 27, name: "Abhishek Kumar", age: 30, department: "IT", salary: 50000, city: "Patna", email: "abhishek.kumar@company.com", isActive: true },
  { id: 28, name: "Komal Bhatt", age: 26, department: "HR", salary: 36000, city: "Dehradun", email: "komal.bhatt@company.com", isActive: false },
  { id: 29, name: "Vivek Choudhary", age: 33, department: "Sales", salary: 44000, city: "Jodhpur", email: "vivek.choudhary@company.com", isActive: true },
  { id: 30, name: "Ishita Sen", age: 29, department: "Marketing", salary: 42000, city: "Kolkata", email: "ishita.sen@company.com", isActive: true }
];

let tBody  = document.getElementById("tEmp")

for (const emp of employees) {
    let tr = document.createElement("tr")

    let idTd = document.createElement("td")
    let idName = document.createElement("td")
    let idSaalary = document.createElement("td")
    let idDepartment = document.createElement("td")

    idTd.innerText = emp.id
    idName.innerText = emp.name
    idSaalary.innerText = emp.salary
    idDepartment.innerText = emp.department

    tr.appendChild(idTd)
    tr.appendChild(idName)
    tr.appendChild(idSaalary)
    tr.appendChild(idDepartment)

    tBody.appendChild(tr)
}