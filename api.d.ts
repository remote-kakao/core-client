/// <reference path="android-declarations.d.ts"/>

declare const importPackage: (...pkgs: Any[]) => void;
declare const importClass: (...pkgs: Any[]) => void;

declare interface Message {
	room: string;
	msg: string;
	sender: string;
	isGroupChat: boolean;
	imageDB: {
		getProfileBase64(): string;
	};
	packageName: string;
	userId: number;
}

declare namespace Log {
	export function d(data: string, showToast?: boolean): void;
	export function debug(data: string, showToast?: boolean): void;
	export function e(data: string, showToast?: boolean): void;
	export function error(data: string, showToast?: boolean): void;
	export function i(data: string, showToast?: boolean): void;
	export function info(data: string, showToast?: boolean): void;
	export function clear(): void;
}

declare namespace Api {
	export function getContext(): android.content.Context;
	export function reload(): boolean;
	export function reload(scriptName: string, throwOnError: boolean): boolean;
	export function compile(): boolean;
	export function compile(scriptName: string, throwOnError: boolean): boolean;
	export function prepare(scriptName: string): number;
	export function unload(scriptName: string): boolean;
	export function off(): boolean;
	export function off(scriptName: string): boolean;
	export function on(): boolean;
	export function on(scriptName: string): boolean;
	export function isOn(scriptName: string): boolean;
	export function isCompiled(scriptName: string): boolean;
	export function isCompiling(scriptName: string): boolean;
	export function getScriptNames(): string[];
	export function replyRoom(
		room: string,
		message: string,
		hideToast?: boolean,
	): boolean;
	export function canReply(room: string): boolean;
	export function showToast(content: string, length: number): void;
	export function makeNoti(
		title: string,
		content: string,
		id: number,
	): string[];
	export function papagoTranslate(
		sourceLanguage: string,
		targetLanguage: string,
		content: string,
		errorToString?: boolean,
	): string;
	export function gc(): void;
	export function UIThread(func: Function, onComplete: Function): void;
	export function getActiveThreadsCount(scriptName: string): number;
	export function interruptThreads(scriptName: string): void;
	export function isTerminated(scriptName: string): boolean;
	export function markAsRead(room?: string, packageName?: string): boolean;
}

declare namespace FileStream {
	export function read(path: string): string;
	export function write(path: string, data: string): string;
	export function append(path: string, data: string): string;
	export function remove(path: string): boolean;
}

declare namespace Device {
	export function acquireWakeLock(param1: number, param2: string): void;
}

declare const require: (module: string) => Any;
