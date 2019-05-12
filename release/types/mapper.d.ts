/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Workspaces mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new workspace based on the specified creation request.
     * @param request Workspace creation request.
     * @returns Returns a promise to get the workspace Id.
     * @throws Throws an error when the workspace wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the workspace that corresponds to the specified workspace Id.
     * @param id Workspace Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the workspace entity.
     * @throws Throws an error when the workspace wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the workspace that corresponds to the specified workspace Id based on the given update request.
     * @param id Workspace Id.
     * @param request Workspace update request.
     * @returns Returns a promise to get true when the workspace was updated, false otherwise.
     * @throws Throws an error when the workspace wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all workspaces that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the workspaces list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all workspaces that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of workspace or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the workspace that corresponds to the specified workspace Id.
     * @param id Workspace Id.
     * @returns Returns a promise to get true when the workspace was deleted, false otherwise.
     * @throws Throws an error when the workspace wasn't found.
     */
    remove(id: string): Promise<boolean>;
}
