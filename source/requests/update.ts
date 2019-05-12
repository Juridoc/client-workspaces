/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Workspace update request.
 */
@RestDB.Schema.Entity('workspaces/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Workspace name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * Contact list of members in this workspace.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList?: string[];
}
