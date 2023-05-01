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
			export module utils {
				export module SharedVar {
					export class Companion {
						public constructor();
						public static getBotsPath(): string;
						public constructor(param0: Any);
						public static setBaseFile(param0: java.io.File): void;
						public static getBaseFile(): java.io.File;
						public static getGlobalModulesFolder(): java.io.File;
						public static getBabelModulesFolder(): java.io.File;
						public static getMSGBOT_PRIVATE_AGENT(): string;
						public static setGlobalModulesFolder(param0: java.io.File): void;
						public static getMSGBOT_AGENT(): string;
						public static getDefaultMessengers(): androidNative.Array<string>;
					}
				}
			}
		}
	}
}
