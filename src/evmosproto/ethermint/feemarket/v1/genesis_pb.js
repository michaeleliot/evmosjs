// source: ethermint/feemarket/v1/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var ethermint_feemarket_v1_feemarket_pb = require('../../../ethermint/feemarket/v1/feemarket_pb.js');
goog.object.extend(proto, ethermint_feemarket_v1_feemarket_pb);
goog.exportSymbol('proto.ethermint.feemarket.v1.GenesisState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ethermint.feemarket.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethermint.feemarket.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ethermint.feemarket.v1.GenesisState.displayName = 'proto.ethermint.feemarket.v1.GenesisState';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.ethermint.feemarket.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethermint.feemarket.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethermint.feemarket.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && ethermint_feemarket_v1_feemarket_pb.Params.toObject(includeInstance, f),
    baseFee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockGas: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ethermint.feemarket.v1.GenesisState}
 */
proto.ethermint.feemarket.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethermint.feemarket.v1.GenesisState;
  return proto.ethermint.feemarket.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethermint.feemarket.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethermint.feemarket.v1.GenesisState}
 */
proto.ethermint.feemarket.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ethermint_feemarket_v1_feemarket_pb.Params;
      reader.readMessage(value,ethermint_feemarket_v1_feemarket_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFee(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockGas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethermint.feemarket.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethermint.feemarket.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethermint.feemarket.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ethermint_feemarket_v1_feemarket_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getBaseFee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockGas();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.ethermint.feemarket.v1.Params}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.ethermint.feemarket.v1.Params} */ (
    jspb.Message.getWrapperField(this, ethermint_feemarket_v1_feemarket_pb.Params, 1));
};


/**
 * @param {?proto.ethermint.feemarket.v1.Params|undefined} value
 * @return {!proto.ethermint.feemarket.v1.GenesisState} returns this
*/
proto.ethermint.feemarket.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ethermint.feemarket.v1.GenesisState} returns this
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string base_fee = 2;
 * @return {string}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.getBaseFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ethermint.feemarket.v1.GenesisState} returns this
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.setBaseFee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 block_gas = 3;
 * @return {number}
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.getBlockGas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ethermint.feemarket.v1.GenesisState} returns this
 */
proto.ethermint.feemarket.v1.GenesisState.prototype.setBlockGas = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.ethermint.feemarket.v1);
