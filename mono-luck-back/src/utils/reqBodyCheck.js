reqBodyCheck = (reqBody) => {
    //為空值
    if(!reqBody.phone || !reqBody.priority) return false;
    //測試是否有異常文字輸入
    const priorityArr = reqBody.priority.split('');
    const priorityFiltered = priorityArr.filter((e)=>{if(('0'<=e && e <= '9') || e == ',')return e;})
    const priorityCheck = priorityFiltered.join('');
    if(priorityCheck != reqBody.priority) return false;
  
    //測試志願序
    const prioritySplit = reqBody.priority.split(',')
    if(prioritySplit.length>3) return false;
    
    for(let i of prioritySplit) {
        if(i.length!=2 || parseInt(i)<0 || parseInt(i)>34) return false;
    }
    return true;
}

module.exports = {
    reqBodyCheck
}