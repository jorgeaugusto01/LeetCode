class ArrayFunctions {
  
  //Remove Duplicates from Sorted Array
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

  //Best Time to Buy and Sell Stock II
  static getHigherProfit(prices:Array<number>) {
    var profit = 0;
    for(var i=1; i < prices.length; i++) {
      if(prices[i] > prices[i-1]) {
        profit = profit + prices[i] - prices[i-1]
      }
    }

    return profit;
  }

  //Rotate Array
  static rotateArrayByKSolution1(nums:Array<number>, k:number) {
    nums.push(...nums.splice(0, nums.length - k % nums.length));
    return nums;
  }

  static rotateArrayByKSolution2(nums:Array<number>, k:number) {
    this.reverseArray(nums, 0,nums.length-1)
    this.reverseArray(nums, 0,k-1)
    this.reverseArray(nums, k, nums.length-1)
  }

  static reverseArray(nums:Array<number>, start:number, end:number) {
    for (var i = start; i < end; i++) {
      var temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++;
      end--;
    }
  }

  //Contains Duplicate
  static containsDuplicate(nums:Array<number>) {
    nums = nums.sort()
    for (var i=1; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) {
          return true;
        }
    }

    return false
  }

  static containsDuplicate2(nums:Array<number>) {
    return (new Set(nums)).size === nums.length
  }

  //Single Number
  static findSingleNumber(nums:Array<number>){

    nums = nums.sort()
    for (var i=0; i < nums.length; i++) {

      if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
        return nums[i]
      }
    }

    return -1;
  }

  //Intersection of Two Arrays II
  static intersectionTwoArrays(nums1:Array<number>, nums2:Array<number>){
    
    var resultArray:Array<number> =  []
    if(nums1.length < nums2.length) {
      var nums2Aux = [...nums2.sort()]
      var nums1Aux = [...nums1.sort()]
      
      for (var i=0; i < nums1Aux.length; i++) {
        for(var y=0; y < nums2Aux.length; y++) {
          if(nums2Aux[i] === nums1Aux[y]){
            resultArray.push(nums1Aux[i])
            continue;
          }
        }
      }
    }
    if(nums2.length < nums1.length) {
      var nums2Aux = [...nums2.sort()]
      var nums1Aux = [...nums1.sort()]
      
      for (var i=0; i < nums2Aux.length; i++) {
        for(var y=0; y < nums1Aux.length; y++) {
          if(nums1Aux[i] === nums2Aux[y]){
            resultArray.push(nums1Aux[i])
            continue;
          }
        }
      }
    }
    if(nums2.length === nums1.length) {
      nums2 = nums2.sort()
      nums1 = nums1.sort()
      for (var i=0; i < nums2.length; i++) {
        for(var y=0; y < nums1.length; y++) {
          if(nums1[i] === nums2[y]){
            resultArray.push(nums1[i])
            continue;
          }
        }
      }
    }

    return resultArray;
  }

  static intersectionTwoArrays2(nums1:Array<number>, nums2:Array<number>){
        nums1 = nums1.sort();
        nums2 = nums2.sort();
        let i = 0;
        let j = 0;
        var res:Array<number> =  []
        
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                res.push(nums1[i]);
                i++;
                j++;
            }
        }
        
        return res;
  }

  static plusOne(digits:Array<number>) {

    let length = digits.length - 1;

    while(digits[length] === 9) {
      digits[length] = 0
      length -= 1
    }

    if (length < 0) {
      digits = [1].concat(digits)
    }
    else {
      digits[length] += 1
    }

    return digits;
    
  }

  static moveZerosToEnd(nums:Array<number>) {

    var y = 0;
    for(var i = 0; i <=nums.length-1; i++) {
      if(nums[i] !== 0) {
        nums[y] = nums[i]
        y = y + 1;
      }
    }

    for(var i = y; i <= nums.length-1; i++) {
      nums[i] = 0;
    }

    return nums;
  }

  static moveOne(num:Array<number>, index:number) {
    for(var y = index; y < num.length; y++) {
      num[y] = num[y+1]
    }
  }
}

export default ArrayFunctions;
