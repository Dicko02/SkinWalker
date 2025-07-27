

export class Model{
    habitat?: string;

    constructor(
        public id: number,
        public nom: string,
        public image: string, 
        public capacites: string
    ){}

    withLocation(location: string): Model{
        this.setLocation(location);
        return this;
    }

    setLocation(location: string){
        this.habitat = location;
    }
}