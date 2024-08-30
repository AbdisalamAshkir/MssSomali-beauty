import { createSlice } from "@reduxjs/toolkit";
import Competitor from "../../Components/Compitetors/Compitetor/Competitor";
import Compitetors from '../../assets/Compitetors.json'


const initialState={
    Competitors:JSON.parse(window.localStorage.getItem('Competitors')) || Compitetors,
    currentcompetitor:null,
    voteCount:0
}

const CompetitorSlice=createSlice({
    name:'competitor',
    initialState,
    reducers:{
        setcurrentCompetitor:(state,action)=>{
            state.currentcompetitor=action.payload;
        },
        increaseVote:(state)=>{
            state.voteCount=state.voteCount + 1;

        },
        DecreaseVote:(state)=>{
            state.voteCount=state.voteCount - 1;

        },
        AddVoteToCompetitor:(state,action)=>{
            let compIndex=state.Competitors.findIndex(comp=>comp.Id===
                action.payload);

            state.Competitors[compIndex].NumberofVotes=
            Number(state.Competitors[compIndex].NumberofVotes) + Number(state.voteCount);
            window.localStorage.setItem('Competitors', JSON.stringify(state.Competitors));
        },
        resetState:(state)=> {
            state.currentcompetitor=null;
            state.voteCount=0;


        }
    }
});

export default CompetitorSlice.reducer;

export const {setcurrentCompetitor,increaseVote,DecreaseVote,AddVoteToCompetitor,resetState}=CompetitorSlice.actions;




