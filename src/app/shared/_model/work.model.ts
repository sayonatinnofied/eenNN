export class Work {
    id?: number;
    title?: string;
    imgSrc?: string;
    status?: string;
    totalMembers?: string;
    description?: string;
    type?: string;
    priority?: string;
    affectedCIs?: string[];
    startTimestamp?: Date;
    endTimestamp?: Date;
    slackUrl?:string;
}