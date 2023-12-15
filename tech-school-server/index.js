const express = require('express')
const cors = require('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        return res.status(401).send({ error: true, message: "Unauthorized access" })
    }

    const token = authorization.split(" ")[1]

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: "Unauthorized access" })
        }

        req.decoded = decoded;
        next();
    })
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const uri = "mongodb+srv://tech-school:25If8KrHdJHymwZC@cluster0.8al0ep7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Database Collections ------------------------------------------------------------------

        const techSchoolDB = client.db("techSchoolDB");
        const usersCollection = techSchoolDB.collection("users");
        const coursesCollection = techSchoolDB.collection("courses");

        app.post("/jwt", (req, res) => {
            const user = req.body;

            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1h"
            })

            res.send({ token });
        })

        // Users Management ------------------------------------------------------------------------

        app.get("/users", async (req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result);
        })

        app.get("/users/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        app.get("/curr-user/:email", async (req, res) => {
            const email = req.params.email;
            // const query = { }
            const result = await usersCollection.findOne({ email: email });
            res.send(result);
        })

        app.get("/instructor", async (req, res) => {
            const result = await usersCollection.find({ role: "instructor" }).toArray();
            res.send(result);
        })

        app.post("/users", async (req, res) => {
            const user = req.body;
            const query = { email: user.email };
            const existingUser = await usersCollection.findOne(query);
            if (existingUser) {
                res.send({ message: "User already exist" });
            }
            else {
                const result = await usersCollection.insertOne(user);
                res.send(result);
            }
        })

        app.patch("/users/learner/:id", verifyJWT, async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };

            const updateDoc = {
                $set: {
                    role: "learner",
                }
            }

            const result = await usersCollection.updateOne(query, updateDoc)
            res.send(result);
        })

        app.patch("/users/instructor/:id", verifyJWT, async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };

            const updateDoc = {
                $set: {
                    role: "instructor",
                }
            }

            const result = await usersCollection.updateOne(query, updateDoc)
            res.send(result);
        })

        app.patch("/users/admin/:id", verifyJWT, async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) };

            const updateDoc = {
                $set: {
                    role: "admin",
                }
            }

            const result = await usersCollection.updateOne(query, updateDoc)
            res.send(result);
        })

        // Edit User
        app.put("/users/:id", verifyJWT, async (req, res) => {
            const user = req.body;
            console.log(user);
            const query = { _id: new ObjectId(req.params.id) };

            const updateDoc = {
                $set: {
                    profilePicture: user?.profilePicture,
                    name: user?.name,
                    phone: user?.phone || "",
                    biography: user?.biography || "",
                    gender: user?.gender || "",
                    institution: user?.institution || "",
                    linkedIn: user?.linkedIn || ""
                }
            }

            const result = await usersCollection.updateOne(query, updateDoc)
            res.send(result);
        })

        // Courses Management ------------------------------------------------------------------------

        app.get("/courses", async (req, res) => {
            const result = await coursesCollection.find().toArray();
            res.send(result);
        })

        app.get("/courses/:id", async (req, res) => {
            const result = await coursesCollection.findOne({
                _id: new ObjectId(req.params.id)
            });
            res.send(result);
        })

        app.post("/courses", verifyJWT, async (req, res) => {
            const course = req.body;
            // console.log(course);
            // const query = { courseName: course.courseName, batchNumber: course.batchNumber };
            const existingCourse = await coursesCollection.findOne({ $and: [{ courseName: course.courseName }, { batchNumber: course.batchNumber }] });
            if (existingCourse) {
                res.send({ message: "Course already exist" });
            }
            else {
                const result = await coursesCollection.insertOne(course);
                res.send(result);
            }
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



// 25If8KrHdJHymwZC