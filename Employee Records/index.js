var employees = []

function Employee( name, title, salary, status){
    this.name = name 
    this.title = title
    this.salary = salary 
    this.status = "Full-Time"
}


Employee.prototype.print = print
function print(){
    console.log("name:" + this.name + "title:" + this.title + "salary:" + this.salary + "status:" + this.status)}
    var jon = new Employee("Jon", "Debugger", "$100/hour", );
    var ben = new Employee("Ben", "Debugger", "$50/hour", );
    var aaron = new Employee("Aaron", "Web Design", "$100/hour", );
    ben.status = "Part-Time"

    jon.print()
    ben.print()
    aaron.print()

   var newEp =["Jon", "Ben", "Aaron"]

   for(i = 0; i < newEp.length; i++){
       employees.push(newEp[i])
   }
   console.log(employees)

    
    





