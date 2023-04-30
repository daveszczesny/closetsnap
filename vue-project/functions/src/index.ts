import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp();


export const getImages = functions.https.onRequest(async (req, res) => {

    const email = req.query?.email;
    // if email null
    if(!email){
        res.send("Email not available");
        return;
    }

    const bucket = admin.storage().bucket(`gs://closetsnap-822e7.appspot.com`);

    try{
        const [files] = await bucket.getFiles({prefix: `/users/${email}/`});
        if(!files){
            res.send("Files not found!");
            return;
        }

        const fileUrls = files.map(async file => {
            const [metadata] = await file.getMetadata();
            return metadata.mediaLink;
        })


        res.json(fileUrls);
        return;

    }catch(error){
        res.send("Error");
        return;
    }



});

