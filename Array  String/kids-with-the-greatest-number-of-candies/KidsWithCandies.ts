export class KidsWithCandies{

     kwc(candies : number[] , extraCandies : number) : boolean[]{
        let val = -1;

        for(let i of candies){
            val  = Math.max(val , i);
        }

        const res : boolean[] = [];

        for(let i = 0 ; i < candies.length ; i++){
            if(candies[i] + extraCandies >= val){
                res.push(true);
            }else{
                res.push(false);
            }
        }
        return res;
    }
}