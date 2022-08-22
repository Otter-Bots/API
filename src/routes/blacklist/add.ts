import type { routesTemplate } from "../../grabRoutes";
import type { Request, Response } from "express";
import container from "../../container";
const data: routesTemplate = {
    type: "get",
    route: "/blacklist/add/:id",
    funct: async (req: Request, res: Response) => {
        const id = req.params.id;
        await container.db.push("blacklist", id);
        res.status(200).json({
            code: 200,
            message: "Successfully added to blacklist",
            id: id
        })
    }
}
export default data;