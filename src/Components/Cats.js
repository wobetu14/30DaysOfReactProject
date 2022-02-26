import React, { Component } from 'react';
import SingleCat from './SingleCat';

export class Cats extends Component {
    state={
        data:[],
        avg_weight:0,
        avg_lifespan:0,
    }

    componentDidMount() {
        this.fetchCatsData();
      }

      fetchCatsData = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        const response = await fetch(url)
        const data = await response.json();

        let cat_weight=[];
        let cat_lifespan=[];

        data.map((cat_data)=>{

          let singleCatAvgWeight="";
          let singleCatAvgLifespan="";

          let minWeight=0, maxWeight=0, min_lifespan=0, max_lifespan=0;

          singleCatAvgWeight=cat_data.weight.metric;
          singleCatAvgLifespan=cat_data.life_span;

          const singleCatWeight=singleCatAvgWeight.split(" - ");
          const singleCatLifespan=singleCatAvgLifespan.split(" - ");

          if(singleCatWeight.length>0){
            minWeight=parseFloat(singleCatWeight[0]);
            maxWeight=parseFloat(singleCatWeight[1]);
          }

          else{
            minWeight=0;
            maxWeight=0;
          }

          if(singleCatLifespan.length>0){
            min_lifespan=parseFloat(singleCatLifespan[0]);
            max_lifespan=parseFloat(singleCatLifespan[1]);
          }

          else{
            min_lifespan=0;
            max_lifespan=0;
          }

          const avgweight=(minWeight+maxWeight)/2;
          const avgLifespan=(min_lifespan+max_lifespan)/2;

          cat_weight.push(avgweight);
          cat_lifespan.push(avgLifespan);

        });


        let weight_total=0;
        let lifespan_total=0;
        for(let i=0; i<cat_weight.length; i++){
          weight_total+=cat_weight[i];
        }

        for(let i=0; i<cat_lifespan.length; i++){
          lifespan_total+=cat_lifespan[i];
        }

        const weight_avg=weight_total/cat_weight.length;
        const lifespan_avg=lifespan_total/cat_lifespan.length;

        // Sort result data randomly
          for (let i = data.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [data[i], data[j]] = [data[j], data[i]];
          }

        this.setState({
          data:data,
          avg_weight:weight_avg.toFixed(2),
          avg_lifespan:lifespan_avg.toFixed(2)
        });
      }
  render() {
    return (
      <div className='cats__container'>
        <h1 className='cats_header_title'>Cat's Paradise</h1>
        <h2 className='cats_totals'>There are <span style={{color:'rebeccapurple', fontSize:'46px'}}><u><strong>{this.state.data.length>0?this.state.data.length:0}</strong></u></span> cat breeds</h2>
        <h4 className='cats_averages'>On average a cat can weigh <span style={{color:'powderblue', fontSize:'35px'}}><u><strong>{this.state.avg_weight}</strong></u></span> kg and lives <span style={{color:'powderblue', fontSize:'35px'}}><u><strong>{this.state.avg_lifespan}</strong></u></span> years</h4>
          <br/>
          {
             this.state.data.length<=0 && ( <h2 className='App'>Loading...</h2>)
          }

          {
            this.state.data.map((cat)=>
              <SingleCat key={cat.id} catDetails={cat}/>)  
          }
      </div>
    )
  }
}

export default Cats