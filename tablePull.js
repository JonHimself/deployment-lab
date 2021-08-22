// Table Pull
// let table = [];
// const rankData = () => {
//     axios.get(`https://api.nomics.com/v1/currencies/ticker?key=9ae301e9467e3eef04cb5868e1c8ed92299dc5d3&rank&per-page=100&page=4`)
//     .then(res => {
//                 for(let i = 0; i < res.data.length; i++) {
//                     let obj = {};
//                     obj['id'] = res.data[i].id;
//                     obj['name'] = res.data[i].name;
//                     table.push(obj)
//                 }
                
//             })
//             console.log(table)
//         }
// rankData(); 