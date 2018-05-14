import React from 'react';

class StewardPlatform extends React.Component {

    constructor(props, a, b , d ){
        super(props);
        this.a = a;
        this.b = b;
        this.d = d;
        this.dimension = {};
        this.legs = {};

        this.calculateVerticesDownPlatform();
        this.calculateVerticesUpPlatform();
    }

    calculateVerticesUpPlatform() {

        let t1 = {
            x: (Math.pow(3, 1 / 2) * this.a) / 6,
            y: 0.5 * this.a
        };

        let t2 = {
            x: -(Math.pow(3, 1 / 2) * this.a) / 2,
            y: 0
        };

        let t3 = {
            x: (Math.pow(3, 1 / 2) * this.a) / 6,
            y: -0.5 * this.a
        };

        let upVertices = {
            "t1": t1,
            "t2": t2,
            "t3": t3
        };

        this.dimension.upVertices = upVertices;

        return upVertices;

    }

    calculateVerticesDownPlatform(){

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

        let downVertices = {
            "b1":b1,
            "b2":b2,
            "b3":b3,
            "b4":b4,
            "b5":b5,
            "b6":b6,
        };

        this.dimension.downVertices = downVertices;
        return  downVertices;

    }

    inverseCinematic (position, orientation) {

        // calculate Triangle a pitch b yaw y roll
        // Triangle const
        const r = Math.pow(3, 0.5);
        const k = this.a / r;

        let xt1 = position.x
            + ((k) * ((Math.sin(orientation.pitch) * Math.sin(orientation.yaw) * Math.sin(orientation.roll + 60))
                + (Math.cos(orientation.yaw) * Math.cos(orientation.roll + 60))));
        let yt1 = position.y
            + ((k) * (Math.cos(orientation.pitch) * Math.sin(orientation.roll + 60)));
        let zt1 = position.z
            + ((k) * ((Math.sin(orientation.pitch) * Math.cos(orientation.yaw) * Math.sin(orientation.roll + 60))
                - (Math.sin(orientation.yaw) * Math.cos(orientation.roll + 60))));

        let xt2 = position.x
            + ((-k) * ((Math.sin(orientation.pitch) * Math.sin(orientation.yaw) * Math.sin(orientation.roll))
                + (Math.cos(orientation.yaw) * Math.cos(orientation.roll))));
        let yt2 = position.y
            + (-this.a * (Math.cos(orientation.pitch) * Math.sin(orientation.roll))) / Math.pow(3, 0.5);
        let zt2 = position.z
            + ((-k) * ((Math.sin(orientation.pitch) * Math.cos(orientation.yaw) * Math.sin(orientation.roll))
                - (Math.sin(orientation.yaw) * Math.cos(orientation.roll))));

        let xt3 = position.x
            + ((k) * ((Math.sin(orientation.pitch) * Math.sin(orientation.yaw) * Math.sin(orientation.roll - 60))
                + (Math.cos(orientation.yaw) * Math.cos(orientation.roll - 60))));
        let yt3 = position.y
            + ((k) * (Math.cos(orientation.pitch) * Math.sin(orientation.roll - 60)));
        let zt3 = position.z
            + ((k) * ((Math.sin(orientation.pitch) * Math.cos(orientation.yaw) * Math.sin(orientation.roll - 60))
                - (Math.sin(orientation.yaw) * Math.cos(orientation.roll - 60))));

        // calculate longitudes of legs
        this.legs.l1 = Math.pow( Math.pow((xt1 - (this.d / (2 * r)) - (this.b / ((r)))), 2) + (Math.pow(yt1 - (this.d / 2), 2) + Math.pow(zt1, 2)),0.5)* 2;
        this.legs.l2 = Math.pow( Math.pow((xt1 - (this.d / (2 * r)) + (this.b / (2 * (r)))), 2) + Math.pow (yt1 - (this.d / 2) - (this.b / 2), 2) + Math.pow(zt1, 2), 0.5) * 2;
        this.legs.l3 = Math.pow( Math.pow((xt2 + (this.d / (r)) + (this.b / (2 * (r)))),2) + Math.pow(yt2 - (this.b / 2), 2) + Math.pow(zt2, 2), 0.5) * 2;
        this.legs.l4 = Math.pow( Math.pow((xt2 + (this.d / (r)) + (this.b / (2 * (r)))),2) + Math.pow(yt2 + (this.b / 2), 2) + Math.pow(zt2, 2), 0.5) * 2;
        this.legs.l5 = Math.pow( Math.pow((xt3 - (this.d / (2 * r)) + (this.b / (2 * (r)))),2) + Math.pow(yt3 + (this.b / 2) + (this.d / 2), 2) + Math.pow(zt3, 2), 0.5) * 2;
        this.legs.l6 = Math.pow( Math.pow((xt3 - (this.d / (2 * r)) - (this.b / ((r)))),2) + Math.pow(yt3 + (this.d / 2), 2) + Math.pow(zt3, 2), 0.5) * 2;
    }

    getVerticesUpPlatform()
    {
        return this.dimension.upVertices;
    }

    getVerticesDownPlatform()
    {
        return this.dimension.downVertices;
    }

    getLegs(){
        return this.legs;
    }

    getParameters()
    {
        return {
            "a" : this.a,
            "b" : this.b,
            "d" : this.d
        }
    }
}


export default  StewardPlatform;