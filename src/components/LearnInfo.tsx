import { defineComponent } from 'vue'
import useScrollTop from '../hooks/useScrollTop'
import Button from './Button'

export default defineComponent({
  name: 'LearnInfo',
  props: {
    onDone: Function
  },
  setup(props) {
    useScrollTop()
    return () => (
      <div class="mt-4">
        <h3>1.欢迎来到 Comunion Comer 申请页</h3>
        <p>我们是一群Comer</p>
        <p>生于平凡，披星戴月</p>
        <p>身怀绝技，仍艰难度日</p>
        <p>不甘平庸，但被套上了阶层的枷锁</p>
        <p>渴望改变命运，却无力挣脱</p>
        <p>像遭到了诅咒一样</p>
        <p>生活在996、廉租房和拥挤的公共交通中</p>
        <p>艰难度日</p>
        <br />
        <p>我们在数字时代，开始觉醒</p>
        <p>思考着 为什么越努力越贫穷</p>
        <p>意识到 劳动与收益的分配问题</p>
        <p>承受着 巨头垄断、资源和资本聚集</p>
        <p>遭受着 贫富差距与阶层固化</p>
        <p>当梦想被奚落时，改变的意志被激发</p>
        <br />
        <p>作为个体 我们拥有</p>
        <p>领域的专业技能</p>
        <p>极强学习能力、工作能力和独立解决问题的能力</p>
        <p>善于利用新生产力工具 沟通与协作</p>
        <p>极强的自我管理能力，主动沟通和思考问题</p>
        <p>最重要的是 我们都拥有远大的愿景</p>
        <p>和让生活变得更好的信念</p>
        <br />
        <p>从这一刻 我们彼此开始连接</p>
        <p>致力于创造一套全新的经济生产方式(Comunion)</p>
        <p>链接每一位全球的劳动者</p>
        <p>开启自由协作 互助创业</p>
        <br />
        <p>我们被共同的使命召唤，致力于</p>
        <p>提升劳动者收益</p>
        <p>降低贫富差距</p>
        <p>打破垄断和固化的阶层</p>
        <p>让普通人拥有改变命运的机会</p>
        <br />
        <p>我们也是你，欢迎加入</p>
        <p>一起解构传统的规则和范式</p>
        <p>让劳动价值自由流动</p>
        <br />

        <h3>2.首先来了解一些基础理论</h3>
        <p>
          <strong>网链经济学(Comunion Economics）</strong>
        </p>
        <p>
          网链经济(Comunion
          Economic)是一种基于互联网和区块链技术构建的数字化、网络化和在线化的创新增长经济，利用网络汇集智慧，区块链链接价值，应用各种生产力工具，聚合流动性生产要素，在网链组织范式下高效的生成创新创业企业，最终通过企业驱动经济发展。
        </p>
        <br />
        <p>
          <strong>网链经济生产范式（Comunion)</strong>
        </p>
        <p>
          Comunion
          是网链经济学的生产范式，产品形式为一个基于网链组织(Comunization)形式与创业互助网络，为超级个体提供面向数字时代的全新商业基础设施和价值转化机制，致力于让劳动价值
          像资本一样自由流通、交易和积累
        </p>
        <br />
        <p>
          <strong>我们的愿景</strong>
        </p>
        <p>让劳动价值自由流通、交易和积累</p>
        <br />
        <p>
          <strong>我们的使命</strong>
        </p>
        <p>
          建立一套全新的网链经济学生产范式-Comunion，链接全球每一位劳动者，并通过网链组织形式组织劳动者之间自由互助协作进行创业与创新，在这个价值创造的过程中，通过Comunion网络即可实现劳动力资本化，进而提升劳动者收入，降低贫富差距
        </p>
        <br />
        <p>
          <strong>致力于解决的问题</strong>
        </p>
        <p>提升劳动者收益</p>
        <p>打破巨头垄断</p>
        <p>降低创业门槛</p>
        <p>降低贫富差距</p>
        <p>打破阶层固化</p>
        <br />

        <h3>3.阅读内容，便于更好的了解我们</h3>
        <p>
          <strong>理论介绍:</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/325-comunion-economics">网链经济学(Comunion Economics)</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/292-comunion-economic">网链经济白皮书</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/327">网链经济学的介绍与发展</a>
        </p>
        <br />
        <p>
          <strong>Comunion三部曲：</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/167">用解构主义重塑未来商业与组织形式</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/169">网链组织模式的理论与应用</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/168-uvu">全民价值流动计划(UVU)</a>
        </p>
        <br />
        <p>
          <strong>网链协作</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/182-2020-comunion">团队协作公约</a>
        </p>
        <p>
          <a href="https://wiki.comunion.io/governance/comunance-wang-lian-zu-zhi-mo-shi">任务管理机制</a>
        </p>
        <br />
        <p>
          <strong>实践总结</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/310-comunion-2020">Comunion 2020回顾与展望:进步、数字化与贫穷</a>
        </p>
        <p>
          <a href="https://wiki.comunion.io/comunion-2019">Comunion 2019 实践总结</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/340-comunion-2020">我的 Comunion 2020-钦佩</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/322-2020-comunion-erguotou/2">2020年Comunion总结与思考-二锅头</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/316-comunion2020/2">我的 Comunion2020-小东</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/318-2020-2021-uta">回顾2020，展望2021-年度总结-uta</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/317-2020-comunion-zehui">2020年 Comunion 个人思考和总结-Zehui</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/315-2020-comunion-nigel">2020年 Comunion 个人思考和总结-Nigel</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/314">个人、组织与未来：远程工作元年思考总结-前尘</a>
        </p>
        <br />
        <p>
          <strong>相关教程：</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/272-metamask-token">
            Metamask 钱包安装、使用、丢失找回及添加 Token 全教程
          </a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/273-imtoken">imToken钱包安装、使用教程</a>
        </p>
        <br />

        <h3>4.协作相关：</h3>
        <p>
          <strong>账号注册</strong>
        </p>
        <p>
          <a href="https://comunion.yuque.com/dashboard">语雀文档（文档共享）</a>
        </p>
        <p>
          <a href="https://taiga.comunion.io/">Taiga（任务/Bug管理）</a>
        </p>
        <p>
          <a href="https://yapi.comunion.io/">Yapi（API文档管理）</a>
        </p>
        <p>
          <a href="https://github.com/comunion-io/">Github（代码管理）</a>
        </p>
        <p>
          <a href="https://d.comunion.io/">产品测试地址</a>
        </p>
        <br />
        <p>
          <strong>相关教程：</strong>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/272-metamask-token">
            Metamask 钱包安装、使用、丢失找回及添加 Token 全教程
          </a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/273-imtoken">imToken钱包安装、使用教程</a>
        </p>
        <p>
          <a href="https://bbs.comunion.io/d/344-996-007-comunion">
            呼吁关注996/007，添加Comunion微信头像挂件，链接更多普通人
          </a>
        </p>
        <br />
        <p>
          <strong>组织地址：</strong>
        </p>
        <p>
          <a href="https://talk.comunion.org/">BBS</a>
        </p>
        <p>
          <a href="https://docs.comunion.org/comunion-universal/">Wiki</a>
        </p>
        <div class="mt-4 text-right">
          <Button onClick={() => props.onDone?.()}>😀&nbsp;&nbsp;学习完成，进入考核</Button>
        </div>
      </div>
    )
  }
})
