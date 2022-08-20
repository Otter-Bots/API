import type { QuickDB } from "quick.db";

type dbContainerType = QuickDB | any;
interface IContainer {
    routes: any;
    app: Express.Application;
    db: dbContainerType;
    dbConnection: dbContainerType;
}
let container: IContainer = {
    routes: new Map(),
    app: [],
    db: [],
    dbConnection: []
}
export default container;