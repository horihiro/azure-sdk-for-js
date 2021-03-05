## API Report File for "@azure/core-rest-pipeline"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/abort-controller';
import { Debugger } from '@azure/logger';
import { OperationTracingOptions } from '@azure/core-tracing';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AddPipelineOptions {
    afterPhase?: PipelinePhase;
    afterPolicies?: string[];
    beforePolicies?: string[];
    phase?: PipelinePhase;
}

// @public
export function bearerTokenAuthenticationPolicy(options: BearerTokenAuthenticationPolicyOptions): PipelinePolicy;

// @public
export const bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";

// @public
export interface BearerTokenAuthenticationPolicyOptions {
    credential: TokenCredential;
    scopes: string | string[];
}

// @public
export function createDefaultHttpsClient(): HttpsClient;

// @public
export function createEmptyPipeline(): Pipeline;

// @public
export function createHttpHeaders(rawHeaders?: RawHttpHeaders): HttpHeaders;

// @public
export function createPipelineFromOptions(options: InternalPipelineOptions): Pipeline;

// @public
export function createPipelineRequest(options: PipelineRequestOptions): PipelineRequest;

// @public
export function decompressResponsePolicy(): PipelinePolicy;

// @public
export const decompressResponsePolicyName = "decompressResponsePolicy";

// @public
export function exponentialRetryPolicy(options?: ExponentialRetryPolicyOptions): PipelinePolicy;

// @public
export const exponentialRetryPolicyName = "exponentialRetryPolicy";

// @public
export interface ExponentialRetryPolicyOptions {
    maxRetries?: number;
    maxRetryDelayInMs?: number;
    retryDelayInMs?: number;
}

// @public
export type FormDataMap = {
    [key: string]: FormDataValue | FormDataValue[];
};

// @public
export function formDataPolicy(): PipelinePolicy;

// @public
export const formDataPolicyName = "formDataPolicy";

// @public
export type FormDataValue = string | Blob;

// @public
export function getDefaultProxySettings(proxyUrl?: string): ProxySettings | undefined;

// @public
export interface HttpHeaders extends Iterable<[string, string]> {
    delete(name: string): void;
    get(name: string): string | undefined;
    has(name: string): boolean;
    set(name: string, value: string | number): void;
    toJSON(): RawHttpHeaders;
}

// @public
export type HttpMethods = "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE";

// @public
export interface HttpsClient {
    sendRequest: SendRequest;
}

// @public
export interface InternalPipelineOptions extends PipelineOptions {
    loggingOptions?: LogPolicyOptions;
}

// @public
export function logPolicy(options?: LogPolicyOptions): PipelinePolicy;

// @public
export const logPolicyName = "logPolicy";

// @public
export interface LogPolicyOptions {
    additionalAllowedHeaderNames?: string[];
    additionalAllowedQueryParameters?: string[];
    logger?: Debugger;
}

// @public
export function ndJsonPolicy(): PipelinePolicy;

// @public
export const ndJsonPolicyName = "ndJsonPolicy";

// @public
export interface Pipeline {
    addPolicy(policy: PipelinePolicy, options?: AddPipelineOptions): void;
    clone(): Pipeline;
    getOrderedPolicies(): PipelinePolicy[];
    removePolicy(options: {
        name?: string;
        phase?: PipelinePhase;
    }): PipelinePolicy[];
    sendRequest(httpsClient: HttpsClient, request: PipelineRequest): Promise<PipelineResponse>;
}

// @public
export interface PipelineOptions {
    proxyOptions?: ProxySettings;
    redirectOptions?: RedirectPolicyOptions;
    retryOptions?: ExponentialRetryPolicyOptions;
    userAgentOptions?: UserAgentPolicyOptions;
}

// @public
export type PipelinePhase = "Deserialize" | "Serialize" | "Retry";

// @public
export interface PipelinePolicy {
    name: string;
    sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse>;
}

// @public
export interface PipelineRequest {
    abortSignal?: AbortSignalLike;
    body?: RequestBodyType;
    disableKeepAlive?: boolean;
    formData?: FormDataMap;
    headers: HttpHeaders;
    method: HttpMethods;
    onDownloadProgress?: (progress: TransferProgressEvent) => void;
    onUploadProgress?: (progress: TransferProgressEvent) => void;
    proxySettings?: ProxySettings;
    requestId: string;
    streamResponseStatusCodes?: Set<number>;
    timeout: number;
    tracingOptions?: OperationTracingOptions;
    url: string;
    withCredentials: boolean;
}

// @public
export interface PipelineRequestOptions {
    abortSignal?: AbortSignalLike;
    body?: RequestBodyType;
    disableKeepAlive?: boolean;
    formData?: FormDataMap;
    headers?: HttpHeaders;
    method?: HttpMethods;
    onDownloadProgress?: (progress: TransferProgressEvent) => void;
    onUploadProgress?: (progress: TransferProgressEvent) => void;
    proxySettings?: ProxySettings;
    requestId?: string;
    streamResponseStatusCodes?: Set<number>;
    timeout?: number;
    tracingOptions?: OperationTracingOptions;
    url: string;
    withCredentials?: boolean;
}

// @public
export interface PipelineResponse {
    blobBody?: Promise<Blob>;
    bodyAsText?: string | null;
    headers: HttpHeaders;
    readableStreamBody?: NodeJS.ReadableStream;
    request: PipelineRequest;
    status: number;
}

// @public
export function proxyPolicy(proxySettings?: ProxySettings | undefined): PipelinePolicy;

// @public
export const proxyPolicyName = "proxyPolicy";

// @public
export interface ProxySettings {
    host: string;
    password?: string;
    port: number;
    username?: string;
}

// @public
export type RawHttpHeaders = {
    [headerName: string]: string;
};

// @public
export function redirectPolicy(options?: RedirectPolicyOptions): PipelinePolicy;

// @public
export const redirectPolicyName = "redirectPolicy";

// @public
export interface RedirectPolicyOptions {
    maxRetries?: number;
}

// @public
export type RequestBodyType = NodeJS.ReadableStream | Blob | ArrayBuffer | ArrayBufferView | FormData | string | null;

// @public
export class RestError extends Error {
    constructor(message: string, options?: RestErrorOptions);
    code?: string;
    details?: unknown;
    static readonly PARSE_ERROR: string;
    request?: PipelineRequest;
    static readonly REQUEST_SEND_ERROR: string;
    response?: PipelineResponse;
    statusCode?: number;
}

// @public
export interface RestErrorOptions {
    code?: string;
    request?: PipelineRequest;
    response?: PipelineResponse;
    statusCode?: number;
}

// @public
export type SendRequest = (request: PipelineRequest) => Promise<PipelineResponse>;

// @public
export function setClientRequestIdPolicy(requestIdHeaderName?: string): PipelinePolicy;

// @public
export const setClientRequestIdPolicyName = "setClientRequestIdPolicy";

// @public
export function systemErrorRetryPolicy(options?: SystemErrorRetryPolicyOptions): PipelinePolicy;

// @public
export const systemErrorRetryPolicyName = "systemErrorRetryPolicy";

// @public
export interface SystemErrorRetryPolicyOptions {
    maxRetries?: number;
    maxRetryDelayInMs?: number;
    retryDelayInMs?: number;
}

// @public
export function throttlingRetryPolicy(): PipelinePolicy;

// @public
export const throttlingRetryPolicyName = "throttlingRetryPolicy";

// @public
export function tracingPolicy(options?: TracingPolicyOptions): PipelinePolicy;

// @public
export const tracingPolicyName = "tracingPolicy";

// @public
export interface TracingPolicyOptions {
    userAgentPrefix?: string;
}

// @public
export type TransferProgressEvent = {
    loadedBytes: number;
};

// @public
export function userAgentPolicy(options?: UserAgentPolicyOptions): PipelinePolicy;

// @public
export const userAgentPolicyName = "userAgentPolicy";

// @public
export interface UserAgentPolicyOptions {
    userAgentPrefix?: string;
}


// (No @packageDocumentation comment for this package)

```