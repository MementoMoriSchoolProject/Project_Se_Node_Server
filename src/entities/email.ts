import { gmail_v1 } from "googleapis";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Email {
    @Field({ nullable: true })
    content?: string;

    @Field({ nullable: true })
    subject?: string;

    @Field({ nullable: true })
    snippet?: string;

    @Field()
    to: string;

    @Field({ nullable: true })
    from?: string;

    @Field()
    date: string;

    @Field(() => [String], { nullable: true })
    labels?: string[];

    @Field({ defaultValue: false })
    read: boolean

    public populateFromGmail(message: gmail_v1.Schema$Message): Email {
        this.read = message.labelIds.includes('UNREAD');
        this.snippet = message.snippet;
        const headers = message.payload.headers;
        this.date = headers.find(header => header.name === 'Date').value;
        this.subject = headers.find(header => header.name === 'Subject').value;
        this.from = headers.find(header => header.name === 'From').value;
        this.to = headers.find(header => header.name === 'To').value;
        this.labels = message.labelIds;
        this.content = message.payload.parts.find(part => part.mimeType === 'text/html').body.data;
        return this;
    }
}

@ObjectType()
export class EmailList {

    constructor(amount: number, page: number) {
        this.page = page;
        this.amount = amount;
        this.emails = [];
    }

    @Field(() => [Email], { defaultValue: [] })
    emails: Email[];

    @Field()
    page: number;

    @Field()
    amount: number;
}
