/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/crisis/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.crisis.v1beta1 {
    export class MsgVerifyInvariant extends pb_1.Message {
        constructor(data?: any[] | {
            sender?: string;
            invariant_module_name?: string;
            invariant_route?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sender" in data && data.sender != undefined) {
                    this.sender = data.sender;
                }
                if ("invariant_module_name" in data && data.invariant_module_name != undefined) {
                    this.invariant_module_name = data.invariant_module_name;
                }
                if ("invariant_route" in data && data.invariant_route != undefined) {
                    this.invariant_route = data.invariant_route;
                }
            }
        }
        get sender() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set sender(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get invariant_module_name() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set invariant_module_name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get invariant_route() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set invariant_route(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            sender?: string;
            invariant_module_name?: string;
            invariant_route?: string;
        }) {
            const message = new MsgVerifyInvariant({});
            if (data.sender != null) {
                message.sender = data.sender;
            }
            if (data.invariant_module_name != null) {
                message.invariant_module_name = data.invariant_module_name;
            }
            if (data.invariant_route != null) {
                message.invariant_route = data.invariant_route;
            }
            return message;
        }
        toObject() {
            const data: {
                sender?: string;
                invariant_module_name?: string;
                invariant_route?: string;
            } = {};
            if (this.sender != null) {
                data.sender = this.sender;
            }
            if (this.invariant_module_name != null) {
                data.invariant_module_name = this.invariant_module_name;
            }
            if (this.invariant_route != null) {
                data.invariant_route = this.invariant_route;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.sender === "string" && this.sender.length)
                writer.writeString(1, this.sender);
            if (typeof this.invariant_module_name === "string" && this.invariant_module_name.length)
                writer.writeString(2, this.invariant_module_name);
            if (typeof this.invariant_route === "string" && this.invariant_route.length)
                writer.writeString(3, this.invariant_route);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVerifyInvariant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVerifyInvariant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sender = reader.readString();
                        break;
                    case 2:
                        message.invariant_module_name = reader.readString();
                        break;
                    case 3:
                        message.invariant_route = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariant {
            return MsgVerifyInvariant.deserialize(bytes);
        }
    }
    export class MsgVerifyInvariantResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgVerifyInvariantResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVerifyInvariantResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVerifyInvariantResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariantResponse {
            return MsgVerifyInvariantResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedMsgService {
        static definition = {
            VerifyInvariant: {
                path: "/cosmos.crisis.v1beta1.Msg/VerifyInvariant",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgVerifyInvariant) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgVerifyInvariant.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgVerifyInvariantResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgVerifyInvariantResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract VerifyInvariant(call: grpc_1.ServerUnaryCall<MsgVerifyInvariant, MsgVerifyInvariantResponse>, callback: grpc_1.sendUnaryData<MsgVerifyInvariantResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options)
        }
        VerifyInvariant: GrpcUnaryServiceInterface<MsgVerifyInvariant, MsgVerifyInvariantResponse> = (message: MsgVerifyInvariant, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgVerifyInvariantResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgVerifyInvariantResponse>, callback?: grpc_1.requestCallback<MsgVerifyInvariantResponse>): grpc_1.ClientUnaryCall => {
            return super.VerifyInvariant(message, metadata, options, callback);
        };
    }
}
