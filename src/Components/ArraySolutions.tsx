import { Accordion, AccordionTab } from 'primereact/accordion';
import ArrayFunctions from '../Functions/Array';

export const ArraySolutions = () => {
    
  const nums = [1, 1, 2, 2, 3, 3, 4];
  const result = ArrayFunctions.removeDuplicatedValues([...nums]);

  const prices = [1,2,3,4,5];
  const profit = ArrayFunctions.getHigherProfit([...prices]);

  const arrayToRotate = [1,2,3, 4, 5, 6]
  const arrayRotated = [...arrayToRotate]
  ArrayFunctions.rotateArrayByKSolution2(arrayRotated, 3)

  const arrayDuplciated = [1,2,3,3,4,5,6]
  var containsDuplicate = !ArrayFunctions.containsDuplicate2(arrayDuplciated)

  const arrayToFindSingleNumber = [2,2,1]
  var singleNumber = ArrayFunctions.findSingleNumber(arrayToFindSingleNumber)

  const intersectoin1 = [4,9,5,5]
  const intersectoin2 = [9,4,9,8,4, 5]
  var resultIntersection = ArrayFunctions.intersectionTwoArrays2(intersectoin1, intersectoin2)

  const digits = [9,8,9]
  var resultSumPlusOne = ArrayFunctions.plusOne([...digits])

  const moveZeros = [0,0,1]
  var zerosMoved = ArrayFunctions.moveZerosToEnd([...moveZeros])
  
  return (
    <Accordion activeIndex={0}>
        <AccordionTab header="Remove Duplicates from Sorted Array" style={{textAlign:'left'}}>
            <p>Parameter: {nums.join(", ")}</p>
            <p>Result: {result.join(", ")}</p> 
            <pre>
                <code>{`
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
                        }`}
                </code>     
            </pre>
        </AccordionTab>
        <AccordionTab header="Get higher profit" style={{textAlign:'left'}}>
            <p>Parameter: {prices.join(", ")}</p>
            <p>Result: {profit}</p>
            <pre>
                <code>
                    {
                        `
                        static getHigherProfit(prices:Array<number>) {
                            var pr  ofit = 0;
                            for(var i=1; i < prices.length; i++) {
                              if(prices[i] > prices[i-1]) {
                                profit = profit + prices[i] - prices[i-1]
                              }
                            }
                        
                            return profit;
                          }
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Rotate" style={{textAlign:'left'}}>
            <p>Parameter: {arrayToRotate.join(", ")}</p>
            <p>Result: {arrayRotated.join(', ')}</p>
            <pre>
                <code>
                    {
                        `
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
                        
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Contains Duplicate" style={{textAlign:'left'}}>
            <p>Parameter: {arrayDuplciated.join(", ")}</p>
            <p>Result: {containsDuplicate.toString()}</p>
            <pre>
                <code>
                    {
                        `
                        //Contains Duplicate
                        static containsDuplicate(nums:Array<number>) {
                            nums = nums.sort()
                            for (var i= 1; i<nums.length; i++) {
                                if(nums[i] === nums[i-1]) {
                                return true;
                                }
                            }

                            return false
                        }

                        static containsDuplicate2(nums:Array<number>) {
                            return (new Set(nums)).size === nums.length
                        }
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Find Single Number" style={{textAlign:'left'}}>
            <p>Parameter: {arrayToFindSingleNumber.join(", ")} </p>
            <p>Result: {singleNumber}</p>
            <pre>
                <code>
                    {
                        `
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
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Intersection of Two Arrays II" style={{textAlign:'left'}}>
            <p>Parameter: {intersectoin1.join(", ")} </p>
            <p>Parameter: {intersectoin2.join(", ")} </p>
            <p>Result: {resultIntersection.join(", ")}</p>
            <pre>
                <code>
                    {
                        `
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
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Plus One" style={{textAlign:'left'}}>
            <p>Parameter: {digits.join(", ")} </p>
            <p>Result: {resultSumPlusOne.join(', ')}</p>
            <pre>
                <code>
                        {
                            `
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
                            `
                        }
                </code>
            </pre>
        </AccordionTab>
        <AccordionTab header="Move Zeros" style={{textAlign:'left'}}>
            <p>Parameter: {moveZeros.join(", ")} </p>
            <p>Result: {zerosMoved.join(', ')}</p>
            <pre>
                <code>
                    {
                        `
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
                        
                        `
                    }
                </code>
            </pre>
        </AccordionTab>
    </Accordion>
  );
}

export default ArraySolutions;


