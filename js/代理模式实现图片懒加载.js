// 创建图片类
function Img() {
    this.img = document.createElement('img');
    document.body.appendChild(this.img);
}
// 图片setSrc方法
Img.prototype.setSrc = function(src) {
    this.img.src = src;
}

// 代理图片类：
// 1. 实例化图片，设置图片src为loading图
// 2. 创建代理图片，设置代理图片src为真实图片的src
// 3. 为代理图片绑定onload事件回调（设置原始img的src为真实src）
function ProxyImg(src) {
    this.img = new Img();
    this.img.setSrc('./loading.gif');

    const proxyImage = new Image();
    proxyImage.src = src;
    const self = this;
    proxyImage.onload = () => {
        self.img.setSrc(proxyImage.src);
    };
}

new ProxyImg('https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF')
new ProxyImg('https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF')