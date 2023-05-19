import "./investors.css"
function ReedemShare({state,account}){

    async function redeem_share(event){
        try{
            event.preventDefault();//page will not reload if form submitted
            const {contract} = state;
            const shares = document.querySelector("#shares").value;
            await contract.methods.reedemShare(shares).send({from:account,gas:480000});
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }
    
    return<><form onSubmit={redeem_share}>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;