const {activity} = require ('../models')

exports.postactivity = async (req, res)=>{
    try {        
        await activity.create(req.body)

        res.send({
            status: 'Success',
            data: {
                activity: {
                    activity: req.body.activityuser,
                    date: req.body.date
                }
            }
        })
    } catch (error) {
        console.log(error.message);
        res.send({
            status: 'Error',
            message: (error.message)
        });
        
    }
}
exports.activity = async (req, res)=>{
    try {
        const activity = await activity.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'id']
            }
        })

        res.status(200).send({
            status: 'Success',
            data:{
                activity
            }
        })
    } catch (error) {
        res.send({
            status: "Error",
            message: (error.message)
        })
    }
}
exports.activities = async (req, res)=>{
    try {
        const {id} = req.params;

        const activity = await activity.findOne({
            where:{
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'id']
            }
        })

        res.send({
            status: 'Success',
            data: {
                activity
            }
        })
    } catch (error) {
        res.send({
            status: 'Failed',
            message: (error.message)
        })
    }
}
exports.updateactivity = async (req, res)=>{
    try {
        const {id} = req.params;

        await activity.update(req.body,{
            where: {
                id,
            },
        })

        res.send({
            status: 'Success',
            data: {
                updatedactivity: req.body
            },
            message: "Update activity Success"
        })
    } catch (error) {
        res.send({
            status: 'Failed',
            message: console.log(error.message)
        })
    }
}
exports.deleteactivity = async (req, res)=>{
    try {
        const {id} = req.params;

        const deleteactivity = await activity.destroy({
            where:{
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'Success',
            data: `Delete activity id ${id} Success`
        })
    } catch (error) {
        res.send({
            status: 'Failed',
            message: console.log(error.message)
        })
    }
}