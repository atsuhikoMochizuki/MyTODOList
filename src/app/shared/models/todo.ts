export class Todo{
    constructor(
        public id: string,
        public text?: string,
        public done=false,
        public editable = false
    ){}
}
