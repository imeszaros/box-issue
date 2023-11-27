//region block: pre-declaration
class Unit {}
//endregion
var Unit_instance;
function Unit_getInstance() {
  return Unit_instance;
}
function implement(interfaces) {
  var maxSize = 1;
  var masks = [];
  var inductionVariable = 0;
  var last = interfaces.length;
  while (inductionVariable < last) {
    var i = interfaces[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentSize = maxSize;
    var tmp1_elvis_lhs = i.prototype.$imask$;
    var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
    if (!(imask == null)) {
      masks.push(imask);
      currentSize = imask.length;
    }
    var iid = i.$metadata$.iid;
    var tmp;
    if (iid == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp = bitMaskWith(iid);
    }
    var iidImask = tmp;
    if (!(iidImask == null)) {
      masks.push(iidImask);
      currentSize = Math.max(currentSize, iidImask.length);
    }
    if (currentSize > maxSize) {
      maxSize = currentSize;
    }
  }
  return compositeBitMask(maxSize, masks);
}
function bitMaskWith(activeBit) {
  var numberIndex = activeBit >> 5;
  var intArray = new Int32Array(numberIndex + 1 | 0);
  var positionInNumber = activeBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
  return intArray;
}
function compositeBitMask(capacity, masks) {
  var tmp = 0;
  var tmp_0 = new Int32Array(capacity);
  while (tmp < capacity) {
    var tmp_1 = tmp;
    var result = 0;
    var inductionVariable = 0;
    var last = masks.length;
    while (inductionVariable < last) {
      var mask = masks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (tmp_1 < mask.length) {
        result = result | mask[tmp_1];
      }
    }
    tmp_0[tmp_1] = result;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function protoOf(constructor) {
  return constructor.prototype;
}
function defineProp(obj, name, getter, setter) {
  return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
}
function createThis(ctor, box) {
  var self_0 = Object.create(ctor.prototype);
  boxApply(self_0, box);
  return self_0;
}
function boxApply(self_0, box) {
  if (box !== VOID)
    Object.assign(self_0, box);
}
function classMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata('class', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, iid) {
  var undef = VOID;
  return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
}
function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = metadataConstructor(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity == null ? [] : suspendArity);
  ctor.$metadata$ = metadata;
  if (!(interfaces == null)) {
    var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
    receiver.$imask$ = implement(interfaces);
  }
}
function objectMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata('object', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function get_VOID() {
  _init_properties_void_kt__3zg9as();
  return VOID;
}
var VOID;
var properties_initialized_void_kt_e4ret2;
function _init_properties_void_kt__3zg9as() {
  if (!properties_initialized_void_kt_e4ret2) {
    properties_initialized_void_kt_e4ret2 = true;
    VOID = void 0;
  }
}
//region block: post-declaration
setMetadataFor(Unit, 'Unit', objectMeta);
//endregion
//region block: init
Unit_instance = new Unit();
//endregion
//region block: exports
export {
  classMeta as classMetawt99a3kyl3us,
  createThis as createThis2j2avj17cvnv2,
  setMetadataFor as setMetadataForzkg9su7xd76l,
};
//endregion

//# sourceMappingURL=kotlin-kotlin-stdlib.mjs.map
