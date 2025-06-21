import {createContext,useState,useContext} from 'react'
import axios from 'axios'

//1 create the context
const authContext=createContext()

//2 creeate the provider to components
