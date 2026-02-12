import { Webhook } from "svix"
import userModel from "../models/userModels.js"

//API controller functions to manage clerk users with database
//http://localhost:4000/api/users/webhooks
const clerkWebhooks = async (req, res) => {
    try{

    //Create a svix instance with the clerk webhook secret

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
    await whook.verify(JSON.stringify(req.body),{
        "svix-id": req.headers['svix-id'],
        "svix-timestamp": req.headers['svix-timestamp'],
        "svix-signature": req.headers['svix-signature']
    })

    const {type, data} = req.body

    switch(type){
        case  "user.created":{
            clerkID=data.id
            email=data.email_addresses[0].email_address
            photo=data.profile_image_url
            firstName=data.first_name
            lastName=data.last_name

        break;
        }
case "user.updated": {
    const userDATA = {
        email: data.email_addresses[0].email_address,
        photo: data.profile_image_url,
        firstName: data.first_name,
        lastName: data.last_name
    };

    // Database update
    await userModel.findOneAndUpdate({ clerkID: data.id },userDATA);
    res.json({})

    break;
}


        case  "user.deleted":{

        await userModel.findOneAndDelete({ clerkID: data.id });
        res.json({})

        break;
        }
        default:
        break;
    }
    

    
    

    }catch (error) {
        console.log("Error processing webhook:", error);
        res.json({ error: "Invalid webhook" });

    }
}

const userCredits=async (req, res) => {
    try {
        const { clerkID } = req.params;
        const user = await userModel.findOne({ clerkID });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ creditBalance: user.creditBalance });
    }
        catch (error) {
        console.log("Error fetching user credits:", error);
        res.json({ error: "Server error" });
    }
}
export { clerkWebhooks, userCredits }