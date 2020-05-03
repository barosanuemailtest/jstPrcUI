export interface SessionToken {
    tokenId: string,
    userName: string,
    valid: boolean,
    expirationTime: Date,
    accessRights: AccessRights[]
}

export enum AccessRights {
    CREATE,
    READ,
    UPDATE,
    DELETE
}
