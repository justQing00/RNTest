const messages = {
  ['some.error']: '某种错误',
  ['user.not.login']: '未登录，可能是用户信息已超时，请重新登录',
  ['company.name.duplicate']: '存在同名企业，请尽量使用企业全名避免重复',
  ['user.not.exists']: '用户不存在',
  ['user.locked']: '用户被锁定',
  ['user.incorrect.password']: '密码错误',
  ['machine.exist']: '机器已存在',
};

export const getMessage = (messageCode) => {
  return messages[messageCode] || messageCode;
};
