const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://rohansharmanew1234:5u5p0iYD97Op1XrT@cluster0.ke8xjbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('MongoDB Database connected'))
.catch(()=>console.log('MongoDB Database not connected'))

const taskSchema=new mongoose.Schema({
    name:String,
    time:String,
    duration:String
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

