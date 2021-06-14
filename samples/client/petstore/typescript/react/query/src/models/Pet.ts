// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
  Category,
  Tag,
} from './';

/**
 * A pet for sale in the pet store
 * @export
 * @interface Pet
 */
export interface Pet  {
  /**
   * 
   * @type {number}
   * @memberof Pet
   */
  id?: number;
  /**
   * 
   * @type {Category}
   * @memberof Pet
   */
  category?: Category;
  /**
   * 
   * @type {string}
   * @memberof Pet
   */
  name: string;
  /**
   * 
   * @type {string[]}
   * @memberof Pet
   */
  photoUrls: string[];
  /**
   * 
   * @type {Tag[]}
   * @memberof Pet
   */
  tags?: Tag[];
  /**
   * pet status in the store
   * @type {string}
   * @memberof Pet
   */
  status?: PetStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum PetStatusEnum {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold'
}


