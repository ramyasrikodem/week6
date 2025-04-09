
const content = require('../module/schema')

exports.content = async (req,res)=>{
try {
    const sampleProject = new content({
        title: "Kitten 4",
        image: "images/kitten-4.jpg",
        link: "About Kitten 4",
        description: "Demo description about kitten 4"
        });
       await sampleProject.save();
         console.log("Sample project saved!");
} catch (error) {
    console.log('error')
}
}

