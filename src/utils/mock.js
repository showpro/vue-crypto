import secret from './secret'

// const userInfo = {
//   "name" : "Chris" ,
//   "sex" : "male"
// }

const userInfo = '10603_e267389d035047f0a04ca3eaaca55c54'

// 通过 export default 将其加密后的数据暴露出去，方便在需要的时候进行引入~
// export default secret.Encrypt(JSON.stringify(userInfo)) // 结果包含字符串
export default secret.Encrypt(userInfo) // 结果不包含字符串
