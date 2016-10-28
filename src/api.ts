export class Api {
  constructor() {}

  public skills = {
    get: function (query: any) {
      let skills = JSON.parse(localStorage.getItem("skills")) || [];
      return (query ? skills.filter(function(skill) {
        var match = true;
        for(let key in query) {
          if(!match || !skill[key] || skill[key] !== query[key]) {
            match = false;
          }
        }
        return match;
      }) : skills);
    },
    post: function(skill: any) {
      if(!skill) {
        return skill;
      }

      let skills = this.get();
      skills.push(skill);

      localStorage.setItem("skills", JSON.stringify(skills));
      return skill;
    },
    put: function(data: any) {
      if(!data) {
        return data;
      }

      let skills = this.get();

    }
  }
}
