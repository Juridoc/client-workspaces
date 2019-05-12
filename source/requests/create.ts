/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Workspace creation request.
 */
@RestDB.Schema.Entity('workspaces')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Workspace name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Contact list of members in this workspace.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];
}
