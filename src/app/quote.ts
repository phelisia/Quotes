export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public clickCounter: number, public dislikeCounter: number, public completeDate: Date) {
    this.showDescription = false;
    this.clickCounter = 0;
    this.dislikeCounter = 0;
  }
}

