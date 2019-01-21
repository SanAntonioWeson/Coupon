const vFilter={
    fixed(value){
        return Number(value).toFixed(8)
    },
    slices(value){
        return value.slice(0,5) + '***' + value.slice(-5)
    },
    toupper(value){
        return value.toLocaleUpperCase()
    }
}
   
  export default vFilter
