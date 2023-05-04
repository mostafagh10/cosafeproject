const Notification = require('../models/notification.model')

const createNotification = async (req, res) => {
    try {
        /*
        const { title, message, userId, date = new Date().toLocaleString() } = req.body
        const notification = { title, message, userId, date }
        req.user.notifications = [...req.user.notifications, { notification }]
        await req.user.save()
        */
        const notification = new Notification({ ...req.body })
        await notification.save()
        res.status(200).send(notification)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

/*
const getNotification = async (req, res) => {
    const { id } = req.params
    try {
        const notification = req.user.notifications.find(notifi => notifi._id === id)
        if (!notification) {
            return res.status(404).send('not found')
        }
        res.status(200).send(notification)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
*/
const getNotification = async (req, res) => {
    const { id } = req.params
    try {
        //const notification = req.user.notifications.find(notifi => notifi._id === id)
        const notification = Notification.findById(id)
        if (!notification) {
            return res.status(404).send('not found')
        }
        res.status(200).send(notification)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = {
    createNotification,
    getNotification
}