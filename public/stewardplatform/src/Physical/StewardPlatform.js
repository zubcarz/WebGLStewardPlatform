import React from 'react';

class StewardPlatform extends React.Component {

    constructor(props, a, b , d ){
        super(props);
        this.a = a;
        this.b = b;
        this.d = d;

    }

    getVerticesUpPlatform(){

        let t1 = {
            x :(Math.pow(3, 1/2) * this.a)/6,
            y :0.5 * this.a
        };

        let t2 = {
            x :-(Math.pow(3, 1/2) * this.a)/2,
            y :0
        };

        let t3 = {
            x :(Math.pow(3, 1/2) * this.a)/6,
            y :-0.5 * this.a
        };

        return{
            "t1" : t1,
            "t2" : t2,
            "t3" : t3
        }
    }

    getVerticesDownPlatform(){

        let b1 = {
            x : (Math.pow(3,1/2) * ( (2 * this.b) + this.d)) /6,
            y : 0.5 * (this.d)
        };

        let b2 = {
            x : 0.5 * ( this.b + this.d),
            y : ( -1 * Math.pow (3 , 0.5)  * (this.b - this.d) )/6
        };

        let b3 = {
            x : 0.5 * (this.b),
            y :( -1 * Math.pow(3,0.5)  * ( this.b + ( 2 * this.d )))/6
        };

        let b4 = {
            x : -0.5 *(this.b),
            y : ( -1 * Math.pow(3,0.5)  * ( this.b + ( 2 * this.d )))/6
        };

        let b5 = {
            x : -0.5 * (this.b + this.d),
            y : ( -1 * Math.pow(3,0.5) * ( this.b - this.d ))/6
        };

        let b6 = {
            x :( Math.pow(3,0.5)  * ( ( 2 * this.b ) + this.d ))/6,
            y : -0.5 * this.d
        };


        return{
            "b1":b1,
            "b2":b2,
            "b3":b3,
            "b4":b4,
            "b5":b5,
            "b6":b6,
        }
    }

    calculateDirectCinematic(){

    }
}


export default  StewardPlatform;