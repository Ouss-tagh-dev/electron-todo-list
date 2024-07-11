import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type TodoDocument = Todo & Document;

@Schema({ toJSON: { virtuals: true, getters: true } })
export class Todo {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    completed: boolean;
}

const TodoSchema = SchemaFactory.createForClass(Todo);

TodoSchema.virtual('id').get(function (this: TodoDocument) {
    return (this._id as Types.ObjectId).toHexString();
});

export { TodoSchema };
