import {autoinject} from "aurelia-framework";
import {DialogController} from "aurelia-dialog";

@autoinject
export class SkillDialog {
  editMode: boolean = false;
  skill: any;

  constructor(private dialogController: DialogController) {}

  close() {
    this.dialogController.cancel();
  }

  activate(model: any) {
    this.skill= model.skill;
    this.editMode = model.params.edit;
  }
}
