import {createSlice} from '@reduxjs/toolkit'
import    axios  from 'axios'
const initalState ={
    loading : false ,
    doctors : [],
    filterDoctor : [],
    designation :[],
    sepcialization :[],
    service :[],
    reviews : [],
    filterReview: [],
}

const doctorSlice = createSlice({
    name :'doctor',
    initialState : initalState,
    reducers :{
        setLoading(state , action){
            state.loading =action.payload
        },
        setDoctor(state, action) {
            state.doctors = action.payload
            state.loading = false 
        },
        setSpecialization(state, action) {
            state.sepcialization = action.payload
        },
        setDesignation(state, action) {
            state.designation = action.payload
        },
        setService(state, action) {
            state.service = action.payload
        },
        setReviw(state, action) {
            state.reviews = action.payload
        },
        setFilterReviews(state, action) {
            const id = action.payload
            state.filterReview = state.reviews.filter(review => Number(review.doctor) === Number(id))
        },
        addReview(state, action) {
            state.filterReview.push(action.payload)
        },
        FilterDoctor(state, action) {
            const {name , category} = action.payload
            if(category === 'Designation'){
              state.filterDoctor = state.doctors.filter(doctor =>
                    doctor.designation.some(designation => designation.toLowerCase().includes(name.toLowerCase()))
                );
            }
            if(category === 'Specialization'){
              state.filterDoctor = state.doctors.filter(doctor =>
                    doctor.specialization.some(designation => designation.toLowerCase().includes(name.toLowerCase()))
                );

            }
            if(category === 'name'){
              state.filterDoctor = state.doctors.filter(doctor =>
                    doctor.user.toLowerCase().includes(name.toLowerCase()))
            }

        },
    }
})
export const {setDoctor, setLoading, setSpecialization, setDesignation , FilterDoctor , setService ,setReviw , setFilterReviews,addReview} = doctorSlice.actions
export default doctorSlice.reducer

export const fetchDoctor=()=>async(dispatch, getstate)=>{
    try{
        dispatch(setLoading(true))
        const res = await axios.get('http://127.0.0.1:8000/user/doctor/')
        dispatch(setDoctor(res.data))
    }catch(error){
        dispatch(setLoading(false)) 
    }
}
export const fetchDesignation=()=>async(dispatch, getstate)=>{
    try{
        dispatch(setLoading(true))
        const res = await axios.get(`http://127.0.0.1:8000/user/designation/`)
        dispatch(setLoading(false))
        dispatch(setDesignation(res.data))
    }catch(error){
        dispatch(setLoading(false)) 
    }
}
export const fetchSpecialization=()=>async(dispatch, getstate)=>{
    try{
        dispatch(setLoading(true))
        const res = await axios.get(`http://127.0.0.1:8000/user/specialization/`)
        dispatch(setLoading(false))
        dispatch(setSpecialization(res.data))
    }catch(error){
        dispatch(setLoading(false)) 
    }
}
export const fetchService=()=>async(dispatch, getstate)=>{
    try{
        dispatch(setLoading(true))
        const res = await axios.get(`http://127.0.0.1:8000/service/`)
        dispatch(setLoading(false))
        dispatch(setService(res.data))
    }catch(error){
        dispatch(setLoading(false)) 
    }
}