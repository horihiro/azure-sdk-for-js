/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const KeyReleaseCondition: coreHttp.CompositeMapper = {
  serializedName: "KeyReleaseCondition",
  type: {
    name: "Composite",
    className: "KeyReleaseCondition",
    modelProperties: {
      claimType: {
        serializedName: "claim",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      claimCondition: {
        serializedName: "condition",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyReleaseAuthority: coreHttp.CompositeMapper = {
  serializedName: "KeyReleaseAuthority",
  type: {
    name: "Composite",
    className: "KeyReleaseAuthority",
    modelProperties: {
      authorityURL: {
        serializedName: "authority",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      allOf: {
        serializedName: "allOf",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyReleaseCondition"
            }
          }
        }
      }
    }
  }
};

export const KeyReleasePolicy: coreHttp.CompositeMapper = {
  serializedName: "KeyReleasePolicy",
  type: {
    name: "Composite",
    className: "KeyReleasePolicy",
    modelProperties: {
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      anyOf: {
        serializedName: "anyOf",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyReleaseAuthority"
            }
          }
        }
      }
    }
  }
};

export const JsonWebKey: coreHttp.CompositeMapper = {
  serializedName: "JsonWebKey",
  type: {
    name: "Composite",
    className: "JsonWebKey",
    modelProperties: {
      kid: {
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      kty: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      n: {
        serializedName: "n",
        type: {
          name: "Base64Url"
        }
      },
      e: {
        serializedName: "e",
        type: {
          name: "Base64Url"
        }
      },
      d: {
        serializedName: "d",
        type: {
          name: "Base64Url"
        }
      },
      dp: {
        serializedName: "dp",
        type: {
          name: "Base64Url"
        }
      },
      dq: {
        serializedName: "dq",
        type: {
          name: "Base64Url"
        }
      },
      qi: {
        serializedName: "qi",
        type: {
          name: "Base64Url"
        }
      },
      p: {
        serializedName: "p",
        type: {
          name: "Base64Url"
        }
      },
      q: {
        serializedName: "q",
        type: {
          name: "Base64Url"
        }
      },
      k: {
        serializedName: "k",
        type: {
          name: "Base64Url"
        }
      },
      t: {
        serializedName: "key_hsm",
        type: {
          name: "Base64Url"
        }
      },
      crv: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      },
      x: {
        serializedName: "x",
        type: {
          name: "Base64Url"
        }
      },
      y: {
        serializedName: "y",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const Attributes: coreHttp.CompositeMapper = {
  serializedName: "Attributes",
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const KeyAttributes: coreHttp.CompositeMapper = {
  serializedName: "KeyAttributes",
  type: {
    name: "Composite",
    className: "KeyAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties,
      recoverableDays: {
        readOnly: true,
        serializedName: "recoverableDays",
        type: {
          name: "Number"
        }
      },
      recoveryLevel: {
        nullable: false,
        readOnly: true,
        serializedName: "recoveryLevel",
        type: {
          name: "String"
        }
      },
      exportable: {
        serializedName: "exportable",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyBundle: coreHttp.CompositeMapper = {
  serializedName: "KeyBundle",
  type: {
    name: "Composite",
    className: "KeyBundle",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "JsonWebKey"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      managed: {
        readOnly: true,
        serializedName: "managed",
        type: {
          name: "Boolean"
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyItem: coreHttp.CompositeMapper = {
  serializedName: "KeyItem",
  type: {
    name: "Composite",
    className: "KeyItem",
    modelProperties: {
      kid: {
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      managed: {
        readOnly: true,
        serializedName: "managed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DeletedKeyBundle: coreHttp.CompositeMapper = {
  serializedName: "DeletedKeyBundle",
  type: {
    name: "Composite",
    className: "DeletedKeyBundle",
    modelProperties: {
      ...KeyBundle.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const DeletedKeyItem: coreHttp.CompositeMapper = {
  serializedName: "DeletedKeyItem",
  type: {
    name: "Composite",
    className: "DeletedKeyItem",
    modelProperties: {
      ...KeyItem.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const KeyProperties: coreHttp.CompositeMapper = {
  serializedName: "KeyProperties",
  type: {
    name: "Composite",
    className: "KeyProperties",
    modelProperties: {
      exportable: {
        serializedName: "exportable",
        type: {
          name: "Boolean"
        }
      },
      keyType: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      keySize: {
        serializedName: "key_size",
        type: {
          name: "Number"
        }
      },
      reuseKey: {
        serializedName: "reuse_key",
        type: {
          name: "Boolean"
        }
      },
      curve: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyCreateParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyCreateParameters",
  type: {
    name: "Composite",
    className: "KeyCreateParameters",
    modelProperties: {
      kty: {
        required: true,
        serializedName: "kty",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      keySize: {
        serializedName: "key_size",
        type: {
          name: "Number"
        }
      },
      publicExponent: {
        serializedName: "public_exponent",
        type: {
          name: "Number"
        }
      },
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      curve: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyImportParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyImportParameters",
  type: {
    name: "Composite",
    className: "KeyImportParameters",
    modelProperties: {
      hsm: {
        serializedName: "Hsm",
        type: {
          name: "Boolean"
        }
      },
      key: {
        required: true,
        serializedName: "key",
        type: {
          name: "Composite",
          className: "JsonWebKey"
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyExportParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyExportParameters",
  type: {
    name: "Composite",
    className: "KeyExportParameters",
    modelProperties: {
      environment: {
        required: true,
        serializedName: "env",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyOperationsParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyOperationsParameters",
  type: {
    name: "Composite",
    className: "KeyOperationsParameters",
    modelProperties: {
      algorithm: {
        required: true,
        serializedName: "alg",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      },
      iv: {
        serializedName: "iv",
        type: {
          name: "Base64Url"
        }
      },
      additionalAuthenticatedData: {
        serializedName: "aad",
        type: {
          name: "Base64Url"
        }
      },
      tag: {
        serializedName: "tag",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeySignParameters: coreHttp.CompositeMapper = {
  serializedName: "KeySignParameters",
  type: {
    name: "Composite",
    className: "KeySignParameters",
    modelProperties: {
      algorithm: {
        required: true,
        serializedName: "alg",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVerifyParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyVerifyParameters",
  type: {
    name: "Composite",
    className: "KeyVerifyParameters",
    modelProperties: {
      algorithm: {
        required: true,
        serializedName: "alg",
        constraints: {
          MinLength: 1
        },
        type: {
          name: "String"
        }
      },
      digest: {
        required: true,
        serializedName: "digest",
        type: {
          name: "Base64Url"
        }
      },
      signature: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyUpdateParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyUpdateParameters",
  type: {
    name: "Composite",
    className: "KeyUpdateParameters",
    modelProperties: {
      keyOps: {
        serializedName: "key_ops",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      keyAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "KeyAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      releasePolicy: {
        serializedName: "release_policy",
        type: {
          name: "Composite",
          className: "KeyReleasePolicy"
        }
      }
    }
  }
};

export const KeyRestoreParameters: coreHttp.CompositeMapper = {
  serializedName: "KeyRestoreParameters",
  type: {
    name: "Composite",
    className: "KeyRestoreParameters",
    modelProperties: {
      keyBundleBackup: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyOperationResult: coreHttp.CompositeMapper = {
  serializedName: "KeyOperationResult",
  type: {
    name: "Composite",
    className: "KeyOperationResult",
    modelProperties: {
      kid: {
        readOnly: true,
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      result: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVerifyResult: coreHttp.CompositeMapper = {
  serializedName: "KeyVerifyResult",
  type: {
    name: "Composite",
    className: "KeyVerifyResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeyListResult: coreHttp.CompositeMapper = {
  serializedName: "KeyListResult",
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedKeyListResult: coreHttp.CompositeMapper = {
  serializedName: "DeletedKeyListResult",
  type: {
    name: "Composite",
    className: "DeletedKeyListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedKeyItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BackupKeyResult: coreHttp.CompositeMapper = {
  serializedName: "BackupKeyResult",
  type: {
    name: "Composite",
    className: "BackupKeyResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      innerError: {
        readOnly: true,
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const KeyVaultError: coreHttp.CompositeMapper = {
  serializedName: "KeyVaultError",
  type: {
    name: "Composite",
    className: "KeyVaultError",
    modelProperties: {
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};
