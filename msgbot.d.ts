/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module xfl {
		export module msgbot {
			export module application {
				export module service {
					export class NotificationListener {
						public static NOTIFICATION_ID: number;
						public static NOTIFICATION_PENDING_INTENT: number;
						public onNotificationPosted(
							param0: globalAndroid.service.notification.StatusBarNotification,
						): void;
						public constructor();
						public onCreate(): void;
						public onStartCommand(
							param0: globalAndroid.content.Intent,
							param1: number,
							param2: number,
						): number;
					}
					export module NotificationListener {
						export class Companion {
							public constructor();
							public static getSessionByRoom(
								param0: string,
							): globalAndroid.app.Notification.Action;
							public static getMarkAsReadInAllPackages(
								param0: string,
							): java.util.HashMap<
								string,
								globalAndroid.app.Notification.Action
							>;
							public static getMarkAsRead(
								param0: string,
								param1: string,
							): globalAndroid.app.Notification.Action;
							public static getRooms(param0: string): java.util.List<string>;
							public static hasSessionAnyPackage(param0: string): boolean;
							public static resetSession(): void;
							public static setMarkAsRead(
								param0: string,
								param1: string,
								param2: globalAndroid.app.Notification.Action,
							): void;
							public static updateNotification(
								param0: globalAndroid.content.Context,
								param1: java.util.List<string>,
							): void;
							public static setSession(
								param0: string,
								param1: string,
								param2: globalAndroid.app.Notification.Action,
							): void;
							public constructor(param0: Any);
							public static hasSession(param0: string, param1: string): boolean;
							public static getSession(
								param0: string,
								param1: string,
							): globalAndroid.app.Notification.Action;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module xfl {
		export module msgbot {
			export module script {
				export class SessionManager {
					public static class: java.lang.Class<com.xfl.msgbot.script.SessionManager>;
					public setPackageName(param0: string): void;
					public bindSession(
						param0: string,
						param1: globalAndroid.app.Notification.Action,
					): boolean;
					public getMarkAsReadAction(): globalAndroid.app.Notification.Action;
					public setReplyAction(
						param0: globalAndroid.app.Notification.Action,
					): void;
					public setRoom(param0: string): void;
					public constructor(param0: string);
					public bindMarkAsRead(
						param0: string,
						param1: globalAndroid.app.Notification.Action,
					): boolean;
					public bindSession(param0: string): boolean;
					public getPackageName(): string;
					public getRoom(): string;
					public bindMarkAsRead(param0: string): boolean;
					public setMarkAsReadAction(
						param0: globalAndroid.app.Notification.Action,
					): void;
					public bindSession(param0: string, param1: string): boolean;
					public getReplyAction(): globalAndroid.app.Notification.Action;
					public bindSession(
						param0: string,
						param1: string,
						param2: globalAndroid.app.Notification.Action,
					): boolean;
				}
				export module api {
					export class ArgumentResolver {
						public constructor();
					}
					export module ArgumentResolver {
						export class Companion {
							public getDefault(param0: Any, param1: Any): Any;
						}
					}
					export module compat {
						export class AppData {
							public constructor();
							public static putInt(param0: string, param1: number): void;
							public static remove(param0: string): void;
							public getClassName(): string;
							public static getBoolean(
								param0: string,
								param1: boolean,
							): boolean;
							public static putBoolean(param0: string, param1: boolean): void;
							public static clear(): void;
							public static getInt(
								param0: string,
								param1: number,
							): java.lang.Integer;
							public static putString(param0: string, param1: string): void;

							public static getString(param0: string, param1: string): string;
						}
						export module AppData {
							export class Companion {
								public clear(): void;
								public getString(param0: string, param1: string): string;
								public putInt(param0: string, param1: number): void;
								public putString(param0: string, param1: string): void;
								public getBoolean(param0: string, param1: boolean): boolean;
								public remove(param0: string): void;
								public getInt(
									param0: string,
									param1: number,
								): java.lang.Integer;
								public putBoolean(param0: string, param1: boolean): void;
							}
						}

						export class Device {
							public getFreeMemory(): java.lang.Long;
							public toString(): string;
							public getTotalMemory(): java.lang.Long;
							public constructor(
								param0: org.mozilla.javascript.ScriptableObject,
							);
							public acquireWakeLock(
								param0: Any,
								param1: Any,
								param2: Any,
							): void;
							public getWifiName(): string;
							public releaseWakeLock(param0: Any): void;
							public isScreenOn(): boolean;
							public getClassName(): string;
							public getPlugType(): string;
							public getPhoneBrand(): string;
							public getBuild(): Any;
							public getBatteryVoltage(): number;
							public getBatteryIntent(): globalAndroid.content.Intent;
							public getBatteryHealth(): number;
							public getBatteryLevel(): number;
							public getAndroidVersionCode(): number;
							public getBatteryTemperature(): number;
							public getFreeStorageSpace(param0: Any): java.lang.Long;
							public isCharging(): boolean;
							public getPhoneModel(): string;
							public getAndroidVersionName(): string;
							public getBatteryStatus(): number;
							public isPowerSaveMode(): boolean;
							public getTotalStorageSpace(param0: Any): java.lang.Long;
						}

						export class FileStream {
							public constructor();
							public getClassName(): string;
							public static read(param0: string): string;
							public static remove(param0: string): boolean;
							public static append(param0: string, param1: string): string;
							public static write(param0: string, param1: string): string;
							public static create(param0: string): java.lang.Boolean;
						}
						export module FileStream {
							export class Companion {
								public create(param0: string): java.lang.Boolean;
								public remove(param0: string): boolean;
								public write(param0: string, param1: string): string;
								public read(param0: string): string;
								public append(param0: string, param1: string): string;
							}
						}
						export class GlobalLog {
							public constructor(
								param0: org.mozilla.javascript.ScriptableObject,
							);
							public e(param0: string, param1: boolean): void;
							public getClassName(): string;
							public debug(param0: string, param1: boolean): void;
							public d(param0: string, param1: boolean): void;
							public error(param0: string, param1: boolean): void;
							public clear(): void;
							public toString(): string;
							public info(param0: string, param1: boolean): void;
							public i(param0: string, param1: boolean): void;
						}
						export class Log {
							public d(param0: string, param1: java.lang.Boolean): void;
							public debug(param0: string, param1: java.lang.Boolean): void;
							public getClassName(): string;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public info(param0: string, param1: java.lang.Boolean): void;
							public clear(): void;
							public error(param0: string, param1: java.lang.Boolean): void;
							public toString(): string;
							public i(param0: string, param1: java.lang.Boolean): void;
							public e(param0: string, param1: java.lang.Boolean): void;
						}
						export class MsgBot {
							public clearTimeout(param0: Any): void;
							public getClassName(): string;
							public setTimeout(
								param0: org.mozilla.javascript.Function,
								param1: number,
								param2: Any,
							): number;
							public setInterval(
								param0: org.mozilla.javascript.Function,
								param1: number,
								param2: Any,
							): number;
							public clearInterval(param0: Any): void;
							public toast(param0: string, param1: number): void;
							public constructor(
								param0: org.mozilla.javascript.Context,
								param1: java.lang.Boolean,
								param2: string,
							);
							public toString(): string;
							public repeat(param0: Any, param1: number, param2: Any): Any;
						}
					}
					export module legacy {
						export class Api {
							public makeNoti(
								param0: string,
								param1: string,
								param2: java.lang.Integer,
							): boolean;
							public replyRoom(
								param0: string,
								param1: string,
								param2: boolean,
							): boolean;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public prepare(param0: Any, param1: java.lang.Boolean): number;
							public compile(param0: Any, param1: java.lang.Boolean): boolean;
							public off(param0: Any): boolean;
							public toString(): string;
							public unload(param0: Any): boolean;
							public getClassName(): string;
							public getScriptNames(): org.mozilla.javascript.Scriptable;
							public interruptThreads(
								param0: Any,
							): org.mozilla.javascript.Scriptable;
							public UIThread(
								param0: org.mozilla.javascript.Function,
								param1: org.mozilla.javascript.Function,
							): void;
							public isCompiling(param0: Any): boolean;
							public getActiveThreadsCount(param0: Any): number;
							public isCompiled(param0: Any): boolean;
							public getContext(): globalAndroid.content.Context;
							public markAsRead(param0: string, param1: Any): boolean;
							public papagoTranslate(
								param0: string,
								param1: string,
								param2: string,
								param3: java.lang.Boolean,
							): string;
							public reload(param0: Any, param1: java.lang.Boolean): boolean;
							public gc(): void;
							public isTerminated(param0: Any): boolean;
							public canReply(param0: string): boolean;
							public showToast(param0: string, param1: number): void;
							public isOn(param0: Any): boolean;
							public on(param0: Any): boolean;
						}
						export class Bridge {
							public constructor();
							public getClassName(): string;
							public static isAllowed(param0: string): boolean;

							public static getScopeOf(
								param0: string,
							): org.mozilla.javascript.ScriptableObject;
						}
						export module Bridge {
							export class Companion {
								public getScopeOf(
									param0: string,
								): org.mozilla.javascript.ScriptableObject;
								public isAllowed(param0: string): boolean;
							}
						}
						export class DataBase {
							public getClassName(): string;
							public removeDataBase(param0: string): boolean;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public getDataBase(param0: string): string;
							public setDataBase(param0: string, param1: string): string;
							public appendDataBase(param0: string, param1: string): string;
						}
						export class ImageDB {
							public getImageHash(): number;
							public getProfileSHA(): string;
							public getProfilePic(): globalAndroid.graphics.Bitmap;
							public getAttachedImage(): globalAndroid.graphics.Bitmap;
							public constructor(
								param0: globalAndroid.graphics.Bitmap,
								param1: globalAndroid.graphics.Bitmap,
							);
							public getImage(): string;
							public getImageBitmap(): globalAndroid.graphics.Bitmap;
							public getProfileBitmap(): globalAndroid.graphics.Bitmap;
							public getProfileHash(): number;
							public getProfileImage(): string;
							public getImageMD5(): string;
							public getProfileBase64(): string;
							public getProfileMD5(): string;
							public toSource(): string;
							public getImageSHA(): string;
							public getImageBase64(): string;
						}
						export class LegacyScriptManager {
							public constructor();
						}
						export module LegacyScriptManager {
							export class Companion {
								public initializeScript(
									param0: string,
									param1: boolean,
									param2: boolean,
									param3: globalAndroid.app.Activity,
								): Any;
								public callResponder(
									param0: string,
									param1: string,
									param2: string,
									param3: string,
									param4: boolean,
									param5: com.xfl.msgbot.script.api.legacy.ImageDB,
									param6: string,
									param7: globalAndroid.app.Notification.Action,
									param8: boolean,
								): void;
								public callOnNotificationPosted(
									param0: string,
									param1: globalAndroid.service.notification.StatusBarNotification,
									param2: com.xfl.msgbot.script.SessionManager,
								): void;
							}
						}
						export class SessionCacheReplier {
							public reply(
								param0: string,
								param1: string,
								param2: boolean,
							): boolean;
							public replyDelayed(param0: string, param1: java.lang.Long): void;
							public markAsRead(): boolean;
							public markAsRead(param0: string): boolean;
							public replyDelayed(
								param0: string,
								param1: string,
								param2: java.lang.Long,
							): boolean;
							public constructor(param0: string, param1: string);
							public reply(param0: string): void;
							public replyDelayed(
								param0: string,
								param1: string,
								param2: java.lang.Long,
								param3: boolean,
							): boolean;
							public toString(): string;
							public reply(param0: string, param1: string): boolean;
							public markAsRead(param0: string, param1: string): boolean;
							public constructor(
								param0: string,
								param1: globalAndroid.app.Notification.Action,
								param2: string,
								param3: boolean,
								param4: string,
							);
						}
						export class Test {
							public getClassName(): string;
							public constructor(param0: string);
							public toString(): string;
							public go(): string;
						}
						export class Utils {
							public isUndefined(param0: Any): boolean;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public parse(param0: string): org.jsoup.nodes.Document;
							public toString(): string;
							public measureTimeMillis(
								param0: org.mozilla.javascript.Function,
							): Any;
							public xmlToJson(param0: string, param1: Any): string;
							public getAndroidVersionCode(): number;
							public measureNanoTime(
								param0: org.mozilla.javascript.Function,
							): Any;
							public getClassName(): string;
							public getPhoneModel(): string;
							public getAndroidVersionName(): string;
							public getPhoneBrand(): string;
							public getRandomUserAgent(): string;
							public getWebText(param0: string): string;
						}
					}
					export module modern {
						export class App {
							public getClassName(): string;
							public getContext(): globalAndroid.content.Context;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public runOnUiThread(
								param0: org.mozilla.javascript.Function,
								param1: org.mozilla.javascript.Function,
							): void;
						}
						export class Bot {
							public getOneTimeListenersMap(): java.util.HashMap<
								string,
								java.util.LinkedList<org.mozilla.javascript.Function>
							>;
							public off(param0: string, param1: Any): void;
							public setCommandPrefix(param0: string): void;
							public send(param0: string, param1: string, param2: Any): boolean;
							public compile(): void;
							public listeners(param0: Any): org.mozilla.javascript.Scriptable;
							public markAsRead(param0: string, param1: Any): boolean;
							public unload(): void;
							public removeAllListeners(param0: Any): void;
							public canReply(param0: string, param1: Any): boolean;
							public prependListener(
								param0: string,
								param1: org.mozilla.javascript.Function,
							): void;
							public removeListener(param0: string, param1: Any): void;
							public setPower(param0: boolean): void;
							public addListener(
								param0: string,
								param1: org.mozilla.javascript.Function,
							): void;
							public getClassName(): string;
							public getRootPath(): string;
							public on(
								param0: string,
								param1: org.mozilla.javascript.Function,
							): void;
							public constructor(
								param0: java.io.File,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public getCommandPrefix(): string;
							public getName(): string;
							public getPower(): boolean;
							public getListenersMap(): java.util.HashMap<
								string,
								java.util.LinkedList<org.mozilla.javascript.Function>
							>;
						}
						export class BotManager {
							public getPower(param0: string): boolean;
							public setPower(param0: string, param1: boolean): void;
							public getBot(param0: string): Any;
							public getBotList(): org.mozilla.javascript.Scriptable;
							public getCurrentBot(): com.xfl.msgbot.script.api.modern.Bot;
							public prepare(param0: string, param1: boolean): number;
							public getRooms(param0: Any): org.mozilla.javascript.Scriptable;
							public unload(param0: string): void;
							public compileAll(): void;
							public prepareAll(param0: java.lang.Boolean): number;
							public constructor(
								param0: string,
								param1: com.xfl.msgbot.script.api.modern.Bot,
								param2: org.mozilla.javascript.ScriptableObject,
							);
							public isCompiled(param0: string): boolean;
							public getClassName(): string;
							public compile(
								param0: string,
								param1: java.lang.Boolean,
							): boolean;
						}
						export class Broadcast {
							public getClassName(): string;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public send(param0: string, param1: Any): void;

							public unregister(
								param0: string,
								param1: org.mozilla.javascript.Function,
							): void;
							public register(
								param0: string,
								param1: org.mozilla.javascript.Function,
							): void;
							public unregisterAll(): void;
						}
						export module Broadcast {
							export class Companion {
								public destroy(param0: string): void;
							}
						}
						export class Database {
							public writeObject(
								param0: string,
								param1: org.mozilla.javascript.Scriptable,
							): void;
							public writeString(param0: string, param1: string): void;
							public getClassName(): string;
							public readString(param0: string): string;
							public readObject(
								param0: string,
							): org.mozilla.javascript.Scriptable;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public getScriptName(): string;
							public exists(param0: string): boolean;
						}
						export class Event {
							public static COMMAND: string;
							public static MESSAGE: string;
							public static NOTIFICATION_POSTED: string;
							public static START_COMPILE: string;
							public static TICK: string;
							public constructor(
								param0: org.mozilla.javascript.ScriptableObject,
							);
							public getClassName(): string;
						}
						export module Event {
							export class Activity {
								public static BACK_PRESSED: string;
								public static CREATE: string;
								public static DESTROY: string;
								public static PAUSE: string;
								public static RESTART: string;
								public static RESUME: string;
								public static START: string;
								public static STOP: string;

								public constructor(
									param0: org.mozilla.javascript.ScriptableObject,
								);
								public getClassName(): string;
							}
							export module Activity {
								export class Companion {}
							}
							export class Companion {}
						}
						export class Http {
							public request(
								param0: Any,
								param1: org.mozilla.javascript.Function,
							): void;
							public getClassName(): string;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public requestSync(param0: Any): org.jsoup.nodes.Document;
						}
						export class Image {
							public constructor(
								param0: globalAndroid.graphics.Bitmap,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public getClassName(): string;
							public getBase64(): string;
							public toString(): string;
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public toSource(): string;
						}
						export class Message {
							public reply(param0: string): boolean;
							public markAsRead(): boolean;
							public setContent(param0: string): void;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public isDebugRoom(): boolean;
							public setImage(
								param0: com.xfl.msgbot.script.api.modern.Image,
							): void;
							public getAuthor(): com.xfl.msgbot.script.api.modern.User;
							public getRoom(): string;
							public setPackageName(param0: string): void;
							public setAuthor(
								param0: com.xfl.msgbot.script.api.modern.User,
							): void;
							public setRoom(param0: string): void;
							public setMention(param0: boolean): void;
							public getImage(): com.xfl.msgbot.script.api.modern.Image;
							public getContent(): string;
							public getClassName(): string;
							public isMention(): boolean;
							public getPackageName(): string;
							public isGroupChat(): boolean;
							public setGroupChat(param0: boolean): void;
							public setDebugRoom(param0: boolean): void;
						}
						export class NativeUtils {
							public initPrototypeId(param0: number): void;
							public getClassName(): string;
							public constructor(param0: string);
							public findPrototypeId(param0: string): number;
							public execIdCall(
								param0: org.mozilla.javascript.IdFunctionObject,
								param1: org.mozilla.javascript.Context,
								param2: org.mozilla.javascript.Scriptable,
								param3: org.mozilla.javascript.Scriptable,
								param4: androidNative.Array<Any>,
							): Any;
						}
						export module NativeUtils {
							export class Companion {
								public init(
									param0: string,
									param1: org.mozilla.javascript.Scriptable,
									param2: boolean,
								): void;
							}
						}
						export class ScriptManager {
							public constructor();
						}
						export module ScriptManager {
							export class Companion {
								public callResponder(
									param0: string,
									param1: string,
									param2: string,
									param3: string,
									param4: boolean,
									param5: com.xfl.msgbot.script.api.legacy.ImageDB,
									param6: string,
									param7: boolean,
									param8: boolean,
								): void;
								public getBots(): java.util.HashMap<
									string,
									com.xfl.msgbot.script.api.modern.Bot
								>;
								public initializeScript(
									param0: string,
									param1: boolean,
									param2: boolean,
									param3: globalAndroid.app.Activity,
								): Any;
								public callOnNotificationPosted(
									param0: string,
									param1: globalAndroid.service.notification.StatusBarNotification,
									param2: com.xfl.msgbot.script.SessionManager,
								): void;
							}
						}
						export class ScriptTimer {
							public getID(): number;
							public constructor(param0: string);
							public cancel(param0: string, param1: Any): Any;

							public constructor(param0: number);
						}
						export module ScriptTimer {
							export class Companion {}
						}
						export class Security {
							public desEncode(param0: string, param1: string): string;
							public aesDecode(
								param0: string,
								param1: string,
								param2: string,
							): string;
							public sha256(param0: string): string;
							public constructor(
								param0: string,
								param1: org.mozilla.javascript.ScriptableObject,
							);
							public base32Decode(param0: string): string;
							public ariaDecode(param0: string, param1: string): string;
							public rc4Encode(param0: string, param1: string): string;
							public sha3_512(param0: string): string;
							public desDecode(param0: string, param1: string): string;
							public base64Encode(param0: string): string;
							public getClassName(): string;
							public eccKey(param0: string): org.mozilla.javascript.Scriptable;
							public md2(param0: string): string;
							public hashCode(param0: string): number;
							public sha3_224(param0: string): string;
							public ariaEncode(param0: string, param1: string): string;
							public sha(param0: string): string;
							public sha3_256(param0: string): string;
							public des3Decode(param0: string, param1: string): string;
							public seedEncode(param0: string, param1: string): string;
							public base64Decode(param0: string): string;
							public desKey(): string;
							public seedDecode(param0: string, param1: string): string;
							public aesEncode(
								param0: string,
								param1: string,
								param2: string,
							): string;
							public des3Encode(param0: string, param1: string): string;
							public sha512(param0: string): string;
							public eccDecode(param0: string, param1: string): string;
							public sha384(param0: string): string;
							public rc4Decode(param0: string, param1: string): string;
							public base32Encode(param0: string): string;
							public md5(param0: string): string;
							public sha3_384(param0: string): string;
							public eccEncode(param0: string, param1: string): string;
						}
						export class User {
							public getClassName(): string;
							public toString(): string;
							public toSource(): string;
							public constructor(
								param0: string,
								param1: com.xfl.msgbot.script.api.modern.Image,
								param2: org.mozilla.javascript.ScriptableObject,
							);
						}
					}
				}
			}
		}
	}
}
