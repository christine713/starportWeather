/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "chrismos.weather.weather";

export interface MsgWeatherPost {
  creator: string;
  title: string;
  body: string;
}

export interface MsgWeatherPostResponse {
  id: number;
}

const baseMsgWeatherPost: object = { creator: "", title: "", body: "" };

export const MsgWeatherPost = {
  encode(message: MsgWeatherPost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWeatherPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWeatherPost } as MsgWeatherPost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWeatherPost {
    const message = { ...baseMsgWeatherPost } as MsgWeatherPost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgWeatherPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWeatherPost>): MsgWeatherPost {
    const message = { ...baseMsgWeatherPost } as MsgWeatherPost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgWeatherPostResponse: object = { id: 0 };

export const MsgWeatherPostResponse = {
  encode(
    message: MsgWeatherPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWeatherPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWeatherPostResponse } as MsgWeatherPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWeatherPostResponse {
    const message = { ...baseMsgWeatherPostResponse } as MsgWeatherPostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgWeatherPostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWeatherPostResponse>
  ): MsgWeatherPostResponse {
    const message = { ...baseMsgWeatherPostResponse } as MsgWeatherPostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WeatherPost(request: MsgWeatherPost): Promise<MsgWeatherPostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  WeatherPost(request: MsgWeatherPost): Promise<MsgWeatherPostResponse> {
    const data = MsgWeatherPost.encode(request).finish();
    const promise = this.rpc.request(
      "chrismos.weather.weather.Msg",
      "WeatherPost",
      data
    );
    return promise.then((data) =>
      MsgWeatherPostResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
