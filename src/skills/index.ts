import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {Skill} from './skill';
import {SkillDialog} from '../dialog/skillDialog/index';
import {Api} from '../api';

@inject(DialogService, Skill, Api)
export class Skills {
  skills = [];
  skillDialog: any;
  api: any;

  constructor(dialogService: DialogService, Skill, api: Api) {
    this.skillDialog = dialogService;
    this.api = api;

    this.skills = api.skills.get(null);
  }

  addSkill() {
    let skill = new Skill({
      title: "New Skill",
      description: "Add Description..",
      imageUrl: "/img/default_v2.gif",
      editMode: true
    });
    // this.api.skills.post(new Skill({
    //   title: "New Skill",
    //   description: "Add Description..",
    //   imageUrl: "/img/default_v2.gif",
    //   editMode: true
    // }));
    this.skills.push(skill);
    this.openDialog(skill, true);
  }

  openDialog(skill: any, editMode: boolean) {
    this.skillDialog.open({viewModel: SkillDialog, model: {
      skill: skill,
      params: {
        editMode: editMode
      }
    }});
  }
}
