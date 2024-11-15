import { app } from ".";
import request from "supertest";
import {describe,expect,it} from "@jest/globals"


describe("Express testing",()=>{
    it("should",async()=>{
        const res = await request(app).POST("/sum").send({
            a: 1,
            b: 2,
        })
        expect(res).toBe(3)
    })
})


app.listen(4000, () => {
    console.log("server listening on");
   
})