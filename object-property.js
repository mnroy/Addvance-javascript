const students = [
    {id: 1966026, name: "jeson deo"},
    {id: 1966027, name: "jost smrit"},
    {id: 1966028, name: "jastin"},
    {id: 1966029, name: "neimar"},
]
const allName = []
for(let i = 0; i < students.length; i++){
    const elimetn = students[i];
    const studetnName = elimetn.name;
    allName.push(studetnName);
}
console.log("Students name: ", allName);

// next
const students2 = [
    {id: 30, name: "mesi"},
    {id: 31, name: "neimar"},
    {id: 35, name: "shakib"},
    {id: 37, name: "tomjeri"},
]
const names = students2.map(s => s.name);
const stu2Id = students2.map(s => s.id);
const bigerId = students2.filter(s => s.id > 30);
const isThere = students2.find(s => s.id > 30);

console.log("studetns2 name: ", names);
console.log("students2ID: ", stu2Id);
console.log("bigerId: ", bigerId);
console.log("find id: ", isThere);
