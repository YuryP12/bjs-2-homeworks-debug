function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
}

// let student1 = new Student("Tony", "male", 37);
// let student1 = new Student("Joker", "auto", "?");
// let student2 = new Student("Doroty", "screwdriver", 157);

Student.prototype.setSubject = function(subjectName) {

  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {

  if (this.marks === undefined) { 
    this.marks = [];
  }
  
  this.marks.push(mark);
}

Student.prototype.addMarks = function(...arg) {

  if (this.marks === undefined) { 
    this.marks = [];
  }

  arg.forEach(mark => this.marks.push(mark));
}

Student.prototype.getAverage = function() {

  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {

  delete this.subject;
  delete this.marks;
  //reason = this.excluded;
  this.excluded = reason;
}