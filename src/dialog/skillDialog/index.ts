import {autoinject} from "aurelia-framework";
import {DialogController} from "aurelia-dialog";

@autoinject
export class SkillDialog {
  constructor(private dialogController: DialogController) {}

  close() {
    this.dialogController.cancel();
  }

  activate(model: any) {
    console.log(model);
    for(let key in model) {
      this[key] = model[key];
    }
  }
}
