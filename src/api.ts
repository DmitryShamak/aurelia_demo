export class Api {
  constructor() {}

  public skills = {
    get: function () {
      return (JSON.parse(localStorage.getItem("skills")) || []);
    },
    post: function(skill: any) {
      if(!skill) {
        return skill;
      }

      let skills = this.get();
      skills.push(skill);

      localStorage.setItem("skills", JSON.stringify(skills));
      return skill;
    }
  }
}
