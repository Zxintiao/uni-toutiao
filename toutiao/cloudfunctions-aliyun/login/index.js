'use strict';
exports.main = async (event, context) => {
	console.log('event : ' + event)
  //event为客户端上传的参数
	event.b = 10
  console.log('event : ' + event)
  //返回数据给客户端
  return event
};
