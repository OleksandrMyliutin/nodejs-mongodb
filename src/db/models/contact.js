import { model, Schema } from "mongoose";

const ContactsSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        phoneNumber:{
            type: Number,
            required: true,
        },
        email:{
            type: String,
            required: false,
        },
        isFavourite:{
            type:Boolean,
            required: false,
            default: false,
        },
        contactType:{
            type: String,
            enum:['work', 'home', 'personal'],
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const ContactsCollections = model( 'contacts', ContactsSchema);
