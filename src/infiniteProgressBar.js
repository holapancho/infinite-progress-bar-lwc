import { LightningElement,api } from "lwc";

export default class InfiniteProgressBar extends LightningElement {

  @api variant;
  renderedCallback(){
    if(!this.variant){
      this.progressBar().classList.add('small');
    }
    else{
      switch(this.variant){
        case "x-small":
          this.progressBar().classList.add('x-small');
          break;
        case "small":
          this.progressBar().classList.add('small');
          break;
        case "medium":
          this.progressBar().classList.add('medium');
          break;
        case "large":
          this.progressBar().classList.add('large');
          break;
        default:
          this.progressBar().classList.add('x-small');
          break;
      }
    }
  }

  progressBar(){
    return this.template.querySelector(".progress-bar");
  }
}
