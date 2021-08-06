// 제출 답변
function solution(price, money, count) {
    var answer = -1;

    const origin_price = price;
    var total_price = 0;
    for(var i = 1; i <= count; i++) {
        total_price += price * i;
    }
    
    if(money >= total_price) {
        return 0;
    }
    
    answer = total_price - money;
    
    return answer;
}
