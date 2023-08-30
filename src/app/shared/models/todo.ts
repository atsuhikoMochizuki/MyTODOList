export class Todo {
  private static _count = 0;
  public id: string;
    // ! Attention, un seul constructeur authorisé en TypeScript
    // contrairement à Javascript!
    constructor(
      public desc: string,
      public done: boolean = false,
      public editable = false, 
      public oldDesc='') {
        this.id = ++Todo._count+'';
  
    }
  }
