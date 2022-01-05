/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: tendermint/types/block.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 *  */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as dependency_2 from "./types";
import * as dependency_3 from "./evidence";
import * as pb_1 from "google-protobuf";
export namespace tendermint.types {
    export class Block extends pb_1.Message {
        constructor(data?: any[] | {
            header?: dependency_2.tendermint.types.Header;
            data?: dependency_2.tendermint.types.Data;
            evidence?: dependency_3.tendermint.types.EvidenceList;
            last_commit?: dependency_2.tendermint.types.Commit;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("header" in data && data.header != undefined) {
                    this.header = data.header;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
                if ("last_commit" in data && data.last_commit != undefined) {
                    this.last_commit = data.last_commit;
                }
            }
        }
        get header() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Header, 1) as dependency_2.tendermint.types.Header;
        }
        set header(value: dependency_2.tendermint.types.Header) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get data() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Data, 2) as dependency_2.tendermint.types.Data;
        }
        set data(value: dependency_2.tendermint.types.Data) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get evidence() {
            return pb_1.Message.getWrapperField(this, dependency_3.tendermint.types.EvidenceList, 3) as dependency_3.tendermint.types.EvidenceList;
        }
        set evidence(value: dependency_3.tendermint.types.EvidenceList) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get last_commit() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.Commit, 4) as dependency_2.tendermint.types.Commit;
        }
        set last_commit(value: dependency_2.tendermint.types.Commit) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        static fromObject(data: {
            header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
            data?: ReturnType<typeof dependency_2.tendermint.types.Data.prototype.toObject>;
            evidence?: ReturnType<typeof dependency_3.tendermint.types.EvidenceList.prototype.toObject>;
            last_commit?: ReturnType<typeof dependency_2.tendermint.types.Commit.prototype.toObject>;
        }) {
            const message = new Block({});
            if (data.header != null) {
                message.header = dependency_2.tendermint.types.Header.fromObject(data.header);
            }
            if (data.data != null) {
                message.data = dependency_2.tendermint.types.Data.fromObject(data.data);
            }
            if (data.evidence != null) {
                message.evidence = dependency_3.tendermint.types.EvidenceList.fromObject(data.evidence);
            }
            if (data.last_commit != null) {
                message.last_commit = dependency_2.tendermint.types.Commit.fromObject(data.last_commit);
            }
            return message;
        }
        toObject() {
            const data: {
                header?: ReturnType<typeof dependency_2.tendermint.types.Header.prototype.toObject>;
                data?: ReturnType<typeof dependency_2.tendermint.types.Data.prototype.toObject>;
                evidence?: ReturnType<typeof dependency_3.tendermint.types.EvidenceList.prototype.toObject>;
                last_commit?: ReturnType<typeof dependency_2.tendermint.types.Commit.prototype.toObject>;
            } = {};
            if (this.header != null) {
                data.header = this.header.toObject();
            }
            if (this.data != null) {
                data.data = this.data.toObject();
            }
            if (this.evidence != null) {
                data.evidence = this.evidence.toObject();
            }
            if (this.last_commit != null) {
                data.last_commit = this.last_commit.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.header !== undefined)
                writer.writeMessage(1, this.header, () => this.header.serialize(writer));
            if (this.data !== undefined)
                writer.writeMessage(2, this.data, () => this.data.serialize(writer));
            if (this.evidence !== undefined)
                writer.writeMessage(3, this.evidence, () => this.evidence.serialize(writer));
            if (this.last_commit !== undefined)
                writer.writeMessage(4, this.last_commit, () => this.last_commit.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Block {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Block();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.header, () => message.header = dependency_2.tendermint.types.Header.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.data, () => message.data = dependency_2.tendermint.types.Data.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.evidence, () => message.evidence = dependency_3.tendermint.types.EvidenceList.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.last_commit, () => message.last_commit = dependency_2.tendermint.types.Commit.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Block {
            return Block.deserialize(bytes);
        }
    }
}
