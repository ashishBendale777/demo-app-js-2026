//JJS Objects

let name = ""
let age = 43
let fruites = []

//create an object
let person = {
    name: "Ashish", //enrtry
    age: 32,
    aadharNo: 23423423424,
    height: 5.3,
    hobbies: ["music", "dancing"],
    address: {
        area: "Ganesh Colony",
        landmark: "near highway",
        city: "JL",
        state: "MH"
    }
}

console.log(person.age)
console.log(person.address)
console.log(person.address.city)
console.log(person.hobbies)

//obect functions
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

console.log(person.name)
console.log(Object.entries(person)[0][1])

person.name = "Pawan"
person.hobbies.push("Drawing")

delete person.age
console.log(person)

console.log(person["age"])
//MOST IMPORTANT
let personList = [
    {

    }, {

    }, {

    }, {

    }
]

const persons = [
    { id: 1, name: "Amit Sharma", age: 25, gender: "Male", email: "amit@gmail.com", city: "Mumbai", profession: "Developer" },
    { id: 2, name: "Neha Verma", age: 22, gender: "Female", email: "neha@gmail.com", city: "Delhi", profession: "Student" },
    { id: 3, name: "Rahul Patil", age: 28, gender: "Male", email: "rahul@gmail.com", city: "Pune", profession: "Designer" },
    { id: 4, name: "Sneha Kulkarni", age: 26, gender: "Female", email: "sneha@gmail.com", city: "Nagpur", profession: "Teacher" },
    { id: 5, name: "Vikas Singh", age: 30, gender: "Male", email: "vikas@gmail.com", city: "Lucknow", profession: "Engineer" },
    { id: 6, name: "Pooja Mehta", age: 24, gender: "Female", email: "pooja@gmail.com", city: "Ahmedabad", profession: "Accountant" },
    { id: 7, name: "Rohit Kumar", age: 27, gender: "Male", email: "rohit@gmail.com", city: "Patna", profession: "Sales" },
    { id: 8, name: "Anjali Gupta", age: 23, gender: "Female", email: "anjali@gmail.com", city: "Kanpur", profession: "Student" },
    { id: 9, name: "Sanjay Joshi", age: 35, gender: "Male", email: "sanjay@gmail.com", city: "Jaipur", profession: "Business" },
    { id: 10, name: "Kavita Nair", age: 29, gender: "Female", email: "kavita@gmail.com", city: "Kochi", profession: "Nurse" },

    { id: 11, name: "Arjun Reddy", age: 32, gender: "Male", email: "arjun@gmail.com", city: "Hyderabad", profession: "Doctor" },
    { id: 12, name: "Divya Rao", age: 21, gender: "Female", email: "divya@gmail.com", city: "Bangalore", profession: "Student" },
    { id: 13, name: "Karan Malhotra", age: 34, gender: "Male", email: "karan@gmail.com", city: "Delhi", profession: "Lawyer" },
    { id: 14, name: "Ritu Saxena", age: 31, gender: "Female", email: "ritu@gmail.com", city: "Noida", profession: "HR" },
    { id: 15, name: "Manish Jain", age: 40, gender: "Male", email: "manish@gmail.com", city: "Indore", profession: "Business" },
    { id: 16, name: "Shweta Desai", age: 27, gender: "Female", email: "shweta@gmail.com", city: "Surat", profession: "Designer" },
    { id: 17, name: "Akash Yadav", age: 19, gender: "Male", email: "akash@gmail.com", city: "Varanasi", profession: "Student" },
    { id: 18, name: "Nikita Kapoor", age: 33, gender: "Female", email: "nikita@gmail.com", city: "Chandigarh", profession: "Architect" },
    { id: 19, name: "Suresh Babu", age: 45, gender: "Male", email: "suresh@gmail.com", city: "Chennai", profession: "Business" },
    { id: 20, name: "Meena Singh", age: 38, gender: "Female", email: "meena@gmail.com", city: "Bhopal", profession: "Teacher" },

    { id: 21, name: "Prashant Patil", age: 29, gender: "Male", email: "prashant@gmail.com", city: "Jalgaon", profession: "Developer" },
    { id: 22, name: "Rashmi Joshi", age: 26, gender: "Female", email: "rashmi@gmail.com", city: "Nashik", profession: "Banker" },
    { id: 23, name: "Deepak Chavan", age: 36, gender: "Male", email: "deepak@gmail.com", city: "Kolhapur", profession: "Farmer" },
    { id: 24, name: "Komal Pawar", age: 20, gender: "Female", email: "komal@gmail.com", city: "Satara", profession: "Student" },
    { id: 25, name: "Sunil Thakur", age: 50, gender: "Male", email: "sunil@gmail.com", city: "Shimla", profession: "Retired" },
    { id: 26, name: "Aarti Mishra", age: 28, gender: "Female", email: "aarti@gmail.com", city: "Prayagraj", profession: "Journalist" },
    { id: 27, name: "Harsh Vardhan", age: 23, gender: "Male", email: "harsh@gmail.com", city: "Delhi", profession: "Student" },
    { id: 28, name: "Pallavi Kulkarni", age: 34, gender: "Female", email: "pallavi@gmail.com", city: "Pune", profession: "Doctor" },
    { id: 29, name: "Nitin Shetty", age: 41, gender: "Male", email: "nitin@gmail.com", city: "Mangalore", profession: "Business" },
    { id: 30, name: "Rekha Sharma", age: 37, gender: "Female", email: "rekha@gmail.com", city: "Jaipur", profession: "Homemaker" },

    { id: 31, name: "Vivek Anand", age: 27, gender: "Male", email: "vivek@gmail.com", city: "Ranchi", profession: "Engineer" },
    { id: 32, name: "Isha Khan", age: 24, gender: "Female", email: "isha@gmail.com", city: "Kolkata", profession: "Model" }
];

for (let person of persons) {
    console.log(person.age, person.name)
}
