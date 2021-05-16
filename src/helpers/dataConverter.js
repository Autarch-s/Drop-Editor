export function convertTextData(data, type){
    const textNames = 
    data
        .split('\n')
        .map(el=>{
            let tmp = el.split('\t');
            tmp[0] = parseInt(tmp[0])
            return tmp
        })
        .filter(el=> el.length > 1)
        .reduce((p, n) => {
             p.push({
                value: n[0],
                label: `${n[1]} (${n[0]})`
            })
            return p 
        }, [])

        textNames.shift()

    return textNames;
}