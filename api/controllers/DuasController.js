module.exports = {

    duas: async function(req,res) {
        try {
            const duas = await Dua.find()
            res.send(duas)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    create: function(req,res) {
        const id = req.body.id
        const dua = req.body.dua
        const body = req.body.body
        
        Dua.create({id: id, dua: dua, body:body}).exec(function(err) {
            if (err) {
                return res.serverError(err.toString())
            }
            console.log("Made Dua!")
            res.redirect('/home')
            return res.end()
        })
    },

    delete: async function(req,res) {
        const duaId = req.param('duaId')
        await Dua.destroy ({id: duaId})

        res.send('Finished Deleting Post with Id of: '+ duaId)
    },
    
    findById: async function(req,res) {
        const duaId = req.param('duaId')
        const allDuas = await Dua.find()
        const filteredDua = allDuas.filter(p => {
            return p.id == duaId
        })

        if (filteredDua.length > 0) {
            res.send(filteredDua[0])
        } else {
            res.send('Sorry, No Dua was Found. The Dua ID Sent was: ' + duaId)
        }
        res.send(duaId)
    },


}