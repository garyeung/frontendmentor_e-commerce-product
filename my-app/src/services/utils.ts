export const priceInString = (price: number) => {
       if(price){
                return `$${price.toFixed(2)}`;
       } 
       else {
        return 'Free';
       }
    }
export const discountInString = (dis: number)=>{
        if(dis == 0){return "";}
        return dis*100 + '%';
    }

export const rawprice = (p: number, dis:number) => {
        if(dis){
            return priceInString(p/dis);
        }
        else{
            return "";
        }
    };