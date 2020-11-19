exports.jsonFun = (code, data, msg) => {
  let json = {};
  json.code = code;
  json.data = data;
  json.msg = msg;
  return json;
}