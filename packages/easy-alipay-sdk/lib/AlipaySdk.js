const AlipaySdk = require('alipay-sdk').default;
const util = require('./util');

module.exports = class AlipayClient {
  /**
   * options 支付宝支付客户端初始化参数
   * @param {object} options 必选参数对象
   * @param {string} options.appId 支付宝开放平台的AppID
   * @param {string} options.privateKey 支付宝开发平台的应用私钥（注意，非支付宝公钥）
   * @param {object} optionalOptions 可选参数对象
   * @param {number} optionalOptions.timeout 网关超时时间（单位毫秒，默认 5s）
   * @param {boolean} optionalOptions.camelcase 是否把网关返回的下划线 key 转换为驼峰写法（默认 true）
   * @param {object} optionalOptions.alipayPublicKey 支付宝公钥（需要对返回值做验签时候必填）
   * @param {object} optionalOptions.signType 商户生成签名字符串所使用的签名算法类型，目前支持RSA2和RSA，推荐使用RSA2（默认RSA2）
   * @param {object} optionalOptions.gateway 支付宝网关地址，优先级高于沙箱模式
   * @param {object} optionalOptions.sandboxMode 沙箱模式（沙箱模式下，gateway地址为：https://openapi.alipaydev.com/gateway.do，默认非沙箱）
   */
  constructor(options, optionalOptions) {
    const alipaySdkConfig = Object.assign(
      {
        appId: options.appId,
        privateKey: options.privateKey
      },
      util.pick(optionalOptions, ['timeout', 'camelcase', 'alipayPublicKey', 'signType', 'gateway', 'sandboxMode'])
    );
    // 如果没有设定网关，且开启了沙箱模式，则设置网关为沙箱网关
    if (!alipaySdkConfig.gateway && alipaySdkConfig.sandboxMode) {
      alipaySdkConfig.gateway = 'https://openapi.alipaydev.com/gateway.do';
    }

    this.alipaySdk = new AlipaySdk(alipaySdkConfig);
  }
};
