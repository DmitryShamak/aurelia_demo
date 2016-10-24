import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {SkillDialog} from '../dialog/skillDialog/index';
import {Api} from '../api';

@inject(DialogService, Api)
export class Skills {
  skills = [];
  skillDialog: any;
  api: any;

  constructor(dialogService: DialogService, api: Api) {
    this.skillDialog = dialogService;
    this.api = api;

    this.skills = api.skills.get();
  }

  addSkill() {
    let skill = this.api.skills.post({
      title: "New Skill",
      description: "Add Description..",
      imageUrl: "/img/default_v2.gif",
      editMode: true
    });
    this.skills.push(skill);
    this.openDialog(skill, true);
  }

  openDialog(skill: any, edit: boolean) {
    this.skillDialog.open({viewModel: SkillDialog, model: {
      skill: skill,
      params: {
        edit: edit
      }
    }});
  }
}
