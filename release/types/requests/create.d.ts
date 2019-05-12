/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Workspace creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Workspace name.
     */
    name: string;
    /**
     * Contact list of members in this workspace.
     */
    contactsIdList: string[];
}
