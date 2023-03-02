


const url = 'https://catalog.onliner.by/notebook/hp/27k19ea';


function fff(url){
const res = url.split('/');
console.log(res);
const [protocol, _, adress, ...others] = res;
console.log(`протокол - ${protocol} \nадресс - ${adress} \nurl - /${others.join('/')} `);
}

fff(url);