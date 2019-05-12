/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Contacts from '@juridoc/client-contacts';
/**
 * Workspace entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Workspace Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Workspace name.
     */
    name: string;
    /**
     * Contact Id list of members in this workspace.
     */
    contactsIdList: string[];
    /**
     * Contact list of members in this workspace.
     */
    contactList: Contacts.Entity[];
}
