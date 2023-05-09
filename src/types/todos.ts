 export interface Todos {
    id:number,
    title:string
 }
  export interface todosState {
    todos:Todos[],
    loading:boolean,
    error:string
  }