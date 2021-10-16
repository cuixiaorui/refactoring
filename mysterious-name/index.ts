// 何时应该把代码抽离到一个函数里面
//  把意图和实现分离开
//  函数名描述出意图
//  函数体是具体的实现

// 读代码和读文章一样 - 好代码

// 如何给函数起一个名字呢？
// 基于注释作为函数的名称
// 你可以一上来就先去写注释（你代码的意图 - 伪代码）
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(); //print details
  // 只有在当前这个函数内使用的话
  // 可以写在里面
  // 中/高 层次的代码
  printDetails();

  // 做了什么(意图)
  function printDetails() {
    // 他是怎么做的(具体的实现 - 怎么做的)
    // 低层次的代码
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
