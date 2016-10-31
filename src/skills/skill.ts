import * as _ from "lodash";

export function Skill(params): void {
  this.params = _.extend(params, {
    title: "New Skill",
    description: '',
    image: '/img/default_v2.gif'
  });

  return this.params;
}
