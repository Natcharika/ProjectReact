const fs = require('fs')
lnamefile = '.dcm'; //นามสกุลของรูป
folderPath = '../Pic'; //path ของfolder
var make=(path)=>{
    const list = [];//ประกาศArray
    fs.readdirSync(path).forEach(file=>{
        const key = `${path}/${file}`;
        
        const treeNode = {
            key:key,
            label: file,
        };
        if(!file.includes(lnamefile)){
            treeNode.nodes = make(`${path}/${file}`);
        }else{
            treeNode.value = `${path}/${file}`;
        }
        list.push(treeNode);
    })
    return list;
}
const arr = make(folderPath);
let data = JSON.stringify(arr,null, 2);
fs.writeFileSync('RSNA.json', data ,(err) => {
    if (err){throw err;}
    console.log('Data written to file');
});
