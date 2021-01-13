import { Field, InputType } from "type-graphql";

@InputType()
export class EmailInput {
    @Field({ defaultValue: 50 })
    size: number;

    @Field({ defaultValue: 0 })
    page: number;

    @Field({ defaultValue: [] })
    labels: string[];

    @Field({ defaultValue: "" })
    query: string;
}