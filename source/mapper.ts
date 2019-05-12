/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Workspaces mapper class.
 */
@Injection.Describe({ singleton: true, name: 'workspaces' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new workspace based on the specified creation request.
   * @param request Workspace creation request.
   * @returns Returns a promise to get the workspace Id.
   * @throws Throws an error when the workspace wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the workspace that corresponds to the specified workspace Id.
   * @param id Workspace Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the workspace entity.
   * @throws Throws an error when the workspace wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the workspace that corresponds to the specified workspace Id based on the given update request.
   * @param id Workspace Id.
   * @param request Workspace update request.
   * @returns Returns a promise to get true when the workspace was updated, false otherwise.
   * @throws Throws an error when the workspace wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * List all workspaces that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the workspaces list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all workspaces that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of workspace or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the workspace that corresponds to the specified workspace Id.
   * @param id Workspace Id.
   * @returns Returns a promise to get true when the workspace was deleted, false otherwise.
   * @throws Throws an error when the workspace wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
