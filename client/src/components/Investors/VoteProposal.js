import "./investors.css"
function VoteProposal({state,account}){

    async function vote_proposal(event){
        try{
            event.preventDefault();//page will not reload if form submitted
            const {contract} = state;
            const id = document.querySelector("#voteId").value;
            await contract.methods.voteProposal(id).send({from:account,gas:480000});
        }
        catch(error){
            alert(error)
        }
        window.location.reload()
    }
  
    return<><form onSubmit={vote_proposal}>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <button className ="button" type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;