//解析
//用法 new Compile(el,vm)
class Compile {
    constructor(el,vm){
        //要遍历的宿主节点
        this.$el = document.querySelector(el);
        this.$vm = vm;
        //开始编译
        if(this.$el){
            //转换内部内容为片段Fragment
            this.$fragment = this.node2Fragment(this.$el);
            //执行编译
            this.compile(this.$fragment);
            //将编译完的html结果追加至$el
            this.$el.appendChild(this.$fragment)
        }
    }
    node2Fragment(el){
        const frag = document.createDocumentFragment();
        //将el中所有的子元素搬家至frag中
        let child;
        while( child = el.firstChild ) {
            frag.appendChild(child)
        }
        return frag
    }
    //编译过程
    compile(el){
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node =>{
            //类型判断
            if(this.isElement(node)){
                //元素
                //console.log('编译元素'+node.nodeName)
                //console.log(node.attributes)
                //获取属性 x-.* @.* :.*
                const nodeAtter = node.attributes;
                Array.from(nodeAtter).forEach(attr =>{
                    const attrName = attr.name;//属性名
                    const exp = attr.value;//属性值
                    if(this.isDirective(attrName)){
                        //x-.*
                        const dir = attrName.substr(2);
                        this[dir] && this[dir](node,this.$vm,exp);
                    }
                    if(this.isEvent(attrName)){
                        const dir = attrName.substring(1);//@click
                        this.eventHandler(node,this.$vm,exp,dir);
                    }
                })
            }else if(this.isInterpolation(node)){
                //文本
                //console.log('编译文本'+node.textContent)
                //编译插值文本
                this.compileText(node)
            }else{

            }
            //递归子节点
            if(node.childNodes && node.childNodes.length>0){
                this.compile(node)
            }
        })
    }
    isDirective(attr){
        return attr.includes('x-');
    }
   
    isEvent(attr){
        return attr.includes('@');
    }

    //双绑
    model(node,vm,exp){
        //知道input的value的值
        this.update(node,vm,exp,'model');
        //视图对模型的响应
        node.addEventListener("input",e =>{
            vm[exp] = e.target.value;
        })
    }
    modelUpdater(node,value){
        node.value = value;
    }
    compileText(node){
        this.update(node,this.$vm,RegExp.$1,'text');
    }
    isElement(node){
        return node.nodeType === 1;
    }
    //更新插值
    update(node,vm,exp,dir){
        const updateFn = this[dir+'Updater'];
        //初始化
        updateFn&&updateFn(node,vm[exp]);
        //依赖收集
        new Watcher(vm,exp,function(value){
            updateFn && updateFn(node,value);
        })
    }
    html(node,vm,exp){
        this.update(node,vm,exp,'html');
    }

    htmlUpdater(node, value) {
        node.innerHTML = value
    }
    text(node,vm,exp){
        this.update(node,vm,exp,'text');
    }

    textUpdater(node,value){
        node.textContent = value;
    }
     //事件处理器
    eventHandler(node,vm,exp,dir){
        let fn = vm.$options.methods && vm.$options.methods[exp]
        if(dir && fn){
            node.addEventListener(dir,fn.bind(vm));
        }
    }
    //插值文本
    isInterpolation(node){
        //console.log(node.textContent)
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}
