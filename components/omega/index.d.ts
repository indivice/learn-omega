import { ComponentIndex, GlobalAttributes, OmegaString } from "./type";
export type ChildDynamicProperty = Dynamic<string | String | Component>;
export type Properties = {
    __driver__?: object;
    ondestroy?: () => any;
    children?: (Component | OmegaString | ChildDynamicProperty)[];
    child?: Component | OmegaString | ChildDynamicProperty;
    style?: {
        [P in keyof Partial<CSSStyleDeclaration & {
            "viewTransitionName": string;
        }>]: string | String | Dynamic<string | String>;
    } | Dynamic<{
        [P in keyof Partial<CSSStyleDeclaration & {
            "viewTransitionName": string;
        }>]: string | String | Dynamic<string | String>;
    }>;
    reference?: State<any>;
} & Partial<GlobalAttributes>;
export declare class Component {
    name: ComponentIndex;
    properties: Properties;
    constructor(name: ComponentIndex, properties?: Properties);
}
export declare class Dynamic<T> {
    condition: {
        set: (cond: string) => void;
        get: () => string;
    };
    callback: () => T;
    constructor(callback: (condition: (cond: string) => void) => T, condition: {
        set: (cond: string) => void;
        get: () => string;
    });
    assign(callback: () => any): any;
}
export type StateEvent<T> = {
    event: "update";
    value: T;
} | {
    event: "batch";
    value: Map<State<any>, any>;
};
export declare class State<T> {
    value: T;
    subscribers: Set<(event: StateEvent<T>) => any>;
    constructor(value: T);
    static batch(...batches: {
        state: State<any>;
        value: any;
    }[]): void;
    get(): T;
    set(value: T, batch?: boolean): {
        state: State<T>;
        value: T;
    };
    update(callback: (prev: T) => T, batch?: boolean): {
        state: State<T>;
        value: T;
    };
    listen(callback: (event: StateEvent<T>) => any): (event: StateEvent<T>) => any;
}
export declare function $<T>(callback: (condition: (cond: string) => void) => T): Dynamic<T>;
export declare function Render(properties: {
    selector: string;
    app: () => Component;
}): void;
