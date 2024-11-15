import { app } from "../index";
import request from "supertest";
import { describe, expect, it } from "vitest"


describe("Express testing sum", () => {
    it("should", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2,
        })
        expect(res.body.sum).toBe(3)
    })
    it("should", async () => {
        const res = await request(app).post("/sum").send({
            a: 1000000000,
            b: 2,
        })
        expect(res.body.sum).toBe(1000000002)
    })
})
describe("Express testing multi", () => {
    it("should", async () => {
        const res = await request(app).post("/multi").send({
            a: 1,
            b: 2,
        })
        expect(res.body.sum).toBe(2)
    })
})


