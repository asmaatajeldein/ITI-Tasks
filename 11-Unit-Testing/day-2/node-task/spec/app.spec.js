const supertest = require("supertest");
const server = require("../app");
const postModel = require("../models/post");

var req = supertest(server);

describe("POST /posts", () => {
  it("save new post", async () => {
    var data = {
      title: "new title",
      content: "new content",
    };

    var response = await req.post("/posts").send(data);

    expect(response.status).toEqual(201);
    expect(response.body._id).toBeDefined();

    var post = await postModel.findById(response.body._id);

    expect(post).toBeTruthy();
  });

  it("get posts", async () => {
    var response = await req.get("/posts");

    expect(response).toBeTruthy();
    expect(response.status).toEqual(200);
    expect(response.body.length).not.toEqual(0);
  });
});
