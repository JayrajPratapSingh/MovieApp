import React from 'react'
import { useState } from 'react';
import axios from "axios"
const Initial = () => {

    

    
    return (
        <div className="col-3">
                <div className="card">
                  <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Batman </h5>
                    <h3 className="card-text"> 1989</h3>
                    <a href="/favourit" className="btn btn-primary">
                      Add to favourite
                    </a>
                  </div>
                </div>
              </div>
          
        
    )
}

export default Initial
