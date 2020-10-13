/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureStackHCIClientContext } from "./azureStackHCIClientContext";


class AzureStackHCIClient extends AzureStackHCIClientContext {
  // Operation groups
  operations: operations.Operations;
  clusters: operations.Clusters;

  /**
   * Initializes a new instance of the AzureStackHCIClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AzureStackHCIClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.clusters = new operations.Clusters(this);
  }
}

// Operation Specifications

export {
  AzureStackHCIClient,
  AzureStackHCIClientContext,
  Models as AzureStackHCIModels,
  Mappers as AzureStackHCIMappers
};
export * from "./operations";