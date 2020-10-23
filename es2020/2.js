let info = {
  name: "kuro",
  age: 22,
  job: {
    dev: {
      front_end: {
        language: ["html", "css", "js"],
        fw: ["reactjs"],
      },
      back_end: {
        language: ["c", "c++", "php", "python", "java", "js"],
        platform: ["nodejs"],
        fw: ["express"],
      },
      database: ["sql server", "mysql", "postgresql"],
    },
  },
  print: function () {
    console.log(`Name:${this.name}\tAge: ${this.age}`);
  },
};
console.log(info?.job.abc?.ddd ?? "okokok");
console.log(info.printf?.());

const { job: { dev: { front_end, back_end } } = {} } = info
console.log(front_end, back_end)