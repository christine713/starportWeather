import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "chrismos.weather.weather";
export interface weatherPost {
    creator: string;
    id: number;
    title: string;
    body: string;
}
export declare const weatherPost: {
    encode(message: weatherPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): weatherPost;
    fromJSON(object: any): weatherPost;
    toJSON(message: weatherPost): unknown;
    fromPartial(object: DeepPartial<weatherPost>): weatherPost;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
