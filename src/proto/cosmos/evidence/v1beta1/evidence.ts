/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/evidence/v1beta1/evidence.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace cosmos.evidence.v1beta1 {
    export class Equivocation extends pb_1.Message {
        constructor(data?: any[] | {
            height?: number;
            time?: dependency_2.google.protobuf.Timestamp;
            power?: number;
            consensus_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("time" in data && data.time != undefined) {
                    this.time = data.time;
                }
                if ("power" in data && data.power != undefined) {
                    this.power = data.power;
                }
                if ("consensus_address" in data && data.consensus_address != undefined) {
                    this.consensus_address = data.consensus_address;
                }
            }
        }
        get height() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get time() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2) as dependency_2.google.protobuf.Timestamp;
        }
        set time(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get power() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set power(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get consensus_address() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set consensus_address(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            height?: number;
            time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            power?: number;
            consensus_address?: string;
        }) {
            const message = new Equivocation({});
            if (data.height != null) {
                message.height = data.height;
            }
            if (data.time != null) {
                message.time = dependency_2.google.protobuf.Timestamp.fromObject(data.time);
            }
            if (data.power != null) {
                message.power = data.power;
            }
            if (data.consensus_address != null) {
                message.consensus_address = data.consensus_address;
            }
            return message;
        }
        toObject() {
            const data: {
                height?: number;
                time?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
                power?: number;
                consensus_address?: string;
            } = {};
            if (this.height != null) {
                data.height = this.height;
            }
            if (this.time != null) {
                data.time = this.time.toObject();
            }
            if (this.power != null) {
                data.power = this.power;
            }
            if (this.consensus_address != null) {
                data.consensus_address = this.consensus_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.height !== undefined)
                writer.writeInt64(1, this.height);
            if (this.time !== undefined)
                writer.writeMessage(2, this.time, () => this.time.serialize(writer));
            if (this.power !== undefined)
                writer.writeInt64(3, this.power);
            if (typeof this.consensus_address === "string" && this.consensus_address.length)
                writer.writeString(4, this.consensus_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Equivocation {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Equivocation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.height = reader.readInt64();
                        break;
                    case 2:
                        reader.readMessage(message.time, () => message.time = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 3:
                        message.power = reader.readInt64();
                        break;
                    case 4:
                        message.consensus_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Equivocation {
            return Equivocation.deserialize(bytes);
        }
    }
}
