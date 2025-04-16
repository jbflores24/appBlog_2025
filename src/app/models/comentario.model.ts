export class Comentario {
  constructor(
    public id: number,
    public comentario: string,
    public estado : number,
    public user_id: number,
    public article_id : number
  ){}
}
