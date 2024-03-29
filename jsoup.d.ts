/// <reference path="android-declarations.d.ts"/>

declare module org {
  export module jsoup {
    export class Connection {
      public static class: java.lang.Class<org.jsoup.Connection>;
      public constructor(implementation: {
        cookie(param0: string, param1: string): org.jsoup.Connection;
        cookies(param0: java.util.Map<string, string>): org.jsoup.Connection;
        data(param0: string): org.jsoup.Connection.KeyVal;
        data(param0: string, param1: string): org.jsoup.Connection;
        data(
          param0: string,
          param1: string,
          param2: java.io.InputStream,
        ): org.jsoup.Connection;
        data(
          param0: string,
          param1: string,
          param2: java.io.InputStream,
          param3: string,
        ): org.jsoup.Connection;
        data(
          param0: java.util.Collection<org.jsoup.Connection.KeyVal>,
        ): org.jsoup.Connection;
        data(param0: java.util.Map<string, string>): org.jsoup.Connection;
        data(param0: androidNative.Array<string>): org.jsoup.Connection;
        execute(): org.jsoup.Connection.Response;
        followRedirects(param0: boolean): org.jsoup.Connection;
        get(): org.jsoup.nodes.Document;
        header(param0: string, param1: string): org.jsoup.Connection;
        headers(param0: java.util.Map<string, string>): org.jsoup.Connection;
        ignoreContentType(param0: boolean): org.jsoup.Connection;
        ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
        maxBodySize(param0: number): org.jsoup.Connection;
        method(param0: org.jsoup.Connection.Method): org.jsoup.Connection;
        parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
        post(): org.jsoup.nodes.Document;
        postDataCharset(param0: string): org.jsoup.Connection;
        proxy(param0: string, param1: number): org.jsoup.Connection;
        proxy(param0: java.net.Proxy): org.jsoup.Connection;
        referrer(param0: string): org.jsoup.Connection;
        request(): org.jsoup.Connection.Request;
        request(param0: org.jsoup.Connection.Request): org.jsoup.Connection;
        requestBody(param0: string): org.jsoup.Connection;
        response(): org.jsoup.Connection.Response;
        response(param0: org.jsoup.Connection.Response): org.jsoup.Connection;
        sslSocketFactory(
          param0: javax.net.ssl.SSLSocketFactory,
        ): org.jsoup.Connection;
        timeout(param0: number): org.jsoup.Connection;
        url(param0: string): org.jsoup.Connection;
        url(param0: java.net.URL): org.jsoup.Connection;
        userAgent(param0: string): org.jsoup.Connection;
      });
      public constructor();
      public postDataCharset(param0: string): org.jsoup.Connection;
      public data(param0: string): org.jsoup.Connection.KeyVal;
      public proxy(param0: string, param1: number): org.jsoup.Connection;
      public response(
        param0: org.jsoup.Connection.Response,
      ): org.jsoup.Connection;
      public maxBodySize(param0: number): org.jsoup.Connection;
      public request(): org.jsoup.Connection.Request;
      public referrer(param0: string): org.jsoup.Connection;
      public post(): org.jsoup.nodes.Document;
      public followRedirects(param0: boolean): org.jsoup.Connection;
      public data(
        param0: java.util.Collection<org.jsoup.Connection.KeyVal>,
      ): org.jsoup.Connection;
      public requestBody(param0: string): org.jsoup.Connection;
      public data(
        param0: string,
        param1: string,
        param2: java.io.InputStream,
        param3: string,
      ): org.jsoup.Connection;
      public data(param0: java.util.Map<string, string>): org.jsoup.Connection;
      public proxy(param0: java.net.Proxy): org.jsoup.Connection;
      public data(
        param0: string,
        param1: string,
        param2: java.io.InputStream,
      ): org.jsoup.Connection;
      public request(
        param0: org.jsoup.Connection.Request,
      ): org.jsoup.Connection;
      public url(param0: java.net.URL): org.jsoup.Connection;
      public execute(): org.jsoup.Connection.Response;
      public response(): org.jsoup.Connection.Response;
      public sslSocketFactory(
        param0: javax.net.ssl.SSLSocketFactory,
      ): org.jsoup.Connection;
      public timeout(param0: number): org.jsoup.Connection;
      public url(param0: string): org.jsoup.Connection;
      public header(param0: string, param1: string): org.jsoup.Connection;
      public userAgent(param0: string): org.jsoup.Connection;
      public cookie(param0: string, param1: string): org.jsoup.Connection;
      public data(param0: string, param1: string): org.jsoup.Connection;
      public data(param0: androidNative.Array<string>): org.jsoup.Connection;
      public ignoreContentType(param0: boolean): org.jsoup.Connection;
      public ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
      public cookies(
        param0: java.util.Map<string, string>,
      ): org.jsoup.Connection;
      public headers(
        param0: java.util.Map<string, string>,
      ): org.jsoup.Connection;
      public get(): org.jsoup.nodes.Document;
      public method(param0: org.jsoup.Connection.Method): org.jsoup.Connection;
      public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
    }
    export module Connection {
      export class Base<T> extends java.lang.Object {
        public static class: java.lang.Class<org.jsoup.Connection.Base<any>>;
        /**
         * Constructs a new instance of the org.jsoup.Connection$Base interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          addHeader(param0: string, param1: string): T;
          cookie(param0: string): string;
          cookie(param0: string, param1: string): T;
          cookies(): java.util.Map<string, string>;
          hasCookie(param0: string): boolean;
          hasHeader(param0: string): boolean;
          hasHeaderWithValue(param0: string, param1: string): boolean;
          header(param0: string): string;
          header(param0: string, param1: string): T;
          headers(param0: string): java.util.List<string>;
          headers(): java.util.Map<string, string>;
          method(param0: org.jsoup.Connection.Method): T;
          method(): org.jsoup.Connection.Method;
          multiHeaders(): java.util.Map<string, java.util.List<string>>;
          removeCookie(param0: string): T;
          removeHeader(param0: string): T;
          url(): java.net.URL;
          url(param0: java.net.URL): T;
        });
        public constructor();
        public header(param0: string): string;
        public method(param0: org.jsoup.Connection.Method): T;
        public method(): org.jsoup.Connection.Method;
        public cookies(): java.util.Map<string, string>;
        public cookie(param0: string, param1: string): T;
        public removeCookie(param0: string): T;
        public hasHeader(param0: string): boolean;
        public hasHeaderWithValue(param0: string, param1: string): boolean;
        public removeHeader(param0: string): T;
        public addHeader(param0: string, param1: string): T;
        public hasCookie(param0: string): boolean;
        public headers(param0: string): java.util.List<string>;
        public headers(): java.util.Map<string, string>;
        public multiHeaders(): java.util.Map<string, java.util.List<string>>;
        public url(param0: java.net.URL): T;
        public url(): java.net.URL;
        public header(param0: string, param1: string): T;
        public cookie(param0: string): string;
      }
      export class KeyVal {
        public static class: java.lang.Class<org.jsoup.Connection.KeyVal>;
        /**
         * Constructs a new instance of the org.jsoup.Connection$KeyVal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          contentType(): string;
          contentType(param0: string): org.jsoup.Connection.KeyVal;
          hasInputStream(): boolean;
          inputStream(): java.io.InputStream;
          inputStream(param0: java.io.InputStream): org.jsoup.Connection.KeyVal;
          key(): string;
          key(param0: string): org.jsoup.Connection.KeyVal;
          value(): string;
          value(param0: string): org.jsoup.Connection.KeyVal;
        });
        public constructor();
        public key(param0: string): org.jsoup.Connection.KeyVal;
        public value(): string;
        public contentType(): string;
        public inputStream(): java.io.InputStream;
        public inputStream(
          param0: java.io.InputStream,
        ): org.jsoup.Connection.KeyVal;
        public contentType(param0: string): org.jsoup.Connection.KeyVal;
        public value(param0: string): org.jsoup.Connection.KeyVal;
        public hasInputStream(): boolean;
        public key(): string;
      }
      export class Method {
        public static class: java.lang.Class<org.jsoup.Connection.Method>;
        public static DELETE: org.jsoup.Connection.Method;
        public static GET: org.jsoup.Connection.Method;
        public static HEAD: org.jsoup.Connection.Method;
        public static OPTIONS: org.jsoup.Connection.Method;
        public static PATCH: org.jsoup.Connection.Method;
        public static POST: org.jsoup.Connection.Method;
        public static PUT: org.jsoup.Connection.Method;
        public static TRACE: org.jsoup.Connection.Method;
        public hasBody(): boolean;
        public static values(): androidNative.Array<org.jsoup.Connection.Method>;
        public static '<clinit>'(): void;
        public static valueOf(param0: string): org.jsoup.Connection.Method;
      }
      export class Request extends org.jsoup.Connection
        .Base<org.jsoup.Connection.Request> {
        public static class: java.lang.Class<org.jsoup.Connection.Request>;
        /**
         * Constructs a new instance of the org.jsoup.Connection$Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
          data(
            param0: org.jsoup.Connection.KeyVal,
          ): org.jsoup.Connection.Request;
          followRedirects(param0: boolean): org.jsoup.Connection.Request;
          followRedirects(): boolean;
          ignoreContentType(param0: boolean): org.jsoup.Connection.Request;
          ignoreContentType(): boolean;
          ignoreHttpErrors(param0: boolean): org.jsoup.Connection.Request;
          ignoreHttpErrors(): boolean;
          maxBodySize(): number;
          maxBodySize(param0: number): org.jsoup.Connection.Request;
          parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection.Request;
          parser(): org.jsoup.parser.Parser;
          postDataCharset(): string;
          postDataCharset(param0: string): org.jsoup.Connection.Request;
          proxy(): java.net.Proxy;
          proxy(param0: string, param1: number): org.jsoup.Connection.Request;
          proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
          requestBody(): string;
          requestBody(param0: string): org.jsoup.Connection.Request;
          sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
          sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
          timeout(): number;
          timeout(param0: number): org.jsoup.Connection.Request;
          addHeader(param0: string, param1: string): any;
          cookie(param0: string): string;
          cookie(param0: string, param1: string): any;
          cookies(): java.util.Map<string, string>;
          hasCookie(param0: string): boolean;
          hasHeader(param0: string): boolean;
          hasHeaderWithValue(param0: string, param1: string): boolean;
          header(param0: string): string;
          header(param0: string, param1: string): any;
          headers(param0: string): java.util.List<string>;
          headers(): java.util.Map<string, string>;
          method(param0: org.jsoup.Connection.Method): any;
          method(): org.jsoup.Connection.Method;
          multiHeaders(): java.util.Map<string, java.util.List<string>>;
          removeCookie(param0: string): any;
          removeHeader(param0: string): any;
          url(): java.net.URL;
          url(param0: java.net.URL): any;
        });
        public constructor();
        public header(param0: string): string;
        public header(param0: string, param1: string): any;
        public ignoreHttpErrors(param0: boolean): org.jsoup.Connection.Request;
        public postDataCharset(param0: string): org.jsoup.Connection.Request;
        public method(): org.jsoup.Connection.Method;
        public cookies(): java.util.Map<string, string>;
        public followRedirects(): boolean;
        public proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
        public requestBody(): string;
        public url(param0: java.net.URL): any;
        public data(
          param0: org.jsoup.Connection.KeyVal,
        ): org.jsoup.Connection.Request;
        public proxy(
          param0: string,
          param1: number,
        ): org.jsoup.Connection.Request;
        public timeout(): number;
        public hasHeader(param0: string): boolean;
        public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
        public headers(param0: string): java.util.List<string>;
        public followRedirects(param0: boolean): org.jsoup.Connection.Request;
        public removeCookie(param0: string): any;
        public url(): java.net.URL;
        public maxBodySize(): number;
        public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
        public postDataCharset(): string;
        public method(param0: org.jsoup.Connection.Method): any;
        public proxy(): java.net.Proxy;
        public data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
        public hasHeaderWithValue(param0: string, param1: string): boolean;
        public hasCookie(param0: string): boolean;
        public ignoreContentType(): boolean;
        public ignoreHttpErrors(): boolean;
        public cookie(param0: string, param1: string): any;
        public requestBody(param0: string): org.jsoup.Connection.Request;
        public addHeader(param0: string, param1: string): any;
        public headers(): java.util.Map<string, string>;
        public removeHeader(param0: string): any;
        public maxBodySize(param0: number): org.jsoup.Connection.Request;
        public multiHeaders(): java.util.Map<string, java.util.List<string>>;
        public parser(
          param0: org.jsoup.parser.Parser,
        ): org.jsoup.Connection.Request;
        public ignoreContentType(param0: boolean): org.jsoup.Connection.Request;
        public timeout(param0: number): org.jsoup.Connection.Request;
        public parser(): org.jsoup.parser.Parser;
        public cookie(param0: string): string;
      }
      export class Response extends org.jsoup.Connection
        .Base<org.jsoup.Connection.Response> {
        public static class: java.lang.Class<org.jsoup.Connection.Response>;
        /**
         * Constructs a new instance of the org.jsoup.Connection$Response interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          body(): string;
          bodyAsBytes(): androidNative.Array<number>;
          bodyStream(): java.io.BufferedInputStream;
          bufferUp(): org.jsoup.Connection.Response;
          charset(): string;
          charset(param0: string): org.jsoup.Connection.Response;
          contentType(): string;
          parse(): org.jsoup.nodes.Document;
          statusCode(): number;
          statusMessage(): string;
          addHeader(param0: string, param1: string): any;
          cookie(param0: string): string;
          cookie(param0: string, param1: string): any;
          cookies(): java.util.Map<string, string>;
          hasCookie(param0: string): boolean;
          hasHeader(param0: string): boolean;
          hasHeaderWithValue(param0: string, param1: string): boolean;
          header(param0: string): string;
          header(param0: string, param1: string): any;
          headers(param0: string): java.util.List<string>;
          headers(): java.util.Map<string, string>;
          method(param0: org.jsoup.Connection.Method): any;
          method(): org.jsoup.Connection.Method;
          multiHeaders(): java.util.Map<string, java.util.List<string>>;
          removeCookie(param0: string): any;
          removeHeader(param0: string): any;
          url(): java.net.URL;
          url(param0: java.net.URL): any;
        });
        public constructor();
        public header(param0: string): string;
        public header(param0: string, param1: string): any;
        public body(): string;
        public method(): org.jsoup.Connection.Method;
        public cookies(): java.util.Map<string, string>;
        public parse(): org.jsoup.nodes.Document;
        public url(param0: java.net.URL): any;
        public hasHeader(param0: string): boolean;
        public headers(param0: string): java.util.List<string>;
        public bodyAsBytes(): androidNative.Array<number>;
        public removeCookie(param0: string): any;
        public contentType(): string;
        public url(): java.net.URL;
        public charset(param0: string): org.jsoup.Connection.Response;
        public statusMessage(): string;
        public method(param0: org.jsoup.Connection.Method): any;
        public bufferUp(): org.jsoup.Connection.Response;
        public hasHeaderWithValue(param0: string, param1: string): boolean;
        public hasCookie(param0: string): boolean;
        public cookie(param0: string, param1: string): any;
        public addHeader(param0: string, param1: string): any;
        public headers(): java.util.Map<string, string>;
        public removeHeader(param0: string): any;
        public statusCode(): number;
        public multiHeaders(): java.util.Map<string, java.util.List<string>>;
        public charset(): string;
        public bodyStream(): java.io.BufferedInputStream;
        public cookie(param0: string): string;
      }
    }
    export class HttpStatusException {
      public static class: java.lang.Class<org.jsoup.HttpStatusException>;
      public constructor(param0: string, param1: number, param2: string);
      public getUrl(): string;
      public toString(): string;
      public getStatusCode(): number;
    }
    export class Jsoup {
      public static class: java.lang.Class<org.jsoup.Jsoup>;
      public static parse(
        param0: java.net.URL,
        param1: number,
      ): org.jsoup.nodes.Document;
      public static parse(
        param0: java.io.File,
        param1: string,
        param2: string,
      ): org.jsoup.nodes.Document;
      public static parseBodyFragment(
        param0: string,
        param1: string,
      ): org.jsoup.nodes.Document;
      public static parse(
        param0: java.io.InputStream,
        param1: string,
        param2: string,
      ): org.jsoup.nodes.Document;
      public static parse(
        param0: string,
        param1: string,
      ): org.jsoup.nodes.Document;
      public static parseBodyFragment(param0: string): org.jsoup.nodes.Document;
      public static clean(
        param0: string,
        param1: string,
        param2: org.jsoup.safety.Whitelist,
      ): string;
      public static parse(
        param0: java.io.InputStream,
        param1: string,
        param2: string,
        param3: org.jsoup.parser.Parser,
      ): org.jsoup.nodes.Document;
      public static parse(
        param0: string,
        param1: string,
        param2: org.jsoup.parser.Parser,
      ): org.jsoup.nodes.Document;
      public static isValid(
        param0: string,
        param1: org.jsoup.safety.Whitelist,
      ): boolean;
      public static connect(param0: string): org.jsoup.Connection;
      public static parse(
        param0: java.io.File,
        param1: string,
      ): org.jsoup.nodes.Document;
      public static clean(
        param0: string,
        param1: org.jsoup.safety.Whitelist,
      ): string;
      public static parse(param0: string): org.jsoup.nodes.Document;
      public static clean(
        param0: string,
        param1: string,
        param2: org.jsoup.safety.Whitelist,
        param3: org.jsoup.nodes.Document.OutputSettings,
      ): string;
    }
    export class SerializationException {
      public static class: java.lang.Class<org.jsoup.SerializationException>;
      public constructor(param0: java.lang.Throwable);
      public constructor(param0: string, param1: java.lang.Throwable);
      public constructor();
      public constructor(param0: string);
    }
    export class UncheckedIOException {
      public static class: java.lang.Class<org.jsoup.UncheckedIOException>;
      public constructor(param0: java.io.IOException);
      public ioException(): java.io.IOException;
      public constructor(param0: string);
    }
    export class UnsupportedMimeTypeException {
      public static class: java.lang.Class<org.jsoup.UnsupportedMimeTypeException>;
      public getMimeType(): string;
      public getUrl(): string;
      public toString(): string;
      public constructor(param0: string, param1: string, param2: string);
    }
    export module helper {
      export abstract class ChangeNotifyingArrayList<E> extends java.util
        .ArrayList<any> {
        public static class: java.lang.Class<
          org.jsoup.helper.ChangeNotifyingArrayList<any>
        >;
        public addAll(param0: java.util.Collection<any>): boolean;
        public remove(param0: number): any;
        public removeRange(param0: number, param1: number): void;
        public retainAll(param0: java.util.Collection<any>): boolean;
        public add(param0: number, param1: any): void;
        public set(param0: number, param1: any): any;
        public add(param0: any): boolean;
        public removeAll(param0: java.util.Collection<any>): boolean;
        public clear(): void;
        public onContentsChanged(): void;
        public constructor(param0: number);
        public addAll(
          param0: number,
          param1: java.util.Collection<any>,
        ): boolean;
        public remove(param0: any): boolean;
      }
      export class DataUtil {
        public static class: java.lang.Class<org.jsoup.helper.DataUtil>;
        public static boundaryLength: number;
        public static bufferSize: number;
        public static defaultCharset: string;
        public static emptyByteBuffer(): java.nio.ByteBuffer;
        public static load(
          param0: java.io.File,
          param1: string,
          param2: string,
        ): org.jsoup.nodes.Document;
        public static '<clinit>'(): void;
        public static load(
          param0: java.io.InputStream,
          param1: string,
          param2: string,
          param3: org.jsoup.parser.Parser,
        ): org.jsoup.nodes.Document;
        public static parseInputStream(
          param0: java.io.InputStream,
          param1: string,
          param2: string,
          param3: org.jsoup.parser.Parser,
        ): org.jsoup.nodes.Document;
        public static getCharsetFromContentType(param0: string): string;
        public static mimeBoundary(): string;
        public static readToByteBuffer(
          param0: java.io.InputStream,
          param1: number,
        ): java.nio.ByteBuffer;
        public static load(
          param0: java.io.InputStream,
          param1: string,
          param2: string,
        ): org.jsoup.nodes.Document;
        public static crossStreams(
          param0: java.io.InputStream,
          param1: java.io.OutputStream,
        ): void;
      }
      export module DataUtil {
        export class BomCharset {
          public static class: java.lang.Class<org.jsoup.helper.DataUtil.BomCharset>;
          public constructor(param0: string, param1: boolean);
        }
      }
      export class HttpConnection extends org.jsoup.Connection {
        public static class: java.lang.Class<org.jsoup.helper.HttpConnection>;
        public static CONTENT_ENCODING: string;
        public static CONTENT_TYPE: string;
        public static DEFAULT_UA: string;
        public static FORM_URL_ENCODED: string;
        public static MULTIPART_FORM_DATA: string;
        public proxy(param0: string, param1: number): org.jsoup.Connection;
        public referrer(param0: string): org.jsoup.Connection;
        public data(param0: androidNative.Array<string>): org.jsoup.Connection;
        public sslSocketFactory(
          param0: javax.net.ssl.SSLSocketFactory,
        ): org.jsoup.Connection;
        public data(param0: string, param1: string): org.jsoup.Connection;
        public post(): org.jsoup.nodes.Document;
        public response(
          param0: org.jsoup.Connection.Response,
        ): org.jsoup.Connection;
        public timeout(param0: number): org.jsoup.Connection;
        public data(
          param0: string,
          param1: string,
          param2: java.io.InputStream,
          param3: string,
        ): org.jsoup.Connection;
        public ignoreHttpErrors(param0: boolean): org.jsoup.Connection;
        public cookie(param0: string, param1: string): org.jsoup.Connection;
        public postDataCharset(param0: string): org.jsoup.Connection;
        public constructor();
        public parser(param0: org.jsoup.parser.Parser): org.jsoup.Connection;
        public get(): org.jsoup.nodes.Document;
        public request(
          param0: org.jsoup.Connection.Request,
        ): org.jsoup.Connection;
        public ignoreContentType(param0: boolean): org.jsoup.Connection;
        public data(
          param0: java.util.Collection<org.jsoup.Connection.KeyVal>,
        ): org.jsoup.Connection;
        public userAgent(param0: string): org.jsoup.Connection;
        public request(): org.jsoup.Connection.Request;
        public static connect(param0: java.net.URL): org.jsoup.Connection;
        public maxBodySize(param0: number): org.jsoup.Connection;
        public followRedirects(param0: boolean): org.jsoup.Connection;
        public method(
          param0: org.jsoup.Connection.Method,
        ): org.jsoup.Connection;
        public response(): org.jsoup.Connection.Response;
        public data(param0: string): org.jsoup.Connection.KeyVal;
        public headers(
          param0: java.util.Map<string, string>,
        ): org.jsoup.Connection;
        public execute(): org.jsoup.Connection.Response;
        public url(param0: string): org.jsoup.Connection;
        public header(param0: string, param1: string): org.jsoup.Connection;
        public data(
          param0: string,
          param1: string,
          param2: java.io.InputStream,
        ): org.jsoup.Connection;
        public proxy(param0: java.net.Proxy): org.jsoup.Connection;
        public requestBody(param0: string): org.jsoup.Connection;
        public cookies(
          param0: java.util.Map<string, string>,
        ): org.jsoup.Connection;
        public data(
          param0: java.util.Map<string, string>,
        ): org.jsoup.Connection;
        public static connect(param0: string): org.jsoup.Connection;
        public static encodeUrl(param0: java.net.URL): java.net.URL;
        public url(param0: java.net.URL): org.jsoup.Connection;
      }
      export module HttpConnection {
        export class Base<T> extends org.jsoup.Connection.Base<any> {
          public static class: java.lang.Class<
            org.jsoup.helper.HttpConnection.Base<any>
          >;
          public cookie(param0: string): string;
          public hasHeaderWithValue(param0: string, param1: string): boolean;
          public hasCookie(param0: string): boolean;
          public header(param0: string): string;
          public removeCookie(param0: string): any;
          public url(): java.net.URL;
          public headers(param0: string): java.util.List<string>;
          public method(param0: org.jsoup.Connection.Method): any;
          public cookies(): java.util.Map<string, string>;
          public method(): org.jsoup.Connection.Method;
          public multiHeaders(): java.util.Map<string, java.util.List<string>>;
          public removeHeader(param0: string): any;
          public addHeader(param0: string, param1: string): any;
          public header(param0: string, param1: string): any;
          public headers(): java.util.Map<string, string>;
          public url(param0: java.net.URL): any;
          public cookie(param0: string, param1: string): any;
          public hasHeader(param0: string): boolean;
        }
        export class KeyVal extends org.jsoup.Connection.KeyVal {
          public static class: java.lang.Class<org.jsoup.helper.HttpConnection.KeyVal>;
          public contentType(): string;
          public inputStream(
            param0: java.io.InputStream,
          ): org.jsoup.helper.HttpConnection.KeyVal;
          public key(): string;
          public value(): string;
          public value(param0: string): org.jsoup.helper.HttpConnection.KeyVal;
          public toString(): string;
          public static create(
            param0: string,
            param1: string,
            param2: java.io.InputStream,
          ): org.jsoup.helper.HttpConnection.KeyVal;
          public contentType(param0: string): org.jsoup.Connection.KeyVal;
          public inputStream(
            param0: java.io.InputStream,
          ): org.jsoup.Connection.KeyVal;
          public key(param0: string): org.jsoup.Connection.KeyVal;
          public inputStream(): java.io.InputStream;
          public key(param0: string): org.jsoup.helper.HttpConnection.KeyVal;
          public value(param0: string): org.jsoup.Connection.KeyVal;
          public static create(
            param0: string,
            param1: string,
          ): org.jsoup.helper.HttpConnection.KeyVal;
          public hasInputStream(): boolean;
        }
        export class Request
          extends org.jsoup.helper.HttpConnection
            .Base<org.jsoup.Connection.Request>
          implements org.jsoup.Connection.Request
        {
          public static class: java.lang.Class<org.jsoup.helper.HttpConnection.Request>;
          public postDataCharset(): string;
          public proxy(): java.net.Proxy;
          public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
          public parser(
            param0: org.jsoup.parser.Parser,
          ): org.jsoup.helper.HttpConnection.Request;
          public cookie(param0: string): string;
          public timeout(): number;
          public timeout(
            param0: number,
          ): org.jsoup.helper.HttpConnection.Request;
          public header(param0: string): string;
          public removeCookie(param0: string): any;
          public followRedirects(): boolean;
          public headers(param0: string): java.util.List<string>;
          public followRedirects(param0: boolean): org.jsoup.Connection.Request;
          public method(param0: org.jsoup.Connection.Method): any;
          public data(
            param0: org.jsoup.Connection.KeyVal,
          ): org.jsoup.helper.HttpConnection.Request;
          public parser(
            param0: org.jsoup.parser.Parser,
          ): org.jsoup.Connection.Request;
          public cookies(): java.util.Map<string, string>;
          public proxy(
            param0: string,
            param1: number,
          ): org.jsoup.Connection.Request;
          public maxBodySize(param0: number): org.jsoup.Connection.Request;
          public data(): java.util.Collection<org.jsoup.Connection.KeyVal>;
          public ignoreContentType(
            param0: boolean,
          ): org.jsoup.Connection.Request;
          public addHeader(param0: string, param1: string): any;
          public header(param0: string, param1: string): any;
          public constructor();
          public headers(): java.util.Map<string, string>;
          public ignoreContentType(): boolean;
          public data(
            param0: org.jsoup.Connection.KeyVal,
          ): org.jsoup.Connection.Request;
          public ignoreHttpErrors(): boolean;
          public hasHeaderWithValue(param0: string, param1: string): boolean;
          public hasCookie(param0: string): boolean;
          public url(): java.net.URL;
          public postDataCharset(param0: string): org.jsoup.Connection.Request;
          public requestBody(param0: string): org.jsoup.Connection.Request;
          public parser(): org.jsoup.parser.Parser;
          public method(): org.jsoup.Connection.Method;
          public maxBodySize(): number;
          public multiHeaders(): java.util.Map<string, java.util.List<string>>;
          public removeHeader(param0: string): any;
          public proxy(
            param0: string,
            param1: number,
          ): org.jsoup.helper.HttpConnection.Request;
          public timeout(param0: number): org.jsoup.Connection.Request;
          public proxy(
            param0: java.net.Proxy,
          ): org.jsoup.helper.HttpConnection.Request;
          public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
          public url(param0: java.net.URL): any;
          public ignoreHttpErrors(
            param0: boolean,
          ): org.jsoup.Connection.Request;
          public proxy(param0: java.net.Proxy): org.jsoup.Connection.Request;
          public cookie(param0: string, param1: string): any;
          public hasHeader(param0: string): boolean;
          public requestBody(): string;
        }
        export class Response
          extends org.jsoup.helper.HttpConnection
            .Base<org.jsoup.Connection.Response>
          implements org.jsoup.Connection.Response
        {
          public static class: java.lang.Class<org.jsoup.helper.HttpConnection.Response>;
          public cookie(param0: string): string;
          public header(param0: string): string;
          public removeCookie(param0: string): any;
          public headers(param0: string): java.util.List<string>;
          public method(param0: org.jsoup.Connection.Method): any;
          public cookies(): java.util.Map<string, string>;
          public statusMessage(): string;
          public bodyStream(): java.io.BufferedInputStream;
          public static execute(
            param0: org.jsoup.Connection.Request,
          ): org.jsoup.helper.HttpConnection.Response;
          public addHeader(param0: string, param1: string): any;
          public header(param0: string, param1: string): any;
          public constructor();
          public headers(): java.util.Map<string, string>;
          public bufferUp(): org.jsoup.Connection.Response;
          public static '<clinit>'(): void;
          public bodyAsBytes(): androidNative.Array<number>;
          public static execute(
            param0: org.jsoup.Connection.Request,
            param1: org.jsoup.helper.HttpConnection.Response,
          ): org.jsoup.helper.HttpConnection.Response;
          public contentType(): string;
          public parse(): org.jsoup.nodes.Document;
          public hasHeaderWithValue(param0: string, param1: string): boolean;
          public hasCookie(param0: string): boolean;
          public url(): java.net.URL;
          public charset(param0: string): org.jsoup.Connection.Response;
          public statusCode(): number;
          public method(): org.jsoup.Connection.Method;
          public charset(): string;
          public multiHeaders(): java.util.Map<string, java.util.List<string>>;
          public removeHeader(param0: string): any;
          public processResponseHeaders(
            param0: java.util.Map<string, java.util.List<string>>,
          ): void;
          public charset(
            param0: string,
          ): org.jsoup.helper.HttpConnection.Response;
          public body(): string;
          public url(param0: java.net.URL): any;
          public cookie(param0: string, param1: string): any;
          public hasHeader(param0: string): boolean;
        }
      }
      export class Validate {
        public static class: java.lang.Class<org.jsoup.helper.Validate>;
        public static notEmpty(param0: string): void;
        public static wtf(param0: string): void;
        public static noNullElements(
          param0: androidNative.Array<any>,
          param1: string,
        ): void;
        public static notNull(param0: any): void;
        public static notEmpty(param0: string, param1: string): void;
        public static isFalse(param0: boolean): void;
        public static isTrue(param0: boolean, param1: string): void;
        public static isTrue(param0: boolean): void;
        public static fail(param0: string): void;
        public static isFalse(param0: boolean, param1: string): void;
        public static noNullElements(param0: androidNative.Array<any>): void;
        public static notNull(param0: any, param1: string): void;
      }
      export class W3CDom {
        public static class: java.lang.Class<org.jsoup.helper.W3CDom>;
        public factory: javax.xml.parsers.DocumentBuilderFactory;
        public static propertiesFromMap(
          param0: java.util.Map<string, string>,
        ): java.util.Properties;
        public fromJsoup(
          param0: org.jsoup.nodes.Document,
        ): org.w3c.dom.Document;
        public static OutputXml(): java.util.HashMap<string, string>;
        public static convert(
          param0: org.jsoup.nodes.Document,
        ): org.w3c.dom.Document;
        public convert(
          param0: org.jsoup.nodes.Document,
          param1: org.w3c.dom.Document,
        ): void;
        public static OutputHtml(): java.util.HashMap<string, string>;
        public static asString(
          param0: org.w3c.dom.Document,
          param1: java.util.Map<string, string>,
        ): string;
        public constructor();
        public asString(param0: org.w3c.dom.Document): string;
      }
      export module W3CDom {
        export class W3CBuilder extends org.jsoup.select.NodeVisitor {
          public static class: java.lang.Class<org.jsoup.helper.W3CDom.W3CBuilder>;
          public constructor(param0: org.w3c.dom.Document);
          public tail(param0: org.jsoup.nodes.Node, param1: number): void;
          public head(param0: org.jsoup.nodes.Node, param1: number): void;
        }
      }
    }
    export module internal {
      export class ConstrainableInputStream {
        public static class: java.lang.Class<org.jsoup.internal.ConstrainableInputStream>;
        public reset(): void;
        public static wrap(
          param0: java.io.InputStream,
          param1: number,
          param2: number,
        ): org.jsoup.internal.ConstrainableInputStream;
        public timeout(
          param0: number,
          param1: number,
        ): org.jsoup.internal.ConstrainableInputStream;
        public read(
          param0: androidNative.Array<number>,
          param1: number,
          param2: number,
        ): number;
        public readToByteBuffer(param0: number): java.nio.ByteBuffer;
      }
      export class Normalizer {
        public static class: java.lang.Class<org.jsoup.internal.Normalizer>;
        public static lowerCase(param0: string): string;
        public static normalize(param0: string): string;
        public static normalize(param0: string, param1: boolean): string;
        public constructor();
      }
      export class StringUtil {
        public static class: java.lang.Class<org.jsoup.internal.StringUtil>;
        public static normaliseWhitespace(param0: string): string;
        public static appendNormalisedWhitespace(
          param0: java.lang.StringBuilder,
          param1: string,
          param2: boolean,
        ): void;
        public static isNumeric(param0: string): boolean;
        public static isWhitespace(param0: number): boolean;
        public static isActuallyWhitespace(param0: number): boolean;
        public static resolve(param0: string, param1: string): string;
        public constructor();
        public static borrowBuilder(): java.lang.StringBuilder;
        public static padding(param0: number): string;
        public static releaseBuilder(param0: java.lang.StringBuilder): string;
        public static '<clinit>'(): void;
        public static isBlank(param0: string): boolean;
        public static isInvisibleChar(param0: number): boolean;
        public static join(
          param0: androidNative.Array<string>,
          param1: string,
        ): string;
        public static in(
          param0: string,
          param1: androidNative.Array<string>,
        ): boolean;
        public static join(
          param0: java.util.Collection<any>,
          param1: string,
        ): string;
        public static join(
          param0: java.util.Iterator<any>,
          param1: string,
        ): string;
        public static resolve(
          param0: java.net.URL,
          param1: string,
        ): java.net.URL;
        public static inSorted(
          param0: string,
          param1: androidNative.Array<string>,
        ): boolean;
      }
    }
    export module nodes {
      export class Attribute extends java.lang.Object {
        public static class: java.lang.Class<org.jsoup.nodes.Attribute>;
        public parent: org.jsoup.nodes.Attributes;
        public clone(): org.jsoup.nodes.Attribute;
        public static createFromEncoded(
          param0: string,
          param1: string,
        ): org.jsoup.nodes.Attribute;
        public getValue(): string;
        public static html(
          param0: string,
          param1: string,
          param2: java.lang.Appendable,
          param3: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public toString(): string;
        public setKey(param0: string): void;
        public getKey(): string;
        public static shouldCollapseAttribute(
          param0: string,
          param1: string,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): boolean;
        public shouldCollapseAttribute(
          param0: org.jsoup.nodes.Document.OutputSettings,
        ): boolean;
        public constructor(
          param0: string,
          param1: string,
          param2: org.jsoup.nodes.Attributes,
        );
        public static '<clinit>'(): void;
        public setValue(param0: string): string;
        public hasDeclaredValue(): boolean;
        public static isDataAttribute(param0: string): boolean;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public static isBooleanAttribute(param0: string): boolean;
        public isDataAttribute(): boolean;
        public constructor(param0: string, param1: string);
        public html(): string;
        public html(
          param0: java.lang.Appendable,
          param1: org.jsoup.nodes.Document.OutputSettings,
        ): void;
      }

      export class Attributes extends java.lang.Object {
        public static class: java.lang.Class<org.jsoup.nodes.Attributes>;
        public static InternalPrefix: string;
        public static NotFound: number;
        public static dataPrefix: string;
        public keys: androidNative.Array<string>;
        public vals: androidNative.Array<string>;
        public addAll(param0: org.jsoup.nodes.Attributes): void;
        public dataset(): java.util.Map<string, string>;
        public hasDeclaredValueForKeyIgnoreCase(param0: string): boolean;
        public constructor();
        public normalize(): void;
        public static '<clinit>'(): void;
        public static checkNotNull(param0: string): string;
        public put(param0: string, param1: string): org.jsoup.nodes.Attributes;
        public putIgnoreCase(param0: string, param1: string): void;
        public hashCode(): number;
        public indexOfKey(param0: string): number;
        public equals(param0: any): boolean;
        public clone(): org.jsoup.nodes.Attributes;
        public isEmpty(): boolean;
        public static internalKey(param0: string): string;
        public get(param0: string): string;
        public hasKeyIgnoreCase(param0: string): boolean;
        public deduplicate(param0: org.jsoup.parser.ParseSettings): number;
        public hasKey(param0: string): boolean;
        public toString(): string;
        public size(): number;
        public removeIgnoreCase(param0: string): void;
        public getIgnoreCase(param0: string): string;
        public put(param0: string, param1: boolean): org.jsoup.nodes.Attributes;
        public asList(): java.util.List<org.jsoup.nodes.Attribute>;
        public remove(param0: string): void;
        public add(param0: string, param1: string): org.jsoup.nodes.Attributes;
        public put(
          param0: org.jsoup.nodes.Attribute,
        ): org.jsoup.nodes.Attributes;
        public hasDeclaredValueForKey(param0: string): boolean;
        public html(): string;
        public html(
          param0: java.lang.Appendable,
          param1: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public iterator(): java.util.Iterator<org.jsoup.nodes.Attribute>;
      }
      export module Attributes {
        export class Dataset extends java.util.AbstractMap<string, string> {
          public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset>;
          public entrySet(): java.util.Set<java.util.Map.Entry<string, string>>;
          public put(param0: string, param1: string): string;
        }
        export module Dataset {
          export class DatasetIterator extends java.util.Iterator<
            java.util.Map.Entry<string, string>
          > {
            public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset.DatasetIterator>;
            public next(): java.util.Map.Entry<string, string>;
            public hasNext(): boolean;
            public remove(): void;
          }
          export class EntrySet extends java.util.AbstractSet<
            java.util.Map.Entry<string, string>
          > {
            public static class: java.lang.Class<org.jsoup.nodes.Attributes.Dataset.EntrySet>;
            public iterator(): java.util.Iterator<
              java.util.Map.Entry<string, string>
            >;
            public size(): number;
          }
        }
      }

      export class CDataNode extends org.jsoup.nodes.TextNode {
        public static class: java.lang.Class<org.jsoup.nodes.CDataNode>;
        public clone(): org.jsoup.nodes.Node;
        public nodeName(): string;
        public text(param0: string): org.jsoup.nodes.TextNode;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public clone(): org.jsoup.nodes.CDataNode;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public text(): string;
        public clone(): org.jsoup.nodes.TextNode;
        public constructor(param0: string);
        public constructor();
      }

      export class Comment extends org.jsoup.nodes.LeafNode {
        public static class: java.lang.Class<org.jsoup.nodes.Comment>;
        public isXmlDeclaration(): boolean;
        public asXmlDeclaration(): org.jsoup.nodes.XmlDeclaration;
        public setData(param0: string): org.jsoup.nodes.Comment;
        public clone(): org.jsoup.nodes.Node;
        public getData(): string;
        public nodeName(): string;
        public clone(): org.jsoup.nodes.Comment;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public toString(): string;
        public constructor(param0: string);
        public constructor();
      }

      export class DataNode extends org.jsoup.nodes.LeafNode {
        public static class: java.lang.Class<org.jsoup.nodes.DataNode>;
        public static createFromEncoded(
          param0: string,
          param1: string,
        ): org.jsoup.nodes.DataNode;
        public clone(): org.jsoup.nodes.Node;
        public setWholeData(param0: string): org.jsoup.nodes.DataNode;
        public nodeName(): string;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public clone(): org.jsoup.nodes.DataNode;
        public toString(): string;
        public constructor(param0: string);
        public getWholeData(): string;
        public constructor();
      }

      export class Document extends org.jsoup.nodes.Element {
        public static class: java.lang.Class<org.jsoup.nodes.Document>;
        public clone(): org.jsoup.nodes.Node;
        public documentType(): org.jsoup.nodes.DocumentType;
        public outputSettings(): org.jsoup.nodes.Document.OutputSettings;
        public charset(param0: java.nio.charset.Charset): void;
        public clone(): org.jsoup.nodes.Document;
        public outerHtml(): string;
        public quirksMode(): org.jsoup.nodes.Document.QuirksMode;
        public updateMetaCharsetElement(param0: boolean): void;
        public text(): string;
        public outerHtml(param0: java.lang.Appendable): void;
        public static createShell(param0: string): org.jsoup.nodes.Document;
        public title(param0: string): void;
        public constructor(param0: string);
        public constructor();
        public charset(): java.nio.charset.Charset;
        public updateMetaCharsetElement(): boolean;
        public constructor(
          param0: org.jsoup.parser.Tag,
          param1: string,
          param2: org.jsoup.nodes.Attributes,
        );
        public title(): string;
        public nodeName(): string;
        public constructor(param0: org.jsoup.parser.Tag, param1: string);
        public outputSettings(
          param0: org.jsoup.nodes.Document.OutputSettings,
        ): org.jsoup.nodes.Document;
        public createElement(param0: string): org.jsoup.nodes.Element;
        public location(): string;
        public normalise(): org.jsoup.nodes.Document;
        public quirksMode(
          param0: org.jsoup.nodes.Document.QuirksMode,
        ): org.jsoup.nodes.Document;
        public text(param0: string): org.jsoup.nodes.Element;
        public clone(): org.jsoup.nodes.Element;
        public head(): org.jsoup.nodes.Element;
        public body(): org.jsoup.nodes.Element;
        public parser(): org.jsoup.parser.Parser;
        public parser(
          param0: org.jsoup.parser.Parser,
        ): org.jsoup.nodes.Document;
      }
      export module Document {
        export class OutputSettings {
          public static class: java.lang.Class<org.jsoup.nodes.Document.OutputSettings>;
          public coreCharset: org.jsoup.nodes.Entities.CoreCharset;
          public clone(): org.jsoup.nodes.Document.OutputSettings;
          public encoder(): java.nio.charset.CharsetEncoder;
          public outline(
            param0: boolean,
          ): org.jsoup.nodes.Document.OutputSettings;
          public indentAmount(
            param0: number,
          ): org.jsoup.nodes.Document.OutputSettings;
          public escapeMode(
            param0: org.jsoup.nodes.Entities.EscapeMode,
          ): org.jsoup.nodes.Document.OutputSettings;
          public prepareEncoder(): java.nio.charset.CharsetEncoder;
          public charset(
            param0: java.nio.charset.Charset,
          ): org.jsoup.nodes.Document.OutputSettings;
          public prettyPrint(): boolean;
          public escapeMode(): org.jsoup.nodes.Entities.EscapeMode;
          public outline(): boolean;
          public prettyPrint(
            param0: boolean,
          ): org.jsoup.nodes.Document.OutputSettings;
          public constructor();
          public syntax(): org.jsoup.nodes.Document.OutputSettings.Syntax;
          public charset(): java.nio.charset.Charset;
          public charset(
            param0: string,
          ): org.jsoup.nodes.Document.OutputSettings;
          public indentAmount(): number;
          public syntax(
            param0: org.jsoup.nodes.Document.OutputSettings.Syntax,
          ): org.jsoup.nodes.Document.OutputSettings;
        }
        export module OutputSettings {
          export class Syntax {
            public static class: java.lang.Class<org.jsoup.nodes.Document.OutputSettings.Syntax>;
            public static html: org.jsoup.nodes.Document.OutputSettings.Syntax;
            public static xml: org.jsoup.nodes.Document.OutputSettings.Syntax;
            public static '<clinit>'(): void;
            public static valueOf(
              param0: string,
            ): org.jsoup.nodes.Document.OutputSettings.Syntax;
            public static values(): androidNative.Array<org.jsoup.nodes.Document.OutputSettings.Syntax>;
          }
        }
        export class QuirksMode {
          public static class: java.lang.Class<org.jsoup.nodes.Document.QuirksMode>;
          public static limitedQuirks: org.jsoup.nodes.Document.QuirksMode;
          public static noQuirks: org.jsoup.nodes.Document.QuirksMode;
          public static quirks: org.jsoup.nodes.Document.QuirksMode;
          public static '<clinit>'(): void;
          public static values(): androidNative.Array<org.jsoup.nodes.Document.QuirksMode>;
          public static valueOf(
            param0: string,
          ): org.jsoup.nodes.Document.QuirksMode;
        }
      }

      export class DocumentType extends org.jsoup.nodes.LeafNode {
        public static class: java.lang.Class<org.jsoup.nodes.DocumentType>;
        public static PUBLIC_KEY: string;
        public static SYSTEM_KEY: string;
        public name(): string;
        public nodeName(): string;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public constructor(param0: string, param1: string, param2: string);
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public setPubSysKey(param0: string): void;
        public systemId(): string;
        public publicId(): string;
        public constructor();
      }

      export class Element extends org.jsoup.nodes.Node {
        public static class: java.lang.Class<org.jsoup.nodes.Element>;
        public childNodes: () => java.util.List<org.jsoup.nodes.Node>;
        public getElementsMatchingText(
          param0: string,
        ): org.jsoup.select.Elements;
        public before(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public attr(param0: string, param1: string): org.jsoup.nodes.Node;
        public getElementsByIndexEquals(
          param0: number,
        ): org.jsoup.select.Elements;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public closest(param0: string): org.jsoup.nodes.Element;
        public html(param0: java.lang.Appendable): java.lang.Appendable;
        public childrenSize(): number;
        public after(param0: string): org.jsoup.nodes.Element;
        public selectFirst(
          param0: org.jsoup.select.Evaluator,
        ): org.jsoup.nodes.Element;
        public removeClass(param0: string): org.jsoup.nodes.Element;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public select(
          param0: org.jsoup.select.Evaluator,
        ): org.jsoup.select.Elements;
        public filter(
          param0: org.jsoup.select.NodeFilter,
        ): org.jsoup.nodes.Element;
        public normalName(): string;
        public prepend(param0: string): org.jsoup.nodes.Element;
        public shallowClone(): org.jsoup.nodes.Element;
        public dataNodes(): java.util.List<org.jsoup.nodes.DataNode>;
        public wrap(param0: string): org.jsoup.nodes.Element;
        public closest(
          param0: org.jsoup.select.Evaluator,
        ): org.jsoup.nodes.Element;
        public cssSelector(): string;
        public getElementsByAttributeValueStarting(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public insertChildren(
          param0: number,
          param1: java.util.Collection<any>,
        ): org.jsoup.nodes.Element;
        public appendChild(
          param0: org.jsoup.nodes.Node,
        ): org.jsoup.nodes.Element;
        public constructor(param0: org.jsoup.parser.Tag, param1: string);
        public selectFirst(param0: string): org.jsoup.nodes.Element;
        public doSetBaseUri(param0: string): void;
        public previousElementSiblings(): org.jsoup.select.Elements;
        public nextElementSiblings(): org.jsoup.select.Elements;
        public val(): string;
        public baseUri(): string;
        public is(param0: string): boolean;
        public doClone(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public clearAttributes(): org.jsoup.nodes.Element;
        public doClone(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
        public wholeText(): string;
        public root(): org.jsoup.nodes.Node;
        public text(): string;
        public nextElementSibling(): org.jsoup.nodes.Element;
        public parent(): org.jsoup.nodes.Element;
        public getElementsByClass(param0: string): org.jsoup.select.Elements;
        public nodelistChanged(): void;
        public className(): string;
        public constructor(param0: string);
        public toggleClass(param0: string): org.jsoup.nodes.Element;
        public getElementById(param0: string): org.jsoup.nodes.Element;
        public static '<clinit>'(): void;
        public empty(): org.jsoup.nodes.Node;
        public lastElementSibling(): org.jsoup.nodes.Element;
        public prependChild(
          param0: org.jsoup.nodes.Node,
        ): org.jsoup.nodes.Element;
        public clearAttributes(): org.jsoup.nodes.Node;
        public is(param0: org.jsoup.select.Evaluator): boolean;
        public parents(): org.jsoup.select.Elements;
        public select(param0: string): org.jsoup.select.Elements;
        public ownText(): string;
        public tagName(param0: string): org.jsoup.nodes.Element;
        public getElementsMatchingText(
          param0: java.util.regex.Pattern,
        ): org.jsoup.select.Elements;
        public firstElementSibling(): org.jsoup.nodes.Element;
        public text(param0: string): org.jsoup.nodes.Element;
        public clone(): org.jsoup.nodes.Element;
        public empty(): org.jsoup.nodes.Element;
        public after(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public elementSiblingIndex(): number;
        public getElementsByAttribute(
          param0: string,
        ): org.jsoup.select.Elements;
        public textNodes(): java.util.List<org.jsoup.nodes.TextNode>;
        public getElementsByAttributeValueMatching(
          param0: string,
          param1: java.util.regex.Pattern,
        ): org.jsoup.select.Elements;
        public getElementsContainingOwnText(
          param0: string,
        ): org.jsoup.select.Elements;
        public attr(param0: string, param1: string): org.jsoup.nodes.Element;
        public clone(): org.jsoup.nodes.Node;
        public tag(): org.jsoup.parser.Tag;
        public isBlock(): boolean;
        public previousElementSibling(): org.jsoup.nodes.Element;
        public constructor();
        public appendText(param0: string): org.jsoup.nodes.Element;
        public attr(param0: string): string;
        public getElementsByTag(param0: string): org.jsoup.select.Elements;
        public constructor(
          param0: org.jsoup.parser.Tag,
          param1: string,
          param2: org.jsoup.nodes.Attributes,
        );
        public tagName(): string;
        public siblingElements(): org.jsoup.select.Elements;
        public traverse(
          param0: org.jsoup.select.NodeVisitor,
        ): org.jsoup.nodes.Node;
        public getElementsByAttributeValue(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public root(): org.jsoup.nodes.Element;
        public attributes(): org.jsoup.nodes.Attributes;
        public classNames(): java.util.Set<string>;
        public getElementsContainingText(
          param0: string,
        ): org.jsoup.select.Elements;
        public parent(): org.jsoup.nodes.Node;
        public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
        public shallowClone(): org.jsoup.nodes.Node;
        public getElementsByAttributeValueNot(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public nodeName(): string;
        public traverse(
          param0: org.jsoup.select.NodeVisitor,
        ): org.jsoup.nodes.Element;
        public getElementsByAttributeStarting(
          param0: string,
        ): org.jsoup.select.Elements;
        public appendTo(
          param0: org.jsoup.nodes.Element,
        ): org.jsoup.nodes.Element;
        public data(): string;
        public prependElement(param0: string): org.jsoup.nodes.Element;
        public getElementsMatchingOwnText(
          param0: java.util.regex.Pattern,
        ): org.jsoup.select.Elements;
        public static preserveWhitespace(param0: org.jsoup.nodes.Node): boolean;
        public after(param0: string): org.jsoup.nodes.Node;
        public before(param0: string): org.jsoup.nodes.Node;
        public removeAttr(param0: string): org.jsoup.nodes.Node;
        public getElementsByAttributeValueMatching(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public addClass(param0: string): org.jsoup.nodes.Element;
        public after(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
        public getElementsByIndexGreaterThan(
          param0: number,
        ): org.jsoup.select.Elements;
        public dataset(): java.util.Map<string, string>;
        public id(): string;
        public insertChildren(
          param0: number,
          param1: androidNative.Array<org.jsoup.nodes.Node>,
        ): org.jsoup.nodes.Element;
        public filter(
          param0: org.jsoup.select.NodeFilter,
        ): org.jsoup.nodes.Node;
        public classNames(
          param0: java.util.Set<string>,
        ): org.jsoup.nodes.Element;
        public getElementsByAttributeValueEnding(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public hasClass(param0: string): boolean;
        public removeAttr(param0: string): org.jsoup.nodes.Element;
        public hasAttributes(): boolean;
        public html(param0: string): org.jsoup.nodes.Element;
        public append(param0: string): org.jsoup.nodes.Element;
        public hasText(): boolean;
        public child(param0: number): org.jsoup.nodes.Element;
        public wrap(param0: string): org.jsoup.nodes.Node;
        public before(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Element;
        public getElementsMatchingOwnText(
          param0: string,
        ): org.jsoup.select.Elements;
        public appendElement(param0: string): org.jsoup.nodes.Element;
        public before(param0: string): org.jsoup.nodes.Element;
        public prependText(param0: string): org.jsoup.nodes.Element;
        public val(param0: string): org.jsoup.nodes.Element;
        public getAllElements(): org.jsoup.select.Elements;
        public childNodeSize(): number;
        public attr(param0: string, param1: boolean): org.jsoup.nodes.Element;
        public getElementsByIndexLessThan(
          param0: number,
        ): org.jsoup.select.Elements;
        public children(): org.jsoup.select.Elements;
        public getElementsByAttributeValueContaining(
          param0: string,
          param1: string,
        ): org.jsoup.select.Elements;
        public html(): string;
      }
      export module Element {
        export class NodeList extends org.jsoup.helper
          .ChangeNotifyingArrayList<org.jsoup.nodes.Node> {
          public static class: java.lang.Class<org.jsoup.nodes.Element.NodeList>;
          public constructor(param0: org.jsoup.nodes.Element, param1: number);
          public constructor(param0: number);
          public onContentsChanged(): void;
        }
      }

      export class Entities {
        public static class: java.lang.Class<org.jsoup.nodes.Entities>;
        public static codepointRadix: number;
        public static escape(
          param0: java.lang.Appendable,
          param1: string,
          param2: org.jsoup.nodes.Document.OutputSettings,
          param3: boolean,
          param4: boolean,
          param5: boolean,
        ): void;
        public static isNamedEntity(param0: string): boolean;
        public static '<clinit>'(): void;
        public static getByName(param0: string): string;
        public static codepointsForName(
          param0: string,
          param1: androidNative.Array<number>,
        ): number;
        public static unescape(param0: string, param1: boolean): string;
        public static escape(param0: string): string;
        public static unescape(param0: string): string;
        public static escape(
          param0: string,
          param1: org.jsoup.nodes.Document.OutputSettings,
        ): string;
        public static isBaseNamedEntity(param0: string): boolean;
      }
      export module Entities {
        export class CoreCharset {
          public static class: java.lang.Class<org.jsoup.nodes.Entities.CoreCharset>;
          public static ascii: org.jsoup.nodes.Entities.CoreCharset;
          public static fallback: org.jsoup.nodes.Entities.CoreCharset;
          public static utf: org.jsoup.nodes.Entities.CoreCharset;
          public static '<clinit>'(): void;
          public static values(): androidNative.Array<org.jsoup.nodes.Entities.CoreCharset>;
          public static valueOf(
            param0: string,
          ): org.jsoup.nodes.Entities.CoreCharset;
          public static byName(
            param0: string,
          ): org.jsoup.nodes.Entities.CoreCharset;
        }
        export class EscapeMode {
          public static class: java.lang.Class<org.jsoup.nodes.Entities.EscapeMode>;
          public static base: org.jsoup.nodes.Entities.EscapeMode;
          public static extended: org.jsoup.nodes.Entities.EscapeMode;
          public static xhtml: org.jsoup.nodes.Entities.EscapeMode;
          public static '<clinit>'(): void;
          public static values(): androidNative.Array<org.jsoup.nodes.Entities.EscapeMode>;
          public static valueOf(
            param0: string,
          ): org.jsoup.nodes.Entities.EscapeMode;
          public nameForCodepoint(param0: number): string;
          public codepointForName(param0: string): number;
        }
      }

      export class EntitiesData {
        public static class: java.lang.Class<org.jsoup.nodes.EntitiesData>;
        public static basePoints: string;
        public static fullPoints: string;
        public static xmlPoints: string;
        public constructor();
      }

      export class FormElement extends org.jsoup.nodes.Element {
        public static class: java.lang.Class<org.jsoup.nodes.FormElement>;
        public clone(): org.jsoup.nodes.Element;
        public clone(): org.jsoup.nodes.Node;
        public formData(): java.util.List<org.jsoup.Connection.KeyVal>;
        public submit(): org.jsoup.Connection;
        public constructor(
          param0: org.jsoup.parser.Tag,
          param1: string,
          param2: org.jsoup.nodes.Attributes,
        );
        public constructor(param0: org.jsoup.parser.Tag, param1: string);
        public elements(): org.jsoup.select.Elements;
        public removeChild(param0: org.jsoup.nodes.Node): void;
        public constructor(param0: string);
        public clone(): org.jsoup.nodes.FormElement;
        public constructor();
        public addElement(
          param0: org.jsoup.nodes.Element,
        ): org.jsoup.nodes.FormElement;
      }
      export abstract class LeafNode extends org.jsoup.nodes.Node {
        public static class: java.lang.Class<org.jsoup.nodes.LeafNode>;
        public value: any;
        public hasAttr(param0: string): boolean;
        public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
        public attr(param0: string, param1: string): org.jsoup.nodes.Node;
        public coreValue(): string;
        public doSetBaseUri(param0: string): void;
        public constructor();
        public hasAttributes(): boolean;
        public static '<clinit>'(): void;
        public absUrl(param0: string): string;
        public attr(param0: string): string;
        public childNodeSize(): number;
        public coreValue(param0: string): void;
        public removeAttr(param0: string): org.jsoup.nodes.Node;
        public baseUri(): string;
        public doClone(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public attributes(): org.jsoup.nodes.Attributes;
        public doClone(param0: org.jsoup.nodes.Node): org.jsoup.nodes.LeafNode;
        public empty(): org.jsoup.nodes.Node;
      }
      export abstract class Node {
        public static class: java.lang.Class<org.jsoup.nodes.Node>;
        public static EmptyString: string;
        public clone(): org.jsoup.nodes.Node;
        public before(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public outerHtml(): string;
        public siblingNodes(): java.util.List<org.jsoup.nodes.Node>;
        public attr(param0: string, param1: string): org.jsoup.nodes.Node;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public html(param0: java.lang.Appendable): java.lang.Appendable;
        public reparentChild(param0: org.jsoup.nodes.Node): void;
        public constructor();
        public hasParent(): boolean;
        public ownerDocument(): org.jsoup.nodes.Document;
        public attr(param0: string): string;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public equals(param0: any): boolean;
        public nextSibling(): org.jsoup.nodes.Node;
        public traverse(
          param0: org.jsoup.select.NodeVisitor,
        ): org.jsoup.nodes.Node;
        public attributes(): org.jsoup.nodes.Attributes;
        public setBaseUri(param0: string): void;
        public hasAttr(param0: string): boolean;
        public parent(): org.jsoup.nodes.Node;
        public ensureChildNodes(): java.util.List<org.jsoup.nodes.Node>;
        public shallowClone(): org.jsoup.nodes.Node;
        public setParentNode(param0: org.jsoup.nodes.Node): void;
        public nodeName(): string;
        public childNode(param0: number): org.jsoup.nodes.Node;
        public addChildren(
          param0: androidNative.Array<org.jsoup.nodes.Node>,
        ): void;
        public removeChild(param0: org.jsoup.nodes.Node): void;
        public toString(): string;
        public doSetBaseUri(param0: string): void;
        public unwrap(): org.jsoup.nodes.Node;
        public after(param0: string): org.jsoup.nodes.Node;
        public before(param0: string): org.jsoup.nodes.Node;
        public removeAttr(param0: string): org.jsoup.nodes.Node;
        public baseUri(): string;
        public siblingIndex(): number;
        public doClone(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public parentNode(): org.jsoup.nodes.Node;
        public filter(
          param0: org.jsoup.select.NodeFilter,
        ): org.jsoup.nodes.Node;
        public root(): org.jsoup.nodes.Node;
        public childNodesCopy(): java.util.List<org.jsoup.nodes.Node>;
        public outerHtml(param0: java.lang.Appendable): void;
        public nodelistChanged(): void;
        public replaceChild(
          param0: org.jsoup.nodes.Node,
          param1: org.jsoup.nodes.Node,
        ): void;
        public hasAttributes(): boolean;
        public absUrl(param0: string): string;
        public hasSameValue(param0: any): boolean;
        public replaceWith(param0: org.jsoup.nodes.Node): void;
        public addChildren(
          param0: number,
          param1: androidNative.Array<org.jsoup.nodes.Node>,
        ): void;
        public childNodes(): java.util.List<org.jsoup.nodes.Node>;
        public wrap(param0: string): org.jsoup.nodes.Node;
        public empty(): org.jsoup.nodes.Node;
        public clearAttributes(): org.jsoup.nodes.Node;
        public remove(): void;
        public previousSibling(): org.jsoup.nodes.Node;
        public indent(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public childNodesAsArray(): androidNative.Array<org.jsoup.nodes.Node>;
        public childNodeSize(): number;
        public after(param0: org.jsoup.nodes.Node): org.jsoup.nodes.Node;
        public setSiblingIndex(param0: number): void;
      }
      export module Node {
        export class OuterHtmlVisitor extends org.jsoup.select.NodeVisitor {
          public static class: java.lang.Class<org.jsoup.nodes.Node.OuterHtmlVisitor>;
          public constructor(
            param0: java.lang.Appendable,
            param1: org.jsoup.nodes.Document.OutputSettings,
          );
          public tail(param0: org.jsoup.nodes.Node, param1: number): void;
          public head(param0: org.jsoup.nodes.Node, param1: number): void;
        }
      }

      export class NodeUtils {
        public static class: java.lang.Class<org.jsoup.nodes.NodeUtils>;
        public static outputSettings(
          param0: org.jsoup.nodes.Node,
        ): org.jsoup.nodes.Document.OutputSettings;
        public static parser(
          param0: org.jsoup.nodes.Node,
        ): org.jsoup.parser.Parser;
        public constructor();
      }
      export class PseudoTextElement extends org.jsoup.nodes.Element {
        public static class: java.lang.Class<org.jsoup.nodes.PseudoTextElement>;
        public constructor(
          param0: org.jsoup.parser.Tag,
          param1: string,
          param2: org.jsoup.nodes.Attributes,
        );
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public constructor(param0: org.jsoup.parser.Tag, param1: string);
        public constructor(param0: string);
        public constructor();
      }

      export class TextNode extends org.jsoup.nodes.LeafNode {
        public static class: java.lang.Class<org.jsoup.nodes.TextNode>;
        public static createFromEncoded(
          param0: string,
        ): org.jsoup.nodes.TextNode;
        public static normaliseWhitespace(param0: string): string;
        public clone(): org.jsoup.nodes.Node;
        public nodeName(): string;
        public static lastCharIsWhitespace(
          param0: java.lang.StringBuilder,
        ): boolean;
        public getWholeText(): string;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public text(): string;
        public toString(): string;
        public splitText(param0: number): org.jsoup.nodes.TextNode;
        public constructor(param0: string);
        public constructor();
        public text(param0: string): org.jsoup.nodes.TextNode;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public isBlank(): boolean;
        public clone(): org.jsoup.nodes.TextNode;
        public static stripLeadingWhitespace(param0: string): string;
      }

      export class XmlDeclaration extends org.jsoup.nodes.LeafNode {
        public static class: java.lang.Class<org.jsoup.nodes.XmlDeclaration>;
        public getWholeDeclaration(): string;
        public clone(): org.jsoup.nodes.Node;
        public name(): string;
        public constructor(param0: string, param1: boolean);
        public nodeName(): string;
        public outerHtmlTail(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public outerHtmlHead(
          param0: java.lang.Appendable,
          param1: number,
          param2: org.jsoup.nodes.Document.OutputSettings,
        ): void;
        public clone(): org.jsoup.nodes.XmlDeclaration;
        public toString(): string;
        public constructor();
      }
    }

    export module parser {
      export class CharacterReader {
        public static class: java.lang.Class<org.jsoup.parser.CharacterReader>;
        public static EOF: string;
        public static maxBufferLen: number;
        public static readAheadLimit: number;
        public matchesDigit(): boolean;
        public matchesAny(param0: androidNative.Array<string>): boolean;
        public current(): string;
        public consumeTagName(): string;
        public advance(): void;
        public matches(param0: string): boolean;
        public constructor(param0: java.io.Reader);
        public constructor(param0: string);
        public consume(): string;
        public consumeData(): string;
        public containsIgnoreCase(param0: string): boolean;
        public unmark(): void;
        public consumeToAny(param0: androidNative.Array<string>): string;
        public isEmpty(): boolean;
        public matchConsume(param0: string): boolean;
        public consumeTo(param0: string): string;
        public close(): void;
        public consumeToEnd(): string;
        public consumeToAnySorted(param0: androidNative.Array<string>): string;
        public pos(): number;
        public consumeLetterSequence(): string;
        public rangeEquals(
          param0: number,
          param1: number,
          param2: string,
        ): boolean;
        public consumeDigitSequence(): string;
        public matchesIgnoreCase(param0: string): boolean;
        public matchesLetter(): boolean;
        public toString(): string;
        public nextIndexOf(param0: string): number;
        public mark(): void;
        public unconsume(): void;
        public constructor(param0: java.io.Reader, param1: number);
        public consumeHexSequence(): string;
        public consumeLetterThenDigitSequence(): string;
        public matchesAnySorted(param0: androidNative.Array<string>): boolean;
        public consumeRawData(): string;
        public matchConsumeIgnoreCase(param0: string): boolean;
        public rewindToMark(): void;
        public static rangeEquals(
          param0: androidNative.Array<string>,
          param1: number,
          param2: number,
          param3: string,
        ): boolean;
      }

      export class HtmlTreeBuilder extends org.jsoup.parser.TreeBuilder {
        public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilder>;
        public static MaxScopeSearchDepth: number;
        public static TagSearchButton: androidNative.Array<string>;
        public static TagSearchEndTags: androidNative.Array<string>;
        public static TagSearchList: androidNative.Array<string>;
        public static TagSearchSelectScope: androidNative.Array<string>;
        public static TagSearchSpecial: androidNative.Array<string>;
        public static TagSearchTableScope: androidNative.Array<string>;
        public static TagsSearchInScope: androidNative.Array<string>;
        public getHeadElement(): org.jsoup.nodes.Element;
        public getFromStack(param0: string): org.jsoup.nodes.Element;
        public insertInFosterParent(param0: org.jsoup.nodes.Node): void;
        public defaultSettings(): org.jsoup.parser.ParseSettings;
        public constructor();
        public initialiseParse(
          param0: java.io.Reader,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): void;
        public reconstructFormattingElements(): void;
        public getActiveFormattingElement(
          param0: string,
        ): org.jsoup.nodes.Element;
        public process(
          param0: org.jsoup.parser.Token,
          param1: org.jsoup.parser.HtmlTreeBuilderState,
        ): boolean;
        public originalState(): org.jsoup.parser.HtmlTreeBuilderState;
        public resetInsertionMode(): void;
        public maybeSetBaseUri(param0: org.jsoup.nodes.Element): void;
        public insertEmpty(
          param0: org.jsoup.parser.Token.StartTag,
        ): org.jsoup.nodes.Element;
        public popStackToClose(param0: androidNative.Array<string>): void;
        public setFosterInserts(param0: boolean): void;
        public insertOnStackAfter(
          param0: org.jsoup.nodes.Element,
          param1: org.jsoup.nodes.Element,
        ): void;
        public toString(): string;
        public insert(param0: org.jsoup.parser.Token.Comment): void;
        public framesetOk(): boolean;
        public getFormElement(): org.jsoup.nodes.FormElement;
        public isFosterInserts(): boolean;
        public clearStackToTableContext(): void;
        public insertStartTag(param0: string): org.jsoup.nodes.Element;
        public push(param0: org.jsoup.nodes.Element): void;
        public generateImpliedEndTags(): void;
        public replaceOnStack(
          param0: org.jsoup.nodes.Element,
          param1: org.jsoup.nodes.Element,
        ): void;
        public removeFromActiveFormattingElements(
          param0: org.jsoup.nodes.Element,
        ): void;
        public generateImpliedEndTags(param0: string): void;
        public pushActiveFormattingElements(
          param0: org.jsoup.nodes.Element,
        ): void;
        public inScope(
          param0: string,
          param1: androidNative.Array<string>,
        ): boolean;
        public error(param0: org.jsoup.parser.HtmlTreeBuilderState): void;
        public framesetOk(param0: boolean): void;
        public insert(param0: org.jsoup.nodes.Element): void;
        public markInsertionMode(): void;
        public popStackToClose(param0: string): org.jsoup.nodes.Element;
        public clearStackToTableRowContext(): void;
        public inSelectScope(param0: string): boolean;
        public insertForm(
          param0: org.jsoup.parser.Token.StartTag,
          param1: boolean,
        ): org.jsoup.nodes.FormElement;
        public popStackToBefore(param0: string): void;
        public pop(): org.jsoup.nodes.Element;
        public clearStackToTableBodyContext(): void;
        public aboveOnStack(
          param0: org.jsoup.nodes.Element,
        ): org.jsoup.nodes.Element;
        public error(param0: string): void;
        public inScope(param0: androidNative.Array<string>): boolean;
        public replaceActiveFormattingElement(
          param0: org.jsoup.nodes.Element,
          param1: org.jsoup.nodes.Element,
        ): void;
        public getStack(): java.util.ArrayList<org.jsoup.nodes.Element>;
        public process(param0: org.jsoup.parser.Token): boolean;
        public static '<clinit>'(): void;
        public insertMarkerToFormattingElements(): void;
        public newPendingTableCharacters(): void;
        public removeLastFormattingElement(): org.jsoup.nodes.Element;
        public getBaseUri(): string;
        public inListItemScope(param0: string): boolean;
        public inTableScope(param0: string): boolean;
        public isInActiveFormattingElements(
          param0: org.jsoup.nodes.Element,
        ): boolean;
        public insert(
          param0: org.jsoup.parser.Token.StartTag,
        ): org.jsoup.nodes.Element;
        public setHeadElement(param0: org.jsoup.nodes.Element): void;
        public clearFormattingElementsToLastMarker(): void;
        public transition(param0: org.jsoup.parser.HtmlTreeBuilderState): void;
        public parseFragment(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
          param3: org.jsoup.parser.Parser,
        ): java.util.List<org.jsoup.nodes.Node>;
        public inButtonScope(param0: string): boolean;
        public removeFromStack(param0: org.jsoup.nodes.Element): boolean;
        public onStack(param0: org.jsoup.nodes.Element): boolean;
        public lastFormattingElement(): org.jsoup.nodes.Element;
        public getDocument(): org.jsoup.nodes.Document;
        public isFragmentParsing(): boolean;
        public getPendingTableCharacters(): java.util.List<string>;
        public isSpecial(param0: org.jsoup.nodes.Element): boolean;
        public inScope(param0: string): boolean;
        public insert(param0: org.jsoup.parser.Token.Character): void;
        public setFormElement(param0: org.jsoup.nodes.FormElement): void;
        public state(): org.jsoup.parser.HtmlTreeBuilderState;
      }

      export abstract class HtmlTreeBuilderState {
        public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilderState>;
        public static AfterAfterBody: org.jsoup.parser.HtmlTreeBuilderState;
        public static AfterAfterFrameset: org.jsoup.parser.HtmlTreeBuilderState;
        public static AfterBody: org.jsoup.parser.HtmlTreeBuilderState;
        public static AfterFrameset: org.jsoup.parser.HtmlTreeBuilderState;
        public static AfterHead: org.jsoup.parser.HtmlTreeBuilderState;
        public static BeforeHead: org.jsoup.parser.HtmlTreeBuilderState;
        public static BeforeHtml: org.jsoup.parser.HtmlTreeBuilderState;
        public static ForeignContent: org.jsoup.parser.HtmlTreeBuilderState;
        public static InBody: org.jsoup.parser.HtmlTreeBuilderState;
        public static InCaption: org.jsoup.parser.HtmlTreeBuilderState;
        public static InCell: org.jsoup.parser.HtmlTreeBuilderState;
        public static InColumnGroup: org.jsoup.parser.HtmlTreeBuilderState;
        public static InFrameset: org.jsoup.parser.HtmlTreeBuilderState;
        public static InHead: org.jsoup.parser.HtmlTreeBuilderState;
        public static InHeadNoscript: org.jsoup.parser.HtmlTreeBuilderState;
        public static InRow: org.jsoup.parser.HtmlTreeBuilderState;
        public static InSelect: org.jsoup.parser.HtmlTreeBuilderState;
        public static InSelectInTable: org.jsoup.parser.HtmlTreeBuilderState;
        public static InTable: org.jsoup.parser.HtmlTreeBuilderState;
        public static InTableBody: org.jsoup.parser.HtmlTreeBuilderState;
        public static InTableText: org.jsoup.parser.HtmlTreeBuilderState;
        public static Initial: org.jsoup.parser.HtmlTreeBuilderState;
        public static Text: org.jsoup.parser.HtmlTreeBuilderState;
        public static valueOf(
          param0: string,
        ): org.jsoup.parser.HtmlTreeBuilderState;
        public static '<clinit>'(): void;
        public process(
          param0: org.jsoup.parser.Token,
          param1: org.jsoup.parser.HtmlTreeBuilder,
        ): boolean;
        public static values(): androidNative.Array<org.jsoup.parser.HtmlTreeBuilderState>;
      }
      export module HtmlTreeBuilderState {
        export class Constants {
          public static class: java.lang.Class<org.jsoup.parser.HtmlTreeBuilderState.Constants>;
          public static AfterHeadBody: androidNative.Array<string>;
          public static BeforeHtmlToHead: androidNative.Array<string>;
          public static DdDt: androidNative.Array<string>;
          public static Formatters: androidNative.Array<string>;
          public static Headings: androidNative.Array<string>;
          public static InBodyEndAdoptionFormatters: androidNative.Array<string>;
          public static InBodyEndClosers: androidNative.Array<string>;
          public static InBodyEndTableFosters: androidNative.Array<string>;
          public static InBodyStartApplets: androidNative.Array<string>;
          public static InBodyStartDrop: androidNative.Array<string>;
          public static InBodyStartEmptyFormatters: androidNative.Array<string>;
          public static InBodyStartInputAttribs: androidNative.Array<string>;
          public static InBodyStartLiBreakers: androidNative.Array<string>;
          public static InBodyStartMedia: androidNative.Array<string>;
          public static InBodyStartPClosers: androidNative.Array<string>;
          public static InBodyStartToHead: androidNative.Array<string>;
          public static InCaptionIgnore: androidNative.Array<string>;
          public static InCellBody: androidNative.Array<string>;
          public static InCellCol: androidNative.Array<string>;
          public static InCellNames: androidNative.Array<string>;
          public static InCellTable: androidNative.Array<string>;
          public static InHeadEmpty: androidNative.Array<string>;
          public static InHeadEnd: androidNative.Array<string>;
          public static InHeadNoScriptHead: androidNative.Array<string>;
          public static InHeadNoscriptIgnore: androidNative.Array<string>;
          public static InHeadRaw: androidNative.Array<string>;
          public static InRowIgnore: androidNative.Array<string>;
          public static InRowMissing: androidNative.Array<string>;
          public static InSelecTableEnd: androidNative.Array<string>;
          public static InSelectEnd: androidNative.Array<string>;
          public static InTableAddBody: androidNative.Array<string>;
          public static InTableBodyEndIgnore: androidNative.Array<string>;
          public static InTableBodyExit: androidNative.Array<string>;
          public static InTableEndErr: androidNative.Array<string>;
          public static InTableEndIgnore: androidNative.Array<string>;
          public static InTableFoster: androidNative.Array<string>;
          public static InTableToBody: androidNative.Array<string>;
          public static InTableToHead: androidNative.Array<string>;
          public static '<clinit>'(): void;
          public constructor();
        }
      }

      export class ParseError {
        public static class: java.lang.Class<org.jsoup.parser.ParseError>;
        public getErrorMessage(): string;
        public constructor(param0: number, param1: string);
        public getPosition(): number;
        public constructor(
          param0: number,
          param1: string,
          param2: androidNative.Array<any>,
        );
        public toString(): string;
      }

      export class ParseErrorList extends java.util
        .ArrayList<org.jsoup.parser.ParseError> {
        public static class: java.lang.Class<org.jsoup.parser.ParseErrorList>;
        public constructor(param0: number, param1: number);
        public static tracking(param0: number): org.jsoup.parser.ParseErrorList;
        public canAddError(): boolean;
        public getMaxSize(): number;
        public static noTracking(): org.jsoup.parser.ParseErrorList;
      }

      export class ParseSettings {
        public static class: java.lang.Class<org.jsoup.parser.ParseSettings>;
        public static htmlDefault: org.jsoup.parser.ParseSettings;
        public static preserveCase: org.jsoup.parser.ParseSettings;
        public constructor(param0: boolean, param1: boolean);
        public preserveTagCase(): boolean;
        public static '<clinit>'(): void;
        public preserveAttributeCase(): boolean;
        public normalizeAttribute(param0: string): string;
        public normalizeAttributes(
          param0: org.jsoup.nodes.Attributes,
        ): org.jsoup.nodes.Attributes;
        public normalizeTag(param0: string): string;
      }

      export class Parser {
        public static class: java.lang.Class<org.jsoup.parser.Parser>;
        public static parse(
          param0: string,
          param1: string,
        ): org.jsoup.nodes.Document;
        public parseInput(
          param0: string,
          param1: string,
        ): org.jsoup.nodes.Document;
        public parseFragmentInput(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
        ): java.util.List<org.jsoup.nodes.Node>;
        public settings(): org.jsoup.parser.ParseSettings;
        public getTreeBuilder(): org.jsoup.parser.TreeBuilder;
        public isTrackErrors(): boolean;
        public setTrackErrors(param0: number): org.jsoup.parser.Parser;
        public settings(
          param0: org.jsoup.parser.ParseSettings,
        ): org.jsoup.parser.Parser;
        public static htmlParser(): org.jsoup.parser.Parser;
        public static parseXmlFragment(
          param0: string,
          param1: string,
        ): java.util.List<org.jsoup.nodes.Node>;
        public getErrors(): org.jsoup.parser.ParseErrorList;
        public static parseFragment(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
        ): java.util.List<org.jsoup.nodes.Node>;
        public static parseBodyFragment(
          param0: string,
          param1: string,
        ): org.jsoup.nodes.Document;
        public static parseFragment(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
          param3: org.jsoup.parser.ParseErrorList,
        ): java.util.List<org.jsoup.nodes.Node>;
        public setTreeBuilder(
          param0: org.jsoup.parser.TreeBuilder,
        ): org.jsoup.parser.Parser;
        public constructor(param0: org.jsoup.parser.TreeBuilder);
        public static unescapeEntities(param0: string, param1: boolean): string;
        public static xmlParser(): org.jsoup.parser.Parser;
        public parseInput(
          param0: java.io.Reader,
          param1: string,
        ): org.jsoup.nodes.Document;
      }

      export class Tag {
        public static class: java.lang.Class<org.jsoup.parser.Tag>;
        public formatAsBlock(): boolean;
        public isInline(): boolean;
        public isKnownTag(): boolean;
        public static isKnownTag(param0: string): boolean;
        public preserveWhitespace(): boolean;
        public getName(): string;
        public isBlock(): boolean;
        public toString(): string;
        public isSelfClosing(): boolean;
        public static valueOf(param0: string): org.jsoup.parser.Tag;
        public isFormListed(): boolean;
        public static '<clinit>'(): void;
        public static valueOf(
          param0: string,
          param1: org.jsoup.parser.ParseSettings,
        ): org.jsoup.parser.Tag;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public isEmpty(): boolean;
        public normalName(): string;
        public setSelfClosing(): org.jsoup.parser.Tag;
        public clone(): org.jsoup.parser.Tag;
        public isFormSubmittable(): boolean;
      }

      export abstract class Token {
        public static class: java.lang.Class<org.jsoup.parser.Token>;
        public type: org.jsoup.parser.Token.TokenType;
        public isDoctype(): boolean;
        public isCharacter(): boolean;
        public tokenType(): string;
        public static reset(param0: java.lang.StringBuilder): void;
        public asComment(): org.jsoup.parser.Token.Comment;
        public asStartTag(): org.jsoup.parser.Token.StartTag;
        public isEOF(): boolean;
        public reset(): org.jsoup.parser.Token;
        public isCData(): boolean;
        public isComment(): boolean;
        public isStartTag(): boolean;
        public asDoctype(): org.jsoup.parser.Token.Doctype;
        public asEndTag(): org.jsoup.parser.Token.EndTag;
        public isEndTag(): boolean;
        public asCharacter(): org.jsoup.parser.Token.Character;
      }
      export module Token {
        export class CData extends org.jsoup.parser.Token.Character {
          public static class: java.lang.Class<org.jsoup.parser.Token.CData>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
        }
        export class Character extends org.jsoup.parser.Token {
          public static class: java.lang.Class<org.jsoup.parser.Token.Character>;
          public getData(): string;
          public toString(): string;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public data(param0: string): org.jsoup.parser.Token.Character;
          public static reset(param0: java.lang.StringBuilder): void;
        }
        export class Comment extends org.jsoup.parser.Token {
          public static class: java.lang.Class<org.jsoup.parser.Token.Comment>;
          public bogus: boolean;
          public getData(): string;
          public toString(): string;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public append(param0: string): org.jsoup.parser.Token.Comment;
          public static reset(param0: java.lang.StringBuilder): void;
        }
        export class Doctype extends org.jsoup.parser.Token {
          public static class: java.lang.Class<org.jsoup.parser.Token.Doctype>;
          public forceQuirks: boolean;
          public name: java.lang.StringBuilder;
          public pubSysKey: string;
          public publicIdentifier: java.lang.StringBuilder;
          public systemIdentifier: java.lang.StringBuilder;
          public isForceQuirks(): boolean;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public getName(): string;
          public getSystemIdentifier(): string;
          public static reset(param0: java.lang.StringBuilder): void;
          public getPubSysKey(): string;
          public getPublicIdentifier(): string;
        }
        export class EOF extends org.jsoup.parser.Token {
          public static class: java.lang.Class<org.jsoup.parser.Token.EOF>;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public static reset(param0: java.lang.StringBuilder): void;
        }
        export class EndTag extends org.jsoup.parser.Token.Tag {
          public static class: java.lang.Class<org.jsoup.parser.Token.EndTag>;
          public toString(): string;
          public constructor();
        }
        export class StartTag extends org.jsoup.parser.Token.Tag {
          public static class: java.lang.Class<org.jsoup.parser.Token.StartTag>;
          public toString(): string;
          public reset(): org.jsoup.parser.Token.Tag;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public static reset(param0: java.lang.StringBuilder): void;
          public nameAttr(
            param0: string,
            param1: org.jsoup.nodes.Attributes,
          ): org.jsoup.parser.Token.StartTag;
        }
        export abstract class Tag extends org.jsoup.parser.Token {
          public static class: java.lang.Class<org.jsoup.parser.Token.Tag>;
          public attributes: org.jsoup.nodes.Attributes;
          public selfClosing: boolean;
          public tagName: string;
          public name(): string;
          public reset(): org.jsoup.parser.Token.Tag;
          public appendAttributeValue(param0: string): void;
          public getAttributes(): org.jsoup.nodes.Attributes;
          public appendAttributeValue(
            param0: androidNative.Array<number>,
          ): void;
          public finaliseTag(): void;
          public static reset(param0: java.lang.StringBuilder): void;
          public reset(): org.jsoup.parser.Token;
          public constructor();
          public setEmptyAttributeValue(): void;
          public appendAttributeName(param0: string): void;
          public name(param0: string): org.jsoup.parser.Token.Tag;
          public newAttribute(): void;
          public appendAttributeValue(
            param0: androidNative.Array<string>,
          ): void;
          public isSelfClosing(): boolean;
          public appendTagName(param0: string): void;
          public normalName(): string;
        }
        export class TokenType {
          public static class: java.lang.Class<org.jsoup.parser.Token.TokenType>;
          public static Character: org.jsoup.parser.Token.TokenType;
          public static Comment: org.jsoup.parser.Token.TokenType;
          public static Doctype: org.jsoup.parser.Token.TokenType;
          public static EOF: org.jsoup.parser.Token.TokenType;
          public static EndTag: org.jsoup.parser.Token.TokenType;
          public static StartTag: org.jsoup.parser.Token.TokenType;
          public static '<clinit>'(): void;
          public static valueOf(
            param0: string,
          ): org.jsoup.parser.Token.TokenType;
          public static values(): androidNative.Array<org.jsoup.parser.Token.TokenType>;
        }
      }

      export class TokenQueue {
        public static class: java.lang.Class<org.jsoup.parser.TokenQueue>;
        public peek(): string;
        public matchesAny(param0: androidNative.Array<string>): boolean;
        public remainder(): string;
        public consumeTagName(): string;
        public advance(): void;
        public matches(param0: string): boolean;
        public chompTo(param0: string): string;
        public consumeWord(): string;
        public constructor(param0: string);
        public consumeWhitespace(): boolean;
        public matchesWord(): boolean;
        public consume(): string;
        public consumeAttributeKey(): string;
        public matchesStartTag(): boolean;
        public matchesWhitespace(): boolean;
        public consumeToAny(param0: androidNative.Array<string>): string;
        public isEmpty(): boolean;
        public consumeTo(param0: string): string;
        public consumeCssIdentifier(): string;
        public consumeToIgnoreCase(param0: string): string;
        public matchChomp(param0: string): boolean;
        public matchesCS(param0: string): boolean;
        public chompToIgnoreCase(param0: string): string;
        public static unescape(param0: string): string;
        public toString(): string;
        public addFirst(param0: java.lang.Character): void;
        public consume(param0: string): void;
        public addFirst(param0: string): void;
        public consumeElementSelector(): string;
        public chompBalanced(param0: string, param1: string): string;
      }

      export class Tokeniser {
        public static class: java.lang.Class<org.jsoup.parser.Tokeniser>;
        public static replacementChar: string;
        public static win1252Extensions: androidNative.Array<number>;
        public static win1252ExtensionsStart: number;
        public charPending: org.jsoup.parser.Token.Character;
        public commentPending: org.jsoup.parser.Token.Comment;
        public dataBuffer: java.lang.StringBuilder;
        public doctypePending: org.jsoup.parser.Token.Doctype;
        public endPending: org.jsoup.parser.Token.EndTag;
        public startPending: org.jsoup.parser.Token.StartTag;
        public tagPending: org.jsoup.parser.Token.Tag;
        public emitCommentPending(): void;
        public getState(): org.jsoup.parser.TokeniserState;
        public transition(param0: org.jsoup.parser.TokeniserState): void;
        public read(): org.jsoup.parser.Token;
        public error(param0: string): void;
        public error(param0: org.jsoup.parser.TokeniserState): void;
        public appropriateEndTagName(): string;
        public emit(param0: androidNative.Array<string>): void;
        public emitDoctypePending(): void;
        public createBogusCommentPending(): void;
        public createTempBuffer(): void;
        public static '<clinit>'(): void;
        public currentNodeInHtmlNS(): boolean;
        public emitTagPending(): void;
        public isAppropriateEndTagToken(): boolean;
        public emit(param0: org.jsoup.parser.Token): void;
        public createDoctypePending(): void;
        public advanceTransition(param0: org.jsoup.parser.TokeniserState): void;
        public createCommentPending(): void;
        public consumeCharacterReference(
          param0: java.lang.Character,
          param1: boolean,
        ): androidNative.Array<number>;
        public emit(param0: string): void;
        public eofError(param0: org.jsoup.parser.TokeniserState): void;
        public constructor(
          param0: org.jsoup.parser.CharacterReader,
          param1: org.jsoup.parser.ParseErrorList,
        );
        public createTagPending(param0: boolean): org.jsoup.parser.Token.Tag;
        public emit(param0: androidNative.Array<number>): void;
        public unescapeEntities(param0: boolean): string;
      }
      export abstract class TokeniserState {
        public static class: java.lang.Class<org.jsoup.parser.TokeniserState>;
        public static AfterAttributeName: org.jsoup.parser.TokeniserState;
        public static AfterAttributeValue_quoted: org.jsoup.parser.TokeniserState;
        public static AfterDoctypeName: org.jsoup.parser.TokeniserState;
        public static AfterDoctypePublicIdentifier: org.jsoup.parser.TokeniserState;
        public static AfterDoctypePublicKeyword: org.jsoup.parser.TokeniserState;
        public static AfterDoctypeSystemIdentifier: org.jsoup.parser.TokeniserState;
        public static AfterDoctypeSystemKeyword: org.jsoup.parser.TokeniserState;
        public static AttributeName: org.jsoup.parser.TokeniserState;
        public static AttributeValue_doubleQuoted: org.jsoup.parser.TokeniserState;
        public static AttributeValue_singleQuoted: org.jsoup.parser.TokeniserState;
        public static AttributeValue_unquoted: org.jsoup.parser.TokeniserState;
        public static BeforeAttributeName: org.jsoup.parser.TokeniserState;
        public static BeforeAttributeValue: org.jsoup.parser.TokeniserState;
        public static BeforeDoctypeName: org.jsoup.parser.TokeniserState;
        public static BeforeDoctypePublicIdentifier: org.jsoup.parser.TokeniserState;
        public static BeforeDoctypeSystemIdentifier: org.jsoup.parser.TokeniserState;
        public static BetweenDoctypePublicAndSystemIdentifiers: org.jsoup.parser.TokeniserState;
        public static BogusComment: org.jsoup.parser.TokeniserState;
        public static BogusDoctype: org.jsoup.parser.TokeniserState;
        public static CdataSection: org.jsoup.parser.TokeniserState;
        public static CharacterReferenceInData: org.jsoup.parser.TokeniserState;
        public static CharacterReferenceInRcdata: org.jsoup.parser.TokeniserState;
        public static Comment: org.jsoup.parser.TokeniserState;
        public static CommentEnd: org.jsoup.parser.TokeniserState;
        public static CommentEndBang: org.jsoup.parser.TokeniserState;
        public static CommentEndDash: org.jsoup.parser.TokeniserState;
        public static CommentStart: org.jsoup.parser.TokeniserState;
        public static CommentStartDash: org.jsoup.parser.TokeniserState;
        public static Data: org.jsoup.parser.TokeniserState;
        public static Doctype: org.jsoup.parser.TokeniserState;
        public static DoctypeName: org.jsoup.parser.TokeniserState;
        public static DoctypePublicIdentifier_doubleQuoted: org.jsoup.parser.TokeniserState;
        public static DoctypePublicIdentifier_singleQuoted: org.jsoup.parser.TokeniserState;
        public static DoctypeSystemIdentifier_doubleQuoted: org.jsoup.parser.TokeniserState;
        public static DoctypeSystemIdentifier_singleQuoted: org.jsoup.parser.TokeniserState;
        public static EndTagOpen: org.jsoup.parser.TokeniserState;
        public static MarkupDeclarationOpen: org.jsoup.parser.TokeniserState;
        public static PLAINTEXT: org.jsoup.parser.TokeniserState;
        public static RCDATAEndTagName: org.jsoup.parser.TokeniserState;
        public static RCDATAEndTagOpen: org.jsoup.parser.TokeniserState;
        public static Rawtext: org.jsoup.parser.TokeniserState;
        public static RawtextEndTagName: org.jsoup.parser.TokeniserState;
        public static RawtextEndTagOpen: org.jsoup.parser.TokeniserState;
        public static RawtextLessthanSign: org.jsoup.parser.TokeniserState;
        public static Rcdata: org.jsoup.parser.TokeniserState;
        public static RcdataLessthanSign: org.jsoup.parser.TokeniserState;
        public static ScriptData: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscapeEnd: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscapeStart: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscaped: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscapedDash: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscapedDashDash: org.jsoup.parser.TokeniserState;
        public static ScriptDataDoubleEscapedLessthanSign: org.jsoup.parser.TokeniserState;
        public static ScriptDataEndTagName: org.jsoup.parser.TokeniserState;
        public static ScriptDataEndTagOpen: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapeStart: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapeStartDash: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscaped: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapedDash: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapedDashDash: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapedEndTagName: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapedEndTagOpen: org.jsoup.parser.TokeniserState;
        public static ScriptDataEscapedLessthanSign: org.jsoup.parser.TokeniserState;
        public static ScriptDataLessthanSign: org.jsoup.parser.TokeniserState;
        public static SelfClosingStartTag: org.jsoup.parser.TokeniserState;
        public static TagName: org.jsoup.parser.TokeniserState;
        public static TagOpen: org.jsoup.parser.TokeniserState;
        public static attributeDoubleValueCharsSorted: androidNative.Array<string>;
        public static attributeNameCharsSorted: androidNative.Array<string>;
        public static attributeSingleValueCharsSorted: androidNative.Array<string>;
        public static attributeValueUnquoted: androidNative.Array<string>;
        public static nullChar: string;
        public static '<clinit>'(): void;
        public static values(): androidNative.Array<org.jsoup.parser.TokeniserState>;
        public static valueOf(param0: string): org.jsoup.parser.TokeniserState;
        public read(
          param0: org.jsoup.parser.Tokeniser,
          param1: org.jsoup.parser.CharacterReader,
        ): void;
      }
      export abstract class TreeBuilder {
        public static class: java.lang.Class<org.jsoup.parser.TreeBuilder>;
        public baseUri: string;
        public currentToken: org.jsoup.parser.Token;
        public doc: org.jsoup.nodes.Document;
        public parser: org.jsoup.parser.Parser;
        public reader: org.jsoup.parser.CharacterReader;
        public settings: org.jsoup.parser.ParseSettings;
        public stack: java.util.ArrayList<org.jsoup.nodes.Element>;
        public tokeniser: org.jsoup.parser.Tokeniser;
        public process(param0: org.jsoup.parser.Token): boolean;
        public initialiseParse(
          param0: java.io.Reader,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): void;
        public parse(
          param0: java.io.Reader,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): org.jsoup.nodes.Document;
        public error(param0: string): void;
        public processStartTag(
          param0: string,
          param1: org.jsoup.nodes.Attributes,
        ): boolean;
        public currentElement(): org.jsoup.nodes.Element;
        public parseFragment(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
          param3: org.jsoup.parser.Parser,
        ): java.util.List<org.jsoup.nodes.Node>;
        public processEndTag(param0: string): boolean;
        public defaultSettings(): org.jsoup.parser.ParseSettings;
        public processStartTag(param0: string): boolean;
        public runParser(): void;
        public constructor();
      }

      export class XmlTreeBuilder extends org.jsoup.parser.TreeBuilder {
        public static class: java.lang.Class<org.jsoup.parser.XmlTreeBuilder>;
        public parseFragment(
          param0: string,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): java.util.List<org.jsoup.nodes.Node>;
        public insert(
          param0: org.jsoup.parser.Token.StartTag,
        ): org.jsoup.nodes.Element;
        public parseFragment(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: string,
          param3: org.jsoup.parser.Parser,
        ): java.util.List<org.jsoup.nodes.Node>;
        public insert(param0: org.jsoup.parser.Token.Comment): void;
        public defaultSettings(): org.jsoup.parser.ParseSettings;
        public constructor();
        public process(param0: org.jsoup.parser.Token): boolean;
        public parse(
          param0: java.io.Reader,
          param1: string,
        ): org.jsoup.nodes.Document;
        public insert(param0: org.jsoup.parser.Token.Doctype): void;
        public initialiseParse(
          param0: java.io.Reader,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): void;
        public parse(param0: string, param1: string): org.jsoup.nodes.Document;
        public parse(
          param0: java.io.Reader,
          param1: string,
          param2: org.jsoup.parser.Parser,
        ): org.jsoup.nodes.Document;
        public insert(param0: org.jsoup.parser.Token.Character): void;
      }
    }

    export module safety {
      export class Cleaner {
        public static class: java.lang.Class<org.jsoup.safety.Cleaner>;
        public clean(
          param0: org.jsoup.nodes.Document,
        ): org.jsoup.nodes.Document;
        public constructor(param0: org.jsoup.safety.Whitelist);
        public isValid(param0: org.jsoup.nodes.Document): boolean;
        public isValidBodyHtml(param0: string): boolean;
      }
      export module Cleaner {
        export class CleaningVisitor extends org.jsoup.select.NodeVisitor {
          public static class: java.lang.Class<org.jsoup.safety.Cleaner.CleaningVisitor>;
          public tail(param0: org.jsoup.nodes.Node, param1: number): void;
          public head(param0: org.jsoup.nodes.Node, param1: number): void;
        }
        export class ElementMeta {
          public static class: java.lang.Class<org.jsoup.safety.Cleaner.ElementMeta>;
          public el: org.jsoup.nodes.Element;
          public numAttribsDiscarded: number;
          public constructor(param0: org.jsoup.nodes.Element, param1: number);
        }
      }

      export class Whitelist {
        public static class: java.lang.Class<org.jsoup.safety.Whitelist>;
        public isSafeTag(param0: string): boolean;
        public addProtocols(
          param0: string,
          param1: string,
          param2: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
        public removeTags(
          param0: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
        public static basic(): org.jsoup.safety.Whitelist;
        public static relaxed(): org.jsoup.safety.Whitelist;
        public removeProtocols(
          param0: string,
          param1: string,
          param2: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
        public constructor();
        public getEnforcedAttributes(
          param0: string,
        ): org.jsoup.nodes.Attributes;
        public static simpleText(): org.jsoup.safety.Whitelist;
        public preserveRelativeLinks(
          param0: boolean,
        ): org.jsoup.safety.Whitelist;
        public static basicWithImages(): org.jsoup.safety.Whitelist;
        public removeAttributes(
          param0: string,
          param1: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
        public addEnforcedAttribute(
          param0: string,
          param1: string,
          param2: string,
        ): org.jsoup.safety.Whitelist;
        public removeEnforcedAttribute(
          param0: string,
          param1: string,
        ): org.jsoup.safety.Whitelist;
        public addAttributes(
          param0: string,
          param1: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
        public static none(): org.jsoup.safety.Whitelist;
        public isSafeAttribute(
          param0: string,
          param1: org.jsoup.nodes.Element,
          param2: org.jsoup.nodes.Attribute,
        ): boolean;
        public addTags(
          param0: androidNative.Array<string>,
        ): org.jsoup.safety.Whitelist;
      }
      export module Whitelist {
        export class AttributeKey extends org.jsoup.safety.Whitelist
          .TypedValue {
          public static class: java.lang.Class<org.jsoup.safety.Whitelist.AttributeKey>;
          public constructor(param0: string);
          public static valueOf(
            param0: string,
          ): org.jsoup.safety.Whitelist.AttributeKey;
        }
        export class AttributeValue extends org.jsoup.safety.Whitelist
          .TypedValue {
          public static class: java.lang.Class<org.jsoup.safety.Whitelist.AttributeValue>;
          public constructor(param0: string);
          public static valueOf(
            param0: string,
          ): org.jsoup.safety.Whitelist.AttributeValue;
        }
        export class Protocol extends org.jsoup.safety.Whitelist.TypedValue {
          public static class: java.lang.Class<org.jsoup.safety.Whitelist.Protocol>;
          public constructor(param0: string);
          public static valueOf(
            param0: string,
          ): org.jsoup.safety.Whitelist.Protocol;
        }
        export class TagName extends org.jsoup.safety.Whitelist.TypedValue {
          public static class: java.lang.Class<org.jsoup.safety.Whitelist.TagName>;
          public static valueOf(
            param0: string,
          ): org.jsoup.safety.Whitelist.TagName;
          public constructor(param0: string);
        }
        export abstract class TypedValue {
          public static class: java.lang.Class<org.jsoup.safety.Whitelist.TypedValue>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string);
          public hashCode(): number;
        }
      }
    }

    export module select {
      export class Collector {
        public static class: java.lang.Class<org.jsoup.select.Collector>;
        public static findFirst(
          param0: org.jsoup.select.Evaluator,
          param1: org.jsoup.nodes.Element,
        ): org.jsoup.nodes.Element;
        public static collect(
          param0: org.jsoup.select.Evaluator,
          param1: org.jsoup.nodes.Element,
        ): org.jsoup.select.Elements;
      }
      export module Collector {
        export class Accumulator extends org.jsoup.select.NodeVisitor {
          public static class: java.lang.Class<org.jsoup.select.Collector.Accumulator>;
          public tail(param0: org.jsoup.nodes.Node, param1: number): void;
          public constructor(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.select.Elements,
            param2: org.jsoup.select.Evaluator,
          );
          public head(param0: org.jsoup.nodes.Node, param1: number): void;
        }
        export class FirstFinder extends org.jsoup.select.NodeFilter {
          public static class: java.lang.Class<org.jsoup.select.Collector.FirstFinder>;
          public head(
            param0: org.jsoup.nodes.Node,
            param1: number,
          ): org.jsoup.select.NodeFilter.FilterResult;
          public constructor(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.select.Evaluator,
          );
          public tail(
            param0: org.jsoup.nodes.Node,
            param1: number,
          ): org.jsoup.select.NodeFilter.FilterResult;
        }
      }

      export abstract class CombiningEvaluator extends org.jsoup.select
        .Evaluator {
        public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator>;
        public evaluators: java.util.ArrayList<org.jsoup.select.Evaluator>;
        public num: number;
        public constructor(
          param0: java.util.Collection<org.jsoup.select.Evaluator>,
        );
        public updateNumEvaluators(): void;
        public rightMostEvaluator(): org.jsoup.select.Evaluator;
        public replaceRightMostEvaluator(
          param0: org.jsoup.select.Evaluator,
        ): void;
        public constructor();
      }
      export module CombiningEvaluator {
        export class And extends org.jsoup.select.CombiningEvaluator {
          public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator.And>;
          public constructor(
            param0: androidNative.Array<org.jsoup.select.Evaluator>,
          );
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(
            param0: java.util.Collection<org.jsoup.select.Evaluator>,
          );
        }
        export class Or extends org.jsoup.select.CombiningEvaluator {
          public static class: java.lang.Class<org.jsoup.select.CombiningEvaluator.Or>;
          public constructor(
            param0: androidNative.Array<org.jsoup.select.Evaluator>,
          );
          public toString(): string;
          public add(param0: org.jsoup.select.Evaluator): void;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(
            param0: java.util.Collection<org.jsoup.select.Evaluator>,
          );
        }
      }

      export class Elements extends java.util
        .ArrayList<org.jsoup.nodes.Element> {
        public static class: java.lang.Class<org.jsoup.select.Elements>;
        public next(): org.jsoup.select.Elements;
        public outerHtml(): string;
        public val(param0: string): org.jsoup.select.Elements;
        public append(param0: string): org.jsoup.select.Elements;
        public constructor();
        public constructor(
          param0: java.util.Collection<org.jsoup.nodes.Element>,
        );
        public attr(param0: string): string;
        public prepend(param0: string): org.jsoup.select.Elements;
        public html(param0: string): org.jsoup.select.Elements;
        public nextAll(param0: string): org.jsoup.select.Elements;
        public dataNodes(): java.util.List<org.jsoup.nodes.DataNode>;
        public wrap(param0: string): org.jsoup.select.Elements;
        public hasAttr(param0: string): boolean;
        public last(): org.jsoup.nodes.Element;
        public constructor(param0: java.util.List<org.jsoup.nodes.Element>);
        public tagName(param0: string): org.jsoup.select.Elements;
        public traverse(
          param0: org.jsoup.select.NodeVisitor,
        ): org.jsoup.select.Elements;
        public after(param0: string): org.jsoup.select.Elements;
        public forms(): java.util.List<org.jsoup.nodes.FormElement>;
        public toString(): string;
        public unwrap(): org.jsoup.select.Elements;
        public prevAll(param0: string): org.jsoup.select.Elements;
        public val(): string;
        public not(param0: string): org.jsoup.select.Elements;
        public empty(): org.jsoup.select.Elements;
        public is(param0: string): boolean;
        public prevAll(): org.jsoup.select.Elements;
        public text(): string;
        public before(param0: string): org.jsoup.select.Elements;
        public hasClass(param0: string): boolean;
        public removeAttr(param0: string): org.jsoup.select.Elements;
        public addClass(param0: string): org.jsoup.select.Elements;
        public prev(param0: string): org.jsoup.select.Elements;
        public eq(param0: number): org.jsoup.select.Elements;
        public remove(): any;
        public prev(): org.jsoup.select.Elements;
        public toggleClass(param0: string): org.jsoup.select.Elements;
        public clone(): org.jsoup.select.Elements;
        public eachText(): java.util.List<string>;
        public hasText(): boolean;
        public comments(): java.util.List<org.jsoup.nodes.Comment>;
        public nextAll(): org.jsoup.select.Elements;
        public first(): org.jsoup.nodes.Element;
        public next(param0: string): org.jsoup.select.Elements;
        public parents(): org.jsoup.select.Elements;
        public select(param0: string): org.jsoup.select.Elements;
        public constructor(
          param0: androidNative.Array<org.jsoup.nodes.Element>,
        );
        public attr(param0: string, param1: string): org.jsoup.select.Elements;
        public constructor(param0: number);
        public removeClass(param0: string): org.jsoup.select.Elements;
        public filter(
          param0: org.jsoup.select.NodeFilter,
        ): org.jsoup.select.Elements;
        public eachAttr(param0: string): java.util.List<string>;
        public textNodes(): java.util.List<org.jsoup.nodes.TextNode>;
        public html(): string;
      }
      export abstract class Evaluator {
        public static class: java.lang.Class<org.jsoup.select.Evaluator>;
        public matches(
          param0: org.jsoup.nodes.Element,
          param1: org.jsoup.nodes.Element,
        ): boolean;
        public constructor();
      }
      export module Evaluator {
        export class AllElements extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AllElements>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class Attribute extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.Attribute>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export abstract class AttributeKeyPair extends org.jsoup.select
          .Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeKeyPair>;
          public key: string;
          public value: string;
          public constructor(param0: string, param1: string);
          public constructor();
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class AttributeStarting extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeStarting>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class AttributeWithValue extends org.jsoup.select.Evaluator
          .AttributeKeyPair {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValue>;
          public constructor(param0: string, param1: string);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class AttributeWithValueContaining extends org.jsoup.select
          .Evaluator.AttributeKeyPair {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueContaining>;
          public constructor(param0: string, param1: string);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class AttributeWithValueEnding extends org.jsoup.select.Evaluator
          .AttributeKeyPair {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueEnding>;
          public constructor(param0: string, param1: string);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class AttributeWithValueMatching extends org.jsoup.select
          .Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueMatching>;
          public key: string;
          public pattern: java.util.regex.Pattern;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: java.util.regex.Pattern);
        }
        export class AttributeWithValueNot extends org.jsoup.select.Evaluator
          .AttributeKeyPair {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueNot>;
          public constructor(param0: string, param1: string);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class AttributeWithValueStarting extends org.jsoup.select
          .Evaluator.AttributeKeyPair {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.AttributeWithValueStarting>;
          public constructor(param0: string, param1: string);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: string, param1: string, param2: boolean);
        }
        export class Class extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.Class>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class ContainsData extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsData>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class ContainsOwnText extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsOwnText>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class ContainsText extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.ContainsText>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export abstract class CssNthEvaluator extends org.jsoup.select
          .Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.CssNthEvaluator>;
          public a: number;
          public b: number;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public calculatePosition(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getPseudoClass(): string;
        }
        export class Id extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.Id>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IndexEquals extends org.jsoup.select.Evaluator
          .IndexEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexEquals>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: number);
        }
        export abstract class IndexEvaluator extends org.jsoup.select
          .Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexEvaluator>;
          public index: number;
          public constructor();
          public constructor(param0: number);
        }
        export class IndexGreaterThan extends org.jsoup.select.Evaluator
          .IndexEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexGreaterThan>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: number);
        }
        export class IndexLessThan extends org.jsoup.select.Evaluator
          .IndexEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IndexLessThan>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: number);
        }
        export class IsEmpty extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsEmpty>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IsFirstChild extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsFirstChild>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IsFirstOfType extends org.jsoup.select.Evaluator
          .IsNthOfType {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsFirstOfType>;
          public toString(): string;
          public constructor();
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
        }
        export class IsLastChild extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsLastChild>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IsLastOfType extends org.jsoup.select.Evaluator
          .IsNthLastOfType {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsLastOfType>;
          public toString(): string;
          public constructor();
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
        }
        export class IsNthChild extends org.jsoup.select.Evaluator
          .CssNthEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthChild>;
          public constructor();
          public calculatePosition(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getPseudoClass(): string;
        }
        export class IsNthLastChild extends org.jsoup.select.Evaluator
          .CssNthEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthLastChild>;
          public constructor();
          public calculatePosition(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getPseudoClass(): string;
        }
        export class IsNthLastOfType extends org.jsoup.select.Evaluator
          .CssNthEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthLastOfType>;
          public constructor();
          public calculatePosition(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getPseudoClass(): string;
        }
        export class IsNthOfType extends org.jsoup.select.Evaluator
          .CssNthEvaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsNthOfType>;
          public constructor();
          public calculatePosition(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): number;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public getPseudoClass(): string;
        }
        export class IsOnlyChild extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsOnlyChild>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IsOnlyOfType extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsOnlyOfType>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class IsRoot extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.IsRoot>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class MatchText extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.MatchText>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class Matches extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.Matches>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: java.util.regex.Pattern);
        }
        export class MatchesOwn extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.MatchesOwn>;
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
          public constructor(param0: java.util.regex.Pattern);
        }
        export class Tag extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.Tag>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class TagEndsWith extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.Evaluator.TagEndsWith>;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
      }
      export class NodeFilter {
        public static class: java.lang.Class<org.jsoup.select.NodeFilter>;
        /**
         * Constructs a new instance of the org.jsoup.select.NodeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          head(
            param0: org.jsoup.nodes.Node,
            param1: number,
          ): org.jsoup.select.NodeFilter.FilterResult;
          tail(
            param0: org.jsoup.nodes.Node,
            param1: number,
          ): org.jsoup.select.NodeFilter.FilterResult;
        });
        public constructor();
        public head(
          param0: org.jsoup.nodes.Node,
          param1: number,
        ): org.jsoup.select.NodeFilter.FilterResult;
        public tail(
          param0: org.jsoup.nodes.Node,
          param1: number,
        ): org.jsoup.select.NodeFilter.FilterResult;
      }
      export module NodeFilter {
        export class FilterResult {
          public static class: java.lang.Class<org.jsoup.select.NodeFilter.FilterResult>;
          public static CONTINUE: org.jsoup.select.NodeFilter.FilterResult;
          public static REMOVE: org.jsoup.select.NodeFilter.FilterResult;
          public static SKIP_CHILDREN: org.jsoup.select.NodeFilter.FilterResult;
          public static SKIP_ENTIRELY: org.jsoup.select.NodeFilter.FilterResult;
          public static STOP: org.jsoup.select.NodeFilter.FilterResult;
          public static '<clinit>'(): void;
          public static valueOf(
            param0: string,
          ): org.jsoup.select.NodeFilter.FilterResult;
          public static values(): androidNative.Array<org.jsoup.select.NodeFilter.FilterResult>;
        }
      }
      export class NodeTraversor {
        public static class: java.lang.Class<org.jsoup.select.NodeTraversor>;
        public static filter(
          param0: org.jsoup.select.NodeFilter,
          param1: org.jsoup.select.Elements,
        ): void;
        public static traverse(
          param0: org.jsoup.select.NodeVisitor,
          param1: org.jsoup.select.Elements,
        ): void;
        public static filter(
          param0: org.jsoup.select.NodeFilter,
          param1: org.jsoup.nodes.Node,
        ): org.jsoup.select.NodeFilter.FilterResult;
        public static traverse(
          param0: org.jsoup.select.NodeVisitor,
          param1: org.jsoup.nodes.Node,
        ): void;
        public constructor();
      }
      export class NodeVisitor {
        public static class: java.lang.Class<org.jsoup.select.NodeVisitor>;
        /**
         * Constructs a new instance of the org.jsoup.select.NodeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          head(param0: org.jsoup.nodes.Node, param1: number): void;
          tail(param0: org.jsoup.nodes.Node, param1: number): void;
        });
        public constructor();
        public tail(param0: org.jsoup.nodes.Node, param1: number): void;
        public head(param0: org.jsoup.nodes.Node, param1: number): void;
      }
      export class QueryParser {
        public static class: java.lang.Class<org.jsoup.select.QueryParser>;
        public static '<clinit>'(): void;
        public parse(): org.jsoup.select.Evaluator;
        public static parse(param0: string): org.jsoup.select.Evaluator;
      }
      export class Selector {
        public static class: java.lang.Class<org.jsoup.select.Selector>;
        public static select(
          param0: string,
          param1: org.jsoup.nodes.Element,
        ): org.jsoup.select.Elements;
        public static select(
          param0: string,
          param1: java.lang.Iterable<org.jsoup.nodes.Element>,
        ): org.jsoup.select.Elements;
        public static selectFirst(
          param0: string,
          param1: org.jsoup.nodes.Element,
        ): org.jsoup.nodes.Element;
        public static select(
          param0: org.jsoup.select.Evaluator,
          param1: org.jsoup.nodes.Element,
        ): org.jsoup.select.Elements;
        public static filterOut(
          param0: java.util.Collection<org.jsoup.nodes.Element>,
          param1: java.util.Collection<org.jsoup.nodes.Element>,
        ): org.jsoup.select.Elements;
      }
      export module Selector {
        export class SelectorParseException {
          public static class: java.lang.Class<org.jsoup.select.Selector.SelectorParseException>;
          public constructor(param0: string, param1: androidNative.Array<any>);
        }
      }
      export abstract class StructuralEvaluator extends org.jsoup.select
        .Evaluator {
        public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator>;
        public evaluator: org.jsoup.select.Evaluator;
        public constructor();
      }
      export module StructuralEvaluator {
        export class Has extends org.jsoup.select.StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Has>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class ImmediateParent extends org.jsoup.select
          .StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.ImmediateParent>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class ImmediatePreviousSibling extends org.jsoup.select
          .StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.ImmediatePreviousSibling>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class Not extends org.jsoup.select.StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Not>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class Parent extends org.jsoup.select.StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Parent>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class PreviousSibling extends org.jsoup.select
          .StructuralEvaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.PreviousSibling>;
          public constructor(param0: org.jsoup.select.Evaluator);
          public toString(): string;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
        export class Root extends org.jsoup.select.Evaluator {
          public static class: java.lang.Class<org.jsoup.select.StructuralEvaluator.Root>;
          public constructor();
          public matches(
            param0: org.jsoup.nodes.Element,
            param1: org.jsoup.nodes.Element,
          ): boolean;
        }
      }
    }
  }
}
