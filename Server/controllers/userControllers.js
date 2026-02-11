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

    }
}
export { clerkWebhooks }