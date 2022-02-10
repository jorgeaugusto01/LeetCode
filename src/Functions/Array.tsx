class ArrayFunctions {
  static removeDuplicatedValues(nums:Array<number>) {
    let auxIndex = 0;
    nums.forEach((element, index) => {
      if (nums[auxIndex] !== nums[index]) {
        nums[auxIndex + 1] = nums[index];
        auxIndex = auxIndex + 1;
      }
    });
    return nums;
  }

  static getHigherProfit(prices:Array<number>) {
    var profit = 0;
    for(var i=1; i < prices.length; i++) {
      if(prices[i] > prices[i-1]) {
        profit = profit + prices[i] - prices[i-1]
      }
    }

    return profit;
  }

  static rotateArrayByKSolution1(nums:Array<number>, k:number) {
    nums.push(...nums.splice(0, nums.length - k % nums.length));
    
    return nums;
  }

  static rotateArrayByKSolution2(nums:Array<number>, k:number) {
    var nums_reversed = this.reverseArray(nums, 0,nums.length-1)
    var nums_reversed = this.reverseArray(nums, 0,k-1)
    var nums_reversed = this.reverseArray(nums, k, nums.length-1)
    
    return nums_reversed;
  }

  static reverseArray(array:Array<number>, start:number, end:number) {
    for (var i = start; i < end; i++) {
      var temp = array[start]
      array[start] = array[end]
      array[end] = temp
      start++;
      end--;
      console.log(array)
    }

    return array
  }
}

export default ArrayFunctions;
