import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {SkillDialog} from '../dialog/skillDialog/index';

@inject(DialogService)
export class Skills {
  title = 'Skills';
  skillDialog: any;

  constructor(dialogService: DialogService) {
    this.skillDialog = dialogService;
  }

  openDialog(skill: any) {
    this.skillDialog.open({viewModel: SkillDialog});
    console.log("dialog", this);
  }
}
