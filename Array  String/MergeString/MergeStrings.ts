export class MergeStringsAlternately{
    merge(word1 : string, wrod2 : string) : string {
        let res = "";
        
        const max = Math.max(word1.length , wrod2.length);


        for(let i = 0 ; i < max ; i++){
            if(i < word1.length) res += word1[i];
            if(i < wrod2.length) res += wrod2[i];
        }
        return res;
    }
}