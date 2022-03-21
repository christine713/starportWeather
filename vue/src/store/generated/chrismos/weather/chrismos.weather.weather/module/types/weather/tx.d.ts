import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "chrismos.weather.weather";
export interface MsgWeatherPost {
    creator: string;
    title: string;
    body: string;
}
export interface MsgWeatherPostResponse {
    id: number;
}
export declare const MsgWeatherPost: {
    encode(message: MsgWeatherPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWeatherPost;
    fromJSON(object: any): MsgWeatherPost;
    toJSON(message: MsgWeatherPost): unknown;
    fromPartial(object: DeepPartial<MsgWeatherPost>): MsgWeatherPost;
};
export declare const MsgWeatherPostResponse: {
    encode(message: MsgWeatherPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWeatherPostResponse;
    fromJSON(object: any): MsgWeatherPostResponse;
    toJSON(message: MsgWeatherPostResponse): unknown;
    fromPartial(object: DeepPartial<MsgWeatherPostResponse>): MsgWeatherPostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    WeatherPost(request: MsgWeatherPost): Promise<MsgWeatherPostResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    WeatherPost(request: MsgWeatherPost): Promise<MsgWeatherPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
