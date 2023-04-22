/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class AstRoot extends org.mozilla.javascript.ast.ScriptNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.AstRoot>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public toSource(): string;
					public debugPrint(): string;
					public toSource(param0: number): string;
					public visitComments(
						param0: org.mozilla.javascript.ast.NodeVisitor,
					): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public addComment(param0: org.mozilla.javascript.ast.Comment): void;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public setComments(
						param0: java.util.SortedSet<org.mozilla.javascript.ast.Comment>,
					): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public getComments(): java.util.SortedSet<org.mozilla.javascript.ast.Comment>;
					public visitAll(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(param0: number);
					public checkParentLinks(): void;
					public constructor(param0: number, param1: number);
				}
				export abstract class AstNode
					extends org.mozilla.javascript.Node
					implements java.lang.Comparable<org.mozilla.javascript.ast.AstNode>
				{
					public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode>;
					public inlineComment: org.mozilla.javascript.ast.AstNode;
					public length: number;
					public parent: org.mozilla.javascript.ast.AstNode;
					public position: number;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public hasSideEffects(): boolean;
					public getLineno(): number;
					public setBounds(param0: number, param1: number): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public addChild(param0: org.mozilla.javascript.ast.AstNode): void;
					public getAbsolutePosition(): number;
					public makeIndent(param0: number): string;
					public getLength(): number;
					public static codeBug(): java.lang.RuntimeException;
					public shortName(): string;
					public setPosition(param0: number): void;
					public setInlineComment(
						param0: org.mozilla.javascript.ast.AstNode,
					): void;
					public static operatorToString(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public compareTo(param0: org.mozilla.javascript.ast.AstNode): number;
					public setParent(param0: org.mozilla.javascript.ast.AstNode): void;
					public depth(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public static "<clinit>"(): void;
					public getParent(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public printList(
						param0: java.util.List<Any>,
						param1: java.lang.StringBuilder,
					): void;
					public setRelative(param0: number): void;
					public assertNotNull(param0: Any): void;
					public debugPrint(): string;
					public setLength(param0: number): void;
					public toSource(param0: number): string;
					public getEnclosingFunction(): org.mozilla.javascript.ast.FunctionNode;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getInlineComment(): org.mozilla.javascript.ast.AstNode;
					public getAstRoot(): org.mozilla.javascript.ast.AstRoot;
					public getEnclosingScope(): org.mozilla.javascript.ast.Scope;
					public getPosition(): number;
				}
				export module AstNode {
					export class DebugPrintVisitor extends org.mozilla.javascript.ast
						.NodeVisitor {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.DebugPrintVisitor>;
						public constructor(param0: java.lang.StringBuilder);
						public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
						public toString(): string;
					}
					export class PositionComparator extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.PositionComparator>;
						public constructor();
						public compare(
							param0: org.mozilla.javascript.ast.AstNode,
							param1: org.mozilla.javascript.ast.AstNode,
						): number;
					}
				}
				export class Comment extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Comment>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setValue(param0: string): void;
					public constructor(
						param0: number,
						param1: number,
						param2: org.mozilla.javascript.Token.CommentType,
						param3: string,
					);
					public toSource(param0: number): string;
					public getCommentType(): org.mozilla.javascript.Token.CommentType;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getValue(): string;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public setCommentType(
						param0: org.mozilla.javascript.Token.CommentType,
					): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class FunctionNode extends org.mozilla.javascript.ast
					.ScriptNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionNode>;
					public static ARROW_FUNCTION: number;
					public static FUNCTION_EXPRESSION: number;
					public static FUNCTION_EXPRESSION_STATEMENT: number;
					public static FUNCTION_STATEMENT: number;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public setParens(param0: number, param1: number): void;
					public getResumptionPoints(): java.util.List<org.mozilla.javascript.Node>;
					public addResumptionPoint(param0: org.mozilla.javascript.Node): void;
					public isES6Generator(): boolean;
					public setRequiresActivation(): void;
					public isGetterMethod(): boolean;
					public getFunctionType(): number;
					public isExpressionClosure(): boolean;
					public setFunctionType(param0: number): void;
					public setIsES6Generator(): void;
					public getLiveLocals(): java.util.Map<
						org.mozilla.javascript.Node,
						androidNative.Array<number>
					>;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public getRp(): number;
					public setIsExpressionClosure(param0: boolean): void;
					public constructor(param0: number, param1: number);
					public static "<clinit>"(): void;
					public addFunction(
						param0: org.mozilla.javascript.ast.FunctionNode,
					): number;
					public toSource(): string;
					public addLiveLocals(
						param0: org.mozilla.javascript.Node,
						param1: androidNative.Array<number>,
					): void;
					public getParams(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public setBody(param0: org.mozilla.javascript.ast.AstNode): void;
					public setParams(
						param0: java.util.List<org.mozilla.javascript.ast.AstNode>,
					): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.ast.Name,
					);
					public isParam(param0: org.mozilla.javascript.ast.AstNode): boolean;
					public setFunctionIsGetterMethod(): void;
					public setRp(param0: number): void;
					public setMemberExprNode(
						param0: org.mozilla.javascript.ast.AstNode,
					): void;
					public requiresActivation(): boolean;
					public getFunctionName(): org.mozilla.javascript.ast.Name;
					public addParam(param0: org.mozilla.javascript.ast.AstNode): void;
					public getMemberExprNode(): org.mozilla.javascript.ast.AstNode;
					public isMethod(): boolean;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(param0: number);
					public setLp(param0: number): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isGenerator(): boolean;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public isNormalMethod(): boolean;
					public setFunctionIsSetterMethod(): void;
					public toSource(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getLp(): number;
					public getName(): string;
					public setIsGenerator(): void;
					public setFunctionIsNormalMethod(): void;
					public isSetterMethod(): boolean;
					public setFunctionName(param0: org.mozilla.javascript.ast.Name): void;
				}
				export module FunctionNode {
					export class Form {
						public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionNode.Form>;
						public static FUNCTION: org.mozilla.javascript.ast.FunctionNode.Form;
						public static GETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static METHOD: org.mozilla.javascript.ast.FunctionNode.Form;
						public static SETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static "<clinit>"(): void;
						public static valueOf(
							param0: string,
						): org.mozilla.javascript.ast.FunctionNode.Form;
						public static values(): androidNative.Array<org.mozilla.javascript.ast.FunctionNode.Form>;
					}
				}
				export class Jump extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Jump>;
					public target: org.mozilla.javascript.Node;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getJumpStatement(): org.mozilla.javascript.ast.Jump;
					public setDefault(param0: org.mozilla.javascript.Node): void;
					public setLoop(param0: org.mozilla.javascript.ast.Jump): void;
					public getDefault(): org.mozilla.javascript.Node;
					public setJumpStatement(
						param0: org.mozilla.javascript.ast.Jump,
					): void;
					public getFinally(): org.mozilla.javascript.Node;
					public getLoop(): org.mozilla.javascript.ast.Jump;
					public toSource(param0: number): string;
					public setContinue(param0: org.mozilla.javascript.Node): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public setFinally(param0: org.mozilla.javascript.Node): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public getContinue(): org.mozilla.javascript.Node;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
				export class Name extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Name>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(param0: number, param1: string);
					public getIdentifier(): string;
					public length: number;
					public toSource(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getScope(): org.mozilla.javascript.ast.Scope;
					public isLocalName(): boolean;
					public getDefiningScope(): org.mozilla.javascript.ast.Scope;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public setIdentifier(param0: string): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public constructor(param0: number, param1: number, param2: string);
					public setScope(param0: org.mozilla.javascript.ast.Scope): void;
				}
				export class NodeVisitor {
					public static class: java.lang.Class<org.mozilla.javascript.ast.NodeVisitor>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ast.NodeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
					});
					public constructor();
					public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
				}
				export class RegExpLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.RegExpLiteral>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setValue(param0: string): void;
					public toSource(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getValue(): string;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public getFlags(): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setFlags(param0: string): void;
				}
				export class Scope extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Scope>;
					public parentScope: org.mozilla.javascript.ast.Scope;
					public symbolTable: java.util.Map<
						string,
						org.mozilla.javascript.ast.Symbol
					>;
					public top: org.mozilla.javascript.ast.ScriptNode;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public getSymbol(param0: string): org.mozilla.javascript.ast.Symbol;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public replaceWith(param0: org.mozilla.javascript.ast.Scope): void;
					public static splitScope(
						param0: org.mozilla.javascript.ast.Scope,
					): org.mozilla.javascript.ast.Scope;
					public getDefiningScope(
						param0: string,
					): org.mozilla.javascript.ast.Scope;
					public clearParentScope(): void;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public setTop(param0: org.mozilla.javascript.ast.ScriptNode): void;
					public constructor(param0: number);
					public addChildScope(param0: org.mozilla.javascript.ast.Scope): void;
					public constructor(param0: number, param1: number);
					public getStatements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public static joinScopes(
						param0: org.mozilla.javascript.ast.Scope,
						param1: org.mozilla.javascript.ast.Scope,
					): void;
					public putSymbol(param0: org.mozilla.javascript.ast.Symbol): void;
					public getParentScope(): org.mozilla.javascript.ast.Scope;
					public setParentScope(param0: org.mozilla.javascript.ast.Scope): void;
					public toSource(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getTop(): org.mozilla.javascript.ast.ScriptNode;
					public setSymbolTable(
						param0: java.util.Map<string, org.mozilla.javascript.ast.Symbol>,
					): void;
					public getSymbolTable(): java.util.Map<
						string,
						org.mozilla.javascript.ast.Symbol
					>;
					public getChildScopes(): java.util.List<org.mozilla.javascript.ast.Scope>;
				}
				export class ScriptNode extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ScriptNode>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
					);
					public getFunctions(): java.util.List<org.mozilla.javascript.ast.FunctionNode>;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: number,
					);
					public getParamAndVarConst(): androidNative.Array<boolean>;
					public addRegExp(
						param0: org.mozilla.javascript.ast.RegExpLiteral,
					): void;
					public getIndexForNameNode(
						param0: org.mozilla.javascript.Node,
					): number;
					public getSourceName(): string;
					public setSymbols(
						param0: java.util.List<org.mozilla.javascript.ast.Symbol>,
					): void;
					public getRegexpCount(): number;
					public setEncodedSourceBounds(param0: number, param1: number): void;
					public setEncodedSourceStart(param0: number): void;
					public constructor();
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
					);
					public getParamAndVarCount(): number;
					public getCompilerData(): Any;
					public setSourceName(param0: string): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
						param4: number,
					);
					public setEncodedSource(param0: string): void;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: number,
					);
					public getEncodedSource(): string;
					public getEncodedSourceStart(): number;
					public getParamCount(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getBaseLineno(): number;
					public setCompilerData(param0: Any): void;
					public addFunction(
						param0: org.mozilla.javascript.ast.FunctionNode,
					): number;
					public addSymbol(param0: org.mozilla.javascript.ast.Symbol): void;
					public setBaseLineno(param0: number): void;
					public getEncodedSourceEnd(): number;
					public getFunctionCount(): number;
					public setInStrictMode(param0: boolean): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getRegexpFlags(param0: number): string;
					public getParamAndVarNames(): androidNative.Array<string>;
					public setEncodedSourceEnd(param0: number): void;
					public getFunctionNode(
						param0: number,
					): org.mozilla.javascript.ast.FunctionNode;
					public getSymbols(): java.util.List<org.mozilla.javascript.ast.Symbol>;
					public getParamOrVarName(param0: number): string;
					public constructor(
						param0: number,
						param1: org.mozilla.javascript.Node,
						param2: org.mozilla.javascript.Node,
						param3: org.mozilla.javascript.Node,
					);
					public getNextTempName(): string;
					public setEndLineno(param0: number): void;
					public getRegexpString(param0: number): string;
					public getEndLineno(): number;
					public isInStrictMode(): boolean;
					public flattenSymbolTable(param0: boolean): void;
				}
				// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
				export class Symbol {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Symbol>;
					public getIndex(): number;
					public setDeclType(param0: number): void;
					public getDeclTypeName(): string;
					public setContainingTable(
						param0: org.mozilla.javascript.ast.Scope,
					): void;
					public setIndex(param0: number): void;
					public constructor(param0: number, param1: string);
					public getNode(): org.mozilla.javascript.Node;
					public setNode(param0: org.mozilla.javascript.Node): void;
					public setName(param0: string): void;
					public toString(): string;
					public constructor();
					public getName(): string;
					public getDeclType(): number;
					public getContainingTable(): org.mozilla.javascript.ast.Scope;
				}
			}
			export class BaseFunction
				extends org.mozilla.javascript.IdScriptableObject
				implements org.mozilla.javascript.Function
			{
				public static class: java.lang.Class<org.mozilla.javascript.BaseFunction>;
				public static GENERATOR_FUNCTION_CLASS: string;
				public getMaxInstanceId(): number;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public setImmunePrototypeProperty(param0: Any): void;
				public constructor(param0: boolean);
				public findPrototypeId(param0: string): number;
				public getFunctionName(): string;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public constructor();
				public hasPrototypeProperty(): boolean;
				public createObject(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public construct(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public isGeneratorFunction(): boolean;
				public getClassPrototype(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public static initAsGeneratorFunction(
					param0: org.mozilla.javascript.Scriptable,
					param1: boolean,
				): Any;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getInstanceIdValue(param0: number): Any;
				public static getClassPrototype(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): org.mozilla.javascript.Scriptable;
				public decompile(param0: number, param1: number): string;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public get(param0: Any): Any;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public fillConstructorProperties(
					param0: org.mozilla.javascript.IdFunctionObject,
				): void;
				public getArity(): number;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getTypeOf(): string;
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(
					param0: org.mozilla.javascript.Symbol,
				): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static isApplyOrCall(
					param0: org.mozilla.javascript.IdFunctionObject,
				): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public getLength(): number;
				public getPrototypeProperty(): Any;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
				public findInstanceIdInfo(param0: string): number;
				public static isApply(
					param0: org.mozilla.javascript.IdFunctionObject,
				): boolean;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public static init(
					param0: org.mozilla.javascript.Scriptable,
					param1: boolean,
				): void;
				public delete(param0: number): void;
				public getAllIds(): androidNative.Array<Any>;
				public setInstanceIdValue(param0: number, param1: Any): void;
			}
			export class Callable {
				public static class: java.lang.Class<org.mozilla.javascript.Callable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Callable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
						param3: androidNative.Array<Any>,
					): Any;
				});
				public constructor();
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
			}
			export class ClassShutter {
				public static class: java.lang.Class<org.mozilla.javascript.ClassShutter>;
				public constructor(implementation: {
					visibleToScripts(param0: string): boolean;
				});
				public constructor();
				public visibleToScripts(param0: string): boolean;
			}
			export class CompilerEnvirons {
				public static class: java.lang.Class<org.mozilla.javascript.CompilerEnvirons>;
				public activationNames: java.util.Set<string>;
				public reportWarningAsError(): boolean;
				public isXmlAvailable(): boolean;
				public setActivationNames(param0: java.util.Set<string>): void;
				public recoverFromErrors(): boolean;
				public setGenerateDebugInfo(param0: boolean): void;
				public isIdeMode(): boolean;
				public setGenerateObserverCount(param0: boolean): void;
				public isGeneratingSource(): boolean;
				public setReservedKeywordAsIdentifier(param0: boolean): void;
				public constructor();
				public setErrorReporter(
					param0: org.mozilla.javascript.ErrorReporter,
				): void;
				public getLanguageVersion(): number;
				public getOptimizationLevel(): number;
				public isAllowMemberExprAsFunctionName(): boolean;
				public isRecordingComments(): boolean;
				public setLanguageVersion(param0: number): void;
				public setIdeMode(param0: boolean): void;
				public setGeneratingSource(param0: boolean): void;
				public isGenerateDebugInfo(): boolean;
				public setAllowSharpComments(param0: boolean): void;
				public setWarnTrailingComma(param0: boolean): void;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public setAllowMemberExprAsFunctionName(param0: boolean): void;
				public getAllowSharpComments(): boolean;
				public isReservedKeywordAsIdentifier(): boolean;
				public setRecordingLocalJsDocComments(param0: boolean): void;
				public static ideEnvirons(): org.mozilla.javascript.CompilerEnvirons;
				public isStrictMode(): boolean;
				public getActivationNames(): java.util.Set<string>;
				public isRecordingLocalJsDocComments(): boolean;
				public isGenerateObserverCount(): boolean;
				public setRecoverFromErrors(param0: boolean): void;
				public getWarnTrailingComma(): boolean;
				public initFromContext(param0: org.mozilla.javascript.Context): void;
				public setOptimizationLevel(param0: number): void;
				public setXmlAvailable(param0: boolean): void;
				public setStrictMode(param0: boolean): void;
				public setRecordingComments(param0: boolean): void;
			}
			export class ConstProperties {
				public static class: java.lang.Class<org.mozilla.javascript.ConstProperties>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ConstProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					defineConst(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
					): void;
					isConst(param0: string): boolean;
					putConst(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
				});
				public constructor();
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
			}
			export class Context {
				public static class: java.lang.Class<org.mozilla.javascript.Context>;
				public static FEATURE_DYNAMIC_SCOPE: number;
				public static FEATURE_E4X: number;
				public static FEATURE_ENABLE_XML_SECURE_PARSING: number;
				public static FEATURE_ENHANCED_JAVA_ACCESS: number;
				public static FEATURE_ENUMERATE_IDS_FIRST: number;
				public static FEATURE_INTEGER_WITHOUT_DECIMAL_PLACE: number;
				public static FEATURE_LITTLE_ENDIAN: number;
				public static FEATURE_LOCATION_INFORMATION_IN_ERROR: number;
				public static FEATURE_MEMBER_EXPR_AS_FUNCTION_NAME: number;
				public static FEATURE_NON_ECMA_GET_YEAR: number;
				public static FEATURE_OLD_UNDEF_NULL_THIS: number;
				public static FEATURE_PARENT_PROTO_PROPERTIES: number;
				public static FEATURE_PARENT_PROTO_PROPRTIES: number;
				public static FEATURE_RESERVED_KEYWORD_AS_IDENTIFIER: number;
				public static FEATURE_STRICT_EVAL: number;
				public static FEATURE_STRICT_MODE: number;
				public static FEATURE_STRICT_VARS: number;
				public static FEATURE_THREAD_SAFE_OBJECTS: number;
				public static FEATURE_TO_STRING_AS_SOURCE: number;
				public static FEATURE_V8_EXTENSIONS: number;
				public static FEATURE_WARNING_AS_ERROR: number;
				public static VERSION_1_0: number;
				public static VERSION_1_1: number;
				public static VERSION_1_2: number;
				public static VERSION_1_3: number;
				public static VERSION_1_4: number;
				public static VERSION_1_5: number;
				public static VERSION_1_6: number;
				public static VERSION_1_7: number;
				public static VERSION_1_8: number;
				public static VERSION_DEFAULT: number;
				public static VERSION_ES6: number;
				public static VERSION_UNKNOWN: number;
				public static emptyArgs: androidNative.Array<Any>;
				public static errorReporterProperty: string;
				public static languageVersionProperty: string;
				public activationNames: java.util.Set<string>;
				public cachedXMLLib: org.mozilla.javascript.xml.XMLLib;
				public currentActivationCall: org.mozilla.javascript.NativeCall;
				public debugger: org.mozilla.javascript.debug.Debugger;
				public generateObserverCount: boolean;
				public instructionCount: number;
				public instructionThreshold: number;
				public interpreterSecurityDomain: Any;
				public isContinuationsTopCall: boolean;
				public isTopLevelStrict: boolean;
				public iterating: org.mozilla.javascript.ObjToIntMap;
				public lastInterpreterFrame: Any;
				public previousInterpreterInvocations: org.mozilla.javascript.ObjArray;
				public regExpProxy: org.mozilla.javascript.RegExpProxy;
				public scratchScriptable: org.mozilla.javascript.Scriptable;
				public scratchUint32: number;
				public topCallScope: org.mozilla.javascript.Scriptable;
				public typeErrorThrower: org.mozilla.javascript.BaseFunction;
				public useDynamicScope: boolean;
				public version: number;
				public removeActivationName(param0: string): void;
				public static createInterpreter(): org.mozilla.javascript.Evaluator;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public setInstructionObserverThreshold(param0: number): void;
				public setGenerateObserverCount(param0: boolean): void;
				public getImplementationVersion(): string;
				public static reportRuntimeError0(
					param0: string,
				): org.mozilla.javascript.EvaluatorException;
				public getMaximumInterpreterStackDepth(): number;
				public static javaToJS(
					param0: Any,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public setClassShutter(
					param0: org.mozilla.javascript.ClassShutter,
				): void;
				public isVersionECMA1(): boolean;
				public evaluateReader(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.io.Reader,
					param2: string,
					param3: number,
					param4: Any,
				): Any;
				public initStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public setApplicationClassLoader(param0: java.lang.ClassLoader): void;
				public callFunctionWithContinuations(
					param0: org.mozilla.javascript.Callable,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): Any;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public setSecurityController(
					param0: org.mozilla.javascript.SecurityController,
				): void;
				public static reportRuntimeError4(
					param0: string,
					param1: Any,
					param2: Any,
					param3: Any,
					param4: Any,
				): org.mozilla.javascript.EvaluatorException;
				public removeThreadLocal(param0: Any): void;
				public static call(
					param0: org.mozilla.javascript.ContextFactory,
					param1: org.mozilla.javascript.ContextAction<Any>,
				): Any;
				public static reportError(param0: string): void;
				public addPropertyChangeListener(
					param0: java.beans.PropertyChangeListener,
				): void;
				public isStrictMode(): boolean;
				public newArray(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
				): org.mozilla.javascript.Scriptable;
				public decompileFunction(
					param0: org.mozilla.javascript.Function,
					param1: number,
				): string;
				public newObject(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): org.mozilla.javascript.Scriptable;
				public hasFeature(param0: number): boolean;
				public static getCurrentContext(): org.mozilla.javascript.Context;
				public putThreadLocal(param0: Any, param1: Any): void;
				public compileReader(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.io.Reader,
					param2: string,
					param3: number,
					param4: Any,
				): org.mozilla.javascript.Script;
				public static toString(param0: Any): string;
				public constructor(param0: org.mozilla.javascript.ContextFactory);
				public static jsToJava(param0: Any, param1: java.lang.Class<Any>): Any;
				public setDebugger(
					param0: org.mozilla.javascript.debug.Debugger,
					param1: Any,
				): void;
				public setWrapFactory(param0: org.mozilla.javascript.WrapFactory): void;
				public static toType(param0: Any, param1: java.lang.Class<Any>): Any;
				public static reportRuntimeError(
					param0: string,
				): org.mozilla.javascript.EvaluatorException;
				public static reportRuntimeError3(
					param0: string,
					param1: Any,
					param2: Any,
					param3: Any,
				): org.mozilla.javascript.EvaluatorException;
				public getLocale(): java.util.Locale;
				public isGeneratingSource(): boolean;
				public static call(
					param0: org.mozilla.javascript.ContextAction<Any>,
				): Any;
				public static toObject(
					param0: Any,
					param1: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public static checkOptimizationLevel(param0: number): void;
				public decompileFunctionBody(
					param0: org.mozilla.javascript.Function,
					param1: number,
				): string;
				public captureContinuation(): org.mozilla.javascript.ContinuationPending;
				public decompileScript(
					param0: org.mozilla.javascript.Script,
					param1: number,
				): string;
				public static "<clinit>"(): void;
				public setMaximumInterpreterStackDepth(param0: number): void;
				public static reportWarning(
					param0: string,
					param1: java.lang.Throwable,
				): void;
				public static throwAsScriptRuntimeEx(
					param0: java.lang.Throwable,
				): java.lang.RuntimeException;
				public getLanguageVersion(): number;
				public isSealed(): boolean;
				public static addContextListener(
					param0: org.mozilla.javascript.ContextListener,
				): void;
				public setLanguageVersion(param0: number): void;
				public static enter(
					param0: org.mozilla.javascript.Context,
				): org.mozilla.javascript.Context;
				public setLocale(param0: java.util.Locale): java.util.Locale;
				public getElements(
					param0: org.mozilla.javascript.Scriptable,
				): androidNative.Array<Any>;
				public seal(param0: Any): void;
				public newObject(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public compileFunction(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: string,
					param3: number,
					param4: Any,
				): org.mozilla.javascript.Function;
				public static getSourcePositionFromStack(
					param0: androidNative.Array<number>,
				): string;
				public unseal(param0: Any): void;
				public getRegExpProxy(): org.mozilla.javascript.RegExpProxy;
				public stringIsCompilableUnit(param0: string): boolean;
				public evaluateString(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: string,
					param3: number,
					param4: Any,
				): Any;
				public isActivationNeeded(param0: string): boolean;
				public static enter(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.ContextFactory,
				): org.mozilla.javascript.Context;
				public initStandardObjects(
					param0: org.mozilla.javascript.ScriptableObject,
					param1: boolean,
				): org.mozilla.javascript.ScriptableObject;
				public setOptimizationLevel(param0: number): void;
				public static toObject(
					param0: Any,
					param1: org.mozilla.javascript.Scriptable,
					param2: java.lang.Class<Any>,
				): org.mozilla.javascript.Scriptable;
				public compileString(
					param0: string,
					param1: org.mozilla.javascript.Evaluator,
					param2: org.mozilla.javascript.ErrorReporter,
					param3: string,
					param4: number,
					param5: Any,
				): org.mozilla.javascript.Script;
				public static exit(): void;
				public static getUndefinedValue(): Any;
				public getApplicationClassLoader(): java.lang.ClassLoader;
				public static setCachingEnabled(param0: boolean): void;
				public static toNumber(param0: Any): number;
				public getFactory(): org.mozilla.javascript.ContextFactory;
				public constructor();
				public static reportError(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): void;
				public isGeneratingDebug(): boolean;
				public compileReader(
					param0: java.io.Reader,
					param1: string,
					param2: number,
					param3: Any,
				): org.mozilla.javascript.Script;
				public static removeContextListener(
					param0: org.mozilla.javascript.ContextListener,
				): void;
				public compileString(
					param0: string,
					param1: string,
					param2: number,
					param3: Any,
				): org.mozilla.javascript.Script;
				public getOptimizationLevel(): number;
				public setErrorReporter(
					param0: org.mozilla.javascript.ErrorReporter,
				): org.mozilla.javascript.ErrorReporter;
				public setGeneratingDebug(param0: boolean): void;
				public static checkLanguageVersion(param0: number): void;
				public initSafeStandardObjects(
					param0: org.mozilla.javascript.ScriptableObject,
					param1: boolean,
				): org.mozilla.javascript.ScriptableObject;
				public setGeneratingSource(param0: boolean): void;
				public static enter(): org.mozilla.javascript.Context;
				public newArray(
					param0: org.mozilla.javascript.Scriptable,
					param1: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public initSafeStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public getSecurityController(): org.mozilla.javascript.SecurityController;
				public getDebuggerContextData(): Any;
				public compileFunction(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: org.mozilla.javascript.Evaluator,
					param3: org.mozilla.javascript.ErrorReporter,
					param4: string,
					param5: number,
					param6: Any,
				): org.mozilla.javascript.Function;
				public firePropertyChange(
					param0: string,
					param1: Any,
					param2: Any,
				): void;
				public static getContext(): org.mozilla.javascript.Context;
				public executeScriptWithContinuations(
					param0: org.mozilla.javascript.Script,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public static getDebuggableView(
					param0: org.mozilla.javascript.Script,
				): org.mozilla.javascript.debug.DebuggableScript;
				public getDebugger(): org.mozilla.javascript.debug.Debugger;
				public static onSealedMutation(): void;
				public getWrapFactory(): org.mozilla.javascript.WrapFactory;
				public getClassShutterSetter(): org.mozilla.javascript.Context.ClassShutterSetter;
				public isGeneratingDebugChanged(): boolean;
				public static call(
					param0: org.mozilla.javascript.ContextFactory,
					param1: org.mozilla.javascript.Callable,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public removePropertyChangeListener(
					param0: java.beans.PropertyChangeListener,
				): void;
				public addActivationName(param0: string): void;
				public static reportRuntimeError2(
					param0: string,
					param1: Any,
					param2: Any,
				): org.mozilla.javascript.EvaluatorException;
				public static reportWarning(param0: string): void;
				public createClassLoader(
					param0: java.lang.ClassLoader,
				): org.mozilla.javascript.GeneratedClassLoader;
				public static isValidOptimizationLevel(param0: number): boolean;
				public observeInstructionCount(param0: number): void;
				public static reportWarning(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): void;
				public newObject(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public resumeContinuation(
					param0: Any,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): Any;
				public static isValidLanguageVersion(param0: number): boolean;
				public static reportRuntimeError(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): org.mozilla.javascript.EvaluatorException;
				public static reportRuntimeError1(
					param0: string,
					param1: Any,
				): org.mozilla.javascript.EvaluatorException;
				public getThreadLocal(param0: Any): Any;
				public initStandardObjects(
					param0: org.mozilla.javascript.ScriptableObject,
				): org.mozilla.javascript.Scriptable;
				public static toBoolean(param0: Any): boolean;
				public getClassShutter(): org.mozilla.javascript.ClassShutter;
				public initSafeStandardObjects(
					param0: org.mozilla.javascript.ScriptableObject,
				): org.mozilla.javascript.Scriptable;
				public getInstructionObserverThreshold(): number;
			}
			export module Context {
				export class ClassShutterSetter {
					public static class: java.lang.Class<org.mozilla.javascript.Context.ClassShutterSetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.Context$ClassShutterSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getClassShutter(): org.mozilla.javascript.ClassShutter;
						setClassShutter(param0: org.mozilla.javascript.ClassShutter): void;
					});
					public constructor();
					public setClassShutter(
						param0: org.mozilla.javascript.ClassShutter,
					): void;
					public getClassShutter(): org.mozilla.javascript.ClassShutter;
				}
			}
			export class ContextAction<T> extends java.lang.Object {
				public static class: java.lang.Class<
					org.mozilla.javascript.ContextAction<Any>
				>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ContextAction<Any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(param0: org.mozilla.javascript.Context): T;
				});
				public constructor();
				public run(param0: org.mozilla.javascript.Context): T;
			}
			export class ContextFactory {
				public static class: java.lang.Class<org.mozilla.javascript.ContextFactory>;
				public static initGlobal(
					param0: org.mozilla.javascript.ContextFactory,
				): void;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public call(param0: org.mozilla.javascript.ContextAction<Any>): Any;
				public static getGlobal(): org.mozilla.javascript.ContextFactory;
				public enterContext(
					param0: org.mozilla.javascript.Context,
				): org.mozilla.javascript.Context;
				public onContextReleased(param0: org.mozilla.javascript.Context): void;
				public makeContext(): org.mozilla.javascript.Context;
				public seal(): void;
				public disableContextListening(): void;
				public initApplicationClassLoader(param0: java.lang.ClassLoader): void;
				public constructor();
				public static "<clinit>"(): void;
				public hasFeature(
					param0: org.mozilla.javascript.Context,
					param1: number,
				): boolean;
				public addListener(
					param0: org.mozilla.javascript.ContextFactory.Listener,
				): void;
				public createClassLoader(
					param0: java.lang.ClassLoader,
				): org.mozilla.javascript.GeneratedClassLoader;
				public isSealed(): boolean;
				public doTopCall(
					param0: org.mozilla.javascript.Callable,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public static getGlobalSetter(): org.mozilla.javascript.ContextFactory.GlobalSetter;
				public onContextCreated(param0: org.mozilla.javascript.Context): void;
				public static hasExplicitGlobal(): boolean;
				public enter(): org.mozilla.javascript.Context;
				public observeInstructionCount(
					param0: org.mozilla.javascript.Context,
					param1: number,
				): void;
				public enterContext(): org.mozilla.javascript.Context;
				public removeListener(
					param0: org.mozilla.javascript.ContextFactory.Listener,
				): void;
				public exit(): void;
				public checkNotSealed(): void;
				public getApplicationClassLoader(): java.lang.ClassLoader;
			}
			export module ContextFactory {
				export class GlobalSetter {
					public static class: java.lang.Class<org.mozilla.javascript.ContextFactory.GlobalSetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ContextFactory$GlobalSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getContextFactoryGlobal(): org.mozilla.javascript.ContextFactory;
						setContextFactoryGlobal(
							param0: org.mozilla.javascript.ContextFactory,
						): void;
					});
					public constructor();
					public setContextFactoryGlobal(
						param0: org.mozilla.javascript.ContextFactory,
					): void;
					public getContextFactoryGlobal(): org.mozilla.javascript.ContextFactory;
				}
				export class Listener {
					public static class: java.lang.Class<org.mozilla.javascript.ContextFactory.Listener>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ContextFactory$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						contextCreated(param0: org.mozilla.javascript.Context): void;
						contextReleased(param0: org.mozilla.javascript.Context): void;
					});
					public constructor();
					public contextCreated(param0: org.mozilla.javascript.Context): void;
					public contextReleased(param0: org.mozilla.javascript.Context): void;
				}
			}
			export class ContextListener extends org.mozilla.javascript.ContextFactory
				.Listener {
				public static class: java.lang.Class<org.mozilla.javascript.ContextListener>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ContextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					contextEntered(param0: org.mozilla.javascript.Context): void;
					contextExited(param0: org.mozilla.javascript.Context): void;
					contextCreated(param0: org.mozilla.javascript.Context): void;
					contextReleased(param0: org.mozilla.javascript.Context): void;
				});
				public constructor();
				public contextCreated(param0: org.mozilla.javascript.Context): void;
				public contextExited(param0: org.mozilla.javascript.Context): void;
				public contextEntered(param0: org.mozilla.javascript.Context): void;
				public contextReleased(param0: org.mozilla.javascript.Context): void;
			}
			export class ContinuationPending {
				public static class: java.lang.Class<org.mozilla.javascript.ContinuationPending>;
				public setContinuation(
					param0: org.mozilla.javascript.NativeContinuation,
				): void;
				public getApplicationState(): Any;
				public constructor(param0: org.mozilla.javascript.NativeContinuation);
				public getContinuation(): Any;
				public setApplicationState(param0: Any): void;
				public getContinuationState(): org.mozilla.javascript.NativeContinuation;
			}
			export module debug {
				export class DebugFrame {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebugFrame>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebugFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDebuggerStatement(param0: org.mozilla.javascript.Context): void;
						onEnter(
							param0: org.mozilla.javascript.Context,
							param1: org.mozilla.javascript.Scriptable,
							param2: org.mozilla.javascript.Scriptable,
							param3: androidNative.Array<Any>,
						): void;
						onExceptionThrown(
							param0: org.mozilla.javascript.Context,
							param1: java.lang.Throwable,
						): void;
						onExit(
							param0: org.mozilla.javascript.Context,
							param1: boolean,
							param2: Any,
						): void;
						onLineChange(
							param0: org.mozilla.javascript.Context,
							param1: number,
						): void;
					});
					public constructor();
					public onExceptionThrown(
						param0: org.mozilla.javascript.Context,
						param1: java.lang.Throwable,
					): void;
					public onDebuggerStatement(
						param0: org.mozilla.javascript.Context,
					): void;
					public onLineChange(
						param0: org.mozilla.javascript.Context,
						param1: number,
					): void;
					public onEnter(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
						param3: androidNative.Array<Any>,
					): void;
					public onExit(
						param0: org.mozilla.javascript.Context,
						param1: boolean,
						param2: Any,
					): void;
				}
				export class DebuggableObject {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebuggableObject>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebuggableObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAllIds(): androidNative.Array<Any>;
					});
					public constructor();
					public getAllIds(): androidNative.Array<Any>;
				}
				export class DebuggableScript {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebuggableScript>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebuggableScript interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFunction(
							param0: number,
						): org.mozilla.javascript.debug.DebuggableScript;
						getFunctionCount(): number;
						getFunctionName(): string;
						getLineNumbers(): androidNative.Array<number>;
						getParamAndVarCount(): number;
						getParamCount(): number;
						getParamOrVarName(param0: number): string;
						getParent(): org.mozilla.javascript.debug.DebuggableScript;
						getSourceName(): string;
						isFunction(): boolean;
						isGeneratedScript(): boolean;
						isTopLevel(): boolean;
					});
					public constructor();
					public getParamOrVarName(param0: number): string;
					public getFunctionCount(): number;
					public isFunction(): boolean;
					public isGeneratedScript(): boolean;
					public getParamAndVarCount(): number;
					public getParent(): org.mozilla.javascript.debug.DebuggableScript;
					public getFunction(
						param0: number,
					): org.mozilla.javascript.debug.DebuggableScript;
					public getFunctionName(): string;
					public getParamCount(): number;
					public getSourceName(): string;
					public getLineNumbers(): androidNative.Array<number>;
					public isTopLevel(): boolean;
				}
				export class Debugger {
					public static class: java.lang.Class<org.mozilla.javascript.debug.Debugger>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.Debugger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFrame(
							param0: org.mozilla.javascript.Context,
							param1: org.mozilla.javascript.debug.DebuggableScript,
						): org.mozilla.javascript.debug.DebugFrame;
						handleCompilationDone(
							param0: org.mozilla.javascript.Context,
							param1: org.mozilla.javascript.debug.DebuggableScript,
							param2: string,
						): void;
					});
					public constructor();
					public getFrame(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.debug.DebuggableScript,
					): org.mozilla.javascript.debug.DebugFrame;
					public handleCompilationDone(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.debug.DebuggableScript,
						param2: string,
					): void;
				}
			}
			export class EcmaError extends org.mozilla.javascript.RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.EcmaError>;
				public details(): string;
				public getErrorMessage(): string;
				public getLineSource(): string;
				public getLineNumber(): number;
				public constructor(
					param0: string,
					param1: string,
					param2: string,
					param3: number,
					param4: string,
					param5: number,
				);
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: number,
					param3: number,
					param4: string,
				);
				public getErrorObject(): org.mozilla.javascript.Scriptable;
				public getName(): string;
				public getColumnNumber(): number;
				public constructor(param0: string);
				public getSourceName(): string;
				public constructor();
			}
			export class ErrorReporter {
				public static class: java.lang.Class<org.mozilla.javascript.ErrorReporter>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ErrorReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					error(
						param0: string,
						param1: string,
						param2: number,
						param3: string,
						param4: number,
					): void;
					runtimeError(
						param0: string,
						param1: string,
						param2: number,
						param3: string,
						param4: number,
					): org.mozilla.javascript.EvaluatorException;
					warning(
						param0: string,
						param1: string,
						param2: number,
						param3: string,
						param4: number,
					): void;
				});
				public constructor();
				public warning(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): void;
				public runtimeError(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): org.mozilla.javascript.EvaluatorException;
				public error(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				): void;
			}
			export class EqualObjectGraphs {
				public static class: java.lang.Class<org.mozilla.javascript.EqualObjectGraphs>;
				public equalGraphs(param0: Any, param1: Any): boolean;
				public static "<clinit>"(): void;
				public static withThreadLocal(param0: Any /* any*/): Any;
				public constructor();
			}
			export class Evaluator {
				public static class: java.lang.Class<org.mozilla.javascript.Evaluator>;
				public matches(
					param0: org.jsoup.nodes.Element,
					param1: org.jsoup.nodes.Element,
				): boolean;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Evaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
					compile(
						param0: org.mozilla.javascript.CompilerEnvirons,
						param1: org.mozilla.javascript.ast.ScriptNode,
						param2: string,
						param3: boolean,
					): Any;
					createFunctionObject(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
						param3: Any,
					): org.mozilla.javascript.Function;
					createScriptObject(
						param0: Any,
						param1: Any,
					): org.mozilla.javascript.Script;
					getPatchedStack(
						param0: org.mozilla.javascript.RhinoException,
						param1: string,
					): string;
					getScriptStack(
						param0: org.mozilla.javascript.RhinoException,
					): java.util.List<string>;
					getSourcePositionFromStack(
						param0: org.mozilla.javascript.Context,
						param1: androidNative.Array<number>,
					): string;
					setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				});
				public constructor();
				public captureStackInfo(
					param0: org.mozilla.javascript.RhinoException,
				): void;
				public createScriptObject(
					param0: Any,
					param1: Any,
				): org.mozilla.javascript.Script;
				public getSourcePositionFromStack(
					param0: org.mozilla.javascript.Context,
					param1: androidNative.Array<number>,
				): string;
				public compile(
					param0: org.mozilla.javascript.CompilerEnvirons,
					param1: org.mozilla.javascript.ast.ScriptNode,
					param2: string,
					param3: boolean,
				): Any;
				public getScriptStack(
					param0: org.mozilla.javascript.RhinoException,
				): java.util.List<string>;
				public createFunctionObject(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
					param3: Any,
				): org.mozilla.javascript.Function;
				public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				public getPatchedStack(
					param0: org.mozilla.javascript.RhinoException,
					param1: string,
				): string;
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
			export class EvaluatorException extends org.mozilla.javascript
				.RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.EvaluatorException>;
				public getLineSource(): string;
				public constructor(param0: string, param1: string, param2: number);
				public getLineNumber(): number;
				public constructor(
					param0: string,
					param1: string,
					param2: number,
					param3: string,
					param4: number,
				);
				public getColumnNumber(): number;
				public constructor(param0: string);
				public getSourceName(): string;
				public constructor();
			}
			export class ExternalArrayData {
				public static class: java.lang.Class<org.mozilla.javascript.ExternalArrayData>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ExternalArrayData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArrayElement(param0: number): Any;
					getArrayLength(): number;
					setArrayElement(param0: number, param1: Any): void;
				});
				public constructor();
				public setArrayElement(param0: number, param1: Any): void;
				public getArrayElement(param0: number): Any;
				public getArrayLength(): number;
			}
			// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
			export class Function
				implements
					org.mozilla.javascript.Scriptable,
					org.mozilla.javascript.Callable
			{
				public static class: java.lang.Class<org.mozilla.javascript.Function>;
				public constructor(implementation: {
					call(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
						param3: androidNative.Array<Any>,
					): Any;
					construct(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: androidNative.Array<Any>,
					): org.mozilla.javascript.Scriptable;
					"<clinit>"(): void;
					delete(param0: number): void;
					delete(param0: string): void;
					get(param0: number, param1: org.mozilla.javascript.Scriptable): Any;
					get(param0: string, param1: org.mozilla.javascript.Scriptable): Any;
					getClassName(): string;
					getDefaultValue(param0: java.lang.Class<Any>): Any;
					getIds(): androidNative.Array<Any>;
					getParentScope(): org.mozilla.javascript.Scriptable;
					getPrototype(): org.mozilla.javascript.Scriptable;
					has(
						param0: number,
						param1: org.mozilla.javascript.Scriptable,
					): boolean;
					has(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
					): boolean;
					hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					put(
						param0: number,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
					put(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
					setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					call(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
						param3: androidNative.Array<Any>,
					): Any;
				});
				public constructor();
				public static NOT_FOUND: Any;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getClassName(): string;
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public construct(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
			}
			export class GeneratedClassLoader {
				public static class: java.lang.Class<org.mozilla.javascript.GeneratedClassLoader>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.GeneratedClassLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					defineClass(
						param0: string,
						param1: androidNative.Array<number>,
					): java.lang.Class<Any>;
					linkClass(param0: java.lang.Class<Any>): void;
				});
				public constructor();
				public defineClass(
					param0: string,
					param1: androidNative.Array<number>,
				): java.lang.Class<Any>;
				public linkClass(param0: java.lang.Class<Any>): void;
			}
			export class IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.IdFunctionCall>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.IdFunctionCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execIdCall(
						param0: org.mozilla.javascript.IdFunctionObject,
						param1: org.mozilla.javascript.Context,
						param2: org.mozilla.javascript.Scriptable,
						param3: org.mozilla.javascript.Scriptable,
						param4: androidNative.Array<Any>,
					): Any;
				});
				public constructor();
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
			}
			export class IdFunctionObject extends org.mozilla.javascript
				.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.IdFunctionObject>;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public static equalObjectGraphs(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.IdFunctionObject,
					param2: org.mozilla.javascript.EqualObjectGraphs,
				): boolean;
				public hasTag(param0: Any): boolean;
				public constructor(param0: boolean);
				public getFunctionName(): string;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public constructor();
				public createObject(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public constructor(
					param0: org.mozilla.javascript.IdFunctionCall,
					param1: Any,
					param2: number,
					param3: string,
					param4: number,
					param5: org.mozilla.javascript.Scriptable,
				);
				public constructor(
					param0: org.mozilla.javascript.IdFunctionCall,
					param1: Any,
					param2: number,
					param3: number,
				);
				public construct(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public exportAsScopeProperty(): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public markAsConstructor(
					param0: org.mozilla.javascript.Scriptable,
				): void;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public unknown(): java.lang.RuntimeException;
				public methodId(): number;
				public decompile(param0: number, param1: number): string;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public get(param0: Any): Any;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public delete(param0: string): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getArity(): number;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getTag(): Any;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public initFunction(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public getLength(): number;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public addAsProperty(param0: org.mozilla.javascript.Scriptable): void;
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public delete(param0: number): void;
				public getAllIds(): androidNative.Array<Any>;
			}
			export abstract class IdScriptableObject
				extends org.mozilla.javascript.ScriptableObject
				implements org.mozilla.javascript.IdFunctionCall
			{
				public static class: java.lang.Class<org.mozilla.javascript.IdScriptableObject>;
				public getMaxInstanceId(): number;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public defaultPut(param0: string, param1: Any): void;
				public getClassName(): string;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public setAttributes(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: number,
				): void;
				public findPrototypeId(param0: string): number;
				public initPrototypeMethod(
					param0: Any,
					param1: number,
					param2: org.mozilla.javascript.Symbol,
					param3: string,
					param4: number,
				): org.mozilla.javascript.IdFunctionObject;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public constructor();
				public getAttributes(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): number;
				public getAttributes(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): number;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public defaultGet(param0: string): Any;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public initPrototypeConstructor(
					param0: org.mozilla.javascript.IdFunctionObject,
				): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(param0: org.mozilla.javascript.Symbol): number;
				public setAttributes(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: number,
				): void;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: string): number;
				public hasPrototypeMap(): boolean;
				public static instanceIdInfo(param0: number, param1: number): number;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public addIdFunctionProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: Any,
					param2: number,
					param3: string,
					param4: number,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getInstanceIdValue(param0: number): Any;
				public initPrototypeMethod(
					param0: Any,
					param1: number,
					param2: string,
					param3: string,
					param4: number,
				): org.mozilla.javascript.IdFunctionObject;
				public defineOwnProperty(
					param0: org.mozilla.javascript.Context,
					param1: Any,
					param2: org.mozilla.javascript.ScriptableObject,
					param3: boolean,
				): void;
				public setAttributes(param0: string, param1: number): void;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public get(param0: Any): Any;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public delete(param0: string): void;
				public static incompatibleCallError(
					param0: org.mozilla.javascript.IdFunctionObject,
				): org.mozilla.javascript.EcmaError;
				public initPrototypeId(param0: number): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public fillConstructorProperties(
					param0: org.mozilla.javascript.IdFunctionObject,
				): void;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public initPrototypeMethod(
					param0: Any,
					param1: number,
					param2: string,
					param3: number,
				): org.mozilla.javascript.IdFunctionObject;
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(
					param0: org.mozilla.javascript.Symbol,
				): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: number): number;
				public getOwnPropertyDescriptor(
					param0: org.mozilla.javascript.Context,
					param1: Any,
				): org.mozilla.javascript.ScriptableObject;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public setAttributes(param0: number, param1: number): void;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public exportAsJSClass(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: boolean,
				): org.mozilla.javascript.IdFunctionObject;
				public defineOwnProperty(
					param0: org.mozilla.javascript.Context,
					param1: Any,
					param2: org.mozilla.javascript.ScriptableObject,
				): void;
				public activatePrototypeMap(param0: number): void;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public setAttributes(
					param0: org.mozilla.javascript.Symbol,
					param1: number,
				): void;
				public initPrototypeValue(
					param0: number,
					param1: org.mozilla.javascript.Symbol,
					param2: Any,
					param3: number,
				): void;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public findInstanceIdInfo(param0: string): number;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public initPrototypeValue(
					param0: number,
					param1: string,
					param2: Any,
					param3: number,
				): void;
				public defaultHas(param0: string): boolean;
				public delete(param0: number): void;
				public getAllIds(): androidNative.Array<Any>;
				public setInstanceIdValue(param0: number, param1: Any): void;
			}
			export module IdScriptableObject {
				export class PrototypeValues {
					public static class: java.lang.Class<org.mozilla.javascript.IdScriptableObject.PrototypeValues>;
					public constructorId: number;
					public initValue(
						param0: number,
						param1: string,
						param2: Any,
						param3: number,
					): void;
					public findId(param0: string): number;
					public initValue(
						param0: number,
						param1: org.mozilla.javascript.Symbol,
						param2: Any,
						param3: number,
					): void;
					public set(
						param0: number,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
					public constructor(
						param0: org.mozilla.javascript.IdScriptableObject,
						param1: number,
					);
					public setAttributes(param0: number, param1: number): void;
					public getAttributes(param0: number): number;
					public getNames(
						param0: boolean,
						param1: boolean,
						param2: androidNative.Array<Any>,
					): androidNative.Array<Any>;
					public getMaxId(): number;
					public createPrecachedConstructor(): org.mozilla.javascript.IdFunctionObject;
					public delete(param0: number): void;
					public get(param0: number): Any;
					public has(param0: number): boolean;
					public findId(param0: org.mozilla.javascript.Symbol): number;
				}
			}
			export class LazilyLoadedCtor {
				public static class: java.lang.Class<org.mozilla.javascript.LazilyLoadedCtor>;
				public constructor(
					param0: org.mozilla.javascript.ScriptableObject,
					param1: string,
					param2: string,
					param3: boolean,
				);
				public constructor(
					param0: org.mozilla.javascript.ScriptableObject,
					param1: string,
					param2: string,
					param3: boolean,
					param4: boolean,
				);
				public getValue(): Any;
				public init(): void;
			}
			export class NativeCall extends org.mozilla.javascript
				.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeCall>;
				public function: org.mozilla.javascript.NativeFunction;
				public isStrict: boolean;
				public originalArgs: androidNative.Array<Any>;
				public parentActivationCall: org.mozilla.javascript.NativeCall;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: Any): Any;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public delete(param0: string): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public initPrototypeId(param0: number): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public constructor(
					param0: org.mozilla.javascript.NativeFunction,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
					param3: boolean,
					param4: boolean,
				);
				public findPrototypeId(param0: string): number;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public constructor();
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public static "<clinit>"(): void;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public defineAttributesForArguments(): void;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public static init(
					param0: org.mozilla.javascript.Scriptable,
					param1: boolean,
				): void;
				public delete(param0: number): void;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public getAllIds(): androidNative.Array<Any>;
			}
			export class NativeContinuation
				extends org.mozilla.javascript.IdScriptableObject
				implements org.mozilla.javascript.Function
			{
				public static class: java.lang.Class<org.mozilla.javascript.NativeContinuation>;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: Any): Any;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public static equalImplementations(
					param0: org.mozilla.javascript.NativeContinuation,
					param1: org.mozilla.javascript.NativeContinuation,
				): boolean;
				public delete(param0: string): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public initPrototypeId(param0: number): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getImplementation(): Any;
				public findPrototypeId(param0: string): number;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public constructor();
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public static "<clinit>"(): void;
				public construct(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static isContinuationConstructor(
					param0: org.mozilla.javascript.IdFunctionObject,
				): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
				public initImplementation(param0: Any): void;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public delete(param0: number): void;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public static init(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: boolean,
				): void;
				public getAllIds(): androidNative.Array<Any>;
			}
			export abstract class NativeFunction extends org.mozilla.javascript
				.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.NativeFunction>;
				public getParamOrVarConst(param0: number): boolean;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getParamAndVarCount(): number;
				public get(param0: Any): Any;
				public getClassName(): string;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public delete(param0: string): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getArity(): number;
				public constructor(param0: boolean);
				public resumeGenerator(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: number,
					param3: Any,
					param4: Any,
				): Any;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public getParamCount(): number;
				public constructor();
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public jsGet_name(): string;
				public construct(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: androidNative.Array<Any>,
				): org.mozilla.javascript.Scriptable;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getLanguageVersion(): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public getDebuggableView(): org.mozilla.javascript.debug.DebuggableScript;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getEncodedSource(): string;
				public getLength(): number;
				public getParamOrVarName(param0: number): string;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public call(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
				): Any;
				public execIdCall(
					param0: org.mozilla.javascript.IdFunctionObject,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Scriptable,
					param3: org.mozilla.javascript.Scriptable,
					param4: androidNative.Array<Any>,
				): Any;
				public decompile(param0: number, param1: number): string;
				public initScriptFunction(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: boolean,
				): void;
				public delete(param0: number): void;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public getAllIds(): androidNative.Array<Any>;
				public initScriptFunction(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
				): void;
			}
			export class Node extends java.lang
				.Iterable<org.mozilla.javascript.Node> {
				public static class: java.lang.Class<org.mozilla.javascript.Node>;
				public static ARROW_FUNCTION_PROP: number;
				public static ATTRIBUTE_FLAG: number;
				public static BOTH: number;
				public static CASEARRAY_PROP: number;
				public static CATCH_SCOPE_PROP: number;
				public static CONTROL_BLOCK_PROP: number;
				public static DECR_FLAG: number;
				public static DESCENDANTS_FLAG: number;
				public static DESTRUCTURING_ARRAY_LENGTH: number;
				public static DESTRUCTURING_NAMES: number;
				public static DESTRUCTURING_PARAMS: number;
				public static DESTRUCTURING_SHORTHAND: number;
				public static DIRECTCALL_PROP: number;
				public static END_DROPS_OFF: number;
				public static END_RETURNS: number;
				public static END_RETURNS_VALUE: number;
				public static END_UNREACHED: number;
				public static END_YIELDS: number;
				public static EXPRESSION_CLOSURE_PROP: number;
				public static FUNCTION_PROP: number;
				public static GENERATOR_END_PROP: number;
				public static INCRDECR_PROP: number;
				public static ISNUMBER_PROP: number;
				public static JSDOC_PROP: number;
				public static LABEL_ID_PROP: number;
				public static LAST_PROP: number;
				public static LEFT: number;
				public static LOCAL_BLOCK_PROP: number;
				public static LOCAL_PROP: number;
				public static MEMBER_TYPE_PROP: number;
				public static NAME_PROP: number;
				public static NON_SPECIALCALL: number;
				public static OBJECT_IDS_PROP: number;
				public static PARENTHESIZED_PROP: number;
				public static POST_FLAG: number;
				public static PROPERTY_FLAG: number;
				public static REGEXP_PROP: number;
				public static RIGHT: number;
				public static SKIP_INDEXES_PROP: number;
				public static SPECIALCALL_EVAL: number;
				public static SPECIALCALL_PROP: number;
				public static SPECIALCALL_WITH: number;
				public static TARGETBLOCK_PROP: number;
				public static VARIABLE_PROP: number;
				public first: org.mozilla.javascript.Node;
				public last: org.mozilla.javascript.Node;
				public lineno: number;
				public next: org.mozilla.javascript.Node;
				public propListHead: org.mozilla.javascript.Node.PropListItem;
				public type: number;
				public constructor(param0: number, param1: number);
				public constructor(
					param0: number,
					param1: org.mozilla.javascript.Node,
					param2: org.mozilla.javascript.Node,
					param3: org.mozilla.javascript.Node,
				);
				public static newString(param0: string): org.mozilla.javascript.Node;
				public getType(): number;
				public setType(param0: number): org.mozilla.javascript.Node;
				public constructor(
					param0: number,
					param1: org.mozilla.javascript.Node,
					param2: number,
				);
				public getIntProp(param0: number, param1: number): number;
				public addChildToFront(param0: org.mozilla.javascript.Node): void;
				public removeProp(param0: number): void;
				public getFirstChild(): org.mozilla.javascript.Node;
				public getChildBefore(
					param0: org.mozilla.javascript.Node,
				): org.mozilla.javascript.Node;
				public hasConsistentReturnUsage(): boolean;
				public labelId(): number;
				public constructor(
					param0: number,
					param1: org.mozilla.javascript.Node,
					param2: org.mozilla.javascript.Node,
				);
				public putProp(param0: number, param1: Any): void;
				public getString(): string;
				public constructor(
					param0: number,
					param1: org.mozilla.javascript.Node,
					param2: org.mozilla.javascript.Node,
					param3: org.mozilla.javascript.Node,
					param4: number,
				);
				public getNext(): org.mozilla.javascript.Node;
				public getScope(): org.mozilla.javascript.ast.Scope;
				public setString(param0: string): void;
				public hasChildren(): boolean;
				public static newString(
					param0: number,
					param1: string,
				): org.mozilla.javascript.Node;
				public removeChild(param0: org.mozilla.javascript.Node): void;
				public toString(): string;
				public getExistingIntProp(param0: number): number;
				public replaceChildAfter(
					param0: org.mozilla.javascript.Node,
					param1: org.mozilla.javascript.Node,
				): void;
				public static newNumber(param0: number): org.mozilla.javascript.Node;
				public static newTarget(): org.mozilla.javascript.Node;
				public addChildAfter(
					param0: org.mozilla.javascript.Node,
					param1: org.mozilla.javascript.Node,
				): void;
				public getJsDoc(): string;
				public constructor(
					param0: number,
					param1: org.mozilla.javascript.Node,
					param2: org.mozilla.javascript.Node,
					param3: number,
				);
				public getJsDocNode(): org.mozilla.javascript.ast.Comment;
				public setJsDocNode(param0: org.mozilla.javascript.ast.Comment): void;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				public labelId(param0: number): void;
				public setScope(param0: org.mozilla.javascript.ast.Scope): void;
				public constructor(param0: number, param1: org.mozilla.javascript.Node);
				public addChildToBack(param0: org.mozilla.javascript.Node): void;
				public removeChildren(): void;
				public putIntProp(param0: number, param1: number): void;
				public getLastSibling(): org.mozilla.javascript.Node;
				public resetTargets(): void;
				public addChildrenToBack(param0: org.mozilla.javascript.Node): void;
				public getProp(param0: number): Any;
				public toStringTree(
					param0: org.mozilla.javascript.ast.ScriptNode,
				): string;
				public getLineno(): number;
				public addChildBefore(
					param0: org.mozilla.javascript.Node,
					param1: org.mozilla.javascript.Node,
				): void;
				public getDouble(): number;
				public hasSideEffects(): boolean;
				public setLineno(param0: number): void;
				public addChildrenToFront(param0: org.mozilla.javascript.Node): void;
				public setDouble(param0: number): void;
				public replaceChild(
					param0: org.mozilla.javascript.Node,
					param1: org.mozilla.javascript.Node,
				): void;
				public getLastChild(): org.mozilla.javascript.Node;
				public constructor(param0: number);
			}
			export module Node {
				export class NodeIterator extends java.util
					.Iterator<org.mozilla.javascript.Node> {
					public static class: java.lang.Class<org.mozilla.javascript.Node.NodeIterator>;
					public constructor(param0: org.mozilla.javascript.Node);
					public next(): org.mozilla.javascript.Node;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class PropListItem {
					public static class: java.lang.Class<org.mozilla.javascript.Node.PropListItem>;
					public intValue: number;
					public next: org.mozilla.javascript.Node.PropListItem;
					public objectValue: Any;
					public type: number;
				}
			}
			export class ObjArray {
				public static class: java.lang.Class<org.mozilla.javascript.ObjArray>;
				public indexOf(param0: Any): number;
				public peek(): Any;
				public seal(): void;
				public setSize(param0: number): void;
				public remove(param0: number): void;
				public add(param0: number, param1: Any): void;
				public get(param0: number): Any;
				public set(param0: number, param1: Any): void;
				public constructor();
				public size(): number;
				public toArray(param0: androidNative.Array<Any>, param1: number): void;
				public toArray(): androidNative.Array<Any>;
				public push(param0: Any): void;
				public pop(): Any;
				public toArray(param0: androidNative.Array<Any>): void;
				public clear(): void;
				public add(param0: Any): void;
				public isSealed(): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: Any): number;
			}
			export class ObjToIntMap {
				public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap>;
				public has(param0: Any): boolean;
				public newIterator(): org.mozilla.javascript.ObjToIntMap.Iterator;
				public getKeys(param0: androidNative.Array<Any>, param1: number): void;
				public get(param0: Any, param1: number): number;
				public constructor();
				public size(): number;
				public remove(param0: Any): void;
				public static "<clinit>"(): void;
				public getExisting(param0: Any): number;
				public put(param0: Any, param1: number): void;
				public clear(): void;
				public constructor(param0: number);
				public getKeys(): androidNative.Array<Any>;
				public isEmpty(): boolean;
				public intern(param0: Any): Any;
				public initIterator(
					param0: org.mozilla.javascript.ObjToIntMap.Iterator,
				): void;
			}
			export module ObjToIntMap {
				export class Iterator {
					public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap.Iterator>;
					public master: org.mozilla.javascript.ObjToIntMap;
					public init(
						param0: androidNative.Array<Any>,
						param1: androidNative.Array<number>,
						param2: number,
					): void;
					public getValue(): number;
					public setValue(param0: number): void;
					public constructor(param0: org.mozilla.javascript.ObjToIntMap);
					public getKey(): Any;
					public start(): void;
					public done(): boolean;
					public next(): void;
				}
			}
			export abstract class Ref {
				public static class: java.lang.Class<org.mozilla.javascript.Ref>;
				public get(param0: org.mozilla.javascript.Context): Any;
				public delete(param0: org.mozilla.javascript.Context): boolean;
				public set(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): Any;
				public set(param0: org.mozilla.javascript.Context, param1: Any): Any;
				public has(param0: org.mozilla.javascript.Context): boolean;
				public constructor();
			}
			export class RegExpProxy {
				public static class: java.lang.Class<org.mozilla.javascript.RegExpProxy>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.RegExpProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					action(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
						param3: androidNative.Array<Any>,
						param4: number,
					): Any;
					compileRegExp(
						param0: org.mozilla.javascript.Context,
						param1: string,
						param2: string,
					): Any;
					find_split(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: string,
						param3: string,
						param4: org.mozilla.javascript.Scriptable,
						param5: androidNative.Array<number>,
						param6: androidNative.Array<number>,
						param7: androidNative.Array<boolean>,
						param8: androidNative.Array<androidNative.Array<string>>,
					): number;
					isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
					js_split(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: string,
						param3: androidNative.Array<Any>,
					): Any;
					wrapRegExp(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): org.mozilla.javascript.Scriptable;
				});
				public constructor();
				public static RA_MATCH: number;
				public static RA_REPLACE: number;
				public static RA_SEARCH: number;
				public js_split(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: string,
					param3: androidNative.Array<Any>,
				): Any;
				public compileRegExp(
					param0: org.mozilla.javascript.Context,
					param1: string,
					param2: string,
				): Any;
				public wrapRegExp(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): org.mozilla.javascript.Scriptable;
				public isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
				public action(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Scriptable,
					param3: androidNative.Array<Any>,
					param4: number,
				): Any;
				public find_split(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: string,
					param3: string,
					param4: org.mozilla.javascript.Scriptable,
					param5: androidNative.Array<number>,
					param6: androidNative.Array<number>,
					param7: androidNative.Array<boolean>,
					param8: androidNative.Array<androidNative.Array<string>>,
				): number;
			}
			export abstract class RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.RhinoException>;
				public interpreterLineData: androidNative.Array<number>;
				public interpreterStackInfo: Any;
				public initLineSource(param0: string): void;
				public columnNumber(): number;
				public static formatStackTrace(
					param0: androidNative.Array<org.mozilla.javascript.ScriptStackElement>,
					param1: string,
				): string;
				public static setStackStyle(
					param0: org.mozilla.javascript.StackStyle,
				): void;
				public initLineNumber(param0: number): void;
				public constructor(param0: string);
				public initColumnNumber(param0: number): void;
				public constructor();
				public details(): string;
				public initSourceName(param0: string): void;
				public static "<clinit>"(): void;
				public getScriptStackTrace(): string;
				public sourceName(): string;
				public static useMozillaStackStyle(param0: boolean): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public getScriptStackTrace(param0: java.io.FilenameFilter): string;
				public getScriptStack(
					param0: number,
					param1: string,
				): androidNative.Array<org.mozilla.javascript.ScriptStackElement>;
				public lineSource(): string;
				public getMessage(): string;
				public printStackTrace(param0: java.io.PrintStream): void;
				public static getStackStyle(): org.mozilla.javascript.StackStyle;
				public lineNumber(): number;
				public getScriptStackTrace(param0: number, param1: string): string;
				public recordErrorOrigin(
					param0: string,
					param1: number,
					param2: string,
					param3: number,
				): void;
				public static usesMozillaStackStyle(): boolean;
				public getScriptStack(): androidNative.Array<org.mozilla.javascript.ScriptStackElement>;
			}
			export class Script {
				public static class: java.lang.Class<org.mozilla.javascript.Script>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Script interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					exec(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
					): Any;
				});
				public constructor();
				public exec(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
			}
			export class Scriptable {
				public static class: java.lang.Class<org.mozilla.javascript.Scriptable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Scriptable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					"<clinit>"(): void;
					delete(param0: number): void;
					delete(param0: string): void;
					get(param0: number, param1: org.mozilla.javascript.Scriptable): Any;
					get(param0: string, param1: org.mozilla.javascript.Scriptable): Any;
					getClassName(): string;
					getDefaultValue(param0: java.lang.Class<Any>): Any;
					getIds(): androidNative.Array<Any>;
					getParentScope(): org.mozilla.javascript.Scriptable;
					getPrototype(): org.mozilla.javascript.Scriptable;
					has(
						param0: number,
						param1: org.mozilla.javascript.Scriptable,
					): boolean;
					has(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
					): boolean;
					hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					put(
						param0: number,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
					put(
						param0: string,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
					setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				});
				public constructor();
				public static NOT_FOUND: Any;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public getClassName(): string;
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getIds(): androidNative.Array<Any>;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
			}
			export abstract class ScriptableObject
				implements
					org.mozilla.javascript.Scriptable,
					org.mozilla.javascript.SymbolScriptable,
					org.mozilla.javascript.debug.DebuggableObject,
					org.mozilla.javascript.ConstProperties
			{
				public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject>;
				public static CONST: number;
				public static DONTENUM: number;
				public static EMPTY: number;
				public static PERMANENT: number;
				public static READONLY: number;
				public static UNINITIALIZED_CONST: number;
				public defineOwnProperties(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.ScriptableObject,
				): void;
				public static getProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): Any;
				public avoidObjectDetection(): boolean;
				public static isFalse(param0: Any): boolean;
				public has(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public static hasProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): boolean;
				public getAttributes(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): number;
				public isGetterOrSetter(
					param0: string,
					param1: number,
					param2: boolean,
				): boolean;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public static defineClass(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
					param2: boolean,
				): void;
				public isEmpty(): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(param0: org.mozilla.javascript.Symbol): number;
				public getDefaultValue(param0: java.lang.Class<Any>): Any;
				public isGenericDescriptor(
					param0: org.mozilla.javascript.ScriptableObject,
				): boolean;
				public getExternalArrayLength(): Any;
				public defineConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): void;
				public size(): number;
				public static putProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
					param2: Any,
				): void;
				public preventExtensions(): void;
				public static putConstProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: Any,
				): void;
				public static getClassPrototype(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): org.mozilla.javascript.Scriptable;
				public static ensureSymbolScriptable(
					param0: Any,
				): org.mozilla.javascript.SymbolScriptable;
				public setAttributes(param0: string, param1: number): void;
				public sameValue(param0: Any, param1: Any): boolean;
				public constructor(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Scriptable,
				);
				public static getTypedProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
					param2: java.lang.Class<Any>,
				): Any;
				public delete(param0: string): void;
				public isConst(param0: string): boolean;
				public putConst(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public checkPropertyDefinition(
					param0: org.mozilla.javascript.ScriptableObject,
				): void;
				public checkPropertyChange(
					param0: Any,
					param1: org.mozilla.javascript.ScriptableObject,
					param2: org.mozilla.javascript.ScriptableObject,
				): void;
				public static getTopLevelScope(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public static hasProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
				): boolean;
				public static getProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
				): Any;
				public static defineClass(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
					param2: boolean,
					param3: boolean,
				): string;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public setGetterOrSetter(
					param0: string,
					param1: number,
					param2: org.mozilla.javascript.Callable,
					param3: boolean,
				): void;
				public equivalentValues(param0: Any): Any;
				public isSealed(): boolean;
				public getOwnPropertyDescriptor(
					param0: org.mozilla.javascript.Context,
					param1: Any,
				): org.mozilla.javascript.ScriptableObject;
				public static getPropertyIds(
					param0: org.mozilla.javascript.Scriptable,
				): androidNative.Array<Any>;
				public isAccessorDescriptor(
					param0: org.mozilla.javascript.ScriptableObject,
				): boolean;
				public static ensureScriptableObject(
					param0: Any,
				): org.mozilla.javascript.ScriptableObject;
				public get(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public defineOwnProperty(
					param0: org.mozilla.javascript.Context,
					param1: Any,
					param2: org.mozilla.javascript.ScriptableObject,
				): void;
				public static redefineProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: boolean,
				): void;
				public getIds(): androidNative.Array<Any>;
				public setAttributes(
					param0: org.mozilla.javascript.Symbol,
					param1: number,
				): void;
				public static defineConstProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): void;
				public sealObject(): void;
				public static putProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Symbol,
					param2: Any,
				): void;
				public static defineProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: Any,
					param3: number,
				): void;
				public static deleteProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
				): boolean;
				public static getGeneratorFunctionPrototype(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public delete(param0: number): void;
				public getAllIds(): androidNative.Array<Any>;
				public static ensureScriptable(
					param0: Any,
				): org.mozilla.javascript.Scriptable;
				public has(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public isExtensible(): boolean;
				public setAttributes(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: number,
				): void;
				public static checkValidAttributes(param0: number): void;
				public static hasProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Symbol,
				): boolean;
				public static deleteProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: number,
				): boolean;
				public constructor();
				public defineFunctionProperties(
					param0: androidNative.Array<string>,
					param1: java.lang.Class<Any>,
					param2: number,
				): void;
				public getAttributes(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
				): number;
				public static callMethod(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: androidNative.Array<Any>,
				): Any;
				public put(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public static getTypedProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: java.lang.Class<Any>,
				): Any;
				public associateValue(param0: Any, param1: Any): Any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public setAttributes(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
					param2: number,
				): void;
				public getAttributes(param0: string): number;
				public getSlot(
					param0: org.mozilla.javascript.Context,
					param1: Any,
					param2: org.mozilla.javascript.ScriptableObject.SlotAccess,
				): org.mozilla.javascript.ScriptableObject.Slot;
				public isDataDescriptor(
					param0: org.mozilla.javascript.ScriptableObject,
				): boolean;
				public put(
					param0: number,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public defineProperty(
					param0: string,
					param1: Any,
					param2: number,
				): void;
				public static putProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: string,
					param2: Any,
				): void;
				public setExternalArrayData(
					param0: org.mozilla.javascript.ExternalArrayData,
				): void;
				public static buildClassCtor(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
					param2: boolean,
					param3: boolean,
				): org.mozilla.javascript.BaseFunction;
				public static buildDataDescriptor(
					param0: org.mozilla.javascript.Scriptable,
					param1: Any,
					param2: number,
				): org.mozilla.javascript.ScriptableObject;
				public defineProperty(
					param0: org.mozilla.javascript.Symbol,
					param1: Any,
					param2: number,
				): void;
				public defineOwnProperty(
					param0: org.mozilla.javascript.Context,
					param1: Any,
					param2: org.mozilla.javascript.ScriptableObject,
					param3: boolean,
				): void;
				public getAssociatedValue(param0: Any): Any;
				public static getTopScopeValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: Any,
				): Any;
				public static getProperty(
					param0: org.mozilla.javascript.Scriptable,
					param1: org.mozilla.javascript.Symbol,
				): Any;
				public getIds(
					param0: boolean,
					param1: boolean,
				): androidNative.Array<Any>;
				public get(param0: Any): Any;
				public getGetterOrSetter(
					param0: string,
					param1: number,
					param2: boolean,
				): Any;
				public static getObjectPrototype(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public static callMethod(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: string,
					param3: androidNative.Array<Any>,
				): Any;
				public static isTrue(param0: Any): boolean;
				public getTypeOf(): string;
				public static getArrayPrototype(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public static defineClass(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): void;
				public getAttributes(param0: number): number;
				public get(
					param0: string,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
				public setAttributes(param0: number, param1: number): void;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public applyDescriptorToAttributeBitset(
					param0: number,
					param1: org.mozilla.javascript.ScriptableObject,
				): number;
				public defineProperty(
					param0: string,
					param1: java.lang.Class<Any>,
					param2: number,
				): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineProperty(
					param0: string,
					param1: Any,
					param2: java.lang.reflect.Method,
					param3: java.lang.reflect.Method,
					param4: number,
				): void;
				public getExternalArrayData(): org.mozilla.javascript.ExternalArrayData;
				public static getDefaultValue(
					param0: org.mozilla.javascript.Scriptable,
					param1: java.lang.Class<Any>,
				): Any;
				public static getFunctionPrototype(
					param0: org.mozilla.javascript.Scriptable,
				): org.mozilla.javascript.Scriptable;
				public addLazilyInitializedValue(
					param0: string,
					param1: number,
					param2: org.mozilla.javascript.LazilyLoadedCtor,
					param3: number,
				): void;
			}
			export module ScriptableObject {
				export class GetterSlot extends org.mozilla.javascript.ScriptableObject
					.Slot {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.GetterSlot>;
					public getter: Any;
					public setter: Any;
					public constructor(param0: Any, param1: number, param2: number);
					public getPropertyDescriptor(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
					): org.mozilla.javascript.ScriptableObject;
					public setValue(
						param0: Any,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
					): boolean;
					public getValue(param0: org.mozilla.javascript.Scriptable): Any;
				}
				export class KeyComparator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.KeyComparator>;
					public compare(param0: Any, param1: Any): number;
					public constructor();
				}
				export class Slot {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.Slot>;
					public indexOrHash: number;
					public name: Any;
					public next: org.mozilla.javascript.ScriptableObject.Slot;
					public orderedNext: org.mozilla.javascript.ScriptableObject.Slot;
					public value: Any;
					public constructor(param0: Any, param1: number, param2: number);
					public getPropertyDescriptor(
						param0: org.mozilla.javascript.Context,
						param1: org.mozilla.javascript.Scriptable,
					): org.mozilla.javascript.ScriptableObject;
					public getAttributes(): number;
					public setAttributes(param0: number): void;
					public setValue(
						param0: Any,
						param1: org.mozilla.javascript.Scriptable,
						param2: org.mozilla.javascript.Scriptable,
					): boolean;
					public getValue(param0: org.mozilla.javascript.Scriptable): Any;
				}
				export class SlotAccess {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.SlotAccess>;
					public static CONVERT_ACCESSOR_TO_DATA: org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static MODIFY: org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static MODIFY_CONST: org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static MODIFY_GETTER_SETTER: org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static QUERY: org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static "<clinit>"(): void;
					public static valueOf(
						param0: string,
					): org.mozilla.javascript.ScriptableObject.SlotAccess;
					public static values(): androidNative.Array<org.mozilla.javascript.ScriptableObject.SlotAccess>;
				}
			}
			export class ScriptStackElement {
				public static class: java.lang.Class<org.mozilla.javascript.ScriptStackElement>;
				public fileName: string;
				public functionName: string;
				public lineNumber: number;
				public constructor(param0: string, param1: string, param2: number);
				public renderJavaStyle(param0: java.lang.StringBuilder): void;
				public renderMozillaStyle(param0: java.lang.StringBuilder): void;
				public renderV8Style(param0: java.lang.StringBuilder): void;
				public toString(): string;
			}
			export abstract class SecurityController {
				public static class: java.lang.Class<org.mozilla.javascript.SecurityController>;
				public static initGlobal(
					param0: org.mozilla.javascript.SecurityController,
				): void;
				public static hasGlobal(): boolean;
				public static createLoader(
					param0: java.lang.ClassLoader,
					param1: Any,
				): org.mozilla.javascript.GeneratedClassLoader;
				public execWithDomain(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: org.mozilla.javascript.Script,
					param3: Any,
				): Any;
				public createClassLoader(
					param0: java.lang.ClassLoader,
					param1: Any,
				): org.mozilla.javascript.GeneratedClassLoader;
				public callWithDomain(
					param0: Any,
					param1: org.mozilla.javascript.Context,
					param2: org.mozilla.javascript.Callable,
					param3: org.mozilla.javascript.Scriptable,
					param4: org.mozilla.javascript.Scriptable,
					param5: androidNative.Array<Any>,
				): Any;
				public getStaticSecurityDomainClassInternal(): java.lang.Class<Any>;
				public static global(): org.mozilla.javascript.SecurityController;
				public static getStaticSecurityDomainClass(): java.lang.Class<Any>;
				public constructor();
				public getDynamicSecurityDomain(param0: Any): Any;
			}
			export class StackStyle {
				public static class: java.lang.Class<org.mozilla.javascript.StackStyle>;
				public static MOZILLA: org.mozilla.javascript.StackStyle;
				public static RHINO: org.mozilla.javascript.StackStyle;
				public static V8: org.mozilla.javascript.StackStyle;
				public static "<clinit>"(): void;
				public static valueOf(
					param0: string,
				): org.mozilla.javascript.StackStyle;
				public static values(): androidNative.Array<org.mozilla.javascript.StackStyle>;
			}
			// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
			export class Symbol {
				public static class: java.lang.Class<org.mozilla.javascript.Symbol>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Symbol interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
			}
			export class SymbolScriptable {
				public static class: java.lang.Class<org.mozilla.javascript.SymbolScriptable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.SymbolScriptable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					delete(param0: org.mozilla.javascript.Symbol): void;
					get(
						param0: org.mozilla.javascript.Symbol,
						param1: org.mozilla.javascript.Scriptable,
					): Any;
					has(
						param0: org.mozilla.javascript.Symbol,
						param1: org.mozilla.javascript.Scriptable,
					): boolean;
					put(
						param0: org.mozilla.javascript.Symbol,
						param1: org.mozilla.javascript.Scriptable,
						param2: Any,
					): void;
				});
				public constructor();
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public has(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): boolean;
				public put(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): void;
				public get(
					param0: org.mozilla.javascript.Symbol,
					param1: org.mozilla.javascript.Scriptable,
				): Any;
			}
			export class Token {
				public static class: java.lang.Class<org.mozilla.javascript.Token>;
				public static ADD: number;
				public static AND: number;
				public static ARRAYCOMP: number;
				public static ARRAYLIT: number;
				public static ARROW: number;
				public static ASSIGN: number;
				public static ASSIGN_ADD: number;
				public static ASSIGN_BITAND: number;
				public static ASSIGN_BITOR: number;
				public static ASSIGN_BITXOR: number;
				public static ASSIGN_DIV: number;
				public static ASSIGN_LSH: number;
				public static ASSIGN_MOD: number;
				public static ASSIGN_MUL: number;
				public static ASSIGN_RSH: number;
				public static ASSIGN_SUB: number;
				public static ASSIGN_URSH: number;
				public static BINDNAME: number;
				public static BITAND: number;
				public static BITNOT: number;
				public static BITOR: number;
				public static BITXOR: number;
				public static BLOCK: number;
				public static BREAK: number;
				public static CALL: number;
				public static CASE: number;
				public static CATCH: number;
				public static CATCH_SCOPE: number;
				public static COLON: number;
				public static COLONCOLON: number;
				public static COMMA: number;
				public static COMMENT: number;
				public static CONST: number;
				public static CONTINUE: number;
				public static DEBUGGER: number;
				public static DEC: number;
				public static DEFAULT: number;
				public static DEFAULTNAMESPACE: number;
				public static DELPROP: number;
				public static DEL_REF: number;
				public static DIV: number;
				public static DO: number;
				public static DOT: number;
				public static DOTDOT: number;
				public static DOTQUERY: number;
				public static ELSE: number;
				public static EMPTY: number;
				public static ENTERWITH: number;
				public static ENUM_ID: number;
				public static ENUM_INIT_ARRAY: number;
				public static ENUM_INIT_KEYS: number;
				public static ENUM_INIT_VALUES: number;
				public static ENUM_INIT_VALUES_IN_ORDER: number;
				public static ENUM_NEXT: number;
				public static EOF: number;
				public static EOL: number;
				public static EQ: number;
				public static ERROR: number;
				public static ESCXMLATTR: number;
				public static ESCXMLTEXT: number;
				public static EXPORT: number;
				public static EXPR_RESULT: number;
				public static EXPR_VOID: number;
				public static FALSE: number;
				public static FINALLY: number;
				public static FIRST_ASSIGN: number;
				public static FIRST_BYTECODE_TOKEN: number;
				public static FOR: number;
				public static FUNCTION: number;
				public static GE: number;
				public static GENEXPR: number;
				public static GET: number;
				public static GETELEM: number;
				public static GETPROP: number;
				public static GETPROPNOWARN: number;
				public static GETVAR: number;
				public static GET_REF: number;
				public static GOTO: number;
				public static GT: number;
				public static HOOK: number;
				public static IF: number;
				public static IFEQ: number;
				public static IFNE: number;
				public static IMPORT: number;
				public static IN: number;
				public static INC: number;
				public static INSTANCEOF: number;
				public static JSR: number;
				public static LABEL: number;
				public static LAST_ASSIGN: number;
				public static LAST_BYTECODE_TOKEN: number;
				public static LAST_TOKEN: number;
				public static LB: number;
				public static LC: number;
				public static LE: number;
				public static LEAVEWITH: number;
				public static LET: number;
				public static LETEXPR: number;
				public static LOCAL_BLOCK: number;
				public static LOCAL_LOAD: number;
				public static LOOP: number;
				public static LP: number;
				public static LSH: number;
				public static LT: number;
				public static METHOD: number;
				public static MOD: number;
				public static MUL: number;
				public static NAME: number;
				public static NE: number;
				public static NEG: number;
				public static NEW: number;
				public static NOT: number;
				public static NULL: number;
				public static NUMBER: number;
				public static OBJECTLIT: number;
				public static OR: number;
				public static POS: number;
				public static RB: number;
				public static RC: number;
				public static REF_CALL: number;
				public static REF_MEMBER: number;
				public static REF_NAME: number;
				public static REF_NS_MEMBER: number;
				public static REF_NS_NAME: number;
				public static REF_SPECIAL: number;
				public static REGEXP: number;
				public static RESERVED: number;
				public static RETHROW: number;
				public static RETURN: number;
				public static RETURN_RESULT: number;
				public static RP: number;
				public static RSH: number;
				public static SCRIPT: number;
				public static SEMI: number;
				public static SET: number;
				public static SETCONST: number;
				public static SETCONSTVAR: number;
				public static SETELEM: number;
				public static SETELEM_OP: number;
				public static SETNAME: number;
				public static SETPROP: number;
				public static SETPROP_OP: number;
				public static SETVAR: number;
				public static SET_REF: number;
				public static SET_REF_OP: number;
				public static SHEQ: number;
				public static SHNE: number;
				public static STRICT_SETNAME: number;
				public static STRING: number;
				public static SUB: number;
				public static SWITCH: number;
				public static TARGET: number;
				public static THIS: number;
				public static THISFN: number;
				public static THROW: number;
				public static TO_DOUBLE: number;
				public static TO_OBJECT: number;
				public static TRUE: number;
				public static TRY: number;
				public static TYPEOF: number;
				public static TYPEOFNAME: number;
				public static URSH: number;
				public static USE_STACK: number;
				public static VAR: number;
				public static VOID: number;
				public static WHILE: number;
				public static WITH: number;
				public static WITHEXPR: number;
				public static XML: number;
				public static XMLATTR: number;
				public static XMLEND: number;
				public static YIELD: number;
				public static YIELD_STAR: number;
				public static printICode: boolean;
				public static printNames: boolean;
				public static printTrees: boolean;
				public static keywordToName(param0: number): string;
				public static isValidToken(param0: number): boolean;
				public static name(param0: number): string;
				public static typeToName(param0: number): string;
				public constructor();
			}
			export module Token {
				export class CommentType {
					public static class: java.lang.Class<org.mozilla.javascript.Token.CommentType>;
					public static BLOCK_COMMENT: org.mozilla.javascript.Token.CommentType;
					public static HTML: org.mozilla.javascript.Token.CommentType;
					public static JSDOC: org.mozilla.javascript.Token.CommentType;
					public static LINE: org.mozilla.javascript.Token.CommentType;
					public static "<clinit>"(): void;
					public static values(): androidNative.Array<org.mozilla.javascript.Token.CommentType>;
					public static valueOf(
						param0: string,
					): org.mozilla.javascript.Token.CommentType;
				}
			}
			export class WrapFactory {
				public static class: java.lang.Class<org.mozilla.javascript.WrapFactory>;
				public setJavaPrimitiveWrap(param0: boolean): void;
				public wrapAsJavaObject(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
					param3: java.lang.Class<Any>,
				): org.mozilla.javascript.Scriptable;
				public isJavaPrimitiveWrap(): boolean;
				public wrapJavaClass(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: java.lang.Class<Any>,
				): org.mozilla.javascript.Scriptable;
				public wrapNewObject(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
				): org.mozilla.javascript.Scriptable;
				public constructor();
				public wrap(
					param0: org.mozilla.javascript.Context,
					param1: org.mozilla.javascript.Scriptable,
					param2: Any,
					param3: java.lang.Class<Any>,
				): Any;
			}
			export module xml {
				export abstract class XMLLib {
					public static class: java.lang.Class<org.mozilla.javascript.xml.XMLLib>;
					public setIgnoreProcessingInstructions(param0: boolean): void;
					public getPrettyIndent(): number;
					public toDefaultXmlNamespace(
						param0: org.mozilla.javascript.Context,
						param1: Any,
					): Any;
					public isPrettyPrinting(): boolean;
					public nameRef(
						param0: org.mozilla.javascript.Context,
						param1: Any,
						param2: org.mozilla.javascript.Scriptable,
						param3: number,
					): org.mozilla.javascript.Ref;
					public setPrettyIndent(param0: number): void;
					public escapeTextValue(param0: Any): string;
					public nameRef(
						param0: org.mozilla.javascript.Context,
						param1: Any,
						param2: Any,
						param3: org.mozilla.javascript.Scriptable,
						param4: number,
					): org.mozilla.javascript.Ref;
					public setPrettyPrinting(param0: boolean): void;
					public bindToScope(
						param0: org.mozilla.javascript.Scriptable,
					): org.mozilla.javascript.xml.XMLLib;
					public constructor();
					public static extractFromScope(
						param0: org.mozilla.javascript.Scriptable,
					): org.mozilla.javascript.xml.XMLLib;
					public isIgnoreProcessingInstructions(): boolean;
					public setIgnoreComments(param0: boolean): void;
					public isIgnoreWhitespace(): boolean;
					public setIgnoreWhitespace(param0: boolean): void;
					public static extractFromScopeOrNull(
						param0: org.mozilla.javascript.Scriptable,
					): org.mozilla.javascript.xml.XMLLib;
					public escapeAttributeValue(param0: Any): string;
					public isXMLName(
						param0: org.mozilla.javascript.Context,
						param1: Any,
					): boolean;
					public isIgnoreComments(): boolean;
				}
				export module XMLLib {
					export abstract class Factory {
						public static class: java.lang.Class<org.mozilla.javascript.xml.XMLLib.Factory>;
						public constructor();
						public static create(
							param0: string,
						): org.mozilla.javascript.xml.XMLLib.Factory;
						public getImplementationClassName(): string;
					}
				}
			}
		}
	}
}
