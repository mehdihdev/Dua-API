module.exports = async function (req,res) {

    const allDuas = await Dua.find()
    res.view('pages/home', 
    {allDuas}
)
}