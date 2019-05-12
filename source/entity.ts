/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Contacts from '@juridoc/client-contacts';

/**
 * Workspace entity class.
 */
@RestDB.Schema.Entity('workspaces')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Workspace Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Workspace name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Contact Id list of members in this workspace.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];

  /**
   * Contact list of members in this workspace.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Contacts.Entity, [
    'id',
    'pictureId',
    'name',
    'personal.firstName',
    'personal.lastName',
    'professional.denomination'
  ])
  @Class.Public()
  public contactList!: Contacts.Entity[];
}
