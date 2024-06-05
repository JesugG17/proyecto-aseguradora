export class CreateCardDto {
  constructor(
    public id: string, 
    public model: string,
    public brand: string, 
    public year: number,
    public user: number,
    public packageId: number,  
  ){}
}