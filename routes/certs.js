import express from "express"
import dbcontainer from "../util/db.js"
import container from "../util/db.js";

const router = express.Router();

// Get Full List of Certs
router.get("/getCerts", async (req, res) => {
    const query = {
        query: "SELECT * from c"
    };
    const { resources } = await dbcontainer.items.query(query).fetchAll();
    res.send(resources);
});

// Get Single Cert and Learning Resources
router.get("/getCert/:id", async (req, res) => {
    let certId = req.params.id;
    const item = dbcontainer.item(certId, certId);
    const {resource: cert } = await item.read();
    res.send(cert);
});

// Add Single Cert
router.post("/addCert", async (req, res) => {
    const newCert = {
        id: "MS-102",
        name: "Microsoft 365 Administrator",
        description: "The MS-102 exam is a certification exam for Microsoft 365 administrators who have experience in deploying, managing, and securing Microsoft 365 workloads and environments.",
        resources: []
    }
    const { resource: createdDocument } = await container.items.create(newCert);
    res.send({
        status: 200,
        message: "new cert added",
        id: createdDocument.id
    })

});

// Add Learning Resource


// Vote


// Approve/Decline Learning Resource


export default router;
