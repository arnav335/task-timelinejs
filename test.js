import Timeline from "./Timeline.js";

const tl = new Timeline()
tl.add(()=> {console.log('hi')})
tl.add({delay: 5000, cb: ()=> console.log('HIHIHIHI')})
tl.add(()=> {console.log('hi')})
tl.add(()=> {console.log('hi')})
tl.add(()=> {console.log('hi')})

tl.execute()