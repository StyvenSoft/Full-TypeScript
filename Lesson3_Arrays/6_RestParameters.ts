function addPower(p: number, ...numsToAdd: number[]): number {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p;
    }
    return answer;
}

console.log(addPower(50, 4, 5, 6));

// 8.083700965743846e+38