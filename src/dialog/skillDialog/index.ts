import {autoinject} from "aurelia-framework";
import {DialogController} from "aurelia-dialog";
import {Api} from '../../api';

@autoinject
export class SkillDialog {
  editMode: boolean = false;
  skill: any;

  constructor(private dialogController: DialogController, private api: Api) {}

  close() {
    this.dialogController.cancel();
  }

  edit() {
    this.editMode = !this.editMode;
  }

  editImage() {
    console.log("editImage");
  }

  update() {
    //todo: check for changes was made
    this.api.skills.put(this.skill);
    console.log("update");
  }

  activate(model: any) {
    this.skill= model.skill;
    this.editMode = model.params.editMode;
  }
}
