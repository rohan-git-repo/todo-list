const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo_list')
.then(()=>console.log('MongoDB Database connected'))
.catch(()=>console.log('MongoDB Database not connected'))

const taskSchema=new mongoose.Schema({
    name:String,
    time:String,
    duration:String
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

