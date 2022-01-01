// source: cosmos/upgrade/v1beta1/upgrade.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal', null, global);
goog.exportSymbol('proto.cosmos.upgrade.v1beta1.ModuleVersion', null, global);
goog.exportSymbol('proto.cosmos.upgrade.v1beta1.Plan', null, global);
goog.exportSymbol('proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal', null, global);
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
proto.cosmos.upgrade.v1beta1.Plan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.upgrade.v1beta1.Plan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.upgrade.v1beta1.Plan.displayName = 'proto.cosmos.upgrade.v1beta1.Plan';
}
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
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.displayName = 'proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal';
}
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
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.displayName = 'proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal';
}
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
proto.cosmos.upgrade.v1beta1.ModuleVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.upgrade.v1beta1.ModuleVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.upgrade.v1beta1.ModuleVersion.displayName = 'proto.cosmos.upgrade.v1beta1.ModuleVersion';
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
proto.cosmos.upgrade.v1beta1.Plan.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.upgrade.v1beta1.Plan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.upgrade.v1beta1.Plan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.Plan.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    info: jspb.Message.getFieldWithDefault(msg, 4, ""),
    upgradedClientState: (f = msg.getUpgradedClientState()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.upgrade.v1beta1.Plan}
 */
proto.cosmos.upgrade.v1beta1.Plan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.upgrade.v1beta1.Plan;
  return proto.cosmos.upgrade.v1beta1.Plan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.upgrade.v1beta1.Plan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.upgrade.v1beta1.Plan}
 */
proto.cosmos.upgrade.v1beta1.Plan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 5:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setUpgradedClientState(value);
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
proto.cosmos.upgrade.v1beta1.Plan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.upgrade.v1beta1.Plan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.upgrade.v1beta1.Plan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.Plan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpgradedClientState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
*/
proto.cosmos.upgrade.v1beta1.Plan.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 height = 3;
 * @return {number}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string info = 4;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.setInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Any upgraded_client_state = 5;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.getUpgradedClientState = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
*/
proto.cosmos.upgrade.v1beta1.Plan.prototype.setUpgradedClientState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.upgrade.v1beta1.Plan} returns this
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.clearUpgradedClientState = function() {
  return this.setUpgradedClientState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.upgrade.v1beta1.Plan.prototype.hasUpgradedClientState = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    plan: (f = msg.getPlan()) && proto.cosmos.upgrade.v1beta1.Plan.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal;
  return proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.cosmos.upgrade.v1beta1.Plan;
      reader.readMessage(value,proto.cosmos.upgrade.v1beta1.Plan.deserializeBinaryFromReader);
      msg.setPlan(value);
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
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlan();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cosmos.upgrade.v1beta1.Plan.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} returns this
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} returns this
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Plan plan = 3;
 * @return {?proto.cosmos.upgrade.v1beta1.Plan}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.getPlan = function() {
  return /** @type{?proto.cosmos.upgrade.v1beta1.Plan} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.upgrade.v1beta1.Plan, 3));
};


/**
 * @param {?proto.cosmos.upgrade.v1beta1.Plan|undefined} value
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} returns this
*/
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.setPlan = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal} returns this
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.clearPlan = function() {
  return this.setPlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.prototype.hasPlan = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal}
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal;
  return proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal}
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal} returns this
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal} returns this
 */
proto.cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





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
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.upgrade.v1beta1.ModuleVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.upgrade.v1beta1.ModuleVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.cosmos.upgrade.v1beta1.ModuleVersion}
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.upgrade.v1beta1.ModuleVersion;
  return proto.cosmos.upgrade.v1beta1.ModuleVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.upgrade.v1beta1.ModuleVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.upgrade.v1beta1.ModuleVersion}
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
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
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.upgrade.v1beta1.ModuleVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.upgrade.v1beta1.ModuleVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.upgrade.v1beta1.ModuleVersion} returns this
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 version = 2;
 * @return {number}
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.upgrade.v1beta1.ModuleVersion} returns this
 */
proto.cosmos.upgrade.v1beta1.ModuleVersion.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.upgrade.v1beta1);
