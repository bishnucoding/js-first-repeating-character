const find_first_repeating_char = function(input){
    let map = new Map()

    for (a_char of input){
        if (map.has(a_char)) return a_char;
        else map.set(a_char,true);
    }
    return false;
}

input = 'bishnubrata'
result = find_first_repeating_char(input)
console.log(result)

//time complexity: O(n). Because lookup and insert time for map is constant.
//space complexity: O(n). Because additional map is used. it can store max of n elements.