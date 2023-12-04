//lista de subarrays de 1,...,t elementos del array [0,1,...,n-1]
function subsets(n,t){
	let indices=[]
 	for(let i=0;i<n;i++){
		indices.push([i])
	}
  	for(let i=1;i<t;i++){
    	    for(let id of indices){
      			for(let j=i;j<n;j++){    
        			if(id.includes(j) ){
         				break
        			}
        			else{
          				if(id.length===i){
            					let m=id.concat([j])
            					indices.push(m)
          				}
        			}
      			}
    
    		}
    
  	}
	return indices
}
//console.log(subsets(4,3))